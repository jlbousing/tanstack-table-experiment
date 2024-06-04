import React from 'react'
import { RowModel, Table, flexRender, useReactTable, getCoreRowModel } from '@tanstack/react-table'
import dataJSON from '../MOCK_DATA.json'
import { columnDef } from './Column'
import './table.css';

export const BasicTable = () => {

  const finalData = React.useMemo(() => dataJSON,[]);  
  const finalColumnDef = React.useMemo(() => columnDef, [] );
  
  const table = useReactTable({
      columns: finalColumnDef,
      data: finalData,
      getCoreRowModel: getCoreRowModel()
  });

  console.log(flexRender(
    table.getRowModel().rows[0].getVisibleCells()[0].column.columnDef.cell,
    table.getRowModel().rows[0].getVisibleCells()[0].getContext()
  ));


  return (
    <>
        <table>
            <thead>
                {table.getHeaderGroups().map(headerGroup => {
                    return (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => ( // map over the headerGroup headers array
                                <th key={header.id} colSpan={header.colSpan}>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    )
                })}
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row, index) => {
                    return <tr key={index}>
                        {row.getVisibleCells().map((cellE) => {
                            return (
                                <td key={cellE.id}>{
                                    flexRender(
                                        cellE.column.columnDef.cell,
                                        cellE.getContext()
                                    )
                                }</td>
                            );
                        })}
                    </tr>
                })}
            </tbody>
        </table>
    </>
  )
}

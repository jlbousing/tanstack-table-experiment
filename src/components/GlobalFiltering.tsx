import React from 'react'
import { 
    RowModel, 
    Table, 
    flexRender, 
    useReactTable, 
    getCoreRowModel,
    getFilteredRowModel 
} from '@tanstack/react-table'
import dataJSON from '../MOCK_DATA.json'
import { columnDef } from './Column'
import './table.css';

export const GlobalFiltering = () => {

  const finalData = React.useMemo(() => dataJSON,[]);  
  const finalColumnDef = React.useMemo(() => columnDef, [] );
  const [filtering, setFiltering] = React.useState("");
  
  const table = useReactTable({
      columns: finalColumnDef,
      data: finalData,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      state: {
        globalFilter: filtering
      },
      onGlobalFilterChange: (value) => { console.log("filtrando ",value)}
  });

  console.log(flexRender(
    table.getRowModel().rows[0].getVisibleCells()[0].column.columnDef.cell,
    table.getRowModel().rows[0].getVisibleCells()[0].getContext()
  ));


  return (
    <>
        <input type='text' value={filtering} onChange={(e) => setFiltering(e.target.value)}></input>
        <hr/>
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

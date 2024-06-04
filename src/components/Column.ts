import { ColumnDef } from "@tanstack/react-table";

export const columnDef = [
  {
    accessorKey: "id",
    header: "Header Id",
  },
  {
    accessorFn: (row: { firstName: any; lastName: any }) =>
      `${row.firstName} ${row.lastName}`,
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
];

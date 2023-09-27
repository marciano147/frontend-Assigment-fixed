// columns.js
export const columns = [
    { field: 'actions', headerName: 'Actions', width: 120 },
    { field: 'fullName', headerName: 'Full Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'department', headerName: 'Department', width: 150 },
    { field: 'lastLogin', headerName: 'Last Login', type: 'dateTime', width: 200, valueGetter: (params: { row: { lastLogin: string | number | Date; }; }) => new Date(params.row.lastLogin) }
  ];
  
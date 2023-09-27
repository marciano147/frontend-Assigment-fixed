// columns.js
export const columns = [
    { field: 'actions', headerName: 'Actions', width: 120,filterable: false,  },
    { field: 'fullName', headerName: 'Full Name', width: 130 , filterable: false,},
    { field: 'email', headerName: 'Email', width: 200, filterable: false, },
    { field: 'department', headerName: 'Department', width: 150, filterable: false, },
    { field: 'lastLogin', headerName: 'Last Login', type: 'dateTime', width: 200, valueGetter: (params: { row: { lastLogin: string | number | Date; }; }) => new Date(params.row.lastLogin), filterable: false, }
  ];
  
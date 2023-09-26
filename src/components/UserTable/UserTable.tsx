import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns } from './TableColumns'
import mockData from '../../MOCK_DATA.json'

const UsersTable = () => {

  // Sample data for the grid (replace with your data)


  return (
    <div style={{ height: 'inherit', width: '100%'}}>
      
      <DataGrid
      sx={{ height: '100%', width: '100%'}}
        rows={mockData}
        columns={columns}
        checkboxSelection
       
      />
    </div>
  );
};

export default UsersTable;

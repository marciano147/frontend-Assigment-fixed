import React, { useState } from 'react';
import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';
import { columns } from './TableColumns'
import mockData from '../../MOCK_DATA.json'
import { type } from 'os';
import { DeleteUserDialog } from '../Dialog/DeleteUserDialog';
import { AddUserDialog } from '../Dialog/AddUserDialog';

type UsersTableProps = {
  rowSelectionModel: GridRowSelectionModel;
  setRowSelectionModel: (rowSelectionModel: GridRowSelectionModel) => void;
  searchText: string;
  addUserDialogOpen: boolean;
  deleteUserDialogOpen: boolean;
  setDeleteUserDialogOpen: (deleteUserDialogOpen: boolean) => void;
  setAddUserDialogOpen: (addUserDialogOpen: boolean) => void;
}

const UsersTable: React.FC<UsersTableProps> = (props) => {
  const { rowSelectionModel, setRowSelectionModel, searchText, addUserDialogOpen, 
    deleteUserDialogOpen, setDeleteUserDialogOpen, setAddUserDialogOpen } = props;

  const showDeleteDialog = deleteUserDialogOpen && (
    <DeleteUserDialog
    deleteUserDialogOpen={deleteUserDialogOpen}
    userCount={rowSelectionModel.length}
    onClose={()=>setDeleteUserDialogOpen(false)}
    
    />
  )

  const filteredData = mockData.filter((user) => {
    return (
      user.fullName.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase()) ||
      user.department.toLowerCase().includes(searchText.toLowerCase()) ||
      user.actions.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const rows = filteredData.map((user) => {
    return {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      department: user.department,
      actions: user.actions,
      lastLogin: user.lastLogin,
    };
  });

const showAddDialog = addUserDialogOpen && (
  <AddUserDialog
  open={addUserDialogOpen}
  onClose={()=>setAddUserDialogOpen(false)}
  // onAdd={(userData) => {
  //   console.log(userData);
  //   setAddUserDialogOpen(false);
  // }}
  />)



  return (
    <div style={{ height: '70vh', width: '100%'}}>
      
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        pageSizeOptions={[5,10,25]}
        pagination
        rowSelectionModel={rowSelectionModel}
        onRowSelectionModelChange={(rowSelectionModel) => setRowSelectionModel(rowSelectionModel)}
      />

      {showDeleteDialog}
      {showAddDialog}
    </div>
  );
};

export default UsersTable;

import React from 'react';
import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';
import { columns } from './TableColumns'
import mockData from '../../MOCK_DATA.json'
import { DeleteUserDialog } from '../Dialog/DeleteUserDialog';
import { AddUserDialog } from '../Dialog/AddUserDialog';
import { useDispatch, useSelector } from 'react-redux';
import { User, addUserAction, deleteUsersAction } from '../../redux/usersActions';

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
    const dispatch = useDispatch();
    const users = useSelector((state: any) => state.users);

    const handleAddUser = (user: User) => {
      //parser from type user to an object for the json file
      const newId = mockData[mockData.length - 1].id + 1;
      const newUser = {
        ...user,
        id: newId,
        lastLogin: new Date().toISOString(),
      };
      dispatch(addUserAction(newUser));
    };
  
    const handleDeleteUsers = (userIds: GridRowSelectionModel) => {
      dispatch(deleteUsersAction(userIds));
    };

  const showDeleteDialog = deleteUserDialogOpen && (
    <DeleteUserDialog
    deleteUserDialogOpen={deleteUserDialogOpen}
    userCount={rowSelectionModel.length}
    onClose={()=>setDeleteUserDialogOpen(false)}
    handleDeleteUsers={handleDeleteUsers}
    rowSelectionModel={rowSelectionModel}
    />
  )

  const filteredData = users.filter((user:any) => {
    return (
      user.fullName.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase()) ||
      user.department.toLowerCase().includes(searchText.toLowerCase()) ||
      user.actions.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const rows = filteredData.map((user: any) => {
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
  handleAddUser={handleAddUser}
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

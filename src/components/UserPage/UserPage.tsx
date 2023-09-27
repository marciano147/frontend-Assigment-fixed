import MenuBar from "../MenuBar/MenuBar";
import { UserPageLayout } from "./UserPageLayout";
import UsersTable from "../UserTable/UserTable";
import { useState } from "react";
import { GridRowId } from "@mui/x-data-grid";
import UserPageHeader from '../UserPageHeader/UserPageHeader'


const UserPage  =  () => {
const [rowSelectionModel, setRowSelectionModel] = useState([] as GridRowId[]);
const [searchText, setSearchText] = useState('');
const [addUserDialogOpen, setAddUserDialogOpen] = useState(false);
const [deleteUserDialogOpen, setDeleteUserDialogOpen] = useState(false);

    return (
      <UserPageLayout>
        <MenuBar/>
        <UserPageHeader
        rowSelectionModel={rowSelectionModel}
        setSearchText={setSearchText}
        searchText={searchText}
        setUserDialogOpen={setAddUserDialogOpen}
        setDeleteUserDialogOpen={setDeleteUserDialogOpen}
        />
       <UsersTable
          searchText={searchText}
          rowSelectionModel={rowSelectionModel}
          setRowSelectionModel={setRowSelectionModel}
          addUserDialogOpen={addUserDialogOpen}
          deleteUserDialogOpen={deleteUserDialogOpen}
           setDeleteUserDialogOpen={setDeleteUserDialogOpen}
           setAddUserDialogOpen={setAddUserDialogOpen} />
      </UserPageLayout>
    );
  }
  
  export default UserPage;
import React from 'react';
import { Button, InputAdornment, TextField, Typography, Box } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { GridRowSelectionModel } from '@mui/x-data-grid';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

type UserPageHeaderProps = {
    rowSelectionModel : GridRowSelectionModel;
    searchText: string;
    setSearchText: (searchText: string) => void;
    setUserDialogOpen: (userDialogOpen: boolean) => void;
    setDeleteUserDialogOpen: (deleteUserDialogOpen: boolean) => void;
}

const UserPageHeader: React.FC <UserPageHeaderProps> = (props) => {
    const { rowSelectionModel, searchText, setSearchText, setUserDialogOpen, setDeleteUserDialogOpen } = props;

const deleteSelectedUsers = () => {
    setDeleteUserDialogOpen(true);
    console.log(rowSelectionModel);
}

const handleAddUserClick = () => {
    setUserDialogOpen(true);
}

const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearchText(event.target.value);
}
const disableDeleteButton = rowSelectionModel.length === 0;


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%',  }}>
      {/* Title */}
      <Typography variant="h5" sx={{ color: 'blue', marginBottom: '1rem', fontWeight: 'bold' }}>
        Users
      </Typography>

      {/* Search and Actions */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Search Bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', width: '40vw' }}>
  {/* Search Input */}
  <TextField
    variant="outlined"
    size="small"
    placeholder="Search Users"
    onChange={handleSearchTextChange}
    value={searchText}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchRoundedIcon />
        </InputAdornment>
      ),
      sx: { backgroundColor: 'lightblue' , width: '40vw' }
    }}
  />

  {/* Search Button */}
  {/* <Button 
    variant="contained" 
    color="primary" 
    sx={{ height: '39.88px', textTransform: 'none',borderTopLeftRadius: 0, 
    borderBottomLeftRadius: 0,  }}
    >
    Search
  </Button> */}
</Box>
        {/* Action Buttons */}
        <Box sx={{ marginLeft: '1rem', display: 'flex', alignItems: 'center' }}>
          <Button
          onClick={handleAddUserClick}
            variant="outlined"
            startIcon={<AddRoundedIcon />}
            sx={{ marginRight: '0.5rem' }}
          >
            Add User
          </Button>
          <Button variant="outlined" onClick={deleteSelectedUsers} disabled={disableDeleteButton} startIcon={<DeleteRoundedIcon />}>
            Delete User
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default UserPageHeader;

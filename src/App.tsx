import React from 'react';
import { Grid } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import UsersTable from './components/UserTable/UserTable';
import MenuBar from './components/MenuBar/MenuBar';



const App = () => {
  
  return (
 
      <Grid container spacing={2}>
        {/* Sidebar */}
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} height={'100vh'} >
          <Navbar/>
        </Grid>
        {/* Main Content Area */}
        <Grid item container xs={9} sm={9} md={9} lg={9} xl={9} height={'100vh'}>
          <Grid item xs={12} height={'5vh'}>
            <MenuBar />
          </Grid>
          <Grid item xs={12} height={'90vh'}>
            <UsersTable />
          </Grid>
        </Grid>
      </Grid>
    
  );
}

export default App;

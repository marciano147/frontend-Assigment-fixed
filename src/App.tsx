import React from 'react';
import { Grid } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import UsersTable from './components/UserTable/UserTable';
import MenuBar from './components/MenuBar/MenuBar';



const App = () => {
  
  return (
 
      <Grid container>
        {/* Sidebar */}
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2} height={'100vh'} >
          <Navbar/>
        </Grid>
        {/* Main Content Area */}
        <Grid item container xs={10} sm={10} md={10} lg={10} xl={10} height={'100vh'}>
          <Grid item xs={12} height={'5vh'}>
            <MenuBar />
          </Grid>
          <Grid item xs={12} height={'95vh'}>
            <UsersTable />
          </Grid>
        </Grid>
      </Grid>
    
  );
}

export default App;

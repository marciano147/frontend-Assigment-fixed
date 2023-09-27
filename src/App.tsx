import React from 'react';
import { Grid } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import UserPage from './components/UserPage/UserPage';
import store from './redux/store';
import { Provider } from 'react-redux';


const App = () => {
  
  return (
 <Provider store={store}>
      <Grid container>
        {/* Sidebar */}
        <Grid item xs={2} sm={2} md={2} lg={2} >
          <Navbar/>
        </Grid>
        {/* Main Content Area */}
        <Grid item  xs={10} sm={10} md={10} lg={10}>
          <UserPage/>
        </Grid>
      </Grid>
    </Provider>
  );
}

export default App;

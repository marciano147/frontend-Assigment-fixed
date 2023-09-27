import React from 'react';
import { Grid } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import UserPage from './components/UserPage/UserPage';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const App = () => {
  
  return (
    <Router>
    <Provider store={store}>
      <Grid container>
        {/* Sidebar */}
        <Grid item xs={2} sm={2} md={2} lg={2} >
          <Navbar/>
        </Grid>
        {/* Main Content Area */}
        <Grid item  xs={10} sm={10} md={10} lg={10}>
        <Routes>
        <Route path="/users" element={<UserPage/>} />
        <Route path="/*" element={<div />} />
      </Routes>
        </Grid>
      </Grid>
    </Provider>
    </Router>
  );
}

export default App;

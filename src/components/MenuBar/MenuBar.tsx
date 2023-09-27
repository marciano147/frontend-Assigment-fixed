import React from 'react';
import { Button, Box, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MenuBar = () => {
  return (
    <div style={{   width: '100%', height: '8vh' ,borderBottom: '1px solid #ccc'}}>
      {/* Menu Items */}
      <div style={{  display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'flex-end' }}>

      <Button sx={{fontSize: '1vw'}} color="inherit">Jobs</Button>
      <Button  sx={{fontSize: '1vw'}} color="inherit">Companies</Button>
      <Button  sx={{fontSize: '1vw'}} color="inherit">Salaries</Button>

      {/* Line Divider */}
      <div style={{ width:'0.1vw', height: '4vh', backgroundColor: '#ccc', margin: '0 1rem' }}></div>

      <Button  sx={{fontSize: '1vw'}} color="inherit">For Employers</Button>

      {/* Small Box */}
      <Box sx={{ backgroundColor: '#ccc', borderRadius: 1, padding: '0.5rem', margin: '0 1rem',  fontSize: '1vw', fontWeight: 'bold', width: '8vw',  justifyContent: 'center',

        display:'flex' }}>
        SeaData
      </Box>

      {/* Three Dots Icon */}
      <IconButton color="inherit">
        <MoreVertIcon />
      </IconButton>
      </div>
    </div>
  );
};

export default MenuBar;

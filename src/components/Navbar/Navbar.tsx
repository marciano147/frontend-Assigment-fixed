import { AppBar, Toolbar, Typography, ListItem, ListItemIcon, List } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import BorderAllRoundedIcon from '@mui/icons-material/BorderAllRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import { Link } from 'react-router-dom';

const icons = [
  { icon: AccountCircleRoundedIcon, label: "Profile" },
  { icon: BorderAllRoundedIcon, label: "Departments" },
  { icon: PersonAddAltRoundedIcon, label: "Users" },
  { icon: CreateRoundedIcon, label: "Post a job" },
  { icon: ListAltRoundedIcon, label: "Jobs" },
  { icon: Groups2RoundedIcon, label: "Candidates" },
  { icon: AssignmentRoundedIcon, label: "Reports" },
  { icon: VerifiedUserRoundedIcon, label: "License & Billing" },
  { icon: DescriptionRoundedIcon, label: "Invoices" },
];

const Navbar = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: '#09005a',
        position: 'sticky',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',  
         
      }}
    >
      <Toolbar
        sx={{
          flexDirection: 'column',
          alignItems: 'flex-start',
        
        }}
      >
        {/* Logo */}
        <Typography sx={{ color: 'white', fontWeight: '1000', marginTop: '2vh', fontSize:'1.9vw' }}>
  EXPOINT.
</Typography>


        {/* Navigation Items */}
        <List style={{ 
       display: 'flex', 
       flexDirection: 'column', 
       color: 'white',
       width: '100%',  
       padding: 0
    }}>
   {icons.map((item, index) => (
  <Link to={`/${item.label.toLowerCase().replace(/ /g, '-')}`} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
    <ListItem style={{ marginTop: '2.3vh', padding: 0 }}>
      <ListItemIcon sx={{ minWidth: '3.2vw' }}>
        <item.icon sx={{ color: 'white', fontSize: '1.6vw' }} />
      </ListItemIcon>
      <Typography variant="body1" sx={{ fontSize: '1.15vw' }}>
        {item.label}
      </Typography>
    </ListItem>
  </Link>
      ))}
    </List>

       
      </Toolbar>
      <div style={{
  width: 'inherit',  
  backgroundColor: '#06003b',
  
  }}>
    <div style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  rowGap: '1vh',
  marginLeft: '2vw',
  marginTop: '2vh',
  marginBottom: '2vh',
  }}>

    <Typography sx={{fontSize: '0.8vw'}} variant="body2">
        Help
    </Typography>
    <Typography sx={{fontSize: '0.8vw'}} variant="body2">
        Privacy Policy
    </Typography>
    <Typography sx={{fontSize: '0.8vw'}} variant="body2">
        Terms of Use
    </Typography>
    <Typography variant="body2" sx={{fontSize: '0.8vw'}}>
        Job Posting Rules
    </Typography>
    <Typography sx={{fontSize: '0.8vw'}} variant="body2">
        Attribution Notices
    </Typography>
    <Typography variant="body2" sx={{fontSize: '0.8vw'}}>
        Corporate Responsibility
    </Typography>
    </div>
</div>
    </AppBar>
  );
};

export default Navbar;

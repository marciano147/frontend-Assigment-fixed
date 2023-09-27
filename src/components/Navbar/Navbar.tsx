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

const icons = [
  { icon: AccountCircleRoundedIcon, label: "Account" },
  { icon: BorderAllRoundedIcon, label: "Borders" },
  { icon: PersonAddAltRoundedIcon, label: "Add Person" },
  { icon: CreateRoundedIcon, label: "Create" },
  { icon: Groups2RoundedIcon, label: "Groups" },
  { icon: ListAltRoundedIcon, label: "List Alt" },
  { icon: AssignmentRoundedIcon, label: "Assignment" },
  { icon: VerifiedUserRoundedIcon, label: "Verified User" },
  { icon: DescriptionRoundedIcon, label: "Description" },
];

const Navbar = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: 'blue',
        position: 'sticky',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',  // Align to the left
          // You can adjust this width as needed
      }}
    >
      <Toolbar
        sx={{
          flexDirection: 'column',
          alignItems: 'flex-start',
        
        }}
      >
        {/* Logo */}
        <Typography variant="h6" sx={{marginTop: '2vh'}}>
          Logo
        </Typography>

        {/* Navigation Items */}
        <List style={{ 
       display: 'flex', 
       flexDirection: 'column', 
       color: 'white',
       width: '100%',  // Take up full width of the container
       alignItems: 'center',
       padding: 0
    }}>
      {icons.map((item, index) => (
        <ListItem key={index} style={{  marginTop: '2.3vh',padding: 0, }}>
          <ListItemIcon sx={{minWidth: '3.2vw' }}>
            <item.icon sx={{color: 'white'}}/>
          </ListItemIcon>
          <Typography variant="body1">
            {item.label}
          </Typography>
        </ListItem>
      ))}
    </List>

        {/* Help, Privacy Policy, Terms of Use */}

      </Toolbar>
      <div style={{
  width: 'inherit',  // Take up full width of the container
  backgroundColor: 'darkblue',
  
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

    <Typography variant="body2">
        Help
    </Typography>
    <Typography variant="body2">
        Privacy Policy
    </Typography>
    <Typography variant="body2">
        Terms of Use
    </Typography>
    <Typography variant="body2">
        Job Posting Rules
    </Typography>
    <Typography variant="body2">
        Attribution Notices
    </Typography>
    <Typography variant="body2">
        Corporate Responsibility
    </Typography>
    </div>
</div>
    </AppBar>
  );
};

export default Navbar;

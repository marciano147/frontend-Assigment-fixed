import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
  navbar: {
    background: 'red',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 'inherit',
  },
  navItem: {
    color: 'black',
    marginLeft: '10px',
    marginRight: '10px',
  },
  navGroup: {
    display: 'flex',
    alignItems: 'center',
  },
});

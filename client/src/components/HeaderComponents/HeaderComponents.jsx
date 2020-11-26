import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { history } from '../MainComponent/MainComponent';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const Header =()=>{
    const classes = useStyles();
    const  onlogout=()=>{
        localStorage.setItem('isLoggedin',0) // update localstorage
        history.push('./login'); // on logout go to login
   }
    return (
      <div className={classes.root}>
      <AppBar position="static"  style={{ backgroundColor: '#005A3C' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Dashboard
          </Typography>
          <Button color="inherit" onClick={onlogout}>Logout</Button>
        </Toolbar>
      </AppBar>
      </div>
    );
}

export default Header;
import React from "react";
import { connect } from 'react-redux';
import { registerUser } from '../../redux/user/userActionCreator.js';
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,

} from "@material-ui/core";
// import Alert from '@material-ui/lab/Alert';
// import Snackbar from '@material-ui/core/Snackbar';
import "./RegisterComponent.css";
const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit * 5,
  },
  padding: {
    width: 500,
    radius: 5,
    padding: theme.spacing.unit,
  },
});

class Register extends React.Component {
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
        }
    }
    onChange=(e,name)=>{
        this.setState({[name]:e.target.value})
    }
    onLoginUser=()=>{
      console.log(this.state);
      this.props.registerUser(this.state);
    }
    gotoLogin=()=>{
      this.props.history.push('/login')
    }
  render() {
    const { classes } = this.props;
    return (
      <div className="loginCard">
        <Paper className={classes.padding}>
          <h1 className="loginHeader">Sign Up</h1>
          <div className={classes.margin}>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item md={true} sm={true} xs={true}>
                EMAIL
                <TextField
                  id="username"
                  type="email"
                  fullWidth
                  autoFocus
                  required
                  placeholder="user@gmail.com"
                  multiline
                  variant="outlined"
                  onChange={(e)=>this.onChange(e,'email')}
                />
              </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item md={true} sm={true} xs={true}>
                PASSWORD
                <TextField
                  id="password"
                  type="password"
                  fullWidth
                  required
                  placeholder="********"
                  variant="outlined"
                  onChange={(e)=>this.onChange(e,'password')}
                />
              </Grid>
            </Grid>

            <Grid container justify="center" style={{ marginTop: "10px" }}>
              <Button
                id="registerBtn"
                variant="outlined"
                fullWidth
                style={{
                  textTransform: "none",
                  backgroundColor: "#005A3C",
                  color: "white",
                  fontSize: "large",
                }}
                onClick={()=>this.onLoginUser()}
              >
                Create an account
              </Button>
            </Grid>
          </div>
          <p className="goto" onClick={()=>this.gotoLogin()}>Have an account already? Login here</p>
          <p className="errMsg">{ this.props.errorMsg}</p>
        </Paper>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return{
      errorMsg :state.isLoggedIn.error
  }
}

const mapDispatchToPros = dispatch =>{
 // console.log(qty);
  return{
    registerUser : (data)=> dispatch(registerUser(data)),

  }
}

export default connect(mapStateToProps,mapDispatchToPros)(withStyles(styles)(Register));

import React from "react";
import { connect } from 'react-redux';
import { loginUser } from '../../redux/user/userActionCreator.js';
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,

} from "@material-ui/core";
// import Alert from '@material-ui/lab/Alert';
// import Snackbar from '@material-ui/core/Snackbar';
import "./LoginComponent.css";
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

class Login extends React.Component {
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
      this.props.loginUser(this.state);
     
    }
    gotoRegister=()=>{
      this.props.history.push('/register')
    }
  render() {
    const { classes } = this.props;
    console.log("error",this.props.errorMsg)
    return (
      <div className="loginCard">
        <Paper className={classes.padding}>
          <h1 className="loginHeader">Sign in</h1>
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
                  id="username"
                  type="password"
                  fullWidth
                  required
                  placeholder="********"
                  multiline
                  variant="outlined"
                  onChange={(e)=>this.onChange(e,'password')}
                />
              </Grid>
            </Grid>

            <Grid container justify="center" style={{ marginTop: "10px" }}>
              <Button
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
                Login
              </Button>
            </Grid>
          </div>
          <p className="goto" onClick={()=>this.gotoRegister()}>Create an account</p>
          <p style={{color:'red'}}>{ this.props.errorMsg}</p>
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
    loginUser : (data)=> dispatch(loginUser(data)),

  }
}

export default connect(mapStateToProps,mapDispatchToPros)(withStyles(styles)(Login));

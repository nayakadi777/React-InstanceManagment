import React from "react";
import Login from "../LoginComponent/LoginComponent";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Dashboard from "../Dashboard/Dashboard";
import RegisterComponent from "../RegisterComponent/RegisterComponent";
// import { connect } from "react-redux";

export const history = createBrowserHistory();

const MainComponents = (props) => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={RegisterComponent} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    </>
  );
};

// used local storage to avoid going to login on refresh

// const mapStateToProps = state =>{

//   return{
//     isloggedin :state.isLoggedIn.isloggedin
//   }
// }
//export default connect(mapStateToProps)(MainComponents);
export default MainComponents;

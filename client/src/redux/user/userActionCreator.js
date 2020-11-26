import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILUR,
} from "./userActionType.js";
import { history } from "../../components/MainComponent/MainComponent";

// action incase to display loader onload
const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
// action on successfully loggin
const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};
// action on login failur
const fetchUserFailur = (error) => {
  return {
    type: FETCH_USER_FAILUR,
    payload: error,
  };
};

// async action to hit login API
const loginUser = (data) => {
  return async (dispatch) => {
    dispatch(fetchUserRequest);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    return fetch(`http://localhost:8080/api/login`, requestOptions)
      .then((response) => {
        for (var pair of response.headers.entries()) {
          if (pair[0] === "authorization") {
            localStorage.setItem("token", pair[1]); // to fetch token response from header and store in localstorage
          }
        }
        return response.json();
      })
      .then((user) => {
        if (user.success) {
          localStorage.setItem("isLoggedin", 1); // isLoggedin=1 for login success
          dispatch(fetchUserSuccess(user.message));
          history.push("/dashboard");
        } else {
          dispatch(fetchUserFailur(user.message));
        }
      })
      .catch((error) => dispatch(fetchUserFailur(error)));
  };
};

// async action to hit register user API
const registerUser = (data) => {
  return async (dispatch) => {
    dispatch(fetchUserRequest);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    return fetch(`http://localhost:8080/api/register`, requestOptions)
      .then((response) => {
        for (var pair of response.headers.entries()) {
          if (pair[0] === "authorization") {
            localStorage.setItem("token", pair[1]);
          }
        }
        return response.json();
      })
      .then((user) => {
        if (user.success) {
          // dispatch(fetchUserSuccess(user.message))
          history.push("/login");
        } else {
          dispatch(fetchUserFailur(user.message));
        }
      })
      .catch((error) => dispatch(fetchUserFailur(error)));
  };
};
export {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailur,
  registerUser,
  loginUser,
};

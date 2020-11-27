import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";
import { userReducer } from "../redux/user/userReducer.js";

const testActionFailur = { type:'FETCH_USER_FAILUR',
payload:"error" };

const prevState1 = { isloggedin : false,
    error:''};

test('reducer test', () => {
    expect(userReducer(prevState1, testActionFailur)).toEqual({ isloggedin : false,
        error:'error'})
  });

  const testAction3 = { type:'FETCH_USER_SUCCESS' ,
payload:"success"};

const prevState3 = { isloggedin : false,
    error:''};

  test('reducer test', () => {
    expect(userReducer(prevState3, testAction3)).toEqual({ isloggedin : true,
        error:''})
  });
  const testAction4 = { type:'NONE'};
  
  const prevState4 = { isloggedin : false,
    error:''};
     
  test('reducer test', () => {
    expect(userReducer(prevState4, testAction4)).toEqual({ isloggedin : false,
        error:''})
  });
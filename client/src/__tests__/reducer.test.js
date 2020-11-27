import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";
import { instanceReducer } from "../redux/Instance/InstanceReducer.js";

const testActionFailur = { type:'FETCH_INSTANCE_FAILUR',
payload:"error" };

const prevState1 = { isloading : false,
    instanceData:[],
    error:''};

test('reducer test', () => {
    expect(instanceReducer(prevState1, testActionFailur)).toEqual({ isloading : false,
        instanceData:[],
        error:'error'})
  });
const testActionREQUEST = { type:'FETCH_INSTANCE_REQUEST' };

const prevState2 = { isloading : false,
    instanceData:[],
    error:''};

  test('reducer test', () => {
    expect(instanceReducer(prevState2, testActionREQUEST)).toEqual({ isloading : true,
        instanceData:[],
        error:'error'})
  });
  const testAction3 = { type:'FETCH_INSTANCE_SUCCESS' ,
payload:{
    "id": 2,
    "name": "t2.large",
    "provider": "aws",
    "status": "running",
    "costPerHour": 0.1856
}};

const prevState3 = { isloading : false,
    instanceData:[],
    error:''};

  test('reducer test', () => {
    expect(instanceReducer(prevState3, testAction3)).toEqual({ isloading : false,
        instanceData:[{
            "id": 2,
            "name": "t2.large",
            "provider": "aws",
            "status": "running",
            "costPerHour": 0.1856
        }],
        error:'error'})
  });
  const testAction4 = { type:'NONE'};
  
  const prevState4 = { isloading : false,
    instanceData:[],
    error:''};
     
  test('reducer test', () => {
    expect(instanceReducer(prevState4, testAction4)).toEqual({ isloading : false,
        instanceData:[],
        error:''})
  });
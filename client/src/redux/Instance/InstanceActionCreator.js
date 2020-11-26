import { FETCH_INSTANCE_REQUEST,FETCH_INSTANCE_SUCCESS,FETCH_INSTANCE_FAILUR } from './InstanceActionType.js';

const fetchInstanceRequest = () =>{
    return{
        type:FETCH_INSTANCE_REQUEST
    }
}
// action successfull instance fetch
const fetchInstanceSuccess = (instance) =>{
    return{
        type:FETCH_INSTANCE_SUCCESS,
        payload:instance
    }
}
// action failur instance fetch
const fetchInstanceFailur = (error) =>{
    return{
        type:FETCH_INSTANCE_FAILUR,
        payload:error
    }
}

// action get list of Instance
const fetchInstance =()=>{
   return async(dispatch)=>{
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
        Authorization:`Bearer ${localStorage.getItem('token')}` },
        // body: JSON.stringify()
    }
        dispatch(fetchInstanceRequest);
       return fetch(`http://localhost:8080/api/instances`,requestOptions)
        .then(response => response.json())
        .then(user => dispatch(fetchInstanceSuccess(user.instances)))
        .catch(error=> dispatch(fetchInstanceFailur(error)))
   }
}

// action to start  Instance based on id
const startInstance =(id)=>{
    return async(dispatch)=>{
     const requestOptions = {
         method: 'GET',
         headers: { 'Content-Type': 'application/json',
         Authorization:`Bearer ${localStorage.getItem('token')}` },
         // body: JSON.stringify()
     }
         dispatch(fetchInstanceRequest);
        return fetch(`http://localhost:8080/api/instances/start/${id}`,requestOptions)
         .then(response => response.json())
         .then(user => dispatch(fetchInstance()))
         .catch(error=> dispatch(fetchInstanceFailur(error)))
    }
 }

// action to stop  Instance based on id
 const stopInstance =(id)=>{
    return async(dispatch)=>{
     const requestOptions = {
         method: 'GET',
         headers: { 'Content-Type': 'application/json',
         Authorization:`Bearer ${localStorage.getItem('token')}` },
         // body: JSON.stringify()
     }
         dispatch(fetchInstanceRequest);
        return fetch(`http://localhost:8080/api/instances/stop/${id}`,requestOptions)
         .then(response => response.json())
         .then(user => dispatch(fetchInstance()))
         .catch(error=> dispatch(fetchInstanceFailur(error)))
    }
 }

export {
    fetchInstanceRequest,
    fetchInstanceSuccess,
    fetchInstanceFailur,
    startInstance,
    stopInstance,
    fetchInstance
}

const initialState={
    isloading : false,
    instanceData:[],
    error:''
}

export const instanceReducer = (state =initialState , action) =>{
    switch(action.type){
        case 'FETCH_INSTANCE_REQUEST': return {
            ...state,
            isloading:true
        }
        case 'FETCH_INSTANCE_SUCCESS': return {
            ...state,
            instanceData:action.payload,
            error:''
        }
        case 'FETCH_INSTANCE_FAILUR': return {
            ...state,
            instanceData:[],
            error:action.payload
        }
        default: return {
            ...state
        }
    }
}
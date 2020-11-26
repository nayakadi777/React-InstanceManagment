const initialState={
    isloggedin:false,
    error:''
}

export const userReducer = (state =initialState , action) =>{
    switch(action.type){
        case 'FETCH_USER_SUCCESS': return {
            ...state,
            isloggedin:true,
            error:''
        }
        case 'FETCH_USER_FAILUR': return {
            ...state,
            isloggedin:false,
            error:action.payload
        }
        default: return {
            ...state
        }
    }
}
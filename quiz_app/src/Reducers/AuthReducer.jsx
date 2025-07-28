export const AuthReducer=(state,action)=>{
    switch(action.type){
        case "username":
            return{
                ...state,
                username:action.payload
            }
        case "password":
            return{
                ...state,
                password:action.payload
            }
        case "token":
            return{
                ...state,
                token:action.payload
            }
        case "emailId":
        return{
            ...state,
            emailId:action.payload
        }
        case "clear":
            return{
                ...state,
                username:" ",
                password:" "
            }
            default :
                return state
            

    }

}
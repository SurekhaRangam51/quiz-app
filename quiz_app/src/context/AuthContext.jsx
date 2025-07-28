import { createContext,useContext,useReducer } from "react";
import { AuthReducer } from "../Reducers/AuthReducer.jsx";
const AuthContext=createContext()
const initialState={
    username:'',
    password:'',
    token:'',
    emailId:''
    
}
const AuthProvider=({children})=>{
    const [{username,password,token,emailId},authdispatch]=useReducer(AuthReducer,initialState)
    return(
    <AuthContext.Provider value={{username,password,token,emailId,authdispatch}}>
        {children}
    </AuthContext.Provider>
    )
}

const useAuth=()=>useContext(AuthContext)
export {AuthProvider,useAuth}
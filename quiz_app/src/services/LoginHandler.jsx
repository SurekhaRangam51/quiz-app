import axios from 'axios'
export const LoginHandler= async (username,password)=>{
    try{
        const {data:{token},status}=await axios.post("http://localhost:9988/auth/login",{
        userName:username,
        password:password,
    
    })
    if(status===200){
        localStorage.setItem("token",token)
        return token
    }
    
    }
    catch(err){
        console.log(err)
    }
    
    

}
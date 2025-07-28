import axios from "axios"

export const SignUpHandler=async (username,password,emailId)=>{
    try{
          const data=await axios.post("http://localhost:9988/auth/signup",{
        userName:username,
        password:password,
        emailId:emailId
    })
    
    }
  catch(err){
    console.log("error",err.message)
  }
    
}
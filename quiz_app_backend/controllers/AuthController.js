import { userdata } from "../db/users.js";
import {v4 as uuid } from "uuid";
import jwt from 'jsonwebtoken';
import {quizzes} from "../db/quizes.js";


const signUp=(req,res)=>{
    const {userName,password,emailId}=req.body
    const isPresent=userdata.users.some(user=>user.username===userName )
    if(isPresent){
        res.status(422).json({msg:"User Already Exists"})
    }
    else{
        const id=uuid()
        const newuser={id,userName,password,emailId}
        userdata.users=[...userdata.users,newuser]
        const token=jwt.sign({id:userName},process.env.SECRET_KEY)
        res.json({msg:`Successfully created a user -->${userName} : :${token}`})
    }
}

const loginHandler=(req,res)=>{
    const {userName,password}=req.body
    const isPresent=userdata.users.some(user=>user.username===userName && user.password===password)
    if(isPresent){
        const token=jwt.sign({id:userName},process.env.SECRET_KEY)
       return res.json({userName,token,message:"User Verified"})
    }
    res.status(401).json({message:"Invalid credentials"})
}



const getQuizData=(req,res)=>{
    const quizData=quizzes.data
    return res.send(quizData)
}
export {loginHandler,getQuizData,signUp}
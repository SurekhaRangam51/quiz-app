import express from "express"
import { getQuizData, loginHandler, signUp } from "../controllers/AuthController.js"
import { authVerify } from "../middleware/authVerify.js"


const router=express.Router()
router.post("/login",loginHandler)
router.get("/getquizdata",authVerify, getQuizData)
router.post("/signup",signUp)
export default router
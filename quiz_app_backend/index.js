import express from 'express'
import cors from "cors"
import { configDotenv } from 'dotenv'
import quizRoutes from "./routes/quizRoutes.js"
configDotenv({
    path:"./.env"
})
const app=express()
const PORT=process.env.PORT
app.use(cors())
app.use(express.json())
app.use("/quiz",quizRoutes)
app.use("/auth",quizRoutes)
app.use((req,res,next)=>{
    res.status(404).json({"err":1,"msg":"No route found"})
})
app.listen(PORT,(err)=>{
    if (err) throw err
    console.log(`Server is running on ${PORT}`)
})
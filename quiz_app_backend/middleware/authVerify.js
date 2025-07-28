import jwt from "jsonwebtoken";
const authVerify=(req,res,next)=>{
    const token=req.headers["authorization"]?.split(" ")[1]
    if(!token){
        res.status(401).json({msg:"Unauthorized user"})
    }
    else{
        
        try{
            const verified=jwt.verify(token,process.env.SECRET_KEY)
            req.user={id:verified.id}
            next()
        }
        catch(err){
            console.error(err)
            res.status(403).json({msg:"Invalid token or Expired"})
        }
    }
}
export {authVerify}
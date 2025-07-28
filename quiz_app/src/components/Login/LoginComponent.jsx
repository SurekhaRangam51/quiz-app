import "./Login.css"
import { useAuth } from "../../context/AuthContext"
import { LoginHandler } from "../../services/Loginhandler"
import { useNavigate } from "react-router-dom"
export const LoginComponent = () => {
    const navigate=useNavigate()
    const { authdispatch, username, password,token } = useAuth()
    const handleusernameChange = (e) => {
        authdispatch({
            type: "username",
            payload: e.target.value
        })
    }
    const handlepasswordChange = (e) => {
        authdispatch({
            type: "password",
            payload: e.target.value
        })

    }
    console.log(token)
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const token=await LoginHandler(username,password)
        if(token){
            navigate("/home")
             authdispatch({
            type:"clear"
        })
        }
        else{
            alert("Invalid Credentials")
             authdispatch({
            type:"clear"
        })
        }
        authdispatch({
            type:"token",
            payload:token
        })
       

    }
    const handleTestCredentials=async()=>{
        const token=await LoginHandler("surekha","s12345")
         authdispatch({
            type:"token",
            payload:token
        })
         if(token){
            navigate("/home")
        }
    }
    //console.log(username)
    //console.log(password)
    console.log(token)
    const handleSignUp=()=>{
        navigate("/signup")
    }

    return (
        <div className="d-grid">
            <div className="login-auth d-flex direction-column justify-center ">
                <h2 className="auth-title">Login</h2>
                <form className="form-fullwidth" onSubmit={handleSubmit}>
                    <div className="form-container">
                        <label className="form-label">Username</label>
                        <input
                            value={username}
                            className="form-input full-width"
                            placeholder="surekha rangam" onChange={handleusernameChange}
                        />
                    </div>
                    <div className="form-container">
                        <label className="form-label">Password</label>
                        <input
                            value={password}
                            className="form-input full-width"
                            placeholder="*******" onChange={handlepasswordChange}
                        />
                    </div>
                    <div className="cta">
                        <button className="button login-btn btn-margin cursor sign-up-btn full-width">
                            Login
                        </button>
                    </div>
                </form>
                <div>
                    <button className="button login-btn btn-outline-primary btn-margin sign-up-btn full-width" onClick={handleTestCredentials} >
                        Login with Test Credentials
                    </button>
                </div>
                 <div>
                    <button className="button login-btn btn-margin cursor sign-up-btn full-width" onClick={handleSignUp} >
                        Create Account
                    </button>
                </div>
            </div>
        </div>
    )
}

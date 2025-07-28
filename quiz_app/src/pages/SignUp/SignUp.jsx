import { Fragment } from "react"
import { Navbar } from "../../components/Navbar"
import { useAuth } from "../../context/AuthContext"
import "./SignUp.css"
import { SignUpHandler } from "../../services/SignUPHandler"
import { useNavigate } from "react-router-dom"
export const SignUp=()=>{
    const navigate=useNavigate()
    const {authdispatch,username,password,emailId} =useAuth()
    const handleUserNameChange=(e)=>{
        authdispatch({
            type:"username",
            payload:e.target.value
        })

    }
     const handlePasswordChange=(e)=>{
        authdispatch({
            type:"password",
            payload:e.target.value
        })

    }
     const handleEmailChange=(e)=>{
        authdispatch({
            type:"emailId",
            payload:e.target.value
        })

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const token=SignUpHandler(username,password,emailId)
        if(token){
            alert("successfully added")
             navigate("/login")
             authdispatch({
                type:"clear"
             })
        }
        else{
            alert("already exists")
        }

    }
    return(
        <Fragment>
            <Navbar />
              <div className="d-grid">
            <div className="login-auth d-flex direction-column justify-center">
                <h2 className="auth-title">Sign Up</h2>
                <form className="form-fullwidth" onSubmit={handleSubmit}>
                    <div className="form-container">
                        <label className="form-label" >Username</label>
                        <input
                            value={username}
                            className="form-input full-width"
                            onChange={handleUserNameChange}
                            placeholder="surekha rangam" 
                        />
                    </div>
                     <div className="form-container">
                        <label className="form-label">Email</label>
                        <input
                            value={emailId}
                            className="form-input full-width"
                            onChange={handleEmailChange}
                            placeholder="surekha@gmail.com"
                        />
                    </div>
                    <div className="form-container">
                        <label className="form-label">Password</label>
                        <input
                            value={password}
                            className="form-input full-width"
                            onChange={handlePasswordChange}
                            placeholder="*******" 
                        />
                    </div>
                     <button className="button login-btn btn-margin cursor sign-up-btn full-width" >
                        Sign Up
                    </button>
                   
                </form>
               
                   
                </div>
            </div>
        
        </Fragment>
    )
}
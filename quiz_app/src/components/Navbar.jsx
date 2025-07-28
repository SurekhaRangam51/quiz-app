import { Fragment, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
export const Navbar=({route})=>{
    
    const {authdispatch,token}=useAuth()
    useEffect(()=>{
        const token=localStorage.getItem("token")
        authdispatch({
            type:"token",
            payload:token
        })
},[])
const navigate=useNavigate()
    const handleLogout=()=>{
        if(token){
            localStorage.clear()
        }
        navigate("/login")
    }
    const handleEndQuiz=()=>{
        quizdispatch({
            type:"quit"
        })
        navigate("/login")
    }
    return(
        <header className="heading d-flex grow-shrink-basis align-center">
    <div className="heading-title-icon d-flex grow-shrink-basis align-center">
        <img className="icon mr-1" src="/assets/image.png" alt="lightbul" />
        <h1 className="heading-title">
            {
                        route === "home" || route === "login" ? (<Link to="/" className="link">Quizify</Link>) : "Quizify"
                    }
        </h1>
    </div>
    <nav className="navigation">
        <ul className="list-non-bullet">
        { route==="home" &&  ( <li className="list-item-inline">
                <Link to="/login" className="link cursor" onClick={handleLogout}>{token ?"Logout" :"Login"}</Link>
            </li>)
         
         }{ route==="result" &&
           ( <Fragment>
           
             <li className="list-item-inline">
                <Link to="/login" className="link cursor" onClick={handleLogout}>Logout</Link>
            </li>
             <li className="list-item-inline">
                <Link to="/home" className="link cursor" onClick={handleEndQuiz}>Home</Link>
            </li>
            </Fragment>)
         }
           
           
             
           
        </ul>
    </nav>
</header>
    )
}
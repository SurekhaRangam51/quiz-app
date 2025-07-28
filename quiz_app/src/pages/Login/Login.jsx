import { Fragment } from "react"
import { Navbar,LoginComponent} from "../../components/index"

export const Login=()=>{
    return(
        <Fragment>
            <Navbar route="login" />
            <LoginComponent />
        </Fragment>
       
    )
}
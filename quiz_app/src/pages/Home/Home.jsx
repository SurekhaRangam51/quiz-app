import { Navbar } from "../../components/Navbar"
import { Fragment, useEffect ,useState} from "react"
import axios from "axios"
import { QuizCard } from "../../components/index"
import "./Home.css"

export const Home=()=>{
    const [categories,setCategories]=useState([])
    
    useEffect(()=>{
        (async()=>{
            try{
                  const response=await axios.get("http://localhost:9988/quiz/getquizdata",
                   {
                        headers:{ authorization: `Bearer ${localStorage.getItem("token")}` 
}
                    }
                  )
            setCategories(response.data)
            }
            catch(err){
                console.log(err)
            }
          
        })()

    },[])
    return(
        <Fragment>
             <Navbar route="home" />
             <main className="main">
                  {categories.map(category=><QuizCard  Quizcategory={category} key={category.id}/>)}
             </main>
           
        </Fragment>
       
    )
}
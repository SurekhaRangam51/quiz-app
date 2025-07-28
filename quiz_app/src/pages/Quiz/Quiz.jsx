import { Fragment } from "react"
import { Navbar } from "../../components/Navbar"
import { QNS } from "../../components/index"
import { useQuiz } from "../../context/QuizContext"
import { useState,useEffect } from "react"
import axios from 'axios'
export const Quiz=()=>{
    const {Quizcategories,quizdispatch,get_categories}=useQuiz()
     useEffect(()=>{
        (async()=>{
            try{
                  const response=await axios.get("http://localhost:9988/quiz/getquizdata", {
                        headers:{ authorization: `Bearer ${localStorage.getItem("token")}` 
}
                    })
                    const filterdata= response.data && response.data.length>0 && response.data.filter(({category})=>category===Quizcategories)
                    if(filterdata && filterdata.length>0){
                    quizdispatch({
                        type:"get_categories",
                        payload:filterdata
                    })
                    localStorage.setItem("get_categories",JSON.stringify(filterdata))
                    
                }}
            catch(err){
                console.log(err)
            }
          
        })()

    },[])
    
    return(
        <Fragment>
            <Navbar route="quiz" />
           {get_categories && get_categories.length > 0 && <QNS quizdata={get_categories} />}
        </Fragment>
    )
}
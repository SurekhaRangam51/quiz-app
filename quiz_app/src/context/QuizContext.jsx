import { createContext,useContext,useEffect,useReducer } from "react";
import { QuizReducer } from "../Reducers/QuizReducer";
const QuizContext=createContext()
const initialState={
    index:0,
    score:0,
    Quizcategories:'',
    selectedOption:'',
    get_categories:[],
}


const QuizProvider=({children})=>{
    const [{index,score,Quizcategories,selectedOption,get_categories},quizdispatch]=useReducer(QuizReducer,initialState)
   // Load saved state on first mount
    useEffect(() => {
        const currentIndex = Number(localStorage.getItem("index")) ;
        const currentScore = Number(localStorage.getItem("score")) ;
        const currentOption = localStorage.getItem("selectedOption");
        const currentCategory = localStorage.getItem("category") ;
        const currentcategories = JSON.parse(localStorage.getItem("get_categories"));

        quizdispatch({
            type: "current_state",
            payload: {
                currentIndex,
                currentOption,
                currentScore,
                currentcategories,
                currentCategory
            }
        });
    }, []);
    

   
    return(
        <QuizContext.Provider value={{index,score,Quizcategories,selectedOption,get_categories,quizdispatch}}>
            {children}
        </QuizContext.Provider>
    )
}

const useQuiz=()=>useContext(QuizContext)
export {QuizProvider,useQuiz}
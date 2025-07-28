import { useEffect } from "react";
import { useQuiz } from "../../context/QuizContext";
import "./QNS.css"
import { useNavigate } from "react-router-dom";
export  const QNS=({quizdata})=>{
    const navigate=useNavigate()
   const currentQuiz = quizdata[0] || {};  
    const { title = "", quiz = [] } = currentQuiz;
    
    const{index,score,quizdispatch,selectedOption}=useQuiz()
    const handleAnswerClick=(option_id,isCorrect)=>{
        quizdispatch({
            type:"selectedOption",
            payload:{option_id,isCorrect}
        })

        const selectedOptionText=quiz[index]?.options.find((opt)=>opt.id===option_id)?.option
        console.log(selectedOptionText)

         // Retrieve any answers already stored
        const savedAnswers=JSON.parse(localStorage.getItem("userAnswers")) || []

        savedAnswers[index]={option:selectedOptionText,isCorrect}

        localStorage.setItem("userAnswers",JSON.stringify(savedAnswers))
    }
    const handleNextQuestion=()=>{
       localStorage.setItem("index",index+1)
        if(index<quiz.length-1){
             
             quizdispatch({
            type:"next_Question"
        })
        
        }
        else{
            navigate("/result")
        }
       
    }
     const handleEndQuiz=()=>{
        quizdispatch({
            type:"quit"
        })
        navigate("/home")
    }
    
    useEffect(()=>{
        localStorage.setItem("score",score)
        localStorage.setItem("selectedOption",selectedOption)
    },[selectedOption])
    return(
        <main className="d-flex justify-center qns-main">
            <section className="question-dialog container-flex">
                <h1 className="d-flex justify-center qns-title">{title}</h1>
                <div  className="qsn_scr">
                    <span>Question: {index+1}/{quiz.length}</span>
                    <span  className="score">score:{score}</span>
                </div>
                <div className="question">
                    <span>Q{index+1} {quiz[index]?.question}</span>
                </div>
                <div  className="options-box">
                    {quiz[index]?.options.map(({id,option,isCorrect})=>
                     <button className={`button option d-flex justify-center ${selectedOption && isCorrect ? "success" :" "} ${selectedOption && selectedOption==id && !isCorrect ? "error" :""}`} key={id} onClick={()=>handleAnswerClick(id,isCorrect)} disabled={selectedOption}>{option}</button>
                    )}
                   
                   
                </div>
                <div className="nxt-btn-container">
                    <div className="d-flex gap">
                        <button className="quit" onClick={handleEndQuiz}>Quit</button>
                    <button className="next-btn" onClick={handleNextQuestion}>{index>=quiz.length-1 ? "Submit" : "Next"}</button>
                    </div>
                    
                    
                </div>
            </section>
        </main>
        
    )
}
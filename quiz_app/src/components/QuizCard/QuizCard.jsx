import { useNavigate } from "react-router-dom"
import "./Quizcard.css"
import { useEffect } from "react"
import { useQuiz } from "../../context/QuizContext"
export const QuizCard = ({ Quizcategory }) => {

    const { image, title, description, category } = Quizcategory
    const { quizdispatch } = useQuiz()
    const navigate = useNavigate()
    const handlePlayButton = () => {
        const token = localStorage.getItem("token")
        // RESET old quiz state
        localStorage.setItem("index", 0);          // Start from question 1
        localStorage.setItem("score", 0);          // Reset score
        localStorage.removeItem("selectedOption"); // Clear last selection
        localStorage.removeItem("userAnswers");    // Clear old answers

        // Reset context state
        quizdispatch({ type: "quit" });
        quizdispatch({
            type: "Quizcategories",
            payload: category
        })
        localStorage.setItem("category", category);
        if (token) {
            navigate("/quiz")
        } else {
            navigate("/login")
        }
    }




    return (

        <div className="container d-flex direction-column">
            <div className="img-box">
                <img className="img" src={image} alt="quizcard" />
            </div>
            <div className="details">
                <h3 className="title">{title}</h3>
                <span>{description}</span>
            </div>
            <button className="button play-now-btn " onClick={handlePlayButton}>Play Now</button>
        </div>

    )


}
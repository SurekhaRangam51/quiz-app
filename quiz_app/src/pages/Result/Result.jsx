import { Fragment, useEffect, useState } from "react";
import { Navbar } from "../../components";
import "./Result.css";
import { quizzes } from "../../../../quiz_app_backend/db/quizes";
import { useQuiz } from "../../context/QuizContext";

export const Result = () => {
  const { score, Quizcategories } = useQuiz();
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    const quizData = quizzes.data.find((q) => q.category === Quizcategories);
    setCurrentQuiz(quizData);

    const savedAnswers = JSON.parse(localStorage.getItem("userAnswers")) || [];
    setUserAnswers(savedAnswers);
  }, [Quizcategories]);

  if (!currentQuiz) return <p>Loading results...</p>;

  return (
    <Fragment>
      <Navbar route="result" />
      <div className="page-content"> {/* Scrollable content wrapper */}
        <main className="results d-flex direction-column align-center">
          <h2>Result</h2>
          <p className="final-score">
            Final Score: {score}/{currentQuiz.quiz.length * 5}
          </p>

          <div className="questions-review">
            {currentQuiz.quiz.map((q, idx) => {
              const userAns = userAnswers[idx];
              const correctOption = q.options.find((opt) => opt.isCorrect)?.option;

              return (
                <div className="question-card" key={q.id}>
                  <p className="question-text">
                    Q{idx + 1}: {q.question}
                  </p>

                  <p
                    className={`your-answer ${userAns?.isCorrect ? "correct" : "wrong"}`}
                  >
                    Your Answer: {userAns?.option}
                  </p>

                  {!userAns?.isCorrect && (
                    <p className="correct-answer">
                      Correct Answer: {correctOption}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </Fragment>
  );
};

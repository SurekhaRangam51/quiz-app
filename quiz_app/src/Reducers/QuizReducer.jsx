export const QuizReducer=(state,{type,payload})=>{
    switch(type){
        case "current_state":
            return{
                ...state,
                index:payload.currentIndex,
                score:payload.currentScore,
                selectedOption:payload.currentOption === "null" ? null : payload.currentOption,
                Quizcategories:payload.currentCategory,
                get_categories:payload.currentcategories
            }
            case "get_categories":
                return{
                    ...state,
                    get_categories:payload
                }
        case "Quizcategories":
            return{
                ...state,
                Quizcategories:payload
            }
        case "selectedOption":
            return{
                ...state,
                selectedOption:payload.option_id,
                score:payload.isCorrect ? state.score+5 :state.score
                
            }
        case "next_Question":
            return{
                ...state,
                index:state.index+1,
                selectedOption:null
            }
        case "quit":
            return{
                ...state,
                index:0,
                score:0,
                selectedOption:null

            }
        
        default:
            return state;
    }

}
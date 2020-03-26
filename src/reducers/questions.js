import { 
        RECEIVE_QUESTIONS,
        SAVE_QUESTION_CHOSEN_ANSWER,
        ADD_QUESTION } from '../actions/questions'



export default function questions(state ={}, action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return{
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION_CHOSEN_ANSWER:
            const qid = action.questionID
            const answer = action.chosenOption
            const loggedInUserID = action.loggedInUserID
            return {
                    ...state,
                    [qid]: {
                        ...state[qid],
                        [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([loggedInUserID])
                        }
                    }
                    }
        case ADD_QUESTION:
            return{
                ...state,
                [action.question.id]: action.question,
            }

        default:
            return state
    }
}

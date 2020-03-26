import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_CHOSEN_ANSWER = 'SAVE_QUESTION_CHOSEN_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'


function addQuestionChosenAnswer(loggedInUserID, questionID, chosenOption){
    return{
        type: SAVE_QUESTION_CHOSEN_ANSWER,
        questionID,
        chosenOption,
        loggedInUserID

    }
}
function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question,
    }
}
export function receiveQuestions(questions){
    return{
        type: RECEIVE_QUESTIONS,
        questions
    }
}


export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
      const { auth } = getState()
      dispatch(showLoading())
      return saveQuestion({
        optionOneText: optionOneText,
        optionTwoText: optionTwoText,
        author: auth.loggedInUser,
      })
      .then((question) => dispatch(addQuestion(question)))
      .then(()=> dispatch(hideLoading()))
      
    }
  }


export function handleSaveQuestionChosenAnswer(questionID, chosenOption){
    return (dispatch, getState) =>{
        const { auth } = getState()
        dispatch(showLoading())
        return saveQuestionAnswer({
            authedUser : auth.loggedInUser, 
            qid : questionID, 
            answer : chosenOption
        })
        .then(() => dispatch(addQuestionChosenAnswer(auth.loggedInUser, questionID, chosenOption)))
        .then(()=> dispatch(hideLoading()))

    }
}
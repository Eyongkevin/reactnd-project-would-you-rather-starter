import { LOGIN_USER, LOGOUT_USER } from '../actions/auth'

export default function auth(state={}, action){
    switch(action.type){
        case LOGIN_USER:
            return{
                ...state,
                IsAuth: action.IsAuth,
                loggedInUser: action.loggedInUser,
                loggedOutUserId: null
            };
        case LOGOUT_USER:
            return{
                ...state,
                IsAuth: action.IsAuth,
                loggedInUser: action.loggedInUser,
                loggedOutUserId: action.loggedOutUserId
            }
        default:
            return state;
    }
}
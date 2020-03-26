import {getUser} from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading'

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER'

function receiveLoginUser(user){
    return{
        type: LOGIN_USER,
        IsAuth: true,
        loggedInUser: user
    }
}

function receiveLogoutUser(id){
    return{
        type: LOGOUT_USER,
        IsAuth: false,
        loggedInUser: null,
        loggedOutUserId: id
    }
}



export function handleLoginUser(id) {
    return (dispatch) => {
        dispatch(showLoading())
        getUser(id).then((user) => {
            dispatch(receiveLoginUser(id));
        })
        .then(()=> dispatch(hideLoading()))
    };
}

export function handleLogoutUser(id){
    return (dispatch) =>{
        dispatch(receiveLogoutUser(id));
    }
}
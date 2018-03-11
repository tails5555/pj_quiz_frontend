import axios from 'axios';
import JWTDecode from 'jwt-decode';
const ROOT_URL='http://localhost:8080/pjQuizBack';

export const LOGIN_USER='LOGIN_USER';
export const LOGIN_USER_SUCCESS='LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE='LOGIN_USER_FAILURE';

export function loginUser(loginForm){
    console.log(loginForm);
    const request=axios({
        method : 'post',
        url : `${ROOT_URL}/guest/user_login`,
        data : loginForm
    });
    return{
        type : LOGIN_USER,
        payload : request
    };
}

export function loginUserSuccess(userToken){
    const user=JWTDecode(userToken);
    console.log(user);
    return{
        type : LOGIN_USER_SUCCESS,
        payload : user
    };
}

export function loginUserFailure(error){
    return{
        type : LOGIN_USER_FAILURE,
        payload : error
    };
}
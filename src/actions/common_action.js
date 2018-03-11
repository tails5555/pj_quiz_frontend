import axios from 'axios';
import JWTDecode from 'jwt-decode';
const ROOT_URL='http://localhost:8080/pjQuizBack';

export const USER_FROM_SERVER='USER_FROM_SERVER';
export const USER_FROM_SERVER_SUCCESS='USER_FROM_SERVER_SUCCESS';
export const USER_FROM_SERVER_FAILURE='USER_FROM_SERVER_FAILURE';
export const RESET_USER_FROM_SERVER='RESET_USER_FROM_SERVER';
export const LOGOUT_USER='LOGOUT_USER';

export function userFromServer(tokenFromStorage){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/userAPI/token?token=${tokenFromStorage}`,
        headers : {
            'Authorization' : `Bearer ${tokenFromStorage}`
        }
    });
    return {
        type : USER_FROM_SERVER,
        payload : request
    };
}

export function userFromServerSuccess(userToken) {
    const user=JWTDecode(userToken.data);
    console.log(user);
    return {
        type : USER_FROM_SERVER_SUCCESS,
        payload : user
    };
}

export function userFromServerFailure(error){
    return{
        type : USER_FROM_SERVER_FAILURE,
        payload : error
    };
}

export function resetUserFromServer(){
    return{
        type : RESET_USER_FROM_SERVER
    }
}

export function logoutUser(){
    return{
        type : LOGOUT_USER
    }
}

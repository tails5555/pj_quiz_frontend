import {LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE} from "../actions/guest_action";
import {USER_FROM_SERVER, USER_FROM_SERVER_SUCCESS, USER_FROM_SERVER_FAILURE, RESET_USER_FROM_SERVER, LOGOUT_USER} from "../actions/common_action";
const INITIAL_STATE = {
    user : null, status : null, error : null, loading : false
}

export default function(state=INITIAL_STATE, action){
    let error;
    switch(action.type){
        case LOGIN_USER :
            return { ...state, user : null, status : 'login', error : null, loading : true};
        case LOGIN_USER_SUCCESS :
            return { ...state, user : action.payload, status : 'authenticated', error : null, loading : false};
        case LOGIN_USER_FAILURE :
            error = action.payload.data || {message : action.payload.message};;
            return { ...state, user : null, status : 'login', error : error, loading : false};

        case USER_FROM_SERVER :
            return { ...state, user : null, status : 'storage', error : null, loading : true};
        case USER_FROM_SERVER_SUCCESS :
            return { ...state, user : action.payload, status : 'authenticated', error : null, loading : false};
        case USER_FROM_SERVER_FAILURE :
            error = action.payload.data || {message : action.payload.message};
            return { ...state, user : null, status : 'storage', error : null, loading : false};
        case RESET_USER_FROM_SERVER :
            return { ...state, user : null, status : 'storage', error : null, loading : false};

        case LOGOUT_USER :
            return { ...state, user : null, status : 'logout', error : null, loading : false};

        default :
            return state;
    }
}
import axios from 'axios';
export const COMMON_SELECT_SUBJECT='COMMON_SELECT_SUBJECT';
export const COMMON_SELECT_SUBJECT_SUCCESS='COMMON_SELECT_SUBJECT_SUCCESS';
export const COMMON_SELECT_SUBJECT_FAILURE='COMMON_SELECT_SUBJECT_FAILURE';
export const RESET_COMMON_SELECT_SUBJECT='RESET_COMMON_SELECT_SUBJECT';

const ROOT_URL='http://localhost:8080/pjQuizBack';
export function commonSelectSubject(userToken, subDomain){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/userAPI/subject/common/findBySubDomain?token=${userToken}&subDomain=${subDomain}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : COMMON_SELECT_SUBJECT,
        payload : request
    }
}

export function commonSelectSubjectSuccess(selectSubject){
    return {
        type : COMMON_SELECT_SUBJECT_SUCCESS,
        payload : selectSubject.data
    }
}

export function commonSelectSubjectFailure(error){
    return{
        type : COMMON_SELECT_SUBJECT_FAILURE,
        payload : error
    }
}

export function resetCommonSelectSubject(){
    return{
        type : RESET_COMMON_SELECT_SUBJECT
    }
}
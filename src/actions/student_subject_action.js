import axios from 'axios';
const ROOT_URL='http://localhost:8080/pjQuizBack';

export const STUDENT_LOAD_ASSIGN_SUBJECT='STUDENT_LOAD_ASSIGN_SUBJECT';
export const STUDENT_LOAD_ASSIGN_SUBJECT_SUCCESS='STUDENT_LOAD_ASSIGN_SUBJECT_SUCCESS';
export const STUDENT_LOAD_ASSIGN_SUBJECT_FAILURE='STUDENT_LOAD_ASSIGN_SUBJECT_FAILURE';
export const RESET_STUDENT_LOAD_ASSIGN_SUBJECT='RESET_STUDENT_LOAD_ASSIGN_SUBJECT';

export const STUDENT_LOAD_APPLICATION_SUBJECT='STUDENT_LOAD_APPLICATION_SUBJECT';
export const STUDENT_LOAD_APPLICATION_SUBJECT_SUCCESS='STUDENT_LOAD_APPLICATION_SUBJECT_SUCCESS';
export const STUDENT_LOAD_APPLICATION_SUBJECT_FAILURE='STUDENT_LOAD_APPLICATION_SUBJECT_FAILURE';
export const RESET_STUDENT_LOAD_APPLICATION_SUBJECT='RESET_STUDENT_LOAD_APPLICATION_SUBJECT';

export const STUDENT_APPLICATE_SUBJECT='STUDENT_APPLICATE_SUBJECT';
export const STUDENT_APPLICATE_SUBJECT_SUCCESS='STUDENT_APPLICATE_SUBJECT_SUCCESS';
export const STUDENT_APPLICATE_SUBJECT_FAILURE='STUDENT_APPLICATE_SUBJECT_FAILURE';
export const RESET_STUDENT_APPLICATE_SUBJECT='RESET_STUDENT_APPLICATE_SUBJECT';

export function studentLoadAssignSubject(userToken){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/userAPI/subject/student/assignList?token=${userToken}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : STUDENT_LOAD_ASSIGN_SUBJECT,
        payload : request
    }
}

export function studentLoadAssignSubjectSuccess(subjectList){
    return{
        type : STUDENT_LOAD_ASSIGN_SUBJECT_SUCCESS,
        payload : subjectList.data
    }
}

export function studentLoadAssignSubjectFailure(error){
    return{
        type : STUDENT_LOAD_ASSIGN_SUBJECT_FAILURE,
        payload : error
    }
}
export function resetStudentLoadAssignSubject(){
    return{
        type : RESET_STUDENT_LOAD_ASSIGN_SUBJECT
    }
}

export function studentLoadApplicationSubject(userToken){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/userAPI/subject/student/notAssignedList?token=${userToken}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : STUDENT_LOAD_APPLICATION_SUBJECT,
        payload : request
    }
}

export function studentLoadApplicationSubjectSuccess(subjectList){
    return{
        type : STUDENT_LOAD_APPLICATION_SUBJECT_SUCCESS,
        payload : subjectList.data
    }
}

export function studentLoadApplicationSubjectFailure(error){
    return{
        type : STUDENT_LOAD_APPLICATION_SUBJECT_FAILURE,
        payload : error
    }
}

export function resetStudentLoadApplicationSubject(){
    return{
        type : RESET_STUDENT_LOAD_APPLICATION_SUBJECT
    }
}

export function studentApplicateSubject(userToken, subjectId){
    const request=axios({
        method : 'post',
        url : `${ROOT_URL}/userAPI/subject/student/application?token=${userToken}&subjectId=${subjectId}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : STUDENT_APPLICATE_SUBJECT,
        payload : request
    }
}

export function studentApplicateSubjectSuccess(message){
    return{
        type : STUDENT_APPLICATE_SUBJECT_SUCCESS,
        payload : message.data
    }
}

export function studentApplicateSubjectFailure(error){
    return{
        type : STUDENT_APPLICATE_SUBJECT_FAILURE,
        payload : error
    }
}

export function resetStudentApplicateSubject(){
    return{
        type : RESET_STUDENT_APPLICATE_SUBJECT
    }
}
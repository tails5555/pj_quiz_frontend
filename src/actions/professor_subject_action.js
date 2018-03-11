import axios from 'axios';
const ROOT_URL='http://localhost:8080/pjQuizBack';

export const PROFESSOR_LOAD_ASSIGN_SUBJECT='PROFESSOR_LOAD_ASSIGN_SUBJECT';
export const PROFESSOR_LOAD_ASSIGN_SUBJECT_SUCCESS='PROFESSOR_LOAD_ASSIGN_SUBJECT_SUCCESS';
export const PROFESSOR_LOAD_ASSIGN_SUBJECT_FAILURE='PROFESSOR_LOAD_ASSIGN_SUBJECT_FAILURE';
export const RESET_PROFESSOR_LOAD_ASSIGN_SUBJECT='RESET_PROFESSOR_LOAD_ASSIGN_SUBJECT';

export const PROFESSOR_CREATE_SUBJECT='PROFESSOR_CREATE_SUBJECT';
export const PROFESSOR_CREATE_SUBJECT_SUCCESS='PROFESSOR_CREATE_SUBJECT_SUCCESS';
export const PROFESSOR_CREATE_SUBJECT_FAILURE='PROFESSOR_CREATE_SUBJECT_FAILURE';
export const RESET_PROFESSOR_CREATE_SUBJECT='RESET_PROFESSOR_CREATE_SUBJECT';

export const CONFIRM_SUBDOMAIN_UNIQUE='CONFIRM_SUBDOMAIN_UNIQUE';
export const CONFIRM_SUBDOMAIN_UNIQUE_COMPLETE='CONFIRM_SUBDOMAIN_UNIQUE_COMPLETE';
export const CONFIRM_SUBDOMAIN_UNIQUE_EXCEPTION='CONFIRM_SUBDOMAIN_UNIQUE_EXCEPTION';

export const PROFESSOR_LOAD_ASSIGN_STUDENT='PROFESSOR_LOAD_ASSIGN_STUDENT';
export const PROFESSOR_LOAD_ASSIGN_STUDENT_SUCCESS='PROFESSOR_LOAD_ASSIGN_STUDENT_SUCCESS';
export const PROFESSOR_LOAD_ASSIGN_STUDENT_FAILURE='PROFESSOR_LOAD_ASSIGN_STUDENT_FAILURE';
export const RESET_PROFESSOR_LOAD_ASSIGN_STUDENT='RESET_PROFESSOR_LOAD_ASSIGN_STUDENT';

export const PROFESSOR_DELETE_ASSIGN_STUDENT='PROFESSOR_DELETE_ASSIGN_STUDENT';
export const PROFESSOR_DELETE_ASSIGN_STUDENT_SUCCESS='PROFESSOR_DELETE_ASSIGN_STUDENT_SUCCESS';
export const PROFESSOR_DELETE_ASSIGN_STUDENT_FAILURE='PROFESSOR_DELETE_ASSIGN_STUDENT_FAILURE';
export const RESET_PROFESSOR_DELETE_ASSIGN_STUDENT='RESET_PROFESSOR_DELETE_ASSIGN_STUDENT';

export const PROFESSOR_UPDATE_SUBJECT_CONTEXT='PROFESSOR_UPDATE_SUBJECT_CONTEXT';
export const PROFESSOR_UPDATE_SUBJECT_CONTEXT_SUCCESS='PROFESSOR_UPDATE_SUBJECT_CONTEXT_SUCCESS';
export const PROFESSOR_UPDATE_SUBJECT_CONTEXT_FAILURE='PROFESSOR_UPDATE_SUBJECT_CONTEXT_FAILURE';
export const RESET_PROFESSOR_UPDATE_SUBJECT_CONTEXT='RESET_PROFESSOR_UPDATE_SUBJECT_CONTEXT';

export function professorLoadAssignSubject(userToken){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/userAPI/subject/professor/assignList?token=${userToken}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : PROFESSOR_LOAD_ASSIGN_SUBJECT,
        payload : request
    }
}

export function professorLoadAssignSubjectSuccess(subjectList){
    return{
        type : PROFESSOR_LOAD_ASSIGN_SUBJECT_SUCCESS,
        payload : subjectList.data
    }
}

export function professorLoadAssignSubjectFailure(error){
    return{
        type : PROFESSOR_LOAD_ASSIGN_SUBJECT_FAILURE,
        payload : error
    }
}
export function resetProfessorLoadAssignSubject(){
    return{
        type : RESET_PROFESSOR_LOAD_ASSIGN_SUBJECT
    }
}

export function professorCreateSubject(userToken, subjectForm){
    const request=axios({
        method : 'post',
        data : subjectForm,
        url : `${ROOT_URL}/userAPI/subject/professor/addSubject?token=${userToken}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : PROFESSOR_CREATE_SUBJECT,
        payload : request
    }
}

export function professorCreateSubjectSuccess(message){
    return{
        type : PROFESSOR_CREATE_SUBJECT_SUCCESS,
        payload : message
    }
}

export function professorCreateSubjectFailure(error){
    return{
        type : PROFESSOR_CREATE_SUBJECT_FAILURE,
        payload : error
    }
}

export function resetProfessorCreateSubject(){
    return{
        type : RESET_PROFESSOR_CREATE_SUBJECT
    }
}

export function confirmSubDomainUnique(userToken, subDomain){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/userAPI/subject/professor/subDomainConfirm?subDomain=${subDomain}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : CONFIRM_SUBDOMAIN_UNIQUE,
        payload : request
    }
}

export function confirmSubDomainUniqueComplete(req){
    return{
        type : CONFIRM_SUBDOMAIN_UNIQUE_COMPLETE,
        payload : req
    }
}

export function confirmSubDomainUniqueException(error){
    return{
        type : CONFIRM_SUBDOMAIN_UNIQUE_EXCEPTION,
        payload : error
    }
}

export function professorLoadAssignStudent(userToken, subDomain){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/userAPI/subject/professor/assignSubjectStudentList?token=${userToken}&subDomain=${subDomain}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : PROFESSOR_LOAD_ASSIGN_STUDENT,
        payload : request
    }
}

export function professorLoadAssignStudentSuccess(studentList){
    return{
        type : PROFESSOR_LOAD_ASSIGN_STUDENT_SUCCESS,
        payload : studentList.data
    }
}

export function professorLoadAssignStudentFailure(error){
    return{
        type : PROFESSOR_LOAD_ASSIGN_STUDENT_FAILURE,
        payload : error
    }
}

export function resetProfessorLoadAssignStudent(){
    return{
        type : RESET_PROFESSOR_LOAD_ASSIGN_STUDENT
    }
}

export function professorDeleteAssignStudent(userToken, subDomain, userId){
    const request=axios({
        method : 'post',
        url : `${ROOT_URL}/userAPI/subject/professor/assignStudentDelete?token=${userToken}&subDomain=${subDomain}&userId=${userId}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : PROFESSOR_DELETE_ASSIGN_STUDENT,
        payload : request
    }
}

export function professorDeleteAssignStudentSuccess(message){
    return{
        type : PROFESSOR_DELETE_ASSIGN_STUDENT_SUCCESS,
        payload : message.data
    }
}

export function professorDeleteAssignStudentFailure(error){
    return{
        type : PROFESSOR_DELETE_ASSIGN_STUDENT_FAILURE,
        payload : error
    }
}

export function resetProfessorDeleteAssignStudent(){
    return{
        type : RESET_PROFESSOR_DELETE_ASSIGN_STUDENT
    }
}

export function professorUpdateSubjectContext(userToken, subDomain, subjectUpdateForm){
    const request=axios({
        method : 'post',
        url : `${ROOT_URL}/userAPI/subject/professor/subjectInfoUpdate?token=${userToken}&subDomain=${subDomain}`,
        data : subjectUpdateForm,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : PROFESSOR_UPDATE_SUBJECT_CONTEXT,
        payload : request
    }
}

export function professorUpdateSubjectContextSuccess(message){
    return{
        type : PROFESSOR_UPDATE_SUBJECT_CONTEXT_SUCCESS,
        payload : message.data
    }
}

export function professorUpdateSubjectContextFailure(error){
    return{
        type : PROFESSOR_UPDATE_SUBJECT_CONTEXT_FAILURE,
        payload : error
    }
}

export function resetProfessorUpdateSubjectContext(){
    return{
        type : RESET_PROFESSOR_UPDATE_SUBJECT_CONTEXT
    }
}
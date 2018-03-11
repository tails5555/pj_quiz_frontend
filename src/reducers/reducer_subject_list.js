import {STUDENT_LOAD_ASSIGN_SUBJECT, STUDENT_LOAD_ASSIGN_SUBJECT_SUCCESS, STUDENT_LOAD_ASSIGN_SUBJECT_FAILURE, RESET_STUDENT_LOAD_ASSIGN_SUBJECT,
         STUDENT_LOAD_APPLICATION_SUBJECT, STUDENT_LOAD_APPLICATION_SUBJECT_SUCCESS, STUDENT_LOAD_APPLICATION_SUBJECT_FAILURE, RESET_STUDENT_LOAD_APPLICATION_SUBJECT,
         STUDENT_APPLICATE_SUBJECT, STUDENT_APPLICATE_SUBJECT_SUCCESS, STUDENT_APPLICATE_SUBJECT_FAILURE, RESET_STUDENT_APPLICATE_SUBJECT
        }
from "../actions/student_subject_action";

import {PROFESSOR_LOAD_ASSIGN_SUBJECT, PROFESSOR_LOAD_ASSIGN_SUBJECT_SUCCESS, PROFESSOR_LOAD_ASSIGN_SUBJECT_FAILURE, RESET_PROFESSOR_LOAD_ASSIGN_SUBJECT}
from "../actions/professor_subject_action";

const INITIAL_STATE = {
    subjectList : {subjects : [], error : null, loading : false},
    subjectApplication : {message : null, error : null, loading : null}
};
export default function(state=INITIAL_STATE, action){
    let error;
    switch(action.type){
        case STUDENT_LOAD_ASSIGN_SUBJECT :
            return { ...state, subjectList : {subjects : [], error : null, loading : true}};
        case STUDENT_LOAD_ASSIGN_SUBJECT_SUCCESS :
            return { ...state, subjectList : {subjects : action.payload, error : null, loading : false}};
        case STUDENT_LOAD_ASSIGN_SUBJECT_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, subjectList : {subjects : null, error : error, loading : false}};
        case RESET_STUDENT_LOAD_ASSIGN_SUBJECT :
            return { ...state, subjectList : {subjects : [], error : null, loading : false}};

        case STUDENT_LOAD_APPLICATION_SUBJECT :
            return { ...state, subjectList : {subjects : [], error : null, loading : true}};
        case STUDENT_LOAD_APPLICATION_SUBJECT_SUCCESS :
            return { ...state, subjectList : {subjects : action.payload, error : null, loading : false}};
        case STUDENT_LOAD_APPLICATION_SUBJECT_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, subjectList : {subjects : null, error : error, loading : false}};
        case RESET_STUDENT_LOAD_APPLICATION_SUBJECT :
            return { ...state, subjectList : {subjects : [], error : null, loading : false}};

        case STUDENT_APPLICATE_SUBJECT :
            return { ...state, subjectApplication : {message : null, error : null, loading : true}};
        case STUDENT_APPLICATE_SUBJECT_SUCCESS :
            return { ...state, subjectApplication : {message : action.payload, error : null, loading : false}};
        case STUDENT_APPLICATE_SUBJECT_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, subjectApplication : {message : null, error : error, loading : false}};
        case RESET_STUDENT_APPLICATE_SUBJECT :
            return { ...state, subjectApplication : {message : null, error : null, loading : false}};

        case PROFESSOR_LOAD_ASSIGN_SUBJECT :
            return { ...state, subjectList : {subjects : [], error : null, loading : true}};
        case PROFESSOR_LOAD_ASSIGN_SUBJECT_SUCCESS :
            return { ...state, subjectList : {subjects : action.payload, error : null, loading : false}};
        case PROFESSOR_LOAD_ASSIGN_SUBJECT_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, subjectList : {subjects : null, error : error, loading : false}};
        case RESET_PROFESSOR_LOAD_ASSIGN_SUBJECT :
            return { ...state, subjectList : {subjects : [], error : null, loading : false}};

        default :
            return state;
    }
}
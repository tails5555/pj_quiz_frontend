import {PROFESSOR_CREATE_SUBJECT, PROFESSOR_CREATE_SUBJECT_SUCCESS, PROFESSOR_CREATE_SUBJECT_FAILURE, RESET_PROFESSOR_CREATE_SUBJECT,
         CONFIRM_SUBDOMAIN_UNIQUE, CONFIRM_SUBDOMAIN_UNIQUE_COMPLETE, CONFIRM_SUBDOMAIN_UNIQUE_EXCEPTION,
         PROFESSOR_LOAD_ASSIGN_STUDENT, PROFESSOR_LOAD_ASSIGN_STUDENT_SUCCESS, PROFESSOR_LOAD_ASSIGN_STUDENT_FAILURE, RESET_PROFESSOR_LOAD_ASSIGN_STUDENT,
         PROFESSOR_DELETE_ASSIGN_STUDENT, PROFESSOR_DELETE_ASSIGN_STUDENT_SUCCESS, PROFESSOR_DELETE_ASSIGN_STUDENT_FAILURE, RESET_PROFESSOR_DELETE_ASSIGN_STUDENT,
        PROFESSOR_UPDATE_SUBJECT_CONTEXT, PROFESSOR_UPDATE_SUBJECT_CONTEXT_SUCCESS, PROFESSOR_UPDATE_SUBJECT_CONTEXT_FAILURE, RESET_PROFESSOR_UPDATE_SUBJECT_CONTEXT} from "../actions/professor_subject_action";
import {COMMON_SELECT_SUBJECT, COMMON_SELECT_SUBJECT_SUCCESS, COMMON_SELECT_SUBJECT_FAILURE, RESET_COMMON_SELECT_SUBJECT} from "../actions/common_subject_action";

const INITIAL_STATE = {
    newSubject : {subject : null, isUnique : null, error : null, loading : false},
    selectSubject : {subject : null, error : null, loading : false},
    updateSubject : {message : null, error : null, loading : false},
    assignStudent : {studentList : [], error : null, loading : false},
    deleteStudent : {message : null, deleteError : null, deleteLoading : false}
};

export default function(state=INITIAL_STATE, action) {
    let error;
    switch(action.type){
        case PROFESSOR_CREATE_SUBJECT :
            return { ...state, newSubject : { ...state.newSubject, loading : true}};
        case PROFESSOR_CREATE_SUBJECT_SUCCESS :
            return { ...state, newSubject : { ...state.newSubject, subject : action.payload, loading : false, error : null}};
        case PROFESSOR_CREATE_SUBJECT_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, newSubject : { ...state.newSubject, subject : null, loading : false, error : error}};
        case RESET_PROFESSOR_CREATE_SUBJECT :
            return { ...state, newSubject : {subject : null, isUnique : null, error : null, loading : false}};

        case CONFIRM_SUBDOMAIN_UNIQUE :
            return { ...state, newSubject : {subject : null, isUnique : false, error : null, loading : true}};
        case CONFIRM_SUBDOMAIN_UNIQUE_COMPLETE :
            return { ...state, newSubject : {subject : null, isUnique : action.payload.data, error : null, loading : false}};
        case CONFIRM_SUBDOMAIN_UNIQUE_EXCEPTION :
            error = action.payload || {message: action.payload.message};
            return { ...state, newSubject : {subject : null, isUnique : false, error : error, loading : false}};

        case COMMON_SELECT_SUBJECT :
            return { ...state, selectSubject : {subject : null, error : null, loading : true}};
        case COMMON_SELECT_SUBJECT_SUCCESS :
            return { ...state, selectSubject : {subject : action.payload, error : null, loading : false}};
        case COMMON_SELECT_SUBJECT_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, selectSubject : {subject : null, error : error, loading : false}};
        case RESET_COMMON_SELECT_SUBJECT :
            return { ...state, selectSubject : {subject : null, error : null, loading : false}};

        case PROFESSOR_LOAD_ASSIGN_STUDENT :
            return { ...state, assignStudent : {studentList : [], error : null, loading : true}};
        case PROFESSOR_LOAD_ASSIGN_STUDENT_SUCCESS :
            return { ...state, assignStudent : {studentList : action.payload, error : null, loading : false}};
        case PROFESSOR_LOAD_ASSIGN_STUDENT_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, assignStudent : {studentList : [], error : error, loading : false}};
        case RESET_PROFESSOR_LOAD_ASSIGN_STUDENT :
            return { ...state, assignStudent : {studentList : [], error : null, loading : false}};

        case PROFESSOR_DELETE_ASSIGN_STUDENT :
            return { ...state, deleteStudent : {message : null, deleteLoading : true, deleteError : null}};
        case PROFESSOR_DELETE_ASSIGN_STUDENT_SUCCESS :
            return { ...state, deleteStudent : {message : action.payload, deleteLoading : false, deleteError : null}};
        case PROFESSOR_DELETE_ASSIGN_STUDENT_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, deleteStudent : {message : null, deleteLoading : false, deleteError : error}};
        case RESET_PROFESSOR_DELETE_ASSIGN_STUDENT :
            return { ...state, deleteStudent : {message : null, deleteLoading : false, deleteError : null}};

        case PROFESSOR_UPDATE_SUBJECT_CONTEXT :
            return { ...state, updateSubject : {message : null, loading : true, error : null}};
        case PROFESSOR_UPDATE_SUBJECT_CONTEXT_SUCCESS :
            return { ...state, updateSubject : {message : action.payload, loading : false, error : null}};
        case PROFESSOR_UPDATE_SUBJECT_CONTEXT_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, updateSubject : {message : null, loading : false, error : error}};
        case RESET_PROFESSOR_UPDATE_SUBJECT_CONTEXT :
            return { ...state, updateSubject : {message : null, loading : false, error : null}};

        default :
            return state;
    }
}
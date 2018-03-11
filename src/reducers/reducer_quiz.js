import {PROFESSOR_CREATE_QUIZ, PROFESSOR_CREATE_QUIZ_SUCCESS, PROFESSOR_CREATE_QUIZ_FAILURE, RESET_PROFESSOR_CREATE_QUIZ,
         PROFESSOR_LOAD_STUDENT_WITH_SCORE, PROFESSOR_LOAD_STUDENT_WITH_SCORE_SUCCESS, PROFESSOR_LOAD_STUDENT_WITH_SCORE_FAILURE, RESET_PROFESSOR_LOAD_STUDENT_WITH_SCORE,
         PROFESSOR_LOAD_QUIZ_LIST, PROFESSOR_LOAD_QUIZ_LIST_SUCCESS, PROFESSOR_LOAD_QUIZ_LIST_FAILURE, RESET_PROFESSOR_LOAD_QUIZ_LIST,
         PROFESSOR_LOAD_ANSWER_WITH_STUDENT, PROFESSOR_LOAD_ANSWER_WITH_STUDENT_SUCCESS, PROFESSOR_LOAD_ANSWER_WITH_STUDENT_FAILURE, RESET_PROFESSOR_LOAD_ANSWER_WITH_STUDENT,
         PROFESSOR_UPDATE_SCORE, PROFESSOR_UPDATE_SCORE_SUCCESS, PROFESSOR_UPDATE_SCORE_FAILURE, RESET_PROFESSOR_UPDATE_SCORE
} from "../actions/professor_quiz_action";
import {STUDENT_LOAD_QUIZ_LIST, STUDENT_LOAD_QUIZ_LIST_SUCCESS, STUDENT_LOAD_QUIZ_LIST_FAILURE, RESET_STUDENT_LOAD_QUIZ_LIST,
         STUDENT_LOAD_QUIZ, STUDENT_LOAD_QUIZ_SUCCESS, STUDENT_LOAD_QUIZ_FAILURE, RESET_STUDENT_LOAD_QUIZ,
         STUDENT_LOAD_QUIZ_CONFIRM, STUDENT_LOAD_QUIZ_CONFIRM_SUCCESS, STUDENT_LOAD_QUIZ_CONFIRM_FAILURE, RESET_STUDENT_LOAD_QUIZ_CONFIRM,
         STUDENT_CREATE_ANSWER_LIST, STUDENT_CREATE_ANSWER_LIST_SUCCESS, STUDENT_CREATE_ANSWER_LIST_FAILURE, RESET_STUDENT_CREATE_ANSWER_LIST,
         STUDENT_LOAD_SCORE_TITLE, STUDENT_LOAD_SCORE_TITLE_SUCCESS, STUDENT_LOAD_SCORE_TITLE_FAILURE, RESET_STUDENT_LOAD_SCORE_TITLE,
         STUDENT_LOAD_SCORE_WITH_NICKNAME, STUDENT_LOAD_SCORE_WITH_NICKNAME_SUCCESS, STUDENT_LOAD_SCORE_WITH_NICKNAME_FAILURE, RESET_STUDENT_LOAD_SCORE_WITH_NICKNAME
} from "../actions/student_quiz_action";

const INITIAL_STATE = {
    createQuiz : {message : null, loading : false, error : null},
    scoringTable : {tableObject : null, tableLoading : false, tableError : null},
    loadQuizList : {quizList : [], loading : false, error : null},
    selectQuiz : {quiz : null, nameList : [], loading : false, error : null},
    createAnswer : {message : null, createLoading : false, createError : null},
    answerWithStudent : {answerObject : null, answerValidate : [], answerLoading : false, answerError : null},
    updateScore : {message : null, updateLoading : false, updateError : null},
    scoreTitle : {titleList : [], loading : false, error : null},
    scoreWithNickName : {scoreObject : null, loading : false, error : null}
}
export default function(state=INITIAL_STATE, action) {
    let error;
    switch (action.type) {
        case PROFESSOR_CREATE_QUIZ :
            return {...state, createQuiz: {message: null, loading: true, error: null}};
        case PROFESSOR_CREATE_QUIZ_SUCCESS :
            return {...state, createQuiz: {message: action.payload, loading: false, error: null}};
        case PROFESSOR_CREATE_QUIZ_FAILURE :
            error = action.payload || {message: action.payload.message};
            return {...state, createQuiz: {message: null, loading: false, error: error}};
        case RESET_PROFESSOR_CREATE_QUIZ :
            return {...state, createQuiz: {message: null, loading: false, error: null}};

        case PROFESSOR_LOAD_QUIZ_LIST :
            return { ...state, loadQuizList : {quizList : [], loading : true, error : null}};
        case PROFESSOR_LOAD_QUIZ_LIST_SUCCESS :
            return { ...state, loadQuizList : {quizList : action.payload, loading : false, error : null}};
        case PROFESSOR_LOAD_QUIZ_LIST_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, loadQuizList : {quizList : [], loading : false, error : error}};
        case RESET_PROFESSOR_LOAD_QUIZ_LIST :
            return { ...state, loadQuizList : {quizList : [], loading : false, error : null}};

        case STUDENT_LOAD_QUIZ_CONFIRM :
            return { ...state, answerWithStudent : {answerObject : null, answerValidate : [], answerLoading : true, answerError : null}};
        case STUDENT_LOAD_QUIZ_CONFIRM_SUCCESS :
            return { ...state, answerWithStudent : {answerObject : action.payload, answerValidate : [], answerLoading : false, answerError : null}};
        case STUDENT_LOAD_QUIZ_CONFIRM_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, answerWithStudent : {answerObject : null, answerValidate : [], answerLoading : false, answerError : error}};
        case RESET_STUDENT_LOAD_QUIZ_CONFIRM :
            return { ...state, answerWithStudent : {answerObject : null, answerValidate : [], answerLoading : false, answerError : null}};

        case PROFESSOR_LOAD_STUDENT_WITH_SCORE :
            return { ...state, scoringTable : {tableObject : null, tableLoading : true, tableError : null}};
        case PROFESSOR_LOAD_STUDENT_WITH_SCORE_SUCCESS :
            return { ...state, scoringTable : {tableObject : action.payload, tableLoading : false, tableError : null}};
        case PROFESSOR_LOAD_STUDENT_WITH_SCORE_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, scoringTable : {tableObject : null, tableLoading : false, tableError : error}};
        case RESET_PROFESSOR_LOAD_STUDENT_WITH_SCORE :
            return { ...state, scoringTable : {tableObject : null, tableLoading : false, tableError : null}};

        case PROFESSOR_LOAD_ANSWER_WITH_STUDENT :
            return { ...state, answerWithStudent : {answerObject : null, answerValidate : [], answerLoading : true, answerError : null}};
        case PROFESSOR_LOAD_ANSWER_WITH_STUDENT_SUCCESS :
            return { ...state, answerWithStudent : {answerObject : action.payload, answerValidate : action.tagWithScore, answerLoading : false, answerError : null}};
        case PROFESSOR_LOAD_ANSWER_WITH_STUDENT_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, answerWithStudent : {answerObject : null, answerValidate : [], answerLoading : false, answerError : error}};
        case RESET_PROFESSOR_LOAD_ANSWER_WITH_STUDENT :
            return { ...state, answerWithStudent : {answerObject : null, answerValidate : [], answerLoading : false, answerError : null}};

        case PROFESSOR_UPDATE_SCORE :
            return { ...state, updateScore : {message : null, updateLoading : true, updateError : null}};
        case PROFESSOR_UPDATE_SCORE_SUCCESS :
            return { ...state, updateScore : {message : action.payload, updateLoading : false, updateError : null}};
        case PROFESSOR_UPDATE_SCORE_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, updateScore : {message : null, updateLoading : false, updateError : error}};
        case RESET_PROFESSOR_UPDATE_SCORE :
            return { ...state, updateScore : {message : null, updateLoading : false, updateError : null}};

        case STUDENT_LOAD_QUIZ_LIST :
            return { ...state, loadQuizList : {quizList : [], loading : true, error : null}};
        case STUDENT_LOAD_QUIZ_LIST_SUCCESS :
            return { ...state, loadQuizList : {quizList : action.payload, loading : false, error : null}};
        case STUDENT_LOAD_QUIZ_LIST_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, loadQuizList : {quizList : [], loading : false, error : error}};
        case RESET_STUDENT_LOAD_QUIZ_LIST :
            return { ...state, loadQuizList : {quizList : [], loading : false, error : null}};

        case STUDENT_LOAD_QUIZ :
            return { ...state, selectQuiz : {quiz : null, nameList : [], loading : true, error : null}};
        case STUDENT_LOAD_QUIZ_SUCCESS :
            return { ...state, selectQuiz : {quiz : action.payload, nameList : action.nameList, loading : false, error : null}};
        case STUDENT_LOAD_QUIZ_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, selectQuiz : {quiz : null, nameList : [], loading : false, error : error}};
        case RESET_STUDENT_LOAD_QUIZ :
            return { ...state, selectQuiz : {quiz : null, nameList : [], loading : false, error : null}};

        case STUDENT_CREATE_ANSWER_LIST :
            return { ...state, createAnswer : {message : null, createLoading : true, createError : null}};
        case STUDENT_CREATE_ANSWER_LIST_SUCCESS :
            return { ...state, createAnswer : {message : action.payload, createLoading : false, createError : null }};
        case STUDENT_CREATE_ANSWER_LIST_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, createAnswer : {message : null, createLoading : false, createError : error}};
        case RESET_STUDENT_CREATE_ANSWER_LIST :
            return { ...state, createAnswer : {message : null, createLoading : false, createError : null}};

        case STUDENT_LOAD_SCORE_TITLE :
            return { ...state, scoreTitle : {titleList : [], loading : true, error : null}};
        case STUDENT_LOAD_SCORE_TITLE_SUCCESS :
            return { ...state, scoreTitle : {titleList : action.payload, loading : false, error : null}};
        case STUDENT_LOAD_SCORE_TITLE_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, scoreTitle : {titleList : [], loading : false, error : error}};
        case RESET_STUDENT_LOAD_SCORE_TITLE :
            return { ...state, scoreTitle : {titleList : [], loading : true, error : null}};

        case STUDENT_LOAD_SCORE_WITH_NICKNAME :
            return { ...state, scoreWithNickName : {scoreObject : null, loading : true, error : null}};
        case STUDENT_LOAD_SCORE_WITH_NICKNAME_SUCCESS :
            return { ...state, scoreWithNickName : {scoreObject : action.payload, loading : false, error : null}};
        case STUDENT_LOAD_SCORE_WITH_NICKNAME_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, scoreWithNickName : {scoreObject : null, loading : false, error : error}};
        case RESET_STUDENT_LOAD_SCORE_WITH_NICKNAME :
            return { ...state, scoreWithNickName : {scoreObject : null, loading : false, error : null}};

        default :
            return state;
    }
}

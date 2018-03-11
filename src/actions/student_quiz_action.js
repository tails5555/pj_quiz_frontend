import axios from 'axios';
const ROOT_URL='http://localhost:8080/pjQuizBack';

export const STUDENT_LOAD_QUIZ_LIST = 'STUDENT_LOAD_QUIZ_LIST';
export const STUDENT_LOAD_QUIZ_LIST_SUCCESS = 'STUDENT_LOAD_QUIZ_LIST_SUCCESS';
export const STUDENT_LOAD_QUIZ_LIST_FAILURE = 'STUDENT_LOAD_QUIZ_LIST_FAILURE';
export const RESET_STUDENT_LOAD_QUIZ_LIST = 'RESET_STUDENT_LOAD_QUIZ_LIST';

export const STUDENT_LOAD_QUIZ = 'STUDENT_LOAD_QUIZ';
export const STUDENT_LOAD_QUIZ_SUCCESS='STUDENT_LOAD_QUIZ_SUCCESS';
export const STUDENT_LOAD_QUIZ_FAILURE='STUDENT_LOAD_QUIZ_FAILURE';
export const RESET_STUDENT_LOAD_QUIZ='RESET_STUDENT_LOAD_QUIZ';

export const STUDENT_LOAD_QUIZ_CONFIRM = 'STUDENT_LOAD_QUIZ_CONFIRM';
export const STUDENT_LOAD_QUIZ_CONFIRM_SUCCESS = 'STUDENT_LOAD_QUIZ_CONFIRM_SUCCESS';
export const STUDENT_LOAD_QUIZ_CONFIRM_FAILURE = 'STUDENT_LOAD_QUIZ_CONFIRM_FAILURE';
export const RESET_STUDENT_LOAD_QUIZ_CONFIRM = 'RESET_STUDENT_LOAD_QUIZ_CONFIRM';

export const STUDENT_CREATE_ANSWER_LIST = 'STUDENT_CREATE_ANSWER_LIST';
export const STUDENT_CREATE_ANSWER_LIST_SUCCESS = 'STUDENT_CREATE_ANSWER_LIST_SUCCESS';
export const STUDENT_CREATE_ANSWER_LIST_FAILURE = 'STUDENT_CREATE_ANSWER_LIST_FAILURE';
export const RESET_STUDENT_CREATE_ANSWER_LIST = 'RESET_STUDENT_CREATE_ANSWER_LIST';

export const STUDENT_LOAD_SCORE_TITLE = 'STUDENT_LOAD_SCORE_TITLE';
export const STUDENT_LOAD_SCORE_TITLE_SUCCESS = 'STUDENT_LOAD_SCORE_TITLE_SUCCESS';
export const STUDENT_LOAD_SCORE_TITLE_FAILURE = 'STUDENT_LOAD_SCORE_TITLE_FAILURE';
export const RESET_STUDENT_LOAD_SCORE_TITLE = 'RESET_STUDENT_LOAD_SCORE_TITLE';

export const STUDENT_LOAD_SCORE_WITH_NICKNAME='STUDENT_LOAD_SCORE_WITH_NICKNAME';
export const STUDENT_LOAD_SCORE_WITH_NICKNAME_SUCCESS='STUDENT_LOAD_SCORE_WITH_NICKNAME_SUCCESS';
export const STUDENT_LOAD_SCORE_WITH_NICKNAME_FAILURE='STUDENT_LOAD_SCORE_WITH_NICKNAME_FAILURE';
export const RESET_STUDENT_LOAD_SCORE_WITH_NICKNAME='RESET_STUDENT_LOAD_SCORE_WITH_NICKNAME';

export function studentLoadQuizList(userToken, subDomain){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/userAPI/quiz/student/quizList?token=${userToken}&subDomain=${subDomain}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : STUDENT_LOAD_QUIZ_LIST,
        payload : request
    }
}

export function studentLoadQuizListSuccess(subjectList){
    return{
        type : STUDENT_LOAD_QUIZ_LIST_SUCCESS,
        payload : subjectList.data
    }
}

export function studentLoadQuizListFailure(error){
    return{
        type : STUDENT_LOAD_QUIZ_LIST_FAILURE,
        payload : error
    }
}
export function resetStudentLoadQuizList(){
    return{
        type : RESET_STUDENT_LOAD_QUIZ_LIST
    }
}

export function studentLoadQuiz(userToken, subDomain, quizId){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/userAPI/quiz/student/fetchQuiz?token=${userToken}&subDomain=${subDomain}&quizId=${quizId}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : STUDENT_LOAD_QUIZ,
        payload : request
    }
}

export function studentLoadQuizSuccess(quiz){
    let nameList = quiz.data.questionList.map((question) => {
        if(!question.bundled){
            return "answer"+question.id
        }
    })
    return{
        type : STUDENT_LOAD_QUIZ_SUCCESS,
        payload : quiz.data,
        nameList : nameList
    }
}

export function studentLoadQuizFailure(error){
    return{
        type : STUDENT_LOAD_QUIZ_FAILURE,
        payload : error
    }
}

export function resetStudentLoadQuiz(){
    return{
        type : RESET_STUDENT_LOAD_QUIZ
    }
}

export function studentLoadQuizConfirm(userToken, quizId){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/userAPI/quiz/student/fetchQuizConfirm?token=${userToken}&quizId=${quizId}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : STUDENT_LOAD_QUIZ_CONFIRM,
        payload : request
    }
}

export function studentLoadQuizConfirmSuccess(quizConfirm){
    return{
        type : STUDENT_LOAD_QUIZ_CONFIRM_SUCCESS,
        payload : quizConfirm.data
    }
}

export function studentLoadQuizConfirmFailure(error){
    return{
        type : STUDENT_LOAD_QUIZ_CONFIRM_FAILURE,
        payload : error
    }
}

export function resetStudentLoadQuizConfirm(){
    return{
        type : RESET_STUDENT_LOAD_QUIZ_CONFIRM
    }
}

export function studentCreateAnswerList(userToken, answerForm){
    const request=axios({
        method : 'post',
        url : `${ROOT_URL}/userAPI/quiz/student/createAnswer?token=${userToken}`,
        data : answerForm,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : STUDENT_CREATE_ANSWER_LIST,
        payload : request
    }
}

export function studentCreateAnswerListSuccess(message){
    return{
        type : STUDENT_CREATE_ANSWER_LIST_SUCCESS,
        payload : message.data
    }
}

export function studentCreateAnswerListFailure(error){
    return{
        type : STUDENT_CREATE_ANSWER_LIST_FAILURE,
        payload : error
    }
}

export function resetStudentCreateAnswerList(){
    return{
        type : RESET_STUDENT_CREATE_ANSWER_LIST
    }
}

export function studentLoadScoreTitle(userToken, subDomain){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/userAPI/quiz/student/quizResultTitle?token=${userToken}&subDomain=${subDomain}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : STUDENT_LOAD_SCORE_TITLE,
        payload : request
    }
}

export function studentLoadScoreTitleSuccess(scoreTitle){
    return{
        type : STUDENT_LOAD_SCORE_TITLE_SUCCESS,
        payload : scoreTitle.data
    }
}

export function studentLoadScoreTitleFailure(error){
    return{
        type : STUDENT_LOAD_SCORE_TITLE_FAILURE,
        payload : error
    }
}

export function resetStudentLoadScoreTitle(){
    return{
        type : RESET_STUDENT_LOAD_SCORE_TITLE
    }
}

export function studentLoadScoreWithNickName(userToken, subDomain, quizId){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/userAPI/quiz/student/quizResultWithNickName?token=${userToken}&subDomain=${subDomain}&quizId=${quizId}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : STUDENT_LOAD_SCORE_WITH_NICKNAME,
        payload : request
    }
}

export function studentLoadScoreWithNickNameSuccess(scoreWithNickName){
    return{
        type : STUDENT_LOAD_SCORE_WITH_NICKNAME_SUCCESS,
        payload : scoreWithNickName.data
    }
}

export function studentLoadScoreWithNickNameFailure(error){
    return{
        type : STUDENT_LOAD_SCORE_WITH_NICKNAME_FAILURE,
        payload : error
    }
}

export function resetStudentLoadScoreWithNickName(){
    return{
        type : RESET_STUDENT_LOAD_SCORE_WITH_NICKNAME
    }
}
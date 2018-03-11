import axios from 'axios';
const ROOT_URL='http://localhost:8080/pjQuizBack';

export const PROFESSOR_CREATE_QUIZ = 'PROFESSOR_CREATE_QUIZ';
export const PROFESSOR_CREATE_QUIZ_SUCCESS = 'PROFESSOR_CREATE_QUIZ_SUCCESS';
export const PROFESSOR_CREATE_QUIZ_FAILURE = 'PROFESSOR_CREATE_QUIZ_FAILURE';
export const RESET_PROFESSOR_CREATE_QUIZ = 'RESET_PROFESSOR_CREATE_QUIZ';

export const PROFESSOR_LOAD_QUIZ_LIST = 'PROFESSOR_LOAD_QUIZ_LIST';
export const PROFESSOR_LOAD_QUIZ_LIST_SUCCESS = 'PROFESSOR_LOAD_QUIZ_LIST_SUCCESS';
export const PROFESSOR_LOAD_QUIZ_LIST_FAILURE = 'PROFESSOR_LOAD_QUIZ_LIST_FAILURE';
export const RESET_PROFESSOR_LOAD_QUIZ_LIST = 'RESET_PROFESSOR_LOAD_QUIZ_LIST';

export const PROFESSOR_LOAD_STUDENT_WITH_SCORE = 'PROFESSOR_LOAD_STUDENT_WITH_SCORE';
export const PROFESSOR_LOAD_STUDENT_WITH_SCORE_SUCCESS = 'PROFESSOR_LOAD_STUDENT_WITH_SCORE_SUCCESS';
export const PROFESSOR_LOAD_STUDENT_WITH_SCORE_FAILURE = 'PROFESSOR_LOAD_STUDENT_WITH_SCORE_FAILURE';
export const RESET_PROFESSOR_LOAD_STUDENT_WITH_SCORE = 'RESET_PROFESSOR_LOAD_STUDENT_WITH_SCORE';

export const PROFESSOR_LOAD_ANSWER_WITH_STUDENT = 'PROFESSOR_LOAD_ANSWER_WITH_STUDENT';
export const PROFESSOR_LOAD_ANSWER_WITH_STUDENT_SUCCESS = 'PROFESSOR_LOAD_ANSWER_WITH_STUDENT_SUCCESS';
export const PROFESSOR_LOAD_ANSWER_WITH_STUDENT_FAILURE = 'PROFESSOR_LOAD_ANSWER_WITH_STUDENT_FAILURE';
export const RESET_PROFESSOR_LOAD_ANSWER_WITH_STUDENT='RESET_PROFESSOR_LOAD_ANSWER_WITH_STUDENT';

export const PROFESSOR_UPDATE_SCORE = 'PROFESSOR_UPDATE_SCORE';
export const PROFESSOR_UPDATE_SCORE_SUCCESS = 'PROFESSOR_UPDATE_SCORE_SUCCESS';
export const PROFESSOR_UPDATE_SCORE_FAILURE = 'PROFESSOR_UPDATE_SCORE_FAILURE';
export const RESET_PROFESSOR_UPDATE_SCORE = 'RESET_PROFESSOR_UPDATE_SCORE';

export function professorCreateQuiz(userToken, subDomain, quizForm){
    const request=axios({
        method : 'post',
        url : `${ROOT_URL}/userAPI/quiz/professor/quizCreate?token=${userToken}&subDomain=${subDomain}`,
        data : quizForm,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : PROFESSOR_CREATE_QUIZ,
        payload : request
    }
}

export function professorCreateQuizSuccess(message){
    return{
        type : PROFESSOR_CREATE_QUIZ_SUCCESS,
        payload : message.data
    }
}

export function professorCreateQuizFailure(error){
    return{
        type : PROFESSOR_CREATE_QUIZ_FAILURE,
        payload : error
    }
}

export function resetProfessorCreateQuiz(){
    return{
        type : RESET_PROFESSOR_CREATE_QUIZ
    }
}

export function professorLoadQuizList(userToken, subDomain){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/userAPI/quiz/professor/quizList?token=${userToken}&subDomain=${subDomain}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : PROFESSOR_LOAD_QUIZ_LIST,
        payload : request
    }
}

export function professorLoadQuizListSuccess(quizList){
    return{
        type : PROFESSOR_LOAD_QUIZ_LIST_SUCCESS,
        payload : quizList.data
    }
}

export function professorLoadQuizListFailure(error){
    return{
        type : PROFESSOR_LOAD_QUIZ_LIST_FAILURE,
        payload : error
    }
}

export function resetProfessorLoadQuizList(){
    return{
        type : RESET_PROFESSOR_LOAD_QUIZ_LIST
    }
}

export function professorLoadStudentWithScore(userToken, quizId){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/userAPI/quiz/professor/scoringTable?token=${userToken}&quizId=${quizId}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : PROFESSOR_LOAD_STUDENT_WITH_SCORE,
        payload : request
    }
}

export function professorLoadStudentWithScoreSuccess(scoringTable){
    return{
        type : PROFESSOR_LOAD_STUDENT_WITH_SCORE_SUCCESS,
        payload : scoringTable.data
    }
}

export function professorLoadStudentWithScoreFailure(error){
    return{
        type : PROFESSOR_LOAD_STUDENT_WITH_SCORE_FAILURE,
        payload : error
    }
}

export function resetProfessorLoadStudentWithScore(){
    return{
        type : RESET_PROFESSOR_LOAD_STUDENT_WITH_SCORE
    }
}

export function professorLoadAnswerWithStudent(userToken, quizId, userId){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/userAPI/quiz/professor/answerWithStudent?token=${userToken}&quizId=${quizId}&userId=${userId}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : PROFESSOR_LOAD_ANSWER_WITH_STUDENT,
        payload : request
    }
}

export function professorLoadAnswerWithStudentSuccess(answerObject){
    let tagWithScore = answerObject.data.answerWithStudent.map((answer) => {
        if(!answer.bundled){
            if(answer.tagName){
                return{
                    tagName : answer.tagName,
                    limitScore : answer.fullScore,
                    answered : true
                }
            }else{
                return{
                    answered : false
                }
            }
        }else{
            return{
                bundled : true
            }
        }
    });

    return{
        type : PROFESSOR_LOAD_ANSWER_WITH_STUDENT_SUCCESS,
        payload : answerObject.data,
        tagWithScore : tagWithScore
    }
}

export function professorLoadAnswerWithStudentFailure(error){
    return{
        type : PROFESSOR_LOAD_ANSWER_WITH_STUDENT_FAILURE,
        payload : error
    }
}

export function resetProfessorLoadAnswerWithStudent(){
    return{
        type : RESET_PROFESSOR_LOAD_ANSWER_WITH_STUDENT
    }
}

export function professorUpdateScore(userToken, loginId, scoringForm){
    const request=axios({
        method : 'post',
        url : `${ROOT_URL}/userAPI/quiz/professor/scoringQuiz?token=${userToken}&studentNumber=${loginId}`,
        data : scoringForm,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : PROFESSOR_UPDATE_SCORE,
        payload : request
    }
}

export function professorUpdateScoreSuccess(message){
    return{
        type : PROFESSOR_UPDATE_SCORE_SUCCESS,
        payload : message.data
    }
}

export function professorUpdateScoreFailure(error){
    return{
        type : PROFESSOR_UPDATE_SCORE_FAILURE,
        payload : error
    }
}

export function resetProfessorUpdateScore(){
    return{
        type : RESET_PROFESSOR_UPDATE_SCORE
    }
}
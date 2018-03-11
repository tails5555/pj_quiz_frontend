import {connect} from 'react-redux';
import {QuizAnswerView} from "../components/professor_subject";
import {
    professorLoadStudentWithScore, professorLoadStudentWithScoreSuccess, professorLoadStudentWithScoreFailure, resetProfessorLoadStudentWithScore,
    professorLoadAnswerWithStudent, professorLoadAnswerWithStudentSuccess, professorLoadAnswerWithStudentFailure, resetProfessorLoadAnswerWithStudent,
    resetProfessorUpdateScore
} from "../actions/professor_quiz_action";

function mapStateToProps(state){
    return{
        scoringTable : state.quiz.scoringTable,
        selectSubject : state.subject.selectSubject,
        answerWithStudent : state.quiz.answerWithStudent,
        updateScore : state.quiz.updateScore
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        fetchStudentWithScore : (quizId) => {
            let token = sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            dispatch(professorLoadStudentWithScore(token, quizId)).then((response) => {
                !response.error ? dispatch(professorLoadStudentWithScoreSuccess(response.payload)) : dispatch(professorLoadStudentWithScoreFailure(response.payload.data));
            });
        },
        resetFetchStudentWithScore : () => {
            dispatch(resetProfessorLoadStudentWithScore());
        },
        fetchAnswerWithStudent : (userId, quizId) => {
            let token = sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            dispatch(professorLoadAnswerWithStudent(token, quizId, userId)).then((response) => {
                !response.error ? dispatch(professorLoadAnswerWithStudentSuccess(response.payload)) : dispatch(professorLoadAnswerWithStudentFailure(response.payload.data));
            });
        },
        resetFetchAnswerWithStudent : () => {
            dispatch(resetProfessorLoadAnswerWithStudent());
        },
        resetUpdateScore : () => {
            dispatch(resetProfessorUpdateScore());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(QuizAnswerView);

import {connect} from 'react-redux';
import {SubjectQuizConfirm} from "../components/student_subject";
import {
    studentLoadQuizConfirm, studentLoadQuizConfirmSuccess, studentLoadQuizConfirmFailure,
    resetStudentLoadQuizConfirm
} from "../actions/student_quiz_action";

function mapStateToProps(state){
    return{
        answerWithStudent : state.quiz.answerWithStudent
    }
}
const mapDispatchToProps  = (dispatch) => {
    return{
        fetchQuizConfirm : (quizId) => {
            let token=sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            let subDomain=sessionStorage.getItem('subjectDomain');
            if (!subDomain || subDomain === '') return;
            dispatch(studentLoadQuizConfirm(token, quizId)).then((response) => {
                !response.error ? dispatch(studentLoadQuizConfirmSuccess(response.payload)) : dispatch(studentLoadQuizConfirmFailure(response.payload.data));
            });
        },
        resetFetchQuizConfirm : () => {
            dispatch(resetStudentLoadQuizConfirm());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SubjectQuizConfirm);


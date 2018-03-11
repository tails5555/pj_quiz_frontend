import {connect} from 'react-redux';
import {ScoreConfirmTotal} from "../components/student_subject";
import {
    studentLoadScoreWithNickName, studentLoadScoreWithNickNameSuccess, studentLoadScoreWithNickNameFailure,
    resetStudentLoadScoreWithNickName
} from "../actions/student_quiz_action";

function mapStateToProps(state){
    return{
        scoreWithNickName : state.quiz.scoreWithNickName
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        fetchScoreWithNickName : (quizId) => {
            let token=sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            let subDomain=sessionStorage.getItem('subjectDomain');
            if (!subDomain || subDomain === '') return;
            dispatch(studentLoadScoreWithNickName(token, subDomain, quizId)).then((response) => {
                !response.error ? dispatch(studentLoadScoreWithNickNameSuccess(response.payload)) : dispatch(studentLoadScoreWithNickNameFailure(response.payload.data))
            });
        },
        resetFetchScoreWithNickName : () => {
            dispatch(resetStudentLoadScoreWithNickName());
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreConfirmTotal);
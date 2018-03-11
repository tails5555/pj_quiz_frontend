import {connect} from 'react-redux';
import {studentLoadScoreTitle, studentLoadScoreTitleSuccess, studentLoadScoreTitleFailure, resetStudentLoadScoreTitle} from "../actions/student_quiz_action";
import {ScoreConfirmList} from "../components/student_subject";
function mapStateToProps(state){
    return{
        selectSubject : state.subject.selectSubject,
        scoreTitle : state.quiz.scoreTitle
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchScoreTitle : () => {
            let token=sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            let subDomain=sessionStorage.getItem('subjectDomain');
            if (!subDomain || subDomain === '') return;
            dispatch(studentLoadScoreTitle(token, subDomain)).then((response) => {
                !response.error ? dispatch(studentLoadScoreTitleSuccess(response.payload)) : dispatch(studentLoadScoreTitleFailure(response.payload.data))
            });
        },
        resetFetchScoreTitle : () => {
            dispatch(resetStudentLoadScoreTitle());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreConfirmList);
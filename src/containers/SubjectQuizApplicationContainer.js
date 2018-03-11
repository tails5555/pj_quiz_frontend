import {connect} from 'react-redux';
import {SubjectQuizApplication} from "../components/student_subject";
import {
    studentLoadQuiz, studentLoadQuizSuccess, studentLoadQuizFailure, resetStudentLoadQuiz, resetStudentCreateAnswerList
} from "../actions/student_quiz_action";

function mapStateToProps(state){
    return{
        selectQuiz : state.quiz.selectQuiz,
        selectSubject : state.subject.selectSubject,
        createAnswer : state.quiz.createAnswer
    }
}

const mapDispatchToProps = (dispatch, stateProps) => {
    return{
        fetchQuiz : (id) => {
            let token=sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            let subDomain=sessionStorage.getItem('subjectDomain');
            if (!subDomain || subDomain === '') return;
            dispatch(studentLoadQuiz(token, subDomain, id)).then((response) => {
                !response.error ? dispatch(studentLoadQuizSuccess(response.payload)) : dispatch(studentLoadQuizFailure(response.payload.data));
            });
        },
        resetFetchQuiz : () => {
            dispatch(resetStudentLoadQuiz());
        },
        resetCreateAnswerList : () => {
            dispatch(resetStudentCreateAnswerList());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectQuizApplication);
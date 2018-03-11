import {connect} from 'react-redux';
import {studentLoadQuizList, studentLoadQuizListSuccess, studentLoadQuizListFailure, resetStudentLoadQuizList} from "../actions/student_quiz_action";
import {StudentQuizList} from "../components/student_subject";
function mapStateToProps(state){
    return{
        loadQuizList : state.quiz.loadQuizList,
        selectSubject : state.subject.selectSubject
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchQuizList : () => {
            let token=sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            let subDomain=sessionStorage.getItem('subjectDomain');
            if (!subDomain || subDomain === '') return;
            dispatch(studentLoadQuizList(token, subDomain)).then((response) => {
                !response.error ? dispatch(studentLoadQuizListSuccess(response.payload)) : dispatch(studentLoadQuizListFailure(response.payload.data));
            });
        },

        resetFetchQuizList : () => {
            dispatch(resetStudentLoadQuizList());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentQuizList);
import {connect} from 'react-redux';
import {
    professorLoadQuizList, professorLoadQuizListFailure, professorLoadQuizListSuccess,
    resetProfessorLoadQuizList
} from "../actions/professor_quiz_action";
import {QuizUpdateList} from "../components/professor_subject";
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
            dispatch(professorLoadQuizList(token, subDomain)).then((response) => {
                !response.error ? dispatch(professorLoadQuizListSuccess(response.payload)) : dispatch(professorLoadQuizListFailure(response.payload.data));
            });
        },

        resetFetchQuizList : () => {
            dispatch(resetProfessorLoadQuizList());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizUpdateList);
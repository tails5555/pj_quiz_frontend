import {connect} from 'react-redux';
import {resetProfessorCreateQuiz} from "../actions/professor_quiz_action";
import {QuizCreate} from "../components/professor_subject";
function mapStateToProps(state){
    return{
        createQuiz : state.quiz.createQuiz
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        resetCreateQuiz : () => {
            dispatch(resetProfessorCreateQuiz());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizCreate);
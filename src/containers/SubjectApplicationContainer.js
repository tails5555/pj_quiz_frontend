import {SubjectApplication} from "../components/student";
import {
    studentLoadApplicationSubject, studentLoadApplicationSubjectSuccess, studentLoadApplicationSubjectFailure, resetStudentLoadApplicationSubject,
    studentApplicateSubject, studentApplicateSubjectSuccess, studentApplicateSubjectFailure, resetStudentApplicateSubject
} from "../actions/student_subject_action";
import {connect} from 'react-redux';
function mapStateToProps(state, ownProps){
    return{
        subjectList : state.subjects.subjectList,
        subjectApplication : state.subjects.subjectApplication
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        fetchApplicationSubject : () => {
            let token=sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            dispatch(studentLoadApplicationSubject(token)).then((response) => {
                !response.error ? dispatch(studentLoadApplicationSubjectSuccess(response.payload)) : dispatch(studentLoadApplicationSubjectFailure(response.payload.data));
            });
        },
        resetFetchApplicationSubject : () => {
            dispatch(resetStudentLoadApplicationSubject());
        },
        serverToApplicationSubject : (id) => {
            let token=sessionStorage.getItem('jwtToken');
            if(!token || token === '') return;
            dispatch(studentApplicateSubject(token, id)).then((response) => {
                !response.error ? dispatch(studentApplicateSubjectSuccess(response.payload)) : dispatch(studentApplicateSubjectFailure(response.payload.data));
            });
        },
        resetServerToApplicationSubject : () => {
            dispatch(resetStudentApplicateSubject());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SubjectApplication);
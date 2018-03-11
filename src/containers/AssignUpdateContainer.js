import {connect} from 'react-redux';
import {AssignUpdate} from "../components/professor_subject";
import {professorLoadAssignStudent, professorLoadAssignStudentSuccess, professorLoadAssignStudentFailure, resetProfessorLoadAssignStudent,
         professorDeleteAssignStudent, professorDeleteAssignStudentSuccess, professorDeleteAssignStudentFailure, resetProfessorDeleteAssignStudent} from "../actions/professor_subject_action";
function mapStateToProps(state){
    return{
        selectSubject : state.subject.selectSubject,
        assignStudent : state.subject.assignStudent,
        deleteStudent : state.subject.deleteStudent
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchAssignStudent : () => {
            let token = sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            let subDomain=sessionStorage.getItem('subjectDomain');
            if (!subDomain || subDomain === '') return;
            dispatch(professorLoadAssignStudent(token, subDomain)).then((response) => {
                !response.error ? dispatch(professorLoadAssignStudentSuccess(response.payload)) : dispatch(professorLoadAssignStudentFailure(response.payload.data));
            });
        },
        resetFetchAssignStudent : () => {
            dispatch(resetProfessorLoadAssignStudent());
        },
        deleteAssignStudent : (userId) => {
            let token = sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            let subDomain=sessionStorage.getItem('subjectDomain');
            if (!subDomain || subDomain === '') return;
            dispatch(professorDeleteAssignStudent(token, subDomain, userId)).then((response) => {
                !response.error ? dispatch(professorDeleteAssignStudentSuccess(response.payload)) : dispatch(professorDeleteAssignStudentFailure(response.payload.data));
            });
        },
        resetDeleteAssignStudent : () => {
            dispatch(resetProfessorDeleteAssignStudent());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignUpdate);
import {professorLoadAssignSubject, professorLoadAssignSubjectSuccess, professorLoadAssignSubjectFailure, resetProfessorLoadAssignSubject} from "../actions/professor_subject_action";
import {connect} from 'react-redux';
import {SubjectAssignList} from "../components/professor";
import {
    commonSelectSubject, commonSelectSubjectFailure,
    commonSelectSubjectSuccess
} from "../actions/common_subject_action";
function mapStateToProps(state){
    return{
        subjectList : state.subjects.subjectList
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchAssignSubject : () => {
            let token=sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            dispatch(professorLoadAssignSubject(token)).then((response) => {
                !response.error ? dispatch(professorLoadAssignSubjectSuccess(response.payload)) : dispatch(professorLoadAssignSubjectFailure(response.payload.data));
            });
        },
        resetFetchAssignSubject : () => {
            dispatch(resetProfessorLoadAssignSubject());
        },
        fetchSelectSubject : (subDomain) => {
            let token=sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            dispatch(commonSelectSubject(token, subDomain)).then((response) => {
                !response.error ? dispatch(commonSelectSubjectSuccess(response.payload)) : dispatch(commonSelectSubjectFailure(response.payload.data));
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectAssignList);
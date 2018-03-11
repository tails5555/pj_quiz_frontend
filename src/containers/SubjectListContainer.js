import {SubjectList} from "../components/student";
import {studentLoadAssignSubject, studentLoadAssignSubjectSuccess, studentLoadAssignSubjectFailure, resetStudentLoadAssignSubject} from "../actions/student_subject_action";
import {commonSelectSubject, commonSelectSubjectSuccess, commonSelectSubjectFailure} from "../actions/common_subject_action";
import {connect} from 'react-redux';
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
            dispatch(studentLoadAssignSubject(token)).then((response) => {
                !response.error ? dispatch(studentLoadAssignSubjectSuccess(response.payload)) : dispatch(studentLoadAssignSubjectFailure(response.payload.data));
            });
        },
        resetFetchAssignSubject : () => {
            dispatch(resetStudentLoadAssignSubject());
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
export default connect(mapStateToProps, mapDispatchToProps)(SubjectList);
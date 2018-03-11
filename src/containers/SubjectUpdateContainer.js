import {connect} from 'react-redux';
import {SubjectInfoUpdate} from "../components/professor_subject";
import {resetProfessorUpdateSubjectContext} from "../actions/professor_subject_action";
import {
    commonSelectSubject, commonSelectSubjectFailure,
    commonSelectSubjectSuccess
} from "../actions/common_subject_action";
function mapStateToProps(state){
    let subjectUpdateForm = {
        context : state.subject.selectSubject.subject.context
    }
    return{
        initialValues : subjectUpdateForm,
        selectSubject : state.subject.selectSubject,
        updateSubject : state.subject.updateSubject,
        subjectUpdateForm : state.form.subjectUpdateForm
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        resetUpdateSubjectContext : () => {
            dispatch(resetProfessorUpdateSubjectContext());
        },
        loadSubjectFromServer : () => {
            let token = sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            let subDomain=sessionStorage.getItem('subjectDomain');
            if (!subDomain || subDomain === '') return;
            dispatch(commonSelectSubject(token, subDomain)).then((response) => {
                !response.error ? dispatch(commonSelectSubjectSuccess(response.payload)) : dispatch(commonSelectSubjectFailure(response.payload.data));
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectInfoUpdate);
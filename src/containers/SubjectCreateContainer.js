import {SubjectCreate} from "../components/professor";
import {connect} from 'react-redux';
import {confirmSubDomainUnique, confirmSubDomainUniqueComplete, confirmSubDomainUniqueException, resetProfessorCreateSubject} from "../actions/professor_subject_action";
function mapStateToProps(state, ownProps){
    return{
        newSubject : state.subject.newSubject,
        subjectForm : state.form.subjectForm
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        confirmSubDomain : (subDomain) => {
            let token=sessionStorage.getItem("jwtToken");
            if(!token || token === '') return;
            dispatch(confirmSubDomainUnique(token, subDomain)).then((response) => {
                !response.error ? dispatch(confirmSubDomainUniqueComplete(response.payload)) : dispatch(confirmSubDomainUniqueException(response.payload.data));
            })
        },
        resetSubjectForm : () => {
            dispatch(resetProfessorCreateSubject());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectCreate);
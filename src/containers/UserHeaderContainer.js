import {logoutUser} from '../actions/common_action';
import {UserHeader} from '../components/common';
import {resetCommonSelectSubject} from "../actions/common_subject_action";
import {connect} from 'react-redux';
function mapStateToProps(state){
    return{
        currentUser : state.user.user,
        selectSubject : state.subject.selectSubject
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout : () => {
            sessionStorage.removeItem('subjectDomain');
            dispatch(resetCommonSelectSubject());
            sessionStorage.removeItem('jwtToken');
            dispatch(logoutUser());
        },
        resetSelectSubject : () => {
            sessionStorage.removeItem('subjectDomain');
            dispatch(resetCommonSelectSubject());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
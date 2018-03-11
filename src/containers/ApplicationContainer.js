import ApplicationRouter from '../router/ApplicationRouter';
import {connect} from 'react-redux';
import {userFromServer, userFromServerSuccess, userFromServerFailure, resetUserFromServer} from "../actions/common_action";
import {
    commonSelectSubject, commonSelectSubjectFailure,
    commonSelectSubjectSuccess, resetCommonSelectSubject
} from "../actions/common_subject_action";
const mapDispatchToProps = (dispatch) => {
    return {
        loadUserFromServer: () => {
            let token = sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            dispatch(userFromServer(token))
                .then((response) => {
                    if (!response.error) {
                        sessionStorage.setItem('jwtToken', response.payload.data);
                        dispatch(userFromServerSuccess(response.payload));
                    } else {
                        sessionStorage.removeItem('jwtToken');
                        dispatch(userFromServerFailure(response.payload));
                    }
                }
            );
        },
        loadSubjectFromServer : () => {
            let token = sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            let subDomain=sessionStorage.getItem('subjectDomain');
            if (!subDomain || subDomain === '') return;
            dispatch(commonSelectSubject(token, subDomain)).then((response) => {
                !response.error ? dispatch(commonSelectSubjectSuccess(response.payload)) : dispatch(commonSelectSubjectFailure(response.payload.data));
            });
        },
        resetUserFromServer : () => {
            sessionStorage.removeItem('jwtToken');
            dispatch(resetUserFromServer());
        }
    }
}
function mapStateToProps(state){
    return{
        user : state.user,
        selectSubject : state.subject.selectSubject
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationRouter);
import {connect} from 'react-redux';
import {commonLoadServiceBBSTitle, commonLoadServiceBBSTitleSuccess, commonLoadServiceBBSTitleFailure, resetCommonLoadServiceBBSTitle} from "../actions/common_serviceBBS_action";
import {ServiceBBSTitle} from "../components/common";
function mapStateToProps(state){
    return{
        serviceBBSTitle : state.serviceBBS.serviceBBSTitle
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        fetchServiceBBSTitle : () => {
            let token=sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            dispatch(commonLoadServiceBBSTitle(token)).then((response) => {
                !response.error ? dispatch(commonLoadServiceBBSTitleSuccess(response.payload)) : dispatch(commonLoadServiceBBSTitleFailure(response.payload.data))
            })
        },
        resetFetchServiceBBSTitle : () => {
            dispatch(resetCommonLoadServiceBBSTitle())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceBBSTitle);
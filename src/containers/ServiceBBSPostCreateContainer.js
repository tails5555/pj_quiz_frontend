import {connect} from 'react-redux';
import {commonLoadServiceBBSTitle, commonLoadServiceBBSTitleSuccess, commonLoadServiceBBSTitleFailure, resetCommonLoadServiceBBSTitle, resetCommonCreateServiceBBSPost} from "../actions/common_serviceBBS_action";
import {ServiceBBSPostCreate} from "../components/common";
function mapStateToProps(state){
    return{
        serviceBBSForm : state.form.serviceBBSForm,
        serviceBBSTitle : state.serviceBBS.serviceBBSTitle,
        createPost : state.serviceBBS.createPost
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchServiceBBSTitle : () => {
            let token=sessionStorage.getItem("jwtToken");
            if (!token || token === '') return;
            dispatch(commonLoadServiceBBSTitle(token)).then((response) => {
                !response.error ? dispatch(commonLoadServiceBBSTitleSuccess(response.payload)) : dispatch(commonLoadServiceBBSTitleFailure(response.payload.data))
            })
        },
        resetFetchServiceBBSTitle : () => {
            dispatch(resetCommonLoadServiceBBSTitle());
        },
        resetCreateServiceBBSForm : () => {
            dispatch(resetCommonCreateServiceBBSPost());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceBBSPostCreate);
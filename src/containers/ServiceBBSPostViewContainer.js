import {connect} from 'react-redux';
import {commonUpdateServiceBBSPost, commonUpdateServiceBBSPostComplete, commonUpdateServiceBBSPostException,
         commonLoadServiceBBSPost, commonLoadServiceBBSPostSuccess, commonLoadServiceBBSPostFailure, resetCommonLoadServiceBBSPost,
         commonDeleteServiceBBSPost, commonDeleteServiceBBSPostSuccess, commonDeleteServiceBBSPostFailure, resetCommonDeleteServiceBBSPost} from "../actions/common_serviceBBS_action";
import {ServiceBBSPostView} from '../components/common';

function mapStateToProps(state){
    return{
        user : state.user,
        selectPost : state.serviceBBS.selectPost,
        deletePost : state.serviceBBS.deletePost
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateViews : (postId) => {
            let token=sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            dispatch(commonUpdateServiceBBSPost(token, postId)).then((response) => {
                !response.error ? dispatch(commonUpdateServiceBBSPostComplete()) : dispatch(commonUpdateServiceBBSPostException(response.payload.data));
            })
        },
        fetchServiceBBSPost : (postId) => {
            let token=sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            dispatch(commonLoadServiceBBSPost(token, postId)).then((response) => {
                !response.error ? dispatch(commonLoadServiceBBSPostSuccess(response.payload)) : dispatch(commonLoadServiceBBSPostFailure(response.payload.data));
            });
        },
        deleteServiceBBSPost : (postId) => {
            let token=sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            dispatch(commonDeleteServiceBBSPost(token, postId)).then((response) => {
                !response.error ? dispatch(commonDeleteServiceBBSPostSuccess(response.payload)) : dispatch(commonDeleteServiceBBSPostFailure(response.payload.data));
            });
        },
        resetFetchServiceBBSPost : () => {
            dispatch(resetCommonLoadServiceBBSPost());
        },
        resetDeleteServiceBBSPost : () => {
            dispatch(resetCommonDeleteServiceBBSPost());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ServiceBBSPostView);
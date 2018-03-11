import {connect} from 'react-redux';
import {ServiceBBSPostComment} from '../components/common';
import {commonLoadServiceBBSComment, commonLoadServiceBBSCommentSuccess, commonLoadServiceBBSCommentFailure,
         commonDeleteServiceBBSComment, commonDeleteServiceBBSCommentSuccess, commonDeleteServiceBBSCommentFailure,
         resetCommonLoadServiceBBSComment, resetCommonCreateServiceBBSComment, resetCommonDeleteServiceBBSComment} from "../actions/common_serviceBBS_action";
function mapStateToProps(state){
    let postId=0;
    if(state.serviceBBS.selectPost.post){
        postId=state.serviceBBS.selectPost.post.id;
    }
    return{
        user : state.user,
        serviceBBSCommentForm : state.form.serviceBBSCommentForm,
        postComment : state.serviceBBS.postComment,
        commentCreate : state.serviceBBS.commentCreate,
        postId : postId,
        deletePost : state.serviceBBS.deletePost,
        commentDelete : state.serviceBBS.commentDelete
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchServiceBBSComment : (postId) => {
            let token=sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            dispatch(commonLoadServiceBBSComment(token, postId)).then((response) => {
                !response.error ? dispatch(commonLoadServiceBBSCommentSuccess(response.payload)) : dispatch(commonLoadServiceBBSCommentFailure(response.payload.data));
            })
        },
        deleteServiceBBSComment : (commentId) => {
            let token=sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            dispatch(commonDeleteServiceBBSComment(token, commentId)).then((response) => {
                !response.error ? dispatch(commonDeleteServiceBBSCommentSuccess(response.payload)) : dispatch(commonDeleteServiceBBSCommentFailure(response.payload.data));
            })
        },
        resetFetchServiceBBSComment : () => {
            dispatch(resetCommonLoadServiceBBSComment());
        },
        resetCreateServiceBBSComment : () => {
            dispatch(resetCommonCreateServiceBBSComment());
        },
        resetDeleteServiceBBSComment : () => {
            dispatch(resetCommonDeleteServiceBBSComment());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceBBSPostComment);
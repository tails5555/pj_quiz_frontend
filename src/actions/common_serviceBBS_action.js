import axios from 'axios';

const ROOT_URL='http://localhost:8080/pjQuizBack';

export const COMMON_LOAD_SERVICEBBS_TITLE='COMMON_LOAD_SERVICEBBS_TITLE';
export const COMMON_LOAD_SERVICEBBS_TITLE_SUCCESS='COMMON_LOAD_SERVICEBBS_TITLE_SUCCESS';
export const COMMON_LOAD_SERVICEBBS_TITLE_FAILURE='COMMON_LOAD_SERVICEBBS_TITLE_FAILURE';
export const RESET_COMMON_LOAD_SERVICEBBS_TITLE='RESET_COMMON_LOAD_SERVICEBBS_TITLE';

export const COMMON_LOAD_SERVICEBBS_POST_TITLE='COMMON_LOAD_SERVICEBBS_POST_TITLE';
export const COMMON_LOAD_SERVICEBBS_POST_TITLE_SUCCESS='COMMON_LOAD_SERVICEBBS_POST_TITLE_SUCCESS';
export const COMMON_LOAD_SERVICEBBS_POST_TITLE_FAILURE='COMMON_LOAD_SERVICEBBS_POST_TITLE_FAILURE';
export const RESET_COMMON_LOAD_SERVICEBBS_POST_TITLE='RESET_COMMON_LOAD_SERVICEBBS_POST_TITLE';

export const COMMON_LOAD_SERVICEBBS_POST_LIST='COMMON_LOAD_SERVICEBBS_POST_LIST';
export const COMMON_LOAD_SERVICEBBS_POST_LIST_SUCCESS='COMMON_LOAD_SERVICEBBS_POST_LIST_SUCCESS';
export const COMMON_LOAD_SERVICEBBS_POST_LIST_FAILURE='COMMON_LOAD_SERVICEBBS_POST_LIST_FAILURE';
export const RESET_COMMON_LOAD_SERVICEBBS_POST_LIST='RESET_COMMON_LOAD_SERVICEBBS_POST_LIST';

export const COMMON_CREATE_SERVICEBBS_POST='COMMON_CREATE_SERVICEBBS_POST';
export const COMMON_CREATE_SERVICEBBS_POST_SUCCESS='COMMON_CREATE_SERVICEBBS_POST_SUCCESS';
export const COMMON_CREATE_SERVICEBBS_POST_FAILURE='COMMON_CREATE_SERVICEBBS_POST_FAILURE';
export const RESET_COMMON_CREATE_SERVICEBBS_POST='RESET_COMMON_CREATE_SERVICEBBS_POST';

export const COMMON_DELETE_SERVICEBBS_POST='COMMON_DELETE_SERVICEBBS_POST';
export const COMMON_DELETE_SERVICEBBS_POST_SUCCESS='COMMON_DELETE_SERVICEBBS_SUCCESS';
export const COMMON_DELETE_SERVICEBBS_POST_FAILURE='COMMON_DELETE_SERVICEBBS_FAILURE';
export const RESET_COMMON_DELETE_SERVICEBBS_POST='RESET_COMMON_DELETE_SERVICEBBS_POST';

export const COMMON_UPDATE_SERVICEBBS_VIEWS='COMMON_UPDATE_SERVICEBBS_VIEWS';
export const COMMON_UPDATE_SERVICEBBS_VIEWS_COMPLETE='COMMON_UPDATE_SERVICEBBS_VIEWS_COMPLETE';
export const COMMON_UPDATE_SERVICEBBS_VIEWS_EXCEPTION='COMMON_UPDATE_SERVICEBBS_VIEWS_EXCEPTION';

export const COMMON_LOAD_SERVICEBBS_POST='COMMON_LOAD_SERVICEBBS_POST';
export const COMMON_LOAD_SERVICEBBS_POST_SUCCESS='COMMON_LOAD_SERVICEBBS_POST_SUCCESS';
export const COMMON_LOAD_SERVICEBBS_POST_FAILURE='COMMON_LOAD_SERVICEBBS_POST_FAILURE';
export const RESET_COMMON_LOAD_SERVICEBBS_POST='RESET_COMMON_LOAD_SERVICEBBS_POST';

export const COMMON_LOAD_SERVICEBBS_COMMENT='COMMON_LOAD_SERVICEBBS_COMMENT';
export const COMMON_LOAD_SERVICEBBS_COMMENT_SUCCESS='COMMON_LOAD_SERVICEBBS_COMMENT_SUCCESS';
export const COMMON_LOAD_SERVICEBBS_COMMENT_FAILURE='COMMON_LOAD_SERVICEBBS_COMMENT_FAILURE';
export const RESET_COMMON_LOAD_SERVICEBBS_COMMENT='RESET_COMMON_LOAD_SERVICEBBS_COMMENT';

export const COMMON_CREATE_SERVICEBBS_COMMENT='COMMON_CREATE_SERVICEBBS_COMMENT';
export const COMMON_CREATE_SERVICEBBS_COMMENT_SUCCESS='COMMON_CREATE_SERVICEBBS_COMMENT_SUCCESS';
export const COMMON_CREATE_SERVICEBBS_COMMENT_FAILURE='COMMON_CREATE_SERVICEBBS_COMMENT_FAILURE';
export const RESET_COMMON_CREATE_SERVICEBBS_COMMENT='RESET_COMMON_CREATE_SERVICEBBS_COMMENT';

export const COMMON_DELETE_SERVICEBBS_COMMENT='COMMON_DELETE_SERVICEBBS_COMMENT';
export const COMMON_DELETE_SERVICEBBS_COMMENT_SUCCESS='COMMON_DELETE_SERVICEBBS_COMMENT_SUCCESS';
export const COMMON_DELETE_SERVICEBBS_COMMENT_FAILURE='COMMON_DELETE_SERVICEBBS_COMMENT_FAILURE';
export const RESET_COMMON_DELETE_SERVICEBBS_COMMENT='RESET_COMMON_DELETE_SERVICEBBS_COMMENT';

export function commonLoadServiceBBSTitle(userToken){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/userAPI/common/serviceBBS/getServiceBBSTitle`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : COMMON_LOAD_SERVICEBBS_TITLE,
        payload : request
    }
}

export function commonLoadServiceBBSTitleSuccess(serviceBBS){
    return{
        type : COMMON_LOAD_SERVICEBBS_TITLE_SUCCESS,
        payload : serviceBBS.data
    }
}

export function commonLoadServiceBBSTitleFailure(error){
    return{
        type : COMMON_LOAD_SERVICEBBS_TITLE_FAILURE,
        payload : error
    }
}

export function resetCommonLoadServiceBBSTitle(){
    return{
        type : RESET_COMMON_LOAD_SERVICEBBS_TITLE
    }
}

export function commonLoadServiceBBSPostTitle(userToken, subDomain){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/userAPI/common/serviceBBS/getServiceBBSPostTitle?subDomain=${subDomain}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : COMMON_LOAD_SERVICEBBS_POST_TITLE,
        payload : request
    }
}

export function commonLoadServiceBBSPostTitleSuccess(postTitle){
    return{
        type : COMMON_LOAD_SERVICEBBS_POST_TITLE_SUCCESS,
        payload : postTitle.data
    }
}

export function commonLoadServiceBBSPostTitleFailure(error){
    return{
        type : COMMON_LOAD_SERVICEBBS_POST_TITLE_FAILURE,
        payload : error
    }
}

export function resetCommonLoadServiceBBSPostTitle(){
    return{
        type : RESET_COMMON_LOAD_SERVICEBBS_POST_TITLE
    }
}

export function commonLoadServiceBBSPostList(userToken, subDomain){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/userAPI/common/serviceBBS/getServiceBBSPostList?subDomain=${subDomain}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : COMMON_LOAD_SERVICEBBS_POST_LIST,
        payload : request
    }
}

export function commonLoadServiceBBSPostListSuccess(postList){
    return{
        type : COMMON_LOAD_SERVICEBBS_POST_LIST_SUCCESS,
        payload : postList.data
    }
}

export function commonLoadServiceBBSPostListFailure(error){
    return{
        type : COMMON_LOAD_SERVICEBBS_POST_LIST_FAILURE,
        payload : error
    }
}

export function resetCommonLoadServiceBBSPostList(){
    return{
        type : RESET_COMMON_LOAD_SERVICEBBS_POST_LIST
    }
}

export function commonCreateServiceBBSPost(userToken, serviceBBSForm){
    const request=axios({
        method : 'post',
        data : serviceBBSForm,
        url : `${ROOT_URL}/userAPI/common/serviceBBS/createPost?userToken=${userToken}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : COMMON_CREATE_SERVICEBBS_POST,
        payload : request
    }
}

export function commonCreateServiceBBSPostSuccess(message){
    return{
        type : COMMON_CREATE_SERVICEBBS_POST_SUCCESS,
        payload : message
    }
}

export function commonCreateServiceBBSPostFailure(error){
    return{
        type : COMMON_CREATE_SERVICEBBS_POST_FAILURE,
        payload : error
    }
}

export function resetCommonCreateServiceBBSPost(){
    return{
        type : RESET_COMMON_CREATE_SERVICEBBS_POST
    }
}

export function commonDeleteServiceBBSPost(userToken, postId){
    const request=axios({
        method : 'delete',
        url : `${ROOT_URL}/userAPI/common/serviceBBS/deletePost?userToken=${userToken}&postId=${postId}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : COMMON_DELETE_SERVICEBBS_POST,
        payload : request
    }
}

export function commonDeleteServiceBBSPostSuccess(message){
    return{
        type : COMMON_DELETE_SERVICEBBS_POST_SUCCESS,
        payload : message
    }
}

export function commonDeleteServiceBBSPostFailure(error){
    return{
        type : COMMON_DELETE_SERVICEBBS_POST_FAILURE,
        payload : error
    }
}

export function resetCommonDeleteServiceBBSPost(){
    return{
        type : RESET_COMMON_DELETE_SERVICEBBS_POST
    }
}

export function commonUpdateServiceBBSPost(userToken, postId){
    const request=axios({
        method : 'post',
        url : `${ROOT_URL}/userAPI/common/serviceBBS/updateViews?userToken=${userToken}&postId=${postId}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : COMMON_UPDATE_SERVICEBBS_VIEWS,
        payload : request
    }
}

export function commonUpdateServiceBBSPostComplete(){
    return{
        type : COMMON_UPDATE_SERVICEBBS_VIEWS_COMPLETE
    }
}

export function commonUpdateServiceBBSPostException(error){
    return{
        type : COMMON_UPDATE_SERVICEBBS_VIEWS_EXCEPTION,
        payload : error
    }
}

export function commonLoadServiceBBSPost(userToken, postId){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/userAPI/common/serviceBBS/getPost?userToken=${userToken}&postId=${postId}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : COMMON_LOAD_SERVICEBBS_POST,
        payload : request
    }
}

export function commonLoadServiceBBSPostSuccess(bbsPost){
    return{
        type : COMMON_LOAD_SERVICEBBS_POST_SUCCESS,
        payload : bbsPost.data
    }
}

export function commonLoadServiceBBSPostFailure(error){
    return{
        type : COMMON_LOAD_SERVICEBBS_POST_FAILURE,
        payload : error
    }
}

export function resetCommonLoadServiceBBSPost(){
    return{
        type : RESET_COMMON_LOAD_SERVICEBBS_POST
    }
}

export function commonLoadServiceBBSComment(userToken, postId){
    const request=axios({
        method : 'get',
        url : `${ROOT_URL}/userAPI/common/serviceBBS/getComment?userToken=${userToken}&postId=${postId}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : COMMON_LOAD_SERVICEBBS_COMMENT,
        payload : request
    }
}

export function commonLoadServiceBBSCommentSuccess(commentList){
    return{
        type : COMMON_LOAD_SERVICEBBS_COMMENT_SUCCESS,
        payload : commentList.data
    }
}

export function commonLoadServiceBBSCommentFailure(error){
    return{
        type : COMMON_LOAD_SERVICEBBS_COMMENT_FAILURE,
        payload : error
    }
}

export function resetCommonLoadServiceBBSComment(){
    return{
        type : RESET_COMMON_LOAD_SERVICEBBS_COMMENT
    }
}

export function commonCreateServiceBBSComment(userToken, postId, serviceBBSCommentForm){
    const request=axios({
        method : 'post',
        data : serviceBBSCommentForm,
        url : `${ROOT_URL}/userAPI/common/serviceBBS/createComment?userToken=${userToken}&postId=${postId}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : COMMON_CREATE_SERVICEBBS_COMMENT,
        payload : request
    }
}

export function commonCreateServiceBBSCommentSuccess(message){
    return{
        type : COMMON_CREATE_SERVICEBBS_COMMENT_SUCCESS,
        payload : message
    }
}

export function commonCreateServiceBBSCommentFailure(error){
    return{
        type : COMMON_CREATE_SERVICEBBS_COMMENT_FAILURE,
        payload : error
    }
}

export function resetCommonCreateServiceBBSComment(){
    return{
        type : RESET_COMMON_CREATE_SERVICEBBS_COMMENT
    }
}

export function commonDeleteServiceBBSComment(userToken, commentId){
    const request=axios({
        method : 'delete',
        url : `${ROOT_URL}/userAPI/common/serviceBBS/deleteComment?userToken=${userToken}&commentId=${commentId}`,
        headers : {
            'Authorization' : `Bearer ${userToken}`
        }
    });
    return{
        type : COMMON_DELETE_SERVICEBBS_COMMENT,
        payload : request
    }
}

export function commonDeleteServiceBBSCommentSuccess(message){
    return{
        type : COMMON_DELETE_SERVICEBBS_COMMENT_SUCCESS,
        payload : message
    }
}

export function commonDeleteServiceBBSCommentFailure(error){
    return{
        type : COMMON_DELETE_SERVICEBBS_COMMENT_FAILURE,
        payload : error
    }
}

export function resetCommonDeleteServiceBBSComment(){
    return{
        type : RESET_COMMON_DELETE_SERVICEBBS_COMMENT
    }
}
import {COMMON_LOAD_SERVICEBBS_TITLE, COMMON_LOAD_SERVICEBBS_TITLE_SUCCESS, COMMON_LOAD_SERVICEBBS_TITLE_FAILURE, RESET_COMMON_LOAD_SERVICEBBS_TITLE,
    COMMON_LOAD_SERVICEBBS_POST_TITLE, COMMON_LOAD_SERVICEBBS_POST_TITLE_SUCCESS, COMMON_LOAD_SERVICEBBS_POST_TITLE_FAILURE, RESET_COMMON_LOAD_SERVICEBBS_POST_TITLE,
    COMMON_LOAD_SERVICEBBS_POST_LIST, COMMON_LOAD_SERVICEBBS_POST_LIST_SUCCESS, COMMON_LOAD_SERVICEBBS_POST_LIST_FAILURE, RESET_COMMON_LOAD_SERVICEBBS_POST_LIST,
    COMMON_CREATE_SERVICEBBS_POST, COMMON_CREATE_SERVICEBBS_POST_SUCCESS, COMMON_CREATE_SERVICEBBS_POST_FAILURE, RESET_COMMON_CREATE_SERVICEBBS_POST,
    COMMON_DELETE_SERVICEBBS_POST, COMMON_DELETE_SERVICEBBS_POST_SUCCESS, COMMON_DELETE_SERVICEBBS_POST_FAILURE, RESET_COMMON_DELETE_SERVICEBBS_POST,
    COMMON_UPDATE_SERVICEBBS_VIEWS, COMMON_UPDATE_SERVICEBBS_VIEWS_COMPLETE, COMMON_UPDATE_SERVICEBBS_VIEWS_EXCEPTION,
    COMMON_LOAD_SERVICEBBS_POST, COMMON_LOAD_SERVICEBBS_POST_SUCCESS, COMMON_LOAD_SERVICEBBS_POST_FAILURE, RESET_COMMON_LOAD_SERVICEBBS_POST,
    COMMON_LOAD_SERVICEBBS_COMMENT, COMMON_LOAD_SERVICEBBS_COMMENT_SUCCESS, COMMON_LOAD_SERVICEBBS_COMMENT_FAILURE, RESET_COMMON_LOAD_SERVICEBBS_COMMENT,
    COMMON_CREATE_SERVICEBBS_COMMENT, COMMON_CREATE_SERVICEBBS_COMMENT_SUCCESS, COMMON_CREATE_SERVICEBBS_COMMENT_FAILURE, RESET_COMMON_CREATE_SERVICEBBS_COMMENT,
    COMMON_DELETE_SERVICEBBS_COMMENT, COMMON_DELETE_SERVICEBBS_COMMENT_SUCCESS, COMMON_DELETE_SERVICEBBS_COMMENT_FAILURE, RESET_COMMON_DELETE_SERVICEBBS_COMMENT
} from "../actions/common_serviceBBS_action";

const INITIAL_STATE = {
    serviceBBSTitle : {title : [], loading : false, error : null},
    selectTitle : {title : null, loading : false, error : null},
    bbsPostList : {postList : [], listLoading : false, listError : null},
    selectPost : {post : null, loading : false, error : null},
    postComment : {commentList : [], loading : false, error : null},
    commentCreate : {message : null, createLoading : false, createError : null},
    commentDelete : {deleteMessage : null, deleteLoading : false, deleteError : null},
    createPost : {message : null, createLoading : false, createError : null},
    deletePost : {postMessage : null, deleteLoading : false, deleteError : null}
};

export default function(state=INITIAL_STATE, action){
    let error;
    switch(action.type){
        case COMMON_LOAD_SERVICEBBS_TITLE : 
            return { ...state, serviceBBSTitle : {title : [], loading : true, error : null}};
        case COMMON_LOAD_SERVICEBBS_TITLE_SUCCESS : 
            return { ...state, serviceBBSTitle : {title : action.payload, loading : false, error : null}};
        case COMMON_LOAD_SERVICEBBS_TITLE_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, serviceBBSTitle : {title : [], loading : false, error : error}};
        case RESET_COMMON_LOAD_SERVICEBBS_TITLE : 
            return { ...state, serviceBBSTitle : {title : [], loading : false, error : null}};

        case COMMON_LOAD_SERVICEBBS_POST_TITLE :
            return { ...state, selectTitle : {title : null, loading : true, error : null}};
        case COMMON_LOAD_SERVICEBBS_POST_TITLE_SUCCESS :
            return { ...state, selectTitle : {title : action.payload, loading : false, error : null}};
        case COMMON_LOAD_SERVICEBBS_POST_TITLE_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, selectTitle : {title : null, loading : false, error : error}};
        case RESET_COMMON_LOAD_SERVICEBBS_POST_TITLE :
            return { ...state, selectTitle : {title : null, loading : false, error : null}};

        case COMMON_LOAD_SERVICEBBS_POST_LIST :
            return { ...state, bbsPostList : {postList : [], loading : true, error : null}};
        case COMMON_LOAD_SERVICEBBS_POST_LIST_SUCCESS :
            return { ...state, bbsPostList : {postList : action.payload, loading : false, error : null}};
        case COMMON_LOAD_SERVICEBBS_POST_LIST_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, bbsPostList : {postList : [], loading : false, error : error}};
        case RESET_COMMON_LOAD_SERVICEBBS_POST_LIST :
            return { ...state, bbsPostList : {postList : [], loading : false, error : null}};

        case COMMON_CREATE_SERVICEBBS_POST :
            return { ...state, createPost : {message : null, createLoading : true, createError : null}};
        case COMMON_CREATE_SERVICEBBS_POST_SUCCESS :
            return { ...state, createPost : {message : action.payload, createLoading : false, createError : null}};
        case COMMON_CREATE_SERVICEBBS_POST_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, createPost : {message : null, createLoading : false, createError : error}};
        case RESET_COMMON_CREATE_SERVICEBBS_POST :
            return { ...state, createPost : {message : null, createLoading : false, createError : null}};

        case COMMON_DELETE_SERVICEBBS_POST :
            return { ...state, deletePost : {postMessage : null, deleteLoading : true, deleteError : null}};
        case COMMON_DELETE_SERVICEBBS_POST_SUCCESS :
            return { ...state, deletePost : {postMessage : action.payload, deleteLoading : false, deleteError : null}};
        case COMMON_DELETE_SERVICEBBS_POST_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, deletePost : {postMessage : null, deleteLoading : false, deleteError : error}};
        case RESET_COMMON_DELETE_SERVICEBBS_POST :
            return { ...state, deletePost : {postMessage : null, deleteLoading : false, deleteError : null}};

        case COMMON_UPDATE_SERVICEBBS_VIEWS :
            return { ...state, selectPost : {...state.selectPost, loading : true, error : null}};
        case COMMON_UPDATE_SERVICEBBS_VIEWS_COMPLETE :
            return { ...state, selectPost : {...state.selectPost, loading : false, error : null}};
        case COMMON_UPDATE_SERVICEBBS_VIEWS_EXCEPTION :
            error = action.payload || {message: action.payload.message};
            return { ...state, selectPost : {...state.selectPost, loading : false, error : error}};

        case COMMON_LOAD_SERVICEBBS_POST :
            return { ...state, selectPost : {post : null, loading : true, error : null}};
        case COMMON_LOAD_SERVICEBBS_POST_SUCCESS :
            return { ...state, selectPost : {post : action.payload, loading : false, error : null}};
        case COMMON_LOAD_SERVICEBBS_POST_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, selectPost : {post : null, loading : false, error : error}};
        case RESET_COMMON_LOAD_SERVICEBBS_POST :
            return { ...state, selectPost : {post : null, loading : false, error : null}};

        case COMMON_LOAD_SERVICEBBS_COMMENT :
            return { ...state, postComment : {commentList : [], loading : true, error : null}};
        case COMMON_LOAD_SERVICEBBS_COMMENT_SUCCESS :
            return { ...state, postComment : {commentList : action.payload, loading : false, error : null}};
        case COMMON_LOAD_SERVICEBBS_COMMENT_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, postComment : {commentList : [], loading : false, error : error}};
        case RESET_COMMON_LOAD_SERVICEBBS_COMMENT :
            return { ...state, postComment : {commentList : [], loading : false, error : null}};

        case COMMON_CREATE_SERVICEBBS_COMMENT :
            return { ...state, commentCreate : {message : null, createLoading : true, createError : null}};
        case COMMON_CREATE_SERVICEBBS_COMMENT_SUCCESS :
            return { ...state, commentCreate : {message : action.payload, createLoading : false, createError : null}};
        case COMMON_CREATE_SERVICEBBS_COMMENT_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, commentCreate : {message : null, createLoading : false, createError : error}};
        case RESET_COMMON_CREATE_SERVICEBBS_COMMENT :
            return { ...state, commentCreate : {message : null, createLoading : false, createError : null}};

        case COMMON_DELETE_SERVICEBBS_COMMENT :
            return { ...state, commentDelete : {deleteMessage : null, deleteLoading : true, deleteError : null}};
        case COMMON_DELETE_SERVICEBBS_COMMENT_SUCCESS :
            return { ...state, commentDelete : {deleteMessage : action.payload, deleteLoading : false, deleteError : null}};
        case COMMON_DELETE_SERVICEBBS_COMMENT_FAILURE :
            error = action.payload || {message: action.payload.message};
            return { ...state, commentDelete : {deleteMessage : null, deleteLoading : false, deleteError : error}};
        case RESET_COMMON_DELETE_SERVICEBBS_COMMENT :
            return { ...state, commentDelete : {deleteMessage : null, deleteLoading : false, deleteError : null}};
        default : 
            return state;
    }
}
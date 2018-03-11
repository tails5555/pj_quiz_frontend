import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {reset, reduxForm, Field, SubmissionError} from 'redux-form';
import {renderQuill} from "../form";
import {
    commonCreateServiceBBSComment, commonCreateServiceBBSCommentSuccess, commonCreateServiceBBSCommentFailure, resetCommonCreateServiceBBSComment
} from "../../actions/common_serviceBBS_action";
function validate(values){
    var errors={};
    var hasErrors=false;
    if(!values.context || values.context.trim() === ''){
        errors.context='댓글 내용을 작성해야 댓글 등록이 가능합니다.';
        hasErrors=true;
    }
    return hasErrors && errors;
}

const validateAndCreateComment = (values, dispatch, props) => {
    let token=sessionStorage.getItem('jwtToken');
    if (!token || token === '') return;
    dispatch(reset('serviceBBSCommentForm'));
    return dispatch(commonCreateServiceBBSComment(token, props.postId, values)).then(result => {
        // Note: Error's "data" is in result.payload.response.data (inside "response")
        // success's "data" is in result.payload.data
        if (result.payload.response && result.payload.response.status !== 200) {
            dispatch(commonCreateServiceBBSCommentFailure(result.payload.response.data));
            throw new SubmissionError(result.payload.response.data);
        }
        dispatch(commonCreateServiceBBSCommentSuccess(result.payload.data));
    });
}

class ServiceBBSPostComment extends Component{
    componentWillMount(){
        this.props.fetchServiceBBSComment(this.props.match.params.id);
    }
    componentWillUnmount(){
        this.props.resetFetchServiceBBSComment();
    }
    handleClickDelete(commentId){
        console.log(commentId);
        let isDelete=window.confirm("댓글 삭제를 진행합니다. 계속 하시겠습니까?");
        if(isDelete){
            this.props.deleteServiceBBSComment(commentId);
        }
    }
    render() {
        const {handleSubmit} = this.props;
        const {commentList, loading, error} = this.props.postComment;
        const {message, createLoading, createError} = this.props.commentCreate;
        const {deleteMessage, deleteLoading, deleteError}=this.props.commentDelete;
        const {postMessage} = this.props.deletePost;
        const {user} = this.props.user;
        let commentContext;
        if(message){
            alert(message);
            this.props.resetCreateServiceBBSComment();
            this.props.resetFetchServiceBBSComment();
            this.props.fetchServiceBBSComment(this.props.match.params.id);
        }else if(createError){
            alert("댓글 올리는 작업을 실패하였습니다.");
            this.props.resetCreateServiceBBSComment();
            this.props.resetFetchServiceBBSComment();
            this.props.fetchServiceBBSComment(this.props.match.params.id);
        }
        if(deleteMessage){
            alert(deleteMessage.data);
            this.props.resetDeleteServiceBBSComment();
            this.props.resetFetchServiceBBSComment();
            this.props.fetchServiceBBSComment(this.props.match.params.id);
        }else if(deleteError){
            alert("댓글 삭제 작업을 실패하였습니다.");
            this.props.resetDeleteServiceBBSComment();
            this.props.resetFetchServiceBBSComment();
            this.props.fetchServiceBBSComment(this.props.match.params.id);
        }
        if(loading){
            commentContext=(
                <div class="media">
                    <div class="media-body">
                        <p className="text-center">댓글 목록을 불러오는 중입니다.</p>
                    </div>
                </div>
            )
        }
        if(commentList.length>0){
            commentContext=commentList.map((comment) => {
                let buttonList;
                if(comment.user.nickName === user.nickName){
                    buttonList=(
                        <div>
                            <div className="text-right">
                                <button className="btn btn-danger" type="button" onClick={() => this.handleClickDelete(comment.id)}><i class="fas fa-trash-alt"></i> 삭제하기</button>
                            </div>
                        </div>
                    )
                }
                return(
                    <div>
                        <div class="media">
                            <img class="mr-3" alt="profile"/>
                            <div class="media-body">
                                <h5 class="mt-0">{comment.user.person.name}[{comment.user.userType}]</h5>
                                <h5 class="mt-0">{new Date(comment.writtenDate).toLocaleDateString()} {new Date(comment.writtenDate).toLocaleTimeString()}</h5>
                                <hr/>
                                <div dangerouslySetInnerHTML={ {__html: comment.context} }>
                                </div>
                                {buttonList}
                            </div>
                        </div>
                        <hr/>
                    </div>
                );
            })
        }else{
            commentContext = (
                <div class="media">
                    <div class="media-body">
                        <p className="text-center">등록된 댓글 목록이 존재하지 않습니다.</p>
                    </div>
                </div>
            )
        }
        if(error){
            commentContext = (
                <div class="media">
                    <div class="media-body">
                        <p className="text-center">댓글을 불러오는 과정에서 오류가 발생했습니다. 다시 시도하시길 바랍니다.</p>
                    </div>
                </div>
            )
        }
        if(createLoading){
            commentContext=(
                <div class="media">
                    <div class="media-body">
                        <p className="text-center">댓글을 등록하는 중입니다.</p>
                    </div>
                </div>
            )
        }else if(createError){
            commentContext=(
                <div class="media">
                    <div class="media-body">
                        <p className="text-center">댓글을 등록하는 도중 오류가 발생했습니다.</p>
                    </div>
                </div>
            )
        }
        if(postMessage){
            commentContext=(
                <div class="media">
                    <div class="media-body">
                        <p className="text-center">게시글 삭제 작업을 해서 댓글도 모두 삭제됩니다.</p>
                    </div>
                </div>
            )
        }
        return (
            <div className="container">
                <h4>댓글 한 마디</h4>
                <form onSubmit={handleSubmit(validateAndCreateComment).bind(this)}>
                    <div class="media">
                        <img class="mr-3" alt="profile"/>
                        <div class="media-body">
                            <Field name="context" size={150} component={renderQuill} />
                            <br/>
                            <br/>
                            <br/>
                            <hr/>
                            <div className="text-right">
                                <button className="btn btn-info"><i class="fas fa-pen-square"></i> 작성하기</button>
                            </div>
                        </div>
                    </div>
                </form>
                <hr/>
                {commentContext}
                <br/>
            </div>
        )
    }
}
export default reduxForm({
    form : 'serviceBBSCommentForm',
    validate
})(withRouter(ServiceBBSPostComment));


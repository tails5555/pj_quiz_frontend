import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
class ServiceBBSPostView extends Component{
    componentWillMount(){
        this.props.updateViews(this.props.match.params.id);
    }
    componentDidMount(){
        this.props.fetchServiceBBSPost(this.props.match.params.id);
    }
    componentWillUnmount(){
        this.props.resetFetchServiceBBSPost();
    }
    handleClickDelete(postId){
        let isDelete=window.confirm("게시물을 삭제합니다. 계속 진행하시겠습니까?");
        if(isDelete){
            this.props.deleteServiceBBSPost(postId);
        }
    }
    render(){
        const {post, loading, error} = this.props.selectPost;
        const {postMessage, deleteLoading, deleteError} = this.props.deletePost;
        const {user} = this.props.user;
        let postTitle;
        let postContext;
        let buttonContext;
        if(postMessage){
            alert(postMessage.data);
            this.props.resetDeleteServiceBBSPost();
            this.props.history.push(`/common/serviceBBS/${this.props.match.params.name}`);
        }else if(deleteError){
            alert("삭제 도중 에러가 발생했습니다. 다시 시도해주시길 바랍니다.");
            this.props.resetDeleteServiceBBSPost();
            this.props.history.push(`/common/serviceBBS/${this.props.match.params.name}`);
        }
        if(loading){
            postTitle = (
                <div>
                    <h2 className="text-center">게시물 조회하기</h2>
                </div>
            )
            postContext=(
                <h2>게시물을 불러오는 중입니다.</h2>
            )
        }
        if(post){
            postTitle = (
                <div>
                    <h2 className="text-center">{post.serviceBBSTitle.name}</h2>
                    <h2 className="text-center">게시물 조회하기</h2>
                </div>
            )
            if(post.writer.nickName === user.nickName){
                buttonContext = (
                    <div className="text-center">
                        <Link to={"/common/serviceBBS/"+this.props.match.params.name}>
                            <button className="btn btn-info btn-block" type="button"><i class="fas fa-arrow-left"></i> 이전으로</button>
                        </Link>
                        <br/>
                        <button className="btn btn-info btn-block" type="button"><i class="fas fa-edit"></i> 수정하기</button>
                        <br/>
                        <button className="btn btn-danger btn-block" type="button" onClick={() => this.handleClickDelete(post.id)}><i class="fas fa-trash-alt"></i> 삭제하기</button>
                    </div>
                )
            }else{
                buttonContext = (
                    <div className="text-center">
                        <Link to={"/common/serviceBBS/"+this.props.match.params.name}>
                            <button className="btn btn-info btn-block" type="button"><i class="fas fa-arrow-left"></i> 이전으로</button>
                        </Link>
                    </div>
                )
            }
            let minHeight={
                minHeight : '450px'
            };
            postContext=(
                <table className={"table table-bordered"}>
                    <tr>
                        <td colSpan="4">
                            <div class="media">
                                <img class="mr-3" alt="profile"/>
                                <div class="media-body">
                                    <h5 class="mt-0">{post.writer.person.name}</h5>
                                    <h5 class="mt-0">{post.writer.userType}</h5>
                                    <h5 class="mt-0">{post.writer.person.phone}</h5>
                                    <h5 class="mt-0">{post.writer.person.email}</h5>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={"text-center table-info"}>#</td>
                        <td>{post.id}</td>
                        <td className={"text-center table-info"}>조회수</td>
                        <td>{post.views+1}</td>
                    </tr>
                    <tr>
                        <td className={"text-center table-info"}>작성 날짜</td>
                        <td colSpan="3">{new Date(post.writtenDate).toLocaleDateString()} {new Date(post.writtenDate).toLocaleTimeString()}</td>
                    </tr>
                    <tr>
                        <td className={"text-center table-info"}>제목</td>
                        <td colSpan="3">{post.title}</td>
                    </tr>
                    <tr>
                        <td className={"text-center table-info"}>첨부파일</td>
                        <td colSpan="3">
                            첨부파일1[삭제]<br/>
                            첨부파일2[삭제]
                        </td>
                    </tr>
                    <tr>
                        <td className={"text-center table-info"} colSpan="4">내용</td>
                    </tr>
                    <tr>
                        <td colSpan="4">
                            <div style={minHeight} dangerouslySetInnerHTML={ {__html: post.context} }>
                            </div>
                        </td>
                    </tr>
                </table>
            )
        }else if(error){
            postTitle = (
                <div>
                    <h2 className="text-center">게시물 조회하기</h2>
                </div>
            )
            postContext=(
                <h2>게시물을 불러오는데 오류가 발생했습니다.</h2>
            )
        }

        if(deleteLoading){

        }
        return(
            <div className="container">
                {postTitle}
                <hr/>
                {postContext}
                <hr/>
                {buttonContext}
            </div>
        )
    }
}
export default withRouter(ServiceBBSPostView);
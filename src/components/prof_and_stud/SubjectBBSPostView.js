import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import SubjectBBSComment from './SubjectBBSComment';
class SubjectBBSPostView extends Component{
    render(){
        console.log(this.props.history);
        return(
            <div className="container">
                <br/>
                <h2 className={"text-center"}>{this.props.match.params.name}</h2>
                <h2 className={"text-center"}>{this.props.match.params.id}번 게시물 조회</h2>
                <hr/>

                <table className={"table table-bordered"}>
                    <tr>
                        <td colSpan="4">
                            <div class="media">
                                <img class="mr-3" alt="profile"/>
                                <div class="media-body">
                                    <h5 class="mt-0">작성자</h5>
                                    <h5 class="mt-0">학생 / 교수</h5>
                                    <h5 class="mt-0">작성자 연락처</h5>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={"text-center table-info"}>#</td>
                        <td>{this.props.match.params.id}</td>
                        <td className={"text-center table-info"}>조회수</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className={"text-center table-info"}>작성 날짜</td>
                        <td colSpan="3">2018/3/??</td>
                    </tr>
                    <tr>
                        <td className={"text-center table-info"}>제목</td>
                        <td colSpan="3">게시물 제목</td>
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
                            <p>게시글 내용1</p>
                            <p>게시글 내용2</p>
                            <p>게시글 내용3</p>
                            <p>게시글 내용1</p>
                            <p>게시글 내용2</p>
                            <p>게시글 내용3</p>
                            <p>게시글 내용1</p>
                            <p>게시글 내용2</p>
                            <p>게시글 내용3</p>
                        </td>
                    </tr>
                </table>
                <hr/>
                <div className="text-center">
                    <Link to={"/prof_and_stud/subjectBBS/list/"+this.props.match.params.name+"/"+this.props.match.params.pg}>
                        <button className="btn btn-info" type="button"><i class="fas fa-arrow-left"></i> 이전으로</button></Link>
                    &nbsp;&nbsp;
                    <button className="btn btn-info" type="button"><i class="fas fa-edit"></i> 수정하기</button>
                    &nbsp;&nbsp;
                    <button className="btn btn-danger" type="button"><i class="fas fa-trash-alt"></i> 삭제하기</button>
                </div>
                <br/>
                <SubjectBBSComment/>
            </div>
        )
    }
}
export default withRouter(SubjectBBSPostView);
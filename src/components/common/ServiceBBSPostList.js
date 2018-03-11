import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import ServiceBBSPagination from './ServiceBBSPagination';
class ServiceBBSPostList extends Component{
    componentWillMount(){
        this.props.fetchServiceBBSPostTitle(this.props.match.params.name);
    }
    componentDidMount(){
        this.props.fetchServiceBBSPostList(this.props.match.params.name);
    }
    componentWillUnmount(){
        this.props.resetFetchServiceBBSPostList();
        this.props.resetFetchServiceBBSPostTitle();
    }
    render(){
        const {title, loading, error}=this.props.selectTitle;
        const {postList, listLoading, listError}=this.props.bbsPostList;
        let titleContext;
        let listContext;
        if(loading){
            titleContext=(
                <h2 className="text-center">게시판 제목을 불러오는 중입니다.</h2>
            )
        }
        if(error){
            titleContext=(
                <h2 className="text-center">게시판 목록을 불러오는 도중 에러가 발생했습니다.</h2>
            )
        }else if(title){
            titleContext=(
                <h2 className="text-center">{title.name} 목록</h2>
            )
        }

        if(listLoading){
            listContext=(
                <tr>
                    <td className="text-center" colSpan="4">게시글 목록을 불러오는 중입니다.</td>
                </tr>
            )
        }
        if(listError){
            listContext=(
                <tr>
                    <td className="text-center" colSpan="4">게시글 목록을 불러오는 도중 에러가 발생했습니다.</td>
                </tr>
            )
        }
        if(postList.length>0){
            listContext=postList.map((post) => {
                return (
                    <tr key={post.id}>
                        <th scope="row">{post.id}</th>
                        <td><Link to={`/common/serviceBBS/${this.props.match.params.name}/view/${post.id}`}>{post.title}</Link></td>
                        <td>{post.writer.person.name}</td>
                        <td>{post.views}</td>
                    </tr>
                )
            })
        }else{
            listContext=(
                <tr>
                    <td className="text-center" colSpan="4">해당 게시판에 게시물이 존재하지 않습니다.</td>
                </tr>
            )
        }
        return(
            <div className="container">
                <br/>
                <h2 className="text-center">{titleContext}</h2>
                <br/>
                <div className="text-right form-inline">
                    <form>
                        <select className="form-control" value="searchId">
                            <option value="1">제목</option>
                            <option value="2">작성자</option>
                            <option value="3">내용</option>
                            <option value="4">제목+내용</option>
                        </select>
                        &nbsp;&nbsp;
                        <input type="text" name="keyword" className="form-control" />
                        &nbsp;&nbsp;
                        <button type="button" className="btn btn-success"><i class="fas fa-search"></i> 검색</button>
                    </form>
                </div>
                <br/>
                <table class="table text-center">
                    <thead class="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">제목</th>
                        <th scope="col">작성자</th>
                        <th scope="col">조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listContext}
                    </tbody>
                </table>
                <p>{this.props.match.params.pg}</p>
                <ServiceBBSPagination pathName={this.props.match}/>
                <br/>
                <Link to="/common/serviceBBS"><button className="btn btn-secondary btn-block"><i class="fas fa-arrow-alt-circle-left"></i> 게시판 목록으로</button></Link>
                <br/>
            </div>
        )
    }
}
export default withRouter(ServiceBBSPostList);
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SubjectBBSPagination from './SubjectBBSPagination';
class SubjectBBSPostList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.match.name);
        return(
            <div className="container">
                <br/>
                <h2 className="text-center">{this.props.match.params.name} 게시판 제목 목록</h2>
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
                        <th scope="col">자세히</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">3</th>
                        <td><Link to={"/prof_and_stud/subjectBBS/view/"+this.props.match.params.name+"/3"+"/pg/"+this.props.match.params.pg}>퀴즈 2 점수에 이상 있습니다.</Link></td>
                        <td>김혜리</td>
                        <td>30</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td><Link to={"/prof_and_stud/subjectBBS/view/"+this.props.match.params.name+"/2"+"/pg/"+this.props.match.params.pg}>퀴즈1 단어 목록에 대한 정리</Link></td>
                        <td>서종현</td>
                        <td>45</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td><Link to={"/prof_and_stud/subjectBBS/view/"+this.props.match.params.name+"/1"+"/pg/"+this.props.match.params.pg}>퀴즈1 시험 안내</Link></td>
                        <td>홍은지</td>
                        <td>50</td>
                        <td>3</td>
                    </tr>
                    </tbody>
                </table>
                <p>{this.props.match.params.pg}</p>
                <SubjectBBSPagination pathName={this.props.match}/>
            </div>
        )
    }
}
export default SubjectBBSPostList;
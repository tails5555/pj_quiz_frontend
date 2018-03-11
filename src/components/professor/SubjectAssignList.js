import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class SubjectAssignList extends Component{
    componentWillMount(){
        this.props.fetchAssignSubject();
    }
    componentWillUnmount() {
        this.props.resetFetchAssignSubject();
    }
    handleSelectSubject(subDomain){
        sessionStorage.setItem('subjectDomain', subDomain);
        this.props.fetchSelectSubject(subDomain);
    }
    render(){
        const {subjects, loading, error} = this.props.subjectList;
        let trList;
        if(loading){
            trList=(
                <tr>
                    <td scope="col" colSpan="4">과목 목록을 불러오는 중입니다.</td>
                </tr>
            )
        }
        if(error){
            trList=(
                <tr>
                    <td scope="col" colSpan="4">과목 목록을 불러오는 중 오류가 발생했습니다.</td>
                </tr>
            )
        }
        if(subjects.length>0){
            trList=subjects.map((subject) => {
                return(
                    <tr key={subject.id}>
                        <th scope="row">{subject.name}</th>
                        <td>{subject.assignUsers.length}</td>
                        <td><Link to="/professor/subject/assignUpdate"><button className="btn btn-primary" type="button" onClick={() => this.handleSelectSubject(subject.subDomain)}><i class="fas fa-book"></i> 과목 이동</button></Link></td>
                    </tr>
                )
            })
        }else {
            trList = (
                <tr>
                    <td scope="row" colSpan="4">담당하는 과목이 없습니다.</td>
                </tr>
            )
        }
        return(
            <div className="container">
                <h2 className="text-center">xxxx학년 y학기 담당 과목 목록</h2>
                <hr/>
                <div className="form-group">
                    <form>
                        <select className="form-control" value="semesterId">
                            <option value="1">2018학년 1학기</option>
                            <option value="2">2018학년 2학기</option>
                            <option value="3">2019학년 1학기</option>
                        </select>
                    </form>
                </div>
                <table class="table text-center">
                    <thead class="thead-light">
                    <tr>
                        <th scope="col">담당 과목</th>
                        <th scope="col">신청 인원</th>
                        <th scope="col">접속 버튼</th>
                    </tr>
                    </thead>
                    <tbody>
                    {trList}
                    </tbody>
                </table>
                <hr/>
                <div class="alert alert-dismissible alert-info">
                    <p>⊙ 담당 과목 목록은 현재 교수가 담당하는 과목들에 대하여 나옵니다.</p>
                    <p>⊙ 추가를 하고 싶은 과목이 있으면 과목 추가 메뉴를 이용하시길 바랍니다.</p>
                    <p>⊙ 수강 신청한 인원과 제적 인원이 다른 경우에는 수강 학생 목록을 한 번 확인해 보시길 바랍니다.</p>
                    <p>⊙ 이전 학기 과목 퀴즈 목록은 5년간 보관 됩니다. 이 점 참고하시길 바랍니다.</p>
                </div>
                <br/>
            </div>
        )
    }
}
export default SubjectAssignList;
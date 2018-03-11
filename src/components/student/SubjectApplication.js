import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
class SubjectApplication extends Component{
    componentWillMount(){
        this.props.fetchApplicationSubject();
    }
    componentWillUnmount() {
        this.props.resetFetchApplicationSubject();
    }
    handleClick(idx, subjectName){
        let isApplicate=window.confirm(`${subjectName} 수강 신청을 진행합니다. 계속 하시겠습니까?`);
        if(isApplicate){
            this.props.serverToApplicationSubject(idx);
        }
    }
    render(){
        const {subjects, loading, error} = this.props.subjectList;
        const {message} = this.props.subjectApplication;
        let trList;
        if(message){
            alert(message);
            this.props.resetServerToApplicationSubject();
            this.props.resetFetchApplicationSubject();
            this.props.fetchApplicationSubject();
        }
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
                        <td>{subject.profUser.person.name}</td>
                        <td>{subject.assignUsers.length}</td>
                        <td><button className="btn btn-info" onClick={() => this.handleClick(subject.id, subject.name)}><i class="far fa-calendar-plus"></i> 수강 추가</button></td>
                    </tr>
                )
            })
        }else {
            trList = (
                <tr>
                    <td scope="row" colSpan="4">이번 학기에 등록된 과목들이 없습니다.</td>
                </tr>
            )
        }
        return(
            <div className="container">
                <h2 className="text-center">xxxx학년 y학기 수강 과목 신청</h2>
                <hr/>
                <table class="table text-center">
                    <thead class="thead-light">
                    <tr>
                        <th scope="col">신청 과목</th>
                        <th scope="col">교수 이름</th>
                        <th scope="col">신청 인원</th>
                        <th scope="col">신청 버튼</th>
                    </tr>
                    </thead>
                    <tbody>
                        {trList}
                    </tbody>
                </table>
                <hr/>
                <div class="alert alert-dismissible alert-info">
                    <p>⊙ 현재 수강 과목 목록은 현재 학생이 신청을 하지 않은 과목들에 대하여 나옵니다.</p>
                    <p>⊙ 과목 추가를 할 때 같은 과목에 대해서 분반 담당 교수 이름을 철저히 확인하고 신청하시길 바랍니다.</p>
                    <p>⊙ 수강 과목에 대하여 잘 못 신청한 경우에는 해당 과목 교수에게 연락을 취하여 조치하시길 바랍니다.</p>
                    <p>⊙ 이전 학기 과목에 대하여 신청 불가능합니다. 이전 학기 과목 퀴즈 목록은 5년간 보관 되므로 좋은 곳에 활용하시길 바랍니다.</p>
                </div>
                <br/>
            </div>
        )
    }
}
export default withRouter(SubjectApplication);
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
function getCaret(direction) {
    if (direction === 'asc') {
        return (
            <i class="fas fa-sort-up"></i>
        );
    }
    if (direction === 'desc') {
        return (
            <i class="fas fa-sort-down"></i>
        );
    }
    return (
        <i class="fas fa-sort"></i>
    );
}
class AssignUpdate extends Component{
    componentWillMount(){
        this.props.fetchAssignStudent();
    }
    componentWillUnmount(){
        this.props.resetFetchAssignStudent();
    }
    handleClickCancel(id){
        console.log(id);
        let isDelete=window.confirm("인원을 삭제합니다. 계속 진행하시겠습니까?");
        if(isDelete){
            this.props.deleteAssignStudent(id);
        }
    }

    cellButton(userId) {
        return (
            <button
                className="btn btn-danger"
                type="button"
                onClick={() =>
                    this.handleClickCancel(userId)}
            >
                <i class="fas fa-eraser"></i> 수강 취소하기
            </button>
        )
    }

    render() {
        const {studentList, loading, error} = this.props.assignStudent;
        const {message, deleteLoading, deleteError} = this.props.deleteStudent;
        const {subject} = this.props.selectSubject;
        let studentDiv, subjectHTag;
        if(message){
            console.log(message);
            alert(message);
            this.props.resetDeleteAssignStudent();
            this.props.resetFetchAssignStudent();
            this.props.fetchAssignStudent();
        }else if(deleteError){
            alert("삭제 작업에서 오류가 발생했습니다.");
            this.props.resetDeleteAssignStudent();
            this.props.resetFetchAssignStudent();
            this.props.fetchAssignStudent();
        }

        if(deleteLoading){
            studentDiv=<h3 className="text-center">학생 삭제 작업이 진행 중입니다.</h3>
        }

        if (subject) {
            subjectHTag = <h2 className="text-center">{subject.name}</h2>
        }
        if (loading) {
            studentDiv = <h3 className="text-center">수강 학생들을 불러오는 중입니다...</h3>
        } else if (error) {
            studentDiv = <h3 className="text-center">수강 학생들을 불러오는 도중 에러가 발생했습니다.</h3>
        }

        if (studentList.length > 0) {
            let tableStudentList=[];
            for(let k=0;k<studentList.length;k++){
                let tmpStudent=studentList[k];
                let colStudent={
                    loginId : tmpStudent.loginId,
                    name : tmpStudent.person.name,
                    phone : tmpStudent.person.phone,
                    grade : tmpStudent.person.grade.name,
                    userId : tmpStudent.id
                }
                tableStudentList.push(colStudent);
            }
            const options = {
                page: 1, // 기본 페이지
                sizePerPageList: [ {
                    text: '3 학생', value: 3
                },{
                    text: '5 학생', value: 5
                }, {
                    text: '10 학생', value: 10
                }, {
                    text: '15 학생', value: 15
                }
                ], // 몇 줄 씩 나오게 하나요
                sizePerPage: 5,  // 페이지 이전, 다음 구분용
                pageStartIndex: 1, // where to start counting the pages
                paginationSize: 3,  // the pagination bar size.
                prePage: '이전', // Previous page button text
                nextPage: '다음', // Next page button text
                firstPage: '처음', // First page button text
                lastPage: '마지막', // Last page button text
                paginationPosition: 'bottom'  // default is bottom, top and both is all available
                // hideSizePerPage: true > You can hide the dropdown for sizePerPage
                // alwaysShowAllBtns: true // Always show next and previous button
                // withFirstAndLast: false > Hide the going to First and Last page button
            };

            studentDiv = (
                <BootstrapTable data={ tableStudentList } pagination={true} search={ true } options={ options }>
                    <TableHeaderColumn dataField='loginId' isKey={ true } dataSort={ true } className="table-info" dataAlign='center' caretRender={ getCaret }>학번 / 아이디 </TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataSort={ true } className="table-info" dataAlign='center' caretRender={ getCaret }>학생 이름 </TableHeaderColumn>
                    <TableHeaderColumn dataField='phone' className="table-info" dataAlign='center'>전화번호</TableHeaderColumn>
                    <TableHeaderColumn dataField='grade' dataSort={ true } className="table-info" dataAlign='center' caretRender={ getCaret }>학년 </TableHeaderColumn>
                    <TableHeaderColumn dataField='userId' dataFormat={this.cellButton.bind(this)} className="table-info" dataAlign='center'>수강 취소</TableHeaderColumn>
                </BootstrapTable>
            )
        } else{
            studentDiv = (
                <table class="table text-center">
                    <thead>
                    <tr className="table--info">
                        <th scope="col">학번 / 아이디</th>
                        <th scope="col">학생 이름</th>
                        <th scope="col">전화번호</th>
                        <th scope="col">학년</th>
                        <th scope="col">수강 취소</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan="5">강의 신청을 한 학생이 아직 존재하지 않습니다.</td>
                    </tr>
                    </tbody>
                </table>
            )
        }

        return (
            <div className="container">
                {subjectHTag}
                <h2 className="text-center">수강 인원 확인 및 관리</h2>
                <hr/>
                {studentDiv}
                <br/>
                <div class="alert alert-dismissible alert-info">
                    <p>⊙ 학생 수강 신청을 취소하게 되면 시험 봤던 기록까지 삭제 되오니 신중하게 확인하시길 바랍니다.</p>
                    <p>⊙ 연락처는 학생 수강 신청 확인을 위하여 남겼으니 오용하지 않도록 합니다.</p>
                    <p>⊙ 정렬은 학번, 이름, 학년을 통해 가능하고, 검색은 모든 요소 내에서 검색한 결과가 나옵니다.</p>
                </div>
            </div>
        )
    }
}
export default withRouter(AssignUpdate);
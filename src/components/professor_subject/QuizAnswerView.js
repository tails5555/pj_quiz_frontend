import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {professorUpdateScore, professorUpdateScoreSuccess, professorUpdateScoreFailure} from "../../actions/professor_quiz_action";
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {renderField, renderError} from '../form';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
function validate(values, props){
    var errors={};
    var hasErrors=false;
    var finalScore=0;
    var currentScore=0;
    let answerValidate = props.answerWithStudent.answerValidate;
    if(answerValidate.length>0){
        for(var k=0;k<answerValidate.length;k++){
            if(!answerValidate[k].bundled){
                if(answerValidate[k].tagName){
                    finalScore = finalScore + answerValidate[k].limitScore*1;
                    currentScore = currentScore + values[answerValidate[k].tagName]*1;
                    if(!values[answerValidate[k].tagName] || values[answerValidate[k].tagName].trim() === ''){
                        hasErrors = true;
                        errors[answerValidate[k].tagName] = '점수는 꼭 입력하셔야 합니다.'
                    } else if(isNaN(values[answerValidate[k].tagName])){
                        hasErrors = true;
                        errors[answerValidate[k].tagName] = '점수는 숫자로만 입력을 하셔야 됩니다.';
                    }
                    if(values[answerValidate[k].tagName]*1 > answerValidate[k].limitScore || values[answerValidate[k].tagName] < 0){
                        hasErrors = true;
                        errors[answerValidate[k].tagName] = `점수는 0점부터 ${answerValidate[k].limitScore}점까지 입력을 하셔야 됩니다.`;
                    }
                }
            }
        }
    }else{
        hasErrors = true;
        errors.submitConfirm = '아무 값도 입력을 하지 않았습니다.';
    }

    if(currentScore > finalScore){
        hasErrors = true;
        errors.submitConfirm = '점수 총합에 문제가 있습니다. 다시 계산을 진행해주세요.';
    }
    return hasErrors && errors;
}

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

const validateAndUpdateScore = (values, dispatch, props) => {
    let answerValidate = props.answerWithStudent.answerValidate;
    let studentNumber=props.answerWithStudent.answerObject.loginId;
    let scoringForm = [];
    for(var k=0;k<answerValidate.length;k++){
        if(!answerValidate[k].bundled){
            if(answerValidate[k].answered){
                scoringForm.push({
                    answerId : answerValidate[k].tagName.replace(/scoring/g,'')*1,
                    score : values[answerValidate[k].tagName]*1
                })
            }
        }
    }
    let token=sessionStorage.getItem('jwtToken');
    if (!token || token === '') return;
    return dispatch(professorUpdateScore(token, studentNumber, scoringForm)).then(result => {
        if (result.payload.response && result.payload.response.status !== 200) {
            dispatch(professorUpdateScoreFailure(result.payload.response.data));
            throw new SubmissionError(result.payload.response.data);
        }
        dispatch(professorUpdateScoreSuccess(result.payload));
    });
}

class QuizAnswerView extends Component{
    componentWillMount(){
        this.props.fetchStudentWithScore(this.props.match.params.id);
    }
    componentWillUnmount(){
        this.props.resetUpdateScore();
        this.props.resetFetchAnswerWithStudent();
        this.props.resetFetchStudentWithScore();
    }
    handleClickScoring(id){
        let isClick=window.confirm("시험지를 불러옵니다. 계속 진행하시겠습니까?");
        if(isClick){
            this.props.resetFetchAnswerWithStudent();
            this.props.fetchAnswerWithStudent(id, this.props.match.params.id);
        }
    }
    cellButton(userId) {
        return (
            <button
                className="btn btn-info"
                type="button"
                onClick={() =>
                    this.handleClickScoring(userId)}
            >
                <i class="fas fa-magic"></i> 답안과 채점 진행
            </button>
        )
    }
    render(){
        const {handleSubmit} = this.props;
        const {tableObject, tableLoading, tableError} = this.props.scoringTable;
        const {answerObject, answerLoading, answerError, answerValidate} = this.props.answerWithStudent;
        const {message, updateError} = this.props.updateScore;
        const {subject} = this.props.selectSubject;
        let title;
        let studentDiv;
        let answerDiv;
        let answerSubmit, answerCount=0, bundleCount=0;
        if(message){
            alert(message);
            this.props.reset();
            this.props.resetUpdateScore();
            this.props.resetFetchAnswerWithStudent();
            this.props.resetFetchStudentWithScore();
            this.props.fetchStudentWithScore(this.props.match.params.id);
        }else if(updateError){
            alert("점수 저장 중에 오류가 발생했습니다. 다시 시도해주시길 바랍니다.");
            this.props.reset();
            this.props.resetUpdateScore();
            this.props.resetFetchAnswerWithStudent();
            this.props.resetFetchStudentWithScore();
            this.props.fetchStudentWithScore(this.props.match.params.id);
        }
        if (tableLoading) {
            studentDiv = <h3 className="text-center">수강 학생들을 불러오는 중입니다...</h3>
        } else if (tableError) {
            studentDiv = <h3 className="text-center">수강 학생들을 불러오는 도중 에러가 발생했습니다.</h3>
        }
        if(tableObject){
            title = <h2 className="text-center">{tableObject.title} 채점</h2>
            if (tableObject.studentWithScore.length > 0) {
                let tableStudentList=[];
                for(let k=0;k<tableObject.studentWithScore.length;k++){
                    let tmpStudent=tableObject.studentWithScore[k];
                    let colStudent={
                        loginId : tmpStudent.loginId,
                        name : tmpStudent.userName,
                        grade : tmpStudent.gradeName,
                        userId : tmpStudent.id,
                        totalScore : tmpStudent.totalScore
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
                        <TableHeaderColumn dataField='grade' dataSort={ true } className="table-info" dataAlign='center' caretRender={ getCaret }>학년 </TableHeaderColumn>
                        <TableHeaderColumn dataField='totalScore' dataSort={ true } className="table-info" dataAlign='center' caretRender={ getCaret }>점수 </TableHeaderColumn>
                        <TableHeaderColumn dataField='userId' dataFormat={this.cellButton.bind(this)} className="table-info" dataAlign='center'>채점</TableHeaderColumn>
                    </BootstrapTable>
                )
            } else{
                studentDiv = (
                    <table class="table text-center">
                        <thead>
                        <tr className="table--info">
                            <th scope="col">학번 / 아이디</th>
                            <th scope="col">학생 이름</th>
                            <th scope="col">학년</th>
                            <th scope="col">점수</th>
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
        }
        if(answerLoading){
            answerDiv=<h3 className="text-center">답변을 불러오는 중입니다...</h3>
        }else if(answerError){
            answerDiv=<h3 className="text-center">답변을 불러오는 중 에러가 발생했습니다.</h3>
        }

        if(answerObject){
            let answerForm;
            if(answerValidate.length>0){
                for(var k=0;k<answerValidate.length;k++){
                    if(answerValidate[k].bundled){
                        bundleCount = bundleCount+1;
                    }else if(answerValidate[k].answered){
                        answerCount = answerCount+1;
                    }
                }
                if(answerCount === answerValidate.length-bundleCount){
                    answerSubmit=<div>
                        <Field name="submitConfirm" component={renderError} />
                        <button type="submit" className="btn btn-info btn-block"><i class="fas fa-edit"></i> 채점 완료</button>
                        <br/>
                    </div>;
                }else if(answerCount !== 0){
                    answerSubmit=<div>
                        <Field name="submitConfirm" component={renderError} />
                        <p className="text-center">참여하지 않은 나머지 문제들에 대해서는 기본 점수 부여 처리가 됩니다.</p>
                        <br/>
                        <button type="submit" className="btn btn-info btn-block"><i class="fas fa-edit"></i> 채점 완료</button>
                        <br/>
                    </div>
                }else{
                    answerSubmit=<div>
                        <p className="text-center">학생이 퀴즈에 참여하지 않음으로 기본 점수 부여 처리 되었습니다.</p>
                        <br/>
                    </div>
                }
            }
            if(answerObject.answerWithStudent.length>0){
                answerForm = answerObject.answerWithStudent.map((answer) => {
                    return(
                        <div key={answer.id}>
                            <div className="media">
                                <div className="media-left"><h2>{answer.no}&nbsp;</h2></div>
                                <div className="media-body">
                                    <div dangerouslySetInnerHTML={ {__html: answer.questionContext} }>
                                    </div>
                                </div>
                                <div className="media-right">
                                    {answer.fullScore>0 ?
                                        <p>[{answer.fullScore}점]</p> : <p>[보기 문제]</p>}
                                </div>
                            </div>
                            <br/><br/>
                            { answer.modelAnswer ?
                                <div>
                                    <div className="media">
                                        <div className="media-left"><h2>모범 답안&nbsp;</h2></div>
                                        <div className="media-body">
                                            <div dangerouslySetInnerHTML={ {__html: answer.modelAnswer} }>
                                            </div>
                                        </div>
                                    </div>
                                    <br/><br/>
                                </div>
                                : <div></div>
                            }
                            <div className="media">
                                <div className="media-left"><h2>학생 답안&nbsp;</h2></div>
                                <div className="media-body">
                                    <div dangerouslySetInnerHTML={ {__html: answer.studentAnswer} }>
                                    </div>
                                </div>
                            </div>
                            <br/><br/>
                            { !answer.bundled ?
                                <div>
                                    <div className="media">
                                        <div className="media-left"><h3>채점 점수&nbsp;&nbsp;</h3></div>
                                        <div className="media-body">
                                            <h3><strong>{answer.resultScore} 점</strong></h3>
                                        </div>
                                    </div>
                                    <br/><br/>
                                </div> : <div></div>
                            }
                            { answer.tagName ?
                                <div className="form-group">
                                    <Field
                                    name={answer.tagName}
                                    type="text"
                                    component={renderField}
                                    label="점수 부여"
                                    placeholder="점수를 입력하세요."
                                    />
                                </div> : <div></div>
                            }
                            <hr/>
                        </div>
                    )
                });
            }
            answerDiv = (
                <div>
                    <h2 className="text-center">{answerObject.title} 채점 진행</h2>
                    <hr/>
                    <div class="media">
                        <img class="mr-3" alt="profile"/>
                        <div class="media-body">
                            <h5 class="mt-0">{answerObject.loginId} </h5>
                            <h5 class="mt-0">{answerObject.userName}</h5>
                            <h5 class="mt-0">{answerObject.gradeName}</h5>
                            <h5 class="mt-0">{answerObject.phone}</h5>
                        </div>
                    </div>
                    <hr/>
                    <form onSubmit={handleSubmit(validateAndUpdateScore)}>
                        {answerForm}
                        {answerSubmit}
                    </form>
                </div>
            )
        }
        return(
            <div className="container">
                <h2 className="text-center">{subject.name}</h2>
                {title}
                <hr/>
                {studentDiv}
                <hr/>
                {answerDiv}
                <Link to="/professor/subject/quizScoring"><button className="btn btn-warning btn-block" type="button"><i class="fas fa-arrow-circle-left"></i> 이전으로</button></Link>
                <br/>
            </div>
        )
    }
}
export default reduxForm({
    form : 'scoringForm',
    validate
})(withRouter(QuizAnswerView));
import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import {renderQuill, renderError} from "../form";
import {studentCreateAnswerList, studentCreateAnswerListSuccess, studentCreateAnswerListFailure} from "../../actions/student_quiz_action";

function validate(values, props){
    var errors={};
    var hasErrors=false;
    let nameList = props.selectQuiz.nameList;
    if(nameList.length>0) {
        nameList.map((name) => {
            if (!values[name] || values[name].trim() === '') {
                errors[name] = '답안을 입력하시길 바랍니다.';
                hasErrors = true;
            }
        });
    }else{
        hasErrors = true;
        errors.submitConfirm = '아무 값도 입력을 하지 않았습니다.';
    }
    return hasErrors && errors;
}
const validateAndCreateAnswer = (values, dispatch, props) => {
    let nameList = props.selectQuiz.nameList;
    let answerForm = [];
    console.log(nameList);
    for(var k=0;k<nameList.length;k++){
        if(nameList[k]!==undefined){
            answerForm.push({
                questionId : nameList[k].replace(/answer/g,'')*1,
                context : values[nameList[k]]
            });
        }
    }
    let token=sessionStorage.getItem('jwtToken');
    if (!token || token === '') return;
    return dispatch(studentCreateAnswerList(token, answerForm)).then(result => {
        if (result.payload.response && result.payload.response.status !== 200) {
            dispatch(studentCreateAnswerListFailure(result.payload.response.data));
            throw new SubmissionError(result.payload.response.data);
        }
        dispatch(studentCreateAnswerListSuccess(result.payload));
    });
}
class SubjectQuizApplication extends Component{
    constructor(props){
        super(props);
        this.state = {currentTime : new Date()};
    }
    componentWillMount(){
        let id = this.props.match.params.id;
        this.props.fetchQuiz(id);
    }
    componentWillUnmount(){
        clearInterval(this.intervalID);
        this.props.resetCreateAnswerList();
        this.props.resetFetchQuiz();
    }
    componentDidMount(){
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    tick() {
        this.setState({
            currentTime: new Date()
        });
    }
    render(){
        const {handleSubmit} = this.props;
        const {subject} = this.props.selectSubject;
        let quizForm, quizTitle;
        const {quiz, loading, error} = this.props.selectQuiz;
        const {message, createError} = this.props.createAnswer;
        if(message){
            alert(message);
            clearInterval(this.intervalID);
            this.props.resetCreateAnswerList();
            this.props.resetFetchQuiz();
            this.props.history.push("/student/subject/quizApplication");
        }else if(createError){
            alert("답안을 올리는 도중 에러가 발생했습니다. 다시 시도하시길 바랍니다.");
            clearInterval(this.intervalID);
            this.props.resetCreateAnswerList();
            this.props.resetFetchQuiz();
            this.props.history.push("/student/subject/quizApplication");
        }
        if(loading){
            quizForm = <h2>퀴즈 목록을 불러오는 중입니다.</h2>
        } else if(error){
            quizForm = <h2>퀴즈 목록을 불러오는 중 에러가 발생했습니다.</h2>
        }
        if(quiz){
            let questionListForm = quiz.questionList.map((question) => {
                return(
                    <div key={question.id}>
                        <div class="media">
                            <div class="media-left"><h2>{question.no}&nbsp;</h2></div>
                            <div class="media-body">
                                <div dangerouslySetInnerHTML={ {__html: question.context} }>
                                </div>
                            </div>
                            <div class="media-right">
                                {!question.bundled ?
                                    <p>[{question.fullScore}점]</p> : <p>[보기 문제]</p>}
                            </div>
                        </div>
                        {!question.bundled ?
                            <div className="form-group">
                                <Field name={'answer'+question.id} size={200} component={renderQuill} />
                                <br/>
                                <br/>
                                <br/>
                            </div> : <br/>}
                        <hr/>
                    </div>
                )
            });
            quizForm = (
                <div>
                    <div className="progress">
                        <div className={`progress-bar progress-bar-striped ${(((quiz.limitedTime-this.state.currentTime.getTime()) / (quiz.limitedTime-quiz.startTime))*100) > 50 ? 'bg-success' : (((quiz.limitedTime-this.state.currentTime.getTime()) / (quiz.limitedTime-quiz.startTime))*100) > 10 ? 'bg-warning' : 'bg-danger'}`} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width : `${((quiz.limitedTime-this.state.currentTime.getTime()) / (quiz.limitedTime-quiz.startTime))*100}%`}}>
                        </div>
                    </div>
                    <p>{
                            `${new Date(quiz.limitedTime-this.state.currentTime.getTime()).getMinutes()}분 ${new Date(quiz.limitedTime-this.state.currentTime.getTime()).getSeconds()}초 남았습니다.`
                        }</p>
                    <hr/>
                    <form onSubmit={handleSubmit(validateAndCreateAnswer)}>
                        {questionListForm}
                        <Field name="submitConfirm" component={renderError} />
                        <div className="text-center">
                            <h3>퀴즈 작성을 완료하였으면 제출하기를 클릭하세요.</h3>
                            <button className="btn btn-info btn-block" type="submit"><i class="fas fa-share-square"></i> 제출하기</button>
                            <br/>
                            <Link to="/student/subject/quizApplication"><button className="btn btn-warning btn-block" type="button"><i class="fas fa-arrow-circle-left"></i> 이전으로</button></Link>
                        </div>
                    </form>
                </div>
            );
            quizTitle = <h2 className="text-center">{quiz.title}</h2>
            if(quiz.limitedTime-this.state.currentTime.getTime()<=0){
                alert("제한 시간이 다 되었습니다. 교수에게 보고하여 시간 연장을 하시길 바랍니다.");
                clearInterval(this.intervalID);
                this.props.resetCreateAnswerList();
                this.props.resetFetchQuiz();
                this.props.history.push("/student/subject/quizApplication");
            }
        }

        return(
            <div className="container">
                <h2 className="text-center">{subject.name} 과목</h2>
                {quizTitle}
                <hr/>
                <div class="row">
                    <div class="col-lg-12 mx-auto">
                        {quizForm}
                    </div>
                </div>
                <br/>
                <div className="text-center">
                    <h3>최종으로 작성한 답안에 대하여 한 번 더 확인하고 제출하시길 바랍니다.</h3>
                    <br/>
                    <table class="table table-bordered">
                        <tr>
                            <td className="table-primary">1</td>
                            <td>답안1</td>
                        </tr>
                        <tr>
                            <td className="table-primary">2</td>
                            <td>답안2</td>
                        </tr>
                        <tr>
                            <td className="table-primary">3</td>
                            <td>답안3</td>
                        </tr>
                        <tr>
                            <td className="table-primary">4</td>
                            <td>답안4</td>
                        </tr>
                        <tr>
                            <td className="table-primary">5</td>
                            <td>답안5</td>
                        </tr>
                    </table>
                </div>
                <br/>
                <div class="alert alert-dismissible alert-info">
                    <p>⊙ 퀴즈를 이미 제출하였으면 답변 수정은 불가능합니다.</p>
                    <p>⊙ 퀴즈 문제에 이상이 있으면 과목 마당을 통해서 이의 신청을 하시길 바랍니다.</p>
                    <p>⊙ 퀴즈 답안은 퀴즈가 끝나는 이후로 답안이 공개됩니다.</p>
                    <p>⊙ 퀴즈를 부정 행위하는 경우에는 성적에 불이익이 있을 수 있으니 지양하길 바랍니다.</p>
                </div>
                <br/>
            </div>
        )
    }
}
export default reduxForm({
    form : 'answerForm',
    validate
})(withRouter(SubjectQuizApplication));
import React, {Component} from 'react';
import {reduxForm, Field, FieldArray, SubmissionError} from 'redux-form';
import {renderQuill, renderField, renderQuestion} from "../form";
import {professorCreateQuiz, professorCreateQuizSuccess, professorCreateQuizFailure} from "../../actions/professor_quiz_action";
import {
    commonCreateServiceBBSPost, commonCreateServiceBBSPostFailure,
    commonCreateServiceBBSPostSuccess
} from "../../actions/common_serviceBBS_action";
function validate(values){
    var errors={};
    var hasErrors=false;
    var currentTime = new Date(new Date().getTime()+15*60*1000);
    var limitedTime = new Date(new Date().getTime()+7*24*60*60*1000);
    let score=0;
    if(!values.title || values.title.trim() === ''){
        errors.title='퀴즈 제목은 필수입니다.';
        hasErrors=true;
    }

    if(!values.fullScore || values.fullScore.trim() === ''){
        errors.fullScore='만점 기준은 필수입니다.';
        hasErrors=true;
    } else if(isNaN(values.fullScore)){
        errors.fullScore='만점은 수치로 입력하시길 바랍니다.';
        hasErrors=true;
    }

    if(!values.startTime || values.startTime === null){
        errors.startTime='시험 시작은 필수입니다.';
        hasErrors=true;
    }else if(new Date(values.startTime) < currentTime){
        errors.startTime='시험 시작은 현재 시점으로 15분 전으로 입력하시길 바랍니다.';
        hasErrors=true;
    }else if(new Date(values.startTime) > limitedTime){
        errors.startTime='시험 시작은 오늘 시점으로 1주일 범위 이내로 입력하시길 바랍니다.';
        hasErrors=true;
    }

    if(!values.limitedTime || values.limitedTime === null){
        errors.limitedTime='종료 시각은 필수입니다.';
        hasErrors=true;
    }else if(values.limitedTime<=values.startTime){
        errors.limitedTime='시험 시작과 종료 시각이 올바르지 않습니다.';
        hasErrors=true;
    }

    if(!values.context || values.context.trim() === ''){
        errors.context='퀴즈 내용은 필수입니다.';
        hasErrors=true;
    }

    if (!values.questionList || !values.questionList.length) {
        errors.questionList = { _error: '퀴즈를 추가하시고 진행을 해주시길 바랍니다. 최소 3문제까지 출제를 하셔야 합니다.' };
        hasErrors=true;
    }else if(values.questionList.length<3){
        errors.questionList = { _error: '퀴즈는 최소 3문제 등록이 가능합니다. 추가 진행을 해주시길 바랍니다.' };
        hasErrors=true;
    }else{
        const questionListErrors = [];
        values.questionList.forEach((question, index) => {
            const questionError = {};
            if(!question.no || question.no.trim() === ''){
                questionError.no='퀴즈 번호는 필수입니다.';
                questionListErrors[index] = questionError;
                hasErrors=true;
            }
            if(!question.context || question.context.trim() === ''){
                questionError.context='퀴즈 문제는 필수입니다.';
                questionListErrors[index] = questionError;
                hasErrors=true;
            }
            if(!question.bundled){
                if(!question.fullScore || question.fullScore.trim() === ''){
                    questionError.fullScore='배점은 필수입니다. 보기 문제인 경우에는 보기를 체크하세요.';
                    questionListErrors[index] = questionError;
                    hasErrors=true;
                }else if(isNaN(question.fullScore)){
                    questionError.fullScore='배점은 숫자로만 입력하세요.';
                    questionListErrors[index] = questionError;
                    hasErrors=true;
                }else{
                    let number=question.fullScore * 1;
                    score+=number;
                }
            }
            if (questionListErrors.length) {
                errors.questionList = questionListErrors
            }
        });
        if(score!==values.fullScore*1){
            errors.fullScore='만점 수치가 잘 못 계산되었습니다. 점수 배점을 다시 진행해주세요.';
            hasErrors=true;
        }
    }

    return hasErrors && errors;
}
const validateAndCreateQuiz = (values, dispatch) => {
    let token=sessionStorage.getItem('jwtToken');
    if (!token || token === '') return;
    let subDomain=sessionStorage.getItem('subjectDomain');
    if (!subDomain || subDomain === '') return;
    return dispatch(professorCreateQuiz(token, subDomain, values)).then(result => {
        if (result.payload.response && result.payload.response.status !== 200) {
            dispatch(professorCreateQuizFailure(result.payload.response.data));
            throw new SubmissionError(result.payload.response.data);
        }
        dispatch(professorCreateQuizSuccess(result.payload));
    });
}
class QuizCreate extends Component{
    componentWillUnmount(){
        this.props.reset();
        this.props.resetCreateQuiz();
    }
    render(){
        const {error, message} = this.props.createQuiz;
        const {handleSubmit} = this.props;
        if(message){
            alert(message);
            this.props.resetCreateQuiz();
            this.props.reset();
        }else if(error){
            alert("과목 내용 변경 중에 오류가 발생했습니다. 다시 시도하시길 바랍니다.");
            this.props.resetCreateQuiz();
            this.props.reset();
        }
        return(
            <div className="container">
                <h2 className="text-center">퀴즈 추가</h2>
                <hr/>
                <form onSubmit={handleSubmit(validateAndCreateQuiz)}>
                    <div className="form-group">
                        <Field
                            name='title'
                            type="text"
                            component={renderField}
                            label="퀴즈 제목"
                            placeholder="퀴즈 제목을 입력하세요."
                        />
                    </div>
                    <div className="form-group">
                        <Field
                            name='fullScore'
                            type="text"
                            component={renderField}
                            label="만점"
                            placeholder="만점 수치를 입력하세요."
                        />
                    </div>
                    <div className="form-group">
                        <Field
                            name='startTime'
                            type="datetime-local"
                            component={renderField}
                            label="퀴즈 시작 시간"
                        />
                    </div>
                    <div className="form-group">
                        <Field
                            name='limitedTime'
                            type="datetime-local"
                            component={renderField}
                            label="퀴즈 종료 시간"
                        />
                    </div>
                    <FieldArray name="questionList" component={renderQuestion} />
                    <br/>
                    <div className="text-center">
                        <p>퀴즈 등록이 완료 되었다면 등록 버튼을 클릭하시길 바랍니다.</p>
                        <button type="submit" className="btn btn-info btn-block"><i class="fas fa-edit"></i> 퀴즈 등록</button>
                    </div>
                </form>
                <br/>
                <div class="alert alert-dismissible alert-info">
                    <p>⊙ 퀴즈 추가 시간은 부정행위 방지를 위하여 현재 시점으로부터 15분 후에서부터 1주일 이내까지 등록이 가능합니다.</p>
                    <p>⊙ 문제는 최소 3문제부터 제시할 수 있습니다.</p>
                    <p>⊙ 시작 시간, 제한 시간(퀴즈 시작 이후 제외)은 퀴즈 수정시에 수정이 불가능하오니 신중하게 조정하시길 바랍니다.</p>
                    <p>⊙ 퀴즈 수정시에 배점 조정, 문제들 추가, 삭제는 퀴즈 시작 15분 전까지 가능합니다. 이후로는 문제 내용 수정, 제한 시간 연장 기능만 제공합니다.</p>
                    <p>⊙ 퀴즈 문제가 아니라 보기로 주어지는 경우에는 보기 문항 표시 기능을 통하여 체크를 하시면 됩니다.</p>
                    <p>⊙ 퀴즈 자체를 삭제하기 위해서는 퀴즈 수정 기능을 이용하시길 바랍니다.</p>
                </div>
                <br/>
            </div>
        );
    }
}
export default reduxForm({
    form : "quizCreateForm",
    validate
})(QuizCreate);

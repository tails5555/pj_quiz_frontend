import React, {Component} from 'react';
import {renderQuill} from '../form';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {
    professorUpdateSubjectContext, professorUpdateSubjectContextSuccess, professorUpdateSubjectContextFailure
} from "../../actions/professor_subject_action";
function validate(values){
    var errors={};
    var hasErrors=false;
    if(!values.context || values.context.trim() === ''){
        errors.context='과목 내용은 필수입니다.';
        hasErrors=true;
    }

    return hasErrors && errors;
}

const validateAndUpdateSubject = (values, dispatch) => {
    let token=sessionStorage.getItem('jwtToken');
    if (!token || token === '') return;
    let subDomain=sessionStorage.getItem('subjectDomain');
    if (!subDomain || subDomain === '') return;
    return dispatch(professorUpdateSubjectContext(token, subDomain, values)).then(result => {
        // Note: Error's "data" is in result.payload.response.data (inside "response")
        // success's "data" is in result.payload.data
        if (result.payload.response && result.payload.response.status !== 200) {
            dispatch(professorUpdateSubjectContextFailure(result.payload.response.data));
            throw new SubmissionError(result.payload.response.data);
        }
        dispatch(professorUpdateSubjectContextSuccess(result.payload));
    });
}

class SubjectInfoUpdate extends Component{
    handleReset(){
        this.props.reset();
    }
    render() {
        const {subject} = this.props.selectSubject;
        const {error, message} = this.props.updateSubject;
        const {handleSubmit} = this.props;
        if(message){
            alert(message);
            this.props.resetUpdateSubjectContext();
            this.props.loadSubjectFromServer();
        }else if(error){
            alert("과목 내용 변경 중에 오류가 발생했습니다. 다시 시도하시길 바랍니다.");
            this.props.resetUpdateSubjectContext();
            this.props.loadSubjectFromServer();
        }
        return (
            <div className="container">
                <h2 className="text-center">{subject.name}</h2>
                <h2 className="text-center">과목 정보 수정</h2>
                <hr/>
                <form onSubmit={handleSubmit(validateAndUpdateSubject)}>
                    <Field name="context" size={400} component={renderQuill} />
                    <br/><br/><br/>
                    <hr/>
                    <div className="text-center">
                        <p>과목 내용 수정을 완료하면 수정 버튼을 클릭하시길 바랍니다.</p>
                        <button type="button" onClick={() => this.handleReset()} className="btn btn-info btn-block"><i class="fas fa-redo"></i> 정보 초기화</button>
                        <br/>
                        <button type="submit" className="btn btn-primary btn-block"><i class="fas fa-save"></i> 정보 수정 내용 저장</button>
                    </div>
                </form>
                <br/>
                <div class="alert alert-dismissible alert-info">
                    <p>⊙ 과목 정보 수정시 과목 이름은 변경이 불가능하니 신중하게 구분해서 작성하시길 바랍니다.</p>
                    <p>⊙ 과목 소개 내용은 간략히 퀴즈 진행 시간 등으로 작성하시길 바랍니다.</p>
                    <p>⊙ 담당 과목을 잘 못 올린 경우에는 과목 삭제 요청을 위해 관리자에게 연락하시길 바랍니다.</p>
                </div>
                <br/>
            </div>
        );
    }
}
export default reduxForm({
    form : 'subjectUpdateForm',
    enableReinitialize : true
})(SubjectInfoUpdate);
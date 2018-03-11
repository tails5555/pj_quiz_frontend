import React, {Component} from 'react';
import {professorCreateSubject, professorCreateSubjectSuccess, professorCreateSubjectFailure} from "../../actions/professor_subject_action";
import {renderField, renderQuill} from "../form";
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {withRouter} from 'react-router-dom';
function validate(values){
    var errors={};
    var hasErrors=false;
    if(!values.name || values.name.trim() === ''){
        errors.name='과목 이름은 필수입니다.';
        hasErrors=true;
    }
    if(!values.subDomain || values.subDomain.trim() === ''){
        errors.subDomain='도메인 이름은 필수입니다.';
        hasErrors=true;
    }
    if(!values.context || values.context.trim() === ''){
        errors.context='과목 내용은 필수입니다.';
        hasErrors=true;
    }

    return hasErrors && errors;
}

const validateAndCreateSubject = (values, dispatch) => {
    let token=sessionStorage.getItem('jwtToken');
    if (!token || token === '') return;
    return dispatch(professorCreateSubject(token, values)).then(result => {
        // Note: Error's "data" is in result.payload.response.data (inside "response")
        // success's "data" is in result.payload.data
        if (result.payload.response && result.payload.response.status !== 200) {
            dispatch(professorCreateSubjectFailure(result.payload.response.data));
            throw new SubmissionError(result.payload.response.data);
        }
        dispatch(professorCreateSubjectSuccess(result.payload.data));
    });
}

class SubjectCreate extends Component {
    componentWillUnmount(){
        this.props.resetSubjectForm();
    }
    handleClickConfirm(){
        let subDomain=this.props.subjectForm.values && this.props.subjectForm.values.subDomain;
        if(subDomain !== undefined) {
            this.props.confirmSubDomain(subDomain);
        }
    }
    render() {
        const {isUnique, subject, error} = this.props.newSubject;
        const {handleSubmit} = this.props;
        let subDomainConfirm, onResult, confirmStyle;
        if(subject){
            alert(subject);
            this.props.history.push('/');
        }else if(error){
            alert(error);
            this.props.history.push('/');
        }
        if(isUnique===false){
            confirmStyle = {
                color : 'green',
                fontWeight : 'bold'
            };
            subDomainConfirm = (
                <div>
                    <p style={confirmStyle}>도메인 중복 확인이 완료되었습니다.</p>
                </div>
            );
            onResult = (
                <div className="text-center">
                    <p>과목 내용을 작성 완료하면 추가 버튼을 클릭하시길 바랍니다.</p>
                    <button type="submit" className="btn btn-info btn-block"><i class="fas fa-plus-square"></i> 과목 추가</button>
                </div>
            );
        }else if(isUnique===true){
            confirmStyle = {
                color : 'red',
                fontWeight : 'bold'
            };
            subDomainConfirm = (
                <div>
                    <p style={confirmStyle}>도메인이 중복됩니다.</p>
                </div>
            );
            onResult = (
                <div className="text-center">
                    <p>사용할 도메인을 다시 입력하시고 재확인을 진행하시길 바랍니다.</p>
                </div>
            );
        }else{
            subDomainConfirm = (
                <div>
                    <p>도메인 중복 확인을 진행하세요.</p>
                </div>
            );
            onResult = (
                <div className="text-center">
                    <p>도메인 중복 확인이 완료되면 등록 버튼이 나옵니다.</p>
                </div>
            );
        }

        return (
            <div className="container">
                <h2 className="text-center">담당 과목 추가</h2>
                <hr/>
                <form className="text-center" onSubmit={handleSubmit(validateAndCreateSubject)}>
                    <div className="form-group">
                        <div className="form-group">
                            <Field name="name" type="text" component={renderField} label="과목 이름" placeholder="과목 이름을 입력하세요." />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-group">
                            <Field name="subDomain" type="text" component={renderField} label="도메인 이름" placeholder="도메인은 중복되지 않도록 유의합니다." />
                            <button type="button" onClick={this.handleClickConfirm.bind(this)} className="btn btn-info btn-block"><i class="far fa-check-circle"></i> 중복 확인</button>
                        </div>
                    </div>
                    {subDomainConfirm}
                    <Field name="context" size={400} component={renderQuill} />
                    <br/>
                    <br/>
                    <hr/>
                    {onResult}
                </form>
                <br/>
                <div class="alert alert-dismissible alert-info">
                    <p>⊙ 담당 과목 추가 시 과목 이름은 변경이 불가능하니 신중하게 구분해서 작성하시길 바랍니다.</p>
                    <p>⊙ 과목 소개 내용은 간략히 퀴즈 진행 시간 등으로 작성하시길 바랍니다.</p>
                    <p>⊙ 과목 소개 내용은 추가할 시에 수정이 가능하니 참고하시길 바랍니다.</p>
                    <p>⊙ 담당 과목 이름은 분반을 구분해서 저장을 해주시길 바라겠습니다.</p>
                </div>
                <br/>
            </div>
        );
    }
}

export default reduxForm({
    form : 'subjectForm',
    validate
})(withRouter(SubjectCreate));
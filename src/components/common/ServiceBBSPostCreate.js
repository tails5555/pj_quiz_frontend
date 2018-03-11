import React, {Component} from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {commonCreateServiceBBSPost, commonCreateServiceBBSPostSuccess, commonCreateServiceBBSPostFailure, resetCommonCreateServiceBBSPost} from "../../actions/common_serviceBBS_action";
import {renderField, renderQuill} from '../form';
import {withRouter} from 'react-router-dom';
function validate(values){
    var errors={};
    var hasErrors=false;
    if(!values.title || values.title.trim() === ''){
        errors.title='게시판 제목은 필수입니다.';
        hasErrors=true;
    }
    if(!values.context || values.context.trim() === ''){
        errors.context='게시판 내용은 필수입니다.';
        hasErrors=true;
    }

    return hasErrors && errors;
}

const validateAndCreatePost = (values, dispatch) => {
    let token=sessionStorage.getItem('jwtToken');
    if (!token || token === '') return;
    return dispatch(commonCreateServiceBBSPost(token, values)).then(result => {
        // Note: Error's "data" is in result.payload.response.data (inside "response")
        // success's "data" is in result.payload.data
        if (result.payload.response && result.payload.response.status !== 200) {
            dispatch(commonCreateServiceBBSPostFailure(result.payload.response.data));
            throw new SubmissionError(result.payload.response.data);
        }
        dispatch(commonCreateServiceBBSPostSuccess(result.payload.data));
    });
}

class ServiceBBSPostCreate extends Component {
    componentWillMount(){
        this.props.fetchServiceBBSTitle();
    }
    componentWillUnmount(){
        this.props.resetFetchServiceBBSTitle();
        this.props.resetCreateServiceBBSForm();
    }
    render() {
        const {message, createError} = this.props.createPost;
        const {title, loading, error} = this.props.serviceBBSTitle;
        const {handleSubmit} = this.props;
        if(message){
            alert(message);
            this.props.history.push('/common/serviceBBS');
        }else if(createError){
            alert(createError);
            this.props.history.push('/common/serviceBBS');
        }
        let optionList;
        if(!loading && title.length>0){
            optionList=title.map((titleElement) => {
                return(
                    <option value={titleElement.id}>{titleElement.name}</option>
                )
            })
        }else if(error){
            alert("서비스 게시판 제목들을 불러오는데 문제가 발생했습니다.");
        }
        return (
            <div className="container text-center">
                <h2>서비스 게시물 등록</h2>
                <hr/>
                <form onSubmit={handleSubmit(validateAndCreatePost)}>
                    <div className="form-group">
                        <label className="text-center">게시판 선택</label>
                        <Field name="serviceBBSId" className="form-control" component="select">
                            {optionList}
                        </Field>
                    </div>
                    <div className="form-group">
                        <Field name="title" type="text" component={renderField} label="글 제목" placeholder="제목을 입력하세요." />
                    </div>
                    <Field name="context" size={400} component={renderQuill} />
                    <br/>
                    <br/>
                    <br/>
                    <hr/>
                    <div className="form-group">
                        <label for="bbsFile">게시판 등록 파일</label>
                        <input name="bbsFile" value='' id="bbsFile" type="file" className="form-control" />
                        <br/>
                        <h6 className="text-center">게시판 파일 등록은 선택입니다.</h6>
                    </div>
                    <ul class="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            파일 1
                            <a href="#"><span class="badge badge-primary badge-pill"><i class="fas fa-trash-alt"></i></span></a>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            파일 2
                            <a href="#"><span class="badge badge-primary badge-pill"><i class="fas fa-trash-alt"></i></span></a>
                        </li>
                    </ul>
                    <hr/>
                    <div className="text-center">
                        <p>게시물 등록이 완료 되었다면 등록 버튼을 클릭하시길 바랍니다.</p>
                        <button type="submit" className="btn btn-info btn-block"><i class="fas fa-edit"></i> 글 등록</button>
                    </div>
                </form>
                <br/>
            </div>
        );
    }
}

export default reduxForm({
    form : 'subjectForm',
    validate
})(withRouter(ServiceBBSPostCreate));
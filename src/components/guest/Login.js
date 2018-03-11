import React, {Component} from 'react';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import {renderField} from "../form";
import {loginUser, loginUserFailure, loginUserSuccess} from "../../actions/guest_action";
const validateAndLoginUser = (values, dispatch) => {
    return dispatch(loginUser(values))
        .then((result) => {
            if(result.payload.response && result.payload.response.status !=200){
                dispatch(loginUserFailure(result.payload.response.data));
                throw new SubmissionError(result.payload.response.data);
            }
            sessionStorage.setItem('jwtToken', result.payload.data);
            dispatch(loginUserSuccess(result.payload.data));
        })
}
class Login extends Component{
    render(){
        const {handleSubmit}=this.props;
        return(
            <div className="container">
                <div className="text-center">
                    <br/>
                    <form onSubmit={handleSubmit(validateAndLoginUser)}>
                        <h2>로그인</h2>
                        <hr/>
                        <div className="form-group">
                            <Field name="loginId" type="text" component={renderField} label="학번 / 아이디" placeholder="아이디를 입력하세요." />
                        </div>
                        <div className="form-group">
                            <Field name="password" type="password" component={renderField} label="비밀번호" placeholder="비밀번호를 입력하세요." />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-info btn-block"><i class="fas fa-sign-in-alt"></i> 로그인</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default reduxForm({
    form : 'loginForm'
})(Login);
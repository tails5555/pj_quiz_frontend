import React from 'react';
const FindPassword = () => {
    return(
        <div class="container">
            <div className="text-center">
                <br/>
                <form accept-charset="UTF-8" role="form" method="post" action="">
                    <h2>비밀번호 찾기 서비스</h2>
                    <hr/>
                    <div class="form-group">
                        <label for="loginId">학번 / 아이디</label>
                        <input name="loginId" id="loginId" value='' placeholder="학번 / 아이디 입력" type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="userName">이름</label>
                        <input name="userName" id="userName" value='' placeholder="비밀번호 입력" type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="e_mail">E-Mail</label>
                        <input name="password" id="e_mail" value='' placeholder="E-Mail 입력" type="email" class="form-control" />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-info btn-login-submit btn-block m-t-md" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    );
}
export default FindPassword;
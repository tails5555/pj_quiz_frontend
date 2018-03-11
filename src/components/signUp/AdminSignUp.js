import React, {Component} from 'react';
class AdminSignUp extends Component{
    render(){
        return(
            <form>
                <div className="text-center">
                    <br/>
                    <h3>관리자용 회원가입</h3>
                    <hr/>
                </div>
                <div className="form-group">
                    <label for="loginId">아이디</label>
                    <input name="loginId" value='' id="loginId" placeholder="아이디를 입력하세요." type="text" className="form-control" />
                    <br/>
                    <button className="btn btn-info btn-block">아이디 중복 확인</button>
                </div>
                <div className="form-group">
                    <label for="password">비밀번호</label>
                    <input name="password" value='' id="password" placeholder="비밀번호를 입력하세요." type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <label for="password_confirm">비밀번호 확인</label>
                    <input name="password_confirm" value='' id="password_confirm" placeholder="비밀번호를 다시 입력하세요." type="password" className="form-control w200" />
                </div>
                <div className="form-group">
                    <label for="name">이름</label>
                    <input name="name" value='' id="name" placeholder="이름을 입력하세요." type="text" className="form-control w200" />
                </div>
                <div className="form-group">
                    <label for="e_mail">E-Mail</label>
                    <input name="e_mail" value='' id="e_mail" placeholder="E-Mail를 입력하세요." type="text" className="form-control" />
                    <br/>
                    <button className="btn btn-info btn-block">이메일 중복 확인</button>
                </div>
                <div className="form-group">
                    <label for="nickname">닉네임</label>
                    <input name="nickname" value='' id="nickname" placeholder="닉네임을 입력하세요." type="text" className="form-control" />
                    <br/>
                    <button className="btn btn-info btn-block">닉네임 중복 확인</button>
                </div>
                <div className="form-group">
                    <label for="phoneNumber">전화번호</label>
                    <input name="phoneNumber" value='' id="phoneNumber" placeholder="전화번호를 입력하세요. 01000000000형식으로 입력바랍니다." type="text" className="form-control" />
                    <br/>
                    <button className="btn btn-info btn-block">전화번호 중복 확인</button>
                </div>
                <div className="form-group">
                    <label for="cityId">거주 지역</label>
                    <select name="cityId" id="cityId" value="" className="form-control">
                        <option value="1">서울특별시</option>
                        <option value="2">경기도</option>
                        <option value="3">인천광역시</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="password_in_school">관리자용 확인 암호 입력</label>
                    <input name="password_in_school" value='' id="password_in_school" placeholder="확인 암호를 입력하세요. 확인 암호는 관리자에게 연락하면 확인 이후 문자로 통보합니다." type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <label for="profile">프로필 사진</label>
                    <input name="profile" value='' id="profile" type="file" className="form-control" />
                    <h5 className="text-center">프로필 사진은 선택입니다.</h5>
                </div>
                <hr/>
                <h4>가입 양식을 모두 입력하였으면 가입 완료 버튼을 클릭하세요.</h4>
                <div className="form-group">
                    <button type="submit" className="btn btn-info btn-block"><i class="fas fa-user-plus"></i> 가입 완료</button>
                </div>
            </form>
        );
    }
}
export default AdminSignUp;
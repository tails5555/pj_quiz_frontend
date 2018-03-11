import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import profile from './img/doraemon.png';
class UserHeader extends Component{
    render(){
        const {subject} = this.props.selectSubject;
        let mainButton, subjectToken;
        let infoButton;
        if(subject) {
            if (this.props.currentUser.userType === '학생') {
                mainButton = <Link to={"/student/subjectList"}>
                    <button className="btn btn-info btn-lg" onClick={this.props.resetSelectSubject} type="button"><i
                        class="fab fa-microsoft"></i> 메인 페이지로
                    </button>
                </Link>
                subjectToken = <p className="lead">과목 이름 : {subject.name}</p>
            } else if (this.props.currentUser.userType === '교수') {
                mainButton = <Link to={"/professor/subjectAssignList"}>
                    <button className="btn btn-info btn-lg" onClick={this.props.resetSelectSubject} type="button"><i
                        class="fab fa-microsoft"></i> 메인 페이지로
                    </button>
                </Link>
                subjectToken = <p className="lead">과목 이름 : {subject.name}</p>
            }
        }else if(!subject){
            infoButton=<button className="btn btn-primary btn-lg" type="button"><i class="fas fa-user-circle"></i> 개인 정보 수정</button>;
        }
        return(
            <div>
                <br/>
                <br/>
                <div className="jumbotron text-center">
                    <div className="row">
                        <div className="col-md-4">
                            <img className="img-fluid img-thumbnail mx-auto d-block" width={200} height={200} src={profile} />
                            <br/>
                        </div>
                        <div className="col-md-8">
                            <h5 className="display-4">{this.props.currentUser.userName}님<br/>환영합니다.</h5>
                            <p className="lead">성공회대 퀴즈 관리 시스템으로 좋은 성적 관리를 부탁 드리겠습니다.</p>
                            <hr className="my-4"/>
                            <p className="lead">NickName : {this.props.currentUser.nickName}</p>
                            {subjectToken}
                            <div>
                                {infoButton}
                                {mainButton}
                                <br/><br/>
                                <Link to={"/common/logout"}><button className="btn btn-danger btn-lg" onClick={this.props.logout} type="button"><i class="fas fa-sign-out-alt"></i> 로그아웃</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserHeader;
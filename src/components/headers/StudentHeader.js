import React from 'react';
import profile from './img/doraemon.png';
const StudentHeader = () => {
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
                        <h5 className="display-4">학생님<br/>환영합니다.</h5>
                        <p className="lead">성공회대 퀴즈 관리 시스템으로 좋은 성적을 거두시길 바랍니다.</p>
                        <hr className="my-4"/>
                        <p>NickName : 도라야끼맛</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" href="#" role="button">개인 정보 수정</a>
                            &nbsp;&nbsp;
                            <a className="btn btn-primary btn-lg" href="#" role="button">로그아웃</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default StudentHeader;
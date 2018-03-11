import React from 'react';
import {Link} from 'react-router-dom';
const GuestMenu = () => {
    return(
        <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div class="container">
                <a href="../" class="navbar-brand">SKHU QUIZ MANAGER</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link className="nav-link" to="/">
                                <i class="fas fa-sign-in-alt"></i> 로그인
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/signUp">
                                <i class="fas fa-user-plus"></i> 회원 등록
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/findPassword">
                                <i class="fas fa-key"></i> 비밀번호 찾기
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/serviceInfo">
                                <i class="fas fa-info"></i> 서비스 안내
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/developerInfo">
                                <i class="fab fa-js-square"></i> 개발자 정보
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default GuestMenu;
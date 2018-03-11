import React from 'react';
import {Link} from 'react-router-dom';
const StudentSubjectMenu = () => {
    return(
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="../" className="navbar-brand">SKHU QUIZ MANAGER</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/student/subject/info">
                                <i class="fab fa-flipboard"></i> 과목정보
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/student/subject/quizApplication">
                                <i class="far fa-newspaper"></i> 퀴즈진행
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/student/subject/scoreConfirm">
                                <i class="far fa-chart-bar"></i> 성적확인
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/student/subject/anotherSubject">
                                <i class="fas fa-share-square"></i> 타 과목으로 이동
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default StudentSubjectMenu;
import React from 'react';
import {Link} from 'react-router-dom';
const ProfessorSubjectMenu = () => {
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
                            <Link className="nav-link" to="/professor/subject/assignUpdate">
                                <i class="fas fa-users"></i> 수강 인원 관리
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/professor/subject/infoUpdate">
                                <i class="far fa-edit"></i> 과목정보 수정
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/professor/subject/quizCreate">
                                <i class="far fa-copy"></i> 퀴즈 추가
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/professor/subject/quizUpdate">
                                <i class="far fa-chart-bar"></i> 퀴즈 수정
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/professor/subject/quizScoring">
                                <i class="fas fa-columns"></i> 퀴즈 채점
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
export default ProfessorSubjectMenu;
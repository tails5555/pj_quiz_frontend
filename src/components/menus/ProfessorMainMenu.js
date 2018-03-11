import React from 'react';
import {Link} from 'react-router-dom';
const ProfessorMainMenu = () => {
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
                            <Link className="nav-link" to="/professor/subjectAssignList">
                                <i className="fas fa-thumbtack"></i> 담당 과목 목록
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/professor/subjectCreate">
                                <i class="fas fa-map-signs"></i> 과목 추가
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/common/serviceBBS">
                                <i class="fas fa-list-alt"></i> 서비스 게시판
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/common/serviceCreate">
                                <i class="fas fa-pen-square"></i> 서비스 게시물 추가
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default ProfessorMainMenu;
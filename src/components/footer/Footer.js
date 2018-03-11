import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="container footer">
            <div class="row">
                <div class="col-md-4 footer_list">
                    <h4><i class="fa fa-fw fa-map-marker"></i> 학교 위치</h4>
                    <p class="lead mb-0">
                        <br/>(〒) 08359
                        <br/>서울시 구로구 연동로 320
                        <br/><i class="fa fa-fw fa-subway"></i> 1, 7호선 환승 온수역</p>
                </div>
                <div class="col-md-4 footer_list">
                    <h4><i class="fa fa-fw fa-globe"></i> 교내 사이트 이동</h4>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a target="_blank"
                               href="http://www.skhu.ac.kr">학교 홈페이지</a>
                            <span class="badge badge-primary badge-pill"><i class="fa fa-fw fa-university"></i></span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a target="_blank"
                               href="http://report.skhu.net">과제 제출 시스템</a>
                            <span class="badge badge-primary badge-pill"><i class="fas fa-pen-square"></i></span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a target="_blank"
                               href="https://goo.gl/rWVe2J">강의자료 모음터</a>
                            <span class="badge badge-primary badge-pill"><i class="far fa-sticky-note"></i></span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a target="_blank"
                               href="https://library.skhu.ac.kr">도서관 사이트</a>
                            <span class="badge badge-primary badge-pill"><i class="fas fa-book"></i></span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a target="_blank"
                               href="https://ecareer.skhu.ac.kr">E-Career 사이트</a>
                            <span class="badge badge-primary badge-pill"><i class="fas fa-address-card"></i></span>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4 footer_list">
                    <h4><i class="fa fa-fw fa-exclamation-circle"></i> 유의 사항</h4>
                    <p class="lead mb-0">
                        SKHU Quiz 관리 시스템은 성공회대 공식 어플이 아닙니다.
                        이용자들은 착오 없으시길 바라면서 어플리케이션에 문제 발생시 <a href="mailto:tails5555@naver.com">메일</a>로 주시면 해결해
                        드리겠습니다.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Footer;
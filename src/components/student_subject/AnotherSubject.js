import React, {Component} from 'react';
class AnotherSubject extends Component{
    render(){
        return(
            <div className="container">
                <h2 className="text-center">타 과목으로 이동하기</h2>
                <hr/>
                <table class="table text-center">
                    <thead class="thead-light">
                    <tr>
                        <th scope="col">신청 과목</th>
                        <th scope="col">교수 이름</th>
                        <th scope="col">신청 인원</th>
                        <th scope="col">접속 버튼</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">운영체제론</th>
                        <td>유상신</td>
                        <td>45</td>
                        <td>접속</td>
                    </tr>
                    <tr>
                        <th scope="row">Angular 프로젝트</th>
                        <td>이승진</td>
                        <td>50</td>
                        <td>접속</td>
                    </tr>
                    </tbody>
                </table>
                <hr/>
                <div class="alert alert-dismissible alert-info">
                    <p>⊙ 현재 수강 과목 목록은 현재 학생이 신청한 과목들에 대하여 나옵니다.</p>
                    <p>⊙ 추가로 신청하는 과목에 대해서는 과목 신청 메뉴를 통하여 신청을 하셔야 됩니다.</p>
                    <p>⊙ 수강 과목에 대하여 잘 못 신청한 경우에는 해당 과목 교수에게 연락을 취하여 조치하시길 바랍니다.</p>
                    <p>⊙ 이전 학기 과목 퀴즈 목록은 5년간 보관 되므로 좋은 곳에 활용하시길 바랍니다.</p>
                </div>
                <br/>
            </div>
        )
    }
}
export default AnotherSubject;
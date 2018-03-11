import React, {Component} from 'react';
import {StudentSignUp, ProfessorSignUp, AdminSignUp} from '../signUp';
class SignUp extends Component{
    render(){
        return(
            <div className="container">
                <div className="text-center">
                    <br/>
                    <form accept-charset="UTF-8" role="form" method="post" action="">
                        <h2>회원 등록</h2>
                        <hr/>
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link active show" data-toggle="tab" href="#student">학생 계정</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#professor">교수 / 조교 계정</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#admin">관리자 계정</a>
                            </li>
                        </ul>
                        <div id="myTabContent" class="tab-content">
                            <div class="tab-pane fade active show" id="student">
                                <StudentSignUp />
                            </div>
                            <div class="tab-pane fade" id="professor">
                                <ProfessorSignUp />
                            </div>
                            <div class="tab-pane fade" id="admin">
                                <AdminSignUp />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default SignUp;
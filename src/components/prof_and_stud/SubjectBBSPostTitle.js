import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
class SubjectBBSPostTitle extends Component{
    constructor(props){
        super(props);
        console.log(this.props.bbsURL);
    }
    render(){
        return(
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <NavLink className="nav-link" to={this.props.bbsURL+'/list/quizNotice/1'} activeClassName="nav-link active">퀴즈 공지사항</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="nav-link" to={this.props.bbsURL+'/list/scoreSuggest/1'} activeClassName="nav-link active">점수 이의 신청</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="nav-link" to={this.props.bbsURL+'/list/quizQ&A/1'} activeClassName="nav-link active">퀴즈 Q&A</NavLink>
                </li>
            </ul>
        )
    }
}
export default SubjectBBSPostTitle;
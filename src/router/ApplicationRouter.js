import React, {Component} from 'react';
import GuestRouter from './GuestRouter';
import {BrowserRouter} from 'react-router-dom';
import StudentRouter from "./StudentRouter";
import ProfessorRouter from "./ProfessorRouter";
import StudentSubjectRouter from './StudentSubjectRouter';
import ProfessorSubjectRouter from './ProfessorSubjectRouter';
class ApplicationRouter extends Component{
    componentWillMount(){
        this.props.loadUserFromServer();
    }
    componentDidMount(){
        this.props.loadSubjectFromServer();
    }
    componentWillUnmount(){
        console.log();
        this.props.resetUserFromServer();
    }
    render(){
        let currentRouter;
        if(!this.props.user.user){
            currentRouter=<GuestRouter />
        }else if(!this.props.selectSubject.subject){
            switch(this.props.user.user.userType){
                case '학생' :
                    currentRouter=<StudentRouter/>;
                    break;
                case '교수' :
                    currentRouter=<ProfessorRouter/>;
                    break;
            }
        }else{
            switch(this.props.user.user.userType){
                case '학생' :
                    currentRouter=<StudentSubjectRouter/>;
                    break;
                case '교수' :
                    currentRouter=<ProfessorSubjectRouter/>;
                    break;
            }
        }
        return(
            <BrowserRouter>
                {currentRouter}
            </BrowserRouter>
        )
    }
}
export default ApplicationRouter;
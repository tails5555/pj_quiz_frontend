import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {SubjectListPage, ServiceBBSPostContent, SubjectApplicationPage, ServiceBBS, ServiceBBSTitlePage, ServiceBBSPostListPage, ServiceBBSPostCreatePage} from '../pages/index';
import UserHeaderContainer from '../containers/UserHeaderContainer';
import StudentMainMenu from '../components/menus/StudentMainMenu';
import Footer from '../components/footer/Footer';
class StudentRouter extends Component{
    render(){
        return(
            <div>
                <StudentMainMenu />
                <UserHeaderContainer />
                <Route exact path="/" render={() => (<Redirect to="/student/subjectList" />)} />
                <Route exact path="/student/subjectApplication/redirect" render={() => (<Redirect to="/student/subjectApplication" />)} />
                <Route exact path="/student/subjectList" component={SubjectListPage}/>
                <Route exact path="/student/subjectApplication" component={SubjectApplicationPage}/>
                <Route exact path="/student/subjectApplication/application/:id" component={SubjectApplicationPage}/>
                <Route exact path="/common/serviceBBS" component={ServiceBBSTitlePage} />
                <Route exact path="/common/serviceBBS/:name" component={ServiceBBSPostListPage} />
                <Route exact path="/common/serviceBBS/:name/view/:id" component={ServiceBBSPostContent} />
                <Route exact path="/common/serviceCreate" component={ServiceBBSPostCreatePage} />
                <Route exact path="/common/logout" render={() => (<Redirect to="/" />)}/>
                <Footer />
            </div>
        );
    }
}
export default StudentRouter;
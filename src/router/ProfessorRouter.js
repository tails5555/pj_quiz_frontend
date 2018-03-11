import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {SubjectAssignListPage, ServiceBBSPostContent, SubjectCreatePage, ServiceBBS, ServiceBBSTitlePage, ServiceBBSPostListPage, ServiceBBSPostCreatePage} from '../pages/index';
import UserHeaderContainer from '../containers/UserHeaderContainer';
import ProfessorMainMenu from '../components/menus/ProfessorMainMenu';
import Footer from '../components/footer/Footer';
class ProfessorRouter extends Component{
    render(){
        return(
            <div>
                <ProfessorMainMenu />
                <UserHeaderContainer />
                <Route exact path="/" render={() => (<Redirect to="/professor/subjectAssignList" />)} />
                <Route exact path="/professor/subjectAssignList" component={SubjectAssignListPage}/>
                <Route exact path="/professor/subjectCreate" component={SubjectCreatePage}/>
                <Route exact path="/common/serviceBBS" component={ServiceBBSTitlePage} />
                <Route exact path="/common/serviceBBS/:name" component={ServiceBBSPostListPage} />
                <Route exact path="/common/serviceBBS/:name/view/:id" component={ServiceBBSPostContent} />
                <Route exact path="/common/serviceCreate" component={ServiceBBSPostCreatePage} />
                <Route exact path="/common/logout"/>
                <Footer />
            </div>
        );
    }
}
export default ProfessorRouter;
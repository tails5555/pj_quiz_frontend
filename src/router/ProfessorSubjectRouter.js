import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import UserHeaderContainer from '../containers/UserHeaderContainer';
import ProfessorSubjectMenu from '../components/menus/ProfessorSubjectMenu';
import Footer from '../components/footer/Footer';
import {
    AssignUpdatePage, SubjectInfoUpdatePage, SubjectBBS, SubjectBBSPostCreatePage, QuizCreatePage, QuizScoringListPage, QuizAnswerViewPage, QuizUpdateListPage
} from "../pages";
class ProfessorSubjectRouter extends Component {
    render() {
        return (
            <div>
                <ProfessorSubjectMenu/>
                <UserHeaderContainer />
                <Route exact path="/professor/subject/assignUpdate" component={AssignUpdatePage}/>
                <Route exact path="/professor/subject/infoUpdate" component={SubjectInfoUpdatePage}/>
                <Route exact path="/professor/subject/quizCreate" component={QuizCreatePage}/>
                <Route exact path="/professor/subject/quizUpdate" component={QuizUpdateListPage} />
                <Route exact path="/professor/subject/quizScoring" component={QuizScoringListPage} />
                <Route exact path="/professor/subject/quizScoring/:id" component={QuizAnswerViewPage} />
                <Footer />
            </div>
        );
    };
}
export default ProfessorSubjectRouter;
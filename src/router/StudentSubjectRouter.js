import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import UserHeaderContainer from '../containers/UserHeaderContainer';
import StudentSubjectMenu from '../components/menus/StudentSubjectMenu';
import Footer from '../components/footer/Footer';
import {
    StudentSubjectInfoPage, StudentQuizListPage, StudentQuizApplicationPage, StudentQuizConfirmPage,
    ScoreConfirmListPage, ScoreConfirmTotalPage, AnotherSubjectPage, SubjectBBS, SubjectBBSPostCreatePage
} from "../pages";
class StudentSubjectRouter extends Component {
    render() {
        return (
            <div>
                <StudentSubjectMenu/>
                <UserHeaderContainer />
                <Route exact path="/student/subject/info" component={StudentSubjectInfoPage}/>
                <Route exact path="/student/subject/quizApplication" component={StudentQuizListPage}/>
                <Route exact path="/student/subject/quizApplication/:id" component={StudentQuizApplicationPage}/>
                <Route exact path="/student/subject/quizApplication/confirm/:id" component={StudentQuizConfirmPage}/>
                <Route exact path="/student/subject/scoreConfirm" component={ScoreConfirmListPage} />
                <Route exact path="/student/subject/scoreConfirm/total/:id" component={ScoreConfirmTotalPage} />
                <Route exact path="/student/subject/anotherSubject" component={AnotherSubjectPage} />
                <Route exact path="/prof_and_stud/subjectBBS" component={SubjectBBS} />
                <Route exact path="/prof_and_stud/subjectBBS/list/:name/:pg" component={SubjectBBS} />
                <Route exact path="/prof_and_stud/subjectBBS/view/:name/:id/pg/:pg" component={SubjectBBS} />
                <Route exact path="/prof_and_stud/subjectBBS/create" component={SubjectBBSPostCreatePage} />
                <Footer />
            </div>
        );
    };
}
export default StudentSubjectRouter;
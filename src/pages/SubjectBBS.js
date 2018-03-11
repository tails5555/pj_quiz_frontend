import React, {Component} from 'react';
import {SubjectBBSPostList, SubjectBBSPostTitle, SubjectBBSPostView} from "../components/prof_and_stud";
import {Route, Switch} from 'react-router-dom';
class SubjectBBS extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container">
                <h2 className="text-center">과목 게시판</h2>
                <hr/>
                <SubjectBBSPostTitle bbsURL={'/prof_and_stud/subjectBBS'} />
                <Switch>
                    <Route exact path={'/prof_and_stud/subjectBBS'} component={() => {
                        return(
                            <div>
                                <br/>
                                <div class="alert alert-dismissible alert-success">
                                    <p>조회하고 싶은 게시판의 이름을 선택하셔서 열람하시길 바랍니다.</p>
                                </div>
                                <br/>
                            </div>
                        )
                    }} />
                    <Route path={'/prof_and_stud/subjectBBS/list/:name'} component={SubjectBBSPostList} />
                    <Route path={'/prof_and_stud/subjectBBS/view/:name/:id/pg/:pg'} component={SubjectBBSPostView} />
                </Switch>
            </div>
        )
    }
}
export default SubjectBBS;
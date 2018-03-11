import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class ScoreConfirmList extends Component{
    componentWillMount(){
        this.props.fetchScoreTitle();
    }
    componentWillUnmount(){
        this.props.resetFetchScoreTitle();
    }
    render(){
        const {titleList, loading, error} = this.props.scoreTitle;
        const {subject} = this.props.selectSubject;
        let quizListDiv;
        if(loading){
            quizListDiv = <h2>퀴즈 목록을 불어오는 중입니다.</h2>
        }else if(error){
            quizListDiv = <h2>퀴즈 목록을 불러오는 도중 에러가 발생했습니다.</h2>
        }
        if(titleList.length>0){
            quizListDiv = titleList.map((title) => {
                return(
                    <div className="col-md-4">
                        <div class="card bg-light bg-warning mb-3">
                            <div class="card-header">{title.title}</div>
                            <div class="card-body">
                                <h4 class="card-title">성적 결과</h4>
                                <h5 class="card-text"><strong>{title.totalScore}</strong> / {title.fullScore}</h5>
                                <Link to={`/student/subject/scoreConfirm/total/${title.id}`}><button className="btn btn-info" type="button"><i class="fas fa-search-plus"></i> 자세히</button></Link>
                            </div>
                        </div>
                    </div>
                )
            })
        }else{
            quizListDiv = (
                <div className="col-md-12">
                    <div class="card bg-light mb-3">
                        <div class="card-header">등록된 퀴즈가 없습니다.</div>
                        <div class="card-body">
                            <h4 class="card-title">성적은 퀴즈가 올라와야 확인이 가능합니다.</h4>
                        </div>
                    </div>
                </div>
            );
        }
        return(
            <div className="container">
                <h2 className="text-center">{subject.name}</h2>
                <h2 className="text-center">퀴즈 성적 확인</h2>
                <hr/>
                <div className="row text-center">
                    {quizListDiv}
                </div>
                <br/>
                <div class="alert alert-dismissible alert-success">
                    <p>⊙ 퀴즈 채점은 교수의 채점 과정을 거쳐야 성적이 나옵니다. 이 점 인지하고 있으시길 바랍니다.</p>
                    <p>⊙ 답안 미제출에 관련된 문제가 발생하는 경우에는 교수에게 연락을 취하여 조치하시길 바랍니다.</p>
                    <p>⊙ 퀴즈 성적은 학기 끝날 때까지 변동이 있으니 이 점을 이해하고 있으시길 바랍니다.</p>
                    <p>⊙ 퀴즈도 한 과목의 의무이기 때문에 성적 확인을 철저히 하여 성적에 불이익이 없으시길 바라겠습니다.</p>
                </div>
                <br/>
            </div>
        )
    }
}
export default ScoreConfirmList;
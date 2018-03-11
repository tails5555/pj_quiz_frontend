import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class StudentQuizList extends Component{
    componentWillMount(){
        this.props.fetchQuizList();
    }
    componentWillUnmount(){
        this.props.resetFetchQuizList();
    }
    render(){
        const {quizList, loading, error} = this.props.loadQuizList;
        const {subject} = this.props.selectSubject;
        let quizListCard;
        if(loading){
            quizListCard = <h2>퀴즈 목록을 불러오는 중입니다...</h2>
        }else if(error){
            quizListCard = <h2>퀴즈 목록을 불러오는 중 에러가 발생했습니다.</h2>
        }

        if(quizList.length>0){
            quizListCard = quizList.map((quiz) => {
                let quizButton, quizStyle;
                if(new Date()<new Date(quiz.startTime)){
                    quizButton = <h5>시작 시간 이후에<br/>가능합니다.</h5>
                    quizStyle = "card text-white bg-secondary mb-3";
                }else if(new Date()<new Date(quiz.limitedTime)){
                    quizStyle = "card text-white bg-primary mb-3";
                    if(!quiz.applicate) {
                        quizButton = <Link to={`/student/subject/quizApplication/${quiz.id}`}>
                            <button className="btn btn-info" type="button"><i class="fas fa-pencil-alt"></i> 퀴즈 진행하기
                            </button>
                        </Link>;
                    }else{
                        quizButton = <h5>퀴즈를 이미<br/>진행하셨습니다.</h5>
                    }
                }else{
                    quizStyle = "card text-white bg-info mb-3";
                    quizButton = <Link to={`/student/subject/quizApplication/confirm/${quiz.id}`}><button className="btn btn-secondary" type="button"><i class="fas fa-pencil-alt"></i> 정답 확인하기</button></Link>;
                }
                return(
                    <div className="col-md-4">
                        <div class={quizStyle}>
                            <div class="card-header">{quiz.title}</div>
                            <div class="card-body">
                                <h4 class="card-title">{quiz.fullScore}점 만점</h4>
                                <p class="card-text">{new Date(quiz.startTime).toLocaleString()}</p>
                                <p class="card-text">{new Date(quiz.limitedTime).toLocaleString()}</p>
                                {quizButton}
                            </div>
                        </div>
                    </div>
                );
            })
        }else{
            quizListCard = (
                <div className="col-md-12">
                    <div class="card text-white bg-primary mb-3">
                        <div class="card-header">등록된 퀴즈가 없습니다.</div>
                        <div class="card-body">
                            <h4 class="card-title">퀴즈가 올라오고 난 후에 볼 수 있습니다.</h4>
                        </div>
                    </div>
                </div>
            )
        }
        return(
            <div className="container text-center">
                <h2>{subject.name}</h2>
                <h2>퀴즈 목록</h2>
                <hr/>
                <div className="row">
                    {quizListCard}
                </div>
                <br/>
                <div class="alert alert-dismissible alert-success text-left">
                    <p>⊙ 퀴즈가 각각 올라오게 된다면 노랑색은 진행 시작 전, 초록색은 진행 가능, 파란색은 끝난 퀴즈로 보면 됩니다.</p>
                    <p>⊙ 답안 미제출에 관련된 문제가 발생하는 경우에는 교수에게 연락을 취하여 조치하시길 바랍니다.</p>
                    <p>⊙ 퀴즈 답안은 추후에 워드로 다운로드 받아서 시험 기간에 공부하는데 참고하시면 좋습니다.</p>
                    <p>⊙ 퀴즈도 한 과목의 의무이기 때문에 부정 행위는 지양하시길 바랍니다.</p>
                </div>
                <br/>
            </div>
        )
    }
}
export default StudentQuizList;
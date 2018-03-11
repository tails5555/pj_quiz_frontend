import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class QuizScoringList extends Component{
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
                quizStyle = "card text-white bg-info mb-3";
                quizButton = <Link to={`/professor/subject/quizScoring/${quiz.id}`}><button className="btn btn-secondary" type="button"><i class="fas fa-pencil-alt"></i> 채점하기</button></Link>;
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
                            <h4 class="card-title">퀴즈를 등록하시고 이용을 해주시길 바랍니다.</h4>
                        </div>
                    </div>
                </div>
            )
        }
        return(
            <div className="container text-center">
                <h2>{subject.name}</h2>
                <h2>채점 퀴즈 목록</h2>
                <hr/>
                <button className="btn btn-primary btn-block" type="button"><i class="fas fa-search-plus"></i> 퀴즈 전체 성적 확인</button>
                <br/>
                <div className="row">
                    {quizListCard}
                </div>
                <br/>
            </div>
        )
    }
}
export default QuizScoringList;
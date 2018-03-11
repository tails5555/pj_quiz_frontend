import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
class SubjectQuizConfirm extends Component{
    componentWillMount(){
        this.props.fetchQuizConfirm(this.props.match.params.id);
    }
    componentWillUnmount(){
        this.props.resetFetchQuizConfirm();
    }
    render(){
        const {answerObject, answerLoading, answerError} = this.props.answerWithStudent;
        let answerDiv;
        if(answerLoading){
            answerDiv = <h2>학생의 답안을 불러오는 중입니다...</h2>
        }else if(answerError){
            answerDiv = <h2>학생의 답안을 불러오는 도중 에러가 발생했습니다.</h2>
        }
        if(answerObject){
            let answerForm;
            if(answerObject.answerWithStudent.length>0){
                answerForm = answerObject.answerWithStudent.map((answer) => {
                    return(
                        <div key={answer.id}>
                            <div className="media">
                                <div className="media-left"><h2>{answer.no}&nbsp;</h2></div>
                                <div className="media-body">
                                    <div dangerouslySetInnerHTML={ {__html: answer.questionContext} }>
                                    </div>
                                </div>
                                <div className="media-right">
                                    {answer.fullScore>0 ?
                                        <p>[{answer.fullScore}점]</p> : <p>[보기 문제]</p>}
                                </div>
                            </div>
                            <br/><br/>
                            { answer.modelAnswer ?
                                <div>
                                    <div className="media">
                                        <div className="media-left"><h2>모범 답안&nbsp;</h2></div>
                                        <div className="media-body">
                                            <div dangerouslySetInnerHTML={ {__html: answer.modelAnswer} }>
                                            </div>
                                        </div>
                                    </div>
                                    <br/><br/>
                                </div>
                                : <div></div>
                            }
                            <div className="media">
                                <div className="media-left"><h2>학생 답안&nbsp;</h2></div>
                                <div className="media-body">
                                    <div dangerouslySetInnerHTML={ {__html: answer.studentAnswer} }>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            { !answer.bundled ?
                                <div>
                                    <div className="media">
                                        <div className="media-left"><h3>채점 점수&nbsp;&nbsp;</h3></div>
                                        <div className="media-body">
                                            <h3><strong>{answer.resultScore} 점</strong></h3>
                                        </div>
                                    </div>
                                    <br/><br/>
                                </div> : <div></div>
                            }
                            <hr/>
                        </div>
                    )
                });
            }
            answerDiv = (
                <div>
                    <h2 className="text-center">{answerObject.title} 결과와 답안지</h2>
                    <h4 class="text-center">시험이 종료된 관계로 정답을 올립니다.<br/>이를 확인하고 이의 신청이나 Q&A를 통해 질문하시길 바랍니다.</h4>
                    <hr/>
                    <div class="media">
                        <img class="mr-3" alt="profile"/>
                        <div class="media-body">
                            <h5 class="mt-0">{answerObject.loginId} </h5>
                            <h5 class="mt-0">{answerObject.userName}</h5>
                            <h5 class="mt-0">{answerObject.gradeName}</h5>
                            <h5 class="mt-0">{answerObject.phone}</h5>
                        </div>
                    </div>
                    <hr/>
                    {answerForm}
                </div>
            )
        }
        return(
            <div class="container">
                {answerDiv}
                <br/>
                <div className="text-center">
                    <button className="btn btn-info btn-block" type="button"><i class="fas fa-file-word"></i> 워드로 다운받기</button>
                    <br/>
                    <Link to="/student/subject/quizApplication"><button className="btn btn-warning btn-block" type="button"><i class="fas fa-arrow-circle-left"></i> 이전으로</button></Link>
                </div>
                <br/>
                <div class="alert alert-dismissible alert-info">
                    <p>⊙ 퀴즈 문제에 이상이 있으면 과목 마당을 통해서 이의 신청을 하시길 바랍니다.</p>
                    <p>⊙ 모범 답안에 문제가 있으면 교수에게 조치를 취하시길 바랍니다.</p>
                    <p>⊙ 채점이 잘 못된 경우에는 교수에게 보고하여 조치를 취하시길 바랍니다.</p>
                    <p>⊙ 답안 이상이 없지만 0점으로 처리된 경우는 부정행위로 감점되었습니다.</p>
                </div>
            </div>
        )
    }
}
export default withRouter(SubjectQuizConfirm);
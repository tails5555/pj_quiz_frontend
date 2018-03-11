import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
class ScoreConfirmTotal extends Component{
    componentWillMount(){
        this.props.fetchScoreWithNickName(this.props.match.params.id);
    }
    componentWillUnmount(){
        this.props.resetFetchScoreWithNickName();
    }
    render(){
        const {loading, error, scoreObject} = this.props.scoreWithNickName;
        let trList, title, avgScore=0, totalScore=0, maxScore=0;
        if(loading){
            trList = (
                <tr>
                    <td colSpan="2">성적을 불러오는 중입니다...</td>
                </tr>
            );
        }else if(error){
            trList = (
                <tr>
                    <td colSpan="2">성적을 불러오는 도중 에러가 발생했습니다.</td>
                </tr>
            );
        }
        if(scoreObject){
            title = <h2 className="text-center">{scoreObject.title}</h2>;
            if(scoreObject.nicknameWithScore.length>0){
                trList = scoreObject.nicknameWithScore.map((result) => {
                    totalScore += result.score * 1;
                    if(maxScore < result.score * 1){
                        maxScore = result.score * 1;
                    }
                    return (
                        <tr>
                            <td colSpan="3">{result.nickName}</td>
                            <td>{result.score}</td>
                        </tr>
                    )
                });
                avgScore = totalScore / scoreObject.nicknameWithScore.length;
            }
        }
        return(
            <div className="container">
                <h2 className="text-center">퀴즈 제목</h2>
                {title}
                <hr/>
                <table class="table text-center">
                    <thead>
                        <tr class="table-info">
                            <th scope="col" colSpan="3">별명</th>
                            <th scope="col">성적</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trList}
                        <tr>
                            <th scope="row" className="table-success">평균</th>
                            <td>{avgScore.toFixed(2)}</td>
                            <th scope="row" className="table-success">최고점</th>
                            <td>{maxScore}</td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <div className="text-center">
                    <Link to="/student/subject/scoreConfirm"><button className="btn btn-info btn-block" type="button"><i class="fas fa-arrow-circle-left"></i> 이전으로</button></Link>
                </div>
                <br/>
                <div class="alert alert-dismissible alert-success">
                    <p>⊙ 퀴즈 성적은 개인 정보를 보호하기 위하여 별명으로만 제공을 합니다. 이에 착오 없으시길 바랍니다.</p>
                    <p>⊙ 채점 결과에 이상이 있으시다면 각 과목 담당 교수에게 연락을 취하여 조치하시길 바랍니다.</p>
                    <p>⊙ 퀴즈 성적은 학기 끝날 때까지 변동이 있으니 이 점을 이해하고 있으시길 바랍니다.</p>
                    <p>⊙ 퀴즈도 한 과목의 의무이기 때문에 성적 확인을 철저히 하여 성적에 불이익이 없으시길 바라겠습니다.</p>
                </div>
                <br/>
            </div>
        )
    }
}
export default withRouter(ScoreConfirmTotal);
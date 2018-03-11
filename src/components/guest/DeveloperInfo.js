import React, {Component} from 'react';
class DeveloperInfo extends Component{
    render(){
        return(
            <div className="container">
                <br/>
                <h2 className="text-center">개발자 안내</h2>
                <hr/>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">개발자 정보</h5>
                                <h6 className="card-subtitle mb-2 text-muted">응~그림</h6>
                                <p className="card-text">응~내용</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">개발자 이름</h5>
                                <h6 className="card-subtitle mb-2 text-muted">개발자 전화번호</h6>
                                <p className="card-text">개발자 내용</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}
export default DeveloperInfo;
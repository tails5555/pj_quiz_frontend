import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
class ServiceBBSTitle extends Component{
    componentWillMount(){
        this.props.fetchServiceBBSTitle();
    }
    componentWillUnmount(){
        this.props.resetFetchServiceBBSTitle();
    }
    render(){
        const {title, loading, error}=this.props.serviceBBSTitle;
        let navList;
        if(loading){
            navList=(
                <div>
                    <p className="lead">게시판 목록을 불러오는 중입니다.</p>
                </div>
            )
        }
        if(error){
            navList=(
                <div>
                    <p className="lead">게시판 목록을 불러오는 도중 에러가 발생했습니다.</p>
                </div>
            )
        }
        if(title.length>0){
            navList=title.map((titleElement) => {
                let newUrl=`/common/serviceBBS/${titleElement.subDomain}`;
                return(
                    <div>
                        <Link to={newUrl}><button className="btn btn-primary btn-block"><i class="fas fa-bars"></i> {titleElement.name}</button></Link>
                        <br/>
                    </div>
                )
            })
        }else {
            navList = (
                <div>
                    <p className="lead">게시판 목록을 준비하는 중입니다.</p>
                </div>
            )
        }
        return(
            <div className="jumbotron text-center">
                <h1 className="display-3">서비스 게시판</h1>
                <p className="lead">아래 게시판 항목들을 클릭하면 해당 게시판으로 이동할 수 있습니다.</p>
                <hr className="my-4" />
                {navList}
            </div>
        )
    }
}
export default withRouter(ServiceBBSTitle);
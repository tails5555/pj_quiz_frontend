import React, {Component} from 'react';
import ServiceBBSTitleContainer from '../containers/ServiceBBSTitleContainer';
import {ServiceBBSPostList, ServiceBBSPostView} from "../components/common";
import {Route, Switch, Redirect} from 'react-router-dom';
class ServiceBBS extends Component{
    constructor(props){
        super(props);
        console.log(props.match.url);
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.history);
    }
    render(){
        return(
            <div className="container">
                <h2 className="text-center">서비스 게시판</h2>
                <hr/>
                <ServiceBBSTitleContainer />
                <Switch>
                    <Route exact path={'/common/serviceBBS'} component={() => {
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
                    <Route path={'/common/serviceBBS/:name'} component={ServiceBBSPostList} />
                    <Route path={'/common/serviceBBS/view/:name/:id/pg/:pg'} component={ServiceBBSPostView} />
                </Switch>
            </div>
        )
    }
}
export default ServiceBBS;
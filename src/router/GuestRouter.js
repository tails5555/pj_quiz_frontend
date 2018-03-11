import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {LoginPage, FindPasswordPage, SignUpPage, ServiceInfoPage, DeveloperInfoPage} from '../pages/index';
import GuestMenu from '../components/menus/GuestMenu';
import GuestHeader from '../components/headers/GuestHeader';
import Footer from '../components/footer/Footer';
class GuestRouter extends Component{
    render(){
        return(
            <div>
                <GuestMenu />
                <GuestHeader />
                <Route exact path="/common/logout" render={() => (<Redirect to="/" />)} />
                <Route exact path="/" component={LoginPage}/>
                <Route exact path="/signUp" component={SignUpPage} />
                <Route exact path="/findPassword" component={FindPasswordPage} />
                <Route exact path="/serviceInfo" component={ServiceInfoPage} />
                <Route exact path="/developerInfo" component={DeveloperInfoPage} />
                <Footer />
            </div>
        );
    }
}
export default GuestRouter;
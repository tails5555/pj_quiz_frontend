import React, {Component} from 'react';
import {Provider} from 'react-redux';
import ApplicationContainer from '../containers/ApplicationContainer';
import configureStore from '../store/configureStore';
const store=configureStore();
class ApplicationRoot extends Component{
    render(){
        return(
            <Provider store={store}>
                <ApplicationContainer />
            </Provider>
        )
    }
}
export default ApplicationRoot;
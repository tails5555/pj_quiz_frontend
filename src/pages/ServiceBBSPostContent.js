import React, {Component} from 'react';
import ServiceBBSPostViewContainer from '../containers/ServiceBBSPostViewContainer';
import ServiceBBSPostCommentContainer from '../containers/ServiceBBSPostCommentContainer';
class ServiceBBSPostContent extends Component{
    render(){
        return(
            <div>
                <ServiceBBSPostViewContainer/>
                <hr/>
                <ServiceBBSPostCommentContainer />
            </div>
        )
    }
}
export default ServiceBBSPostContent;

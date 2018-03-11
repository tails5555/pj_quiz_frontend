import React, {Component} from 'react';
class SubjectInfo extends Component{
    render(){
        const {subject, loading, error} = this.props.selectSubject;
        let subjectInfo;
        if(subject){
            let minHeight={
                minHeight : '400px'
            };
            subjectInfo = (
                <div className="container">
                    <h2 className="text-center">{subject.name}</h2>
                    <h2 className="text-center">과목 정보</h2>
                    <hr/>
                    <div>
                        <h3 className="text-center">담당 교수 소개</h3>
                        <hr/>
                        <div class="media">
                            <img class="mr-3" alt="profile"/>
                            <div class="media-body">
                                <h5 class="mt-0">{subject.profUser.person.name}</h5>
                                <h5 class="mt-0">{subject.profUser.person.phone}</h5>
                                <h5 class="mt-0">{subject.profUser.person.email}</h5>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div style={minHeight} dangerouslySetInnerHTML={ {__html: subject.context} }>
                    </div>
                    <hr/>
                </div>
            )
        }
        return(
            <div>
                {subjectInfo}
                <br/>
            </div>
        )
    }
}
export default SubjectInfo;
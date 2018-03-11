import {SubjectInfo} from '../components/student_subject';
import {connect} from 'react-redux';
function mapStateToProps(state){
    return{
        selectSubject : state.subject.selectSubject
    };
}

export default connect(mapStateToProps, null)(SubjectInfo);

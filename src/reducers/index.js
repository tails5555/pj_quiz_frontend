import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './reducer_user';
import SubjectListReducer from './reducer_subject_list';
import SubjectReducer from './reducer_subject';
import ServiceBBSReducer from './reducer_serviceBBS';
import QuizRender from './reducer_quiz';
const rootReducer = combineReducers({
    user : UserReducer,
    form : formReducer,
    subjects : SubjectListReducer,
    subject : SubjectReducer,
    serviceBBS : ServiceBBSReducer,
    quiz : QuizRender,
    timerId : null
});

export default rootReducer;
import React from 'react';
import StudentSubjectRouter from '../router/StudentSubjectRouter';
import {BrowserRouter} from 'react-router-dom';
const StudentSubjectRoot = () => {
    return(
        <BrowserRouter>
            <StudentSubjectRouter />
        </BrowserRouter>
    )
}
export default StudentSubjectRoot;
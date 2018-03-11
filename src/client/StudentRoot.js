import React from 'react';
import StudentRouter from '../router/StudentRouter';
import {BrowserRouter} from 'react-router-dom';
const StudentRoot = () => {
    return(
        <BrowserRouter>
            <StudentRouter />
        </BrowserRouter>
    )
}
export default StudentRoot;
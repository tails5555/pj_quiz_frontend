import React from 'react';
import ProfessorSubjectRouter from '../router/ProfessorSubjectRouter';
import {BrowserRouter} from 'react-router-dom';
const ProfessorSubjectRoot = () => {
    return(
        <BrowserRouter>
            <ProfessorSubjectRouter />
        </BrowserRouter>
    )
}
export default ProfessorSubjectRoot;
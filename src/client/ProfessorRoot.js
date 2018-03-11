import React from 'react';
import ProfessorRouter from '../router/ProfessorRouter';
import {BrowserRouter} from 'react-router-dom';
const ProfessorRoot = () => {
    return(
        <BrowserRouter>
            <ProfessorRouter />
        </BrowserRouter>
    )
}
export default ProfessorRoot;
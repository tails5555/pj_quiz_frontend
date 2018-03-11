import React from 'react';
import GuestRouter from '../router/GuestRouter';
import {BrowserRouter} from 'react-router-dom';
const GuestRoot = () => {
    return(
        <BrowserRouter>
            <GuestRouter />
        </BrowserRouter>
    )
}
export default GuestRoot;
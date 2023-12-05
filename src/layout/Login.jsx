import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Login = () => {
    return (
        <div>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Login;
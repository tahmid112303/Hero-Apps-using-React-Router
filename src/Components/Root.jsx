import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
            <Footer></Footer>
        </div>
    );
};

export default Root;
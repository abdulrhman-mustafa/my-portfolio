import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import MainContent from '../Components/MainContent';

const Layout = () => {
    return (
        <>
            <Sidebar></Sidebar>
            <div className="flex lg:hidden">
                <Outlet></Outlet>
            </div>
            <div className="lg:block hidden">
                <MainContent/>
            </div>
        </>
    );
}

export default Layout;

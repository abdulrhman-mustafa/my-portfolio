import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from './Sidebar';

const Layout = () => {
    return (
        <>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </>
    );
}

export default Layout;

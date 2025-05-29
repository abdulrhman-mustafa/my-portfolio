import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Sidebar from './Sidebar';
import AboutMe from './AboutMe';
import Projects from './Projects';

const Layout = () => {
    return (
        <>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </>
    );
}

export default Layout;

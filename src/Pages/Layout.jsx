import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import MainContent from '../Components/MainContent';
import { AnimatePresence } from 'motion/react';

const Layout = () => {
    return (
        <>
            <Sidebar></Sidebar>
            <div className="flex lg:hidden">
                <AnimatePresence mode="wait">
                    <Outlet></Outlet>
                </AnimatePresence>
            </div>
            <div className="lg:block hidden">
                <MainContent/>
            </div>
        </>
    );
}

export default Layout;

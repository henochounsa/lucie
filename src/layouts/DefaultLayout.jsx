import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Navbar } from '../components';
import { Footer } from '../components';
import UnauthenticatedLayout from './UnauthenticatedLayout';
import DashboardLayout from './DashboardLayout';
import './index.css';

function DefaultLayout() {
    const isLoggedIn =  localStorage.getItem('isLoggedIn');
    const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);

    return (
        <div className="default-layout">
            <Navbar />
            <div className="main-content">
                {isAuthenticated ? (
                    <DashboardLayout>
                        <Outlet />
                    </DashboardLayout>
                ) : (
                    <UnauthenticatedLayout>
                        <Outlet />
                    </UnauthenticatedLayout>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;

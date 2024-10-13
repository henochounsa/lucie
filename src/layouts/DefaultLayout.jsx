import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Navbar } from '../components';
import { Footer } from '../components';
import UnauthenticatedLayout from './UnauthenticatedLayout';
import DashboardLayout from './DashboardLayout';
import './index.css';

function DefaultLayout() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

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

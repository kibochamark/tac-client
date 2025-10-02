// app/dashboard/layout.tsx
'use client';
import React, { useState } from 'react';
import Sidebar from '../../components/layout/sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <div className="h-screen bg-gray-50 flex">
            {/* Sidebar - Fixed position */}
            <Sidebar
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />

            {/* Main content area - Scrollable */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-y-auto lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    )
}
export default DashboardLayout
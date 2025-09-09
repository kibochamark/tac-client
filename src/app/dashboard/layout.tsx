// app/dashboard/layout.tsx
'use client';
import React, { useState } from 'react'
import Sidebar from '../../components/layout/sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Mobile-first layout */}
            <div className="flex flex-col lg:flex-row">
                {/* Sidebar - Hidden on mobile by default, can be toggled */}
                <div className="lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
                    <Sidebar
                        isMobileMenuOpen={isMobileMenuOpen}
                        setIsMobileMenuOpen={setIsMobileMenuOpen}
                    />
                </div>

                {/* Main content area */}
                <div className="flex flex-col flex-1 lg:ml-64">

                    {/* Main content */}
                    <main className="flex-1 p-2 sm:p-4 lg:p-8 overflow-auto">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}
export default DashboardLayout
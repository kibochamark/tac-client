// app/dashboard/layout.tsx
'use client'


import React from 'react'
import DashboardHeader from '../components/header'
import Sidebar from '../components/layout/sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <DashboardHeader />
                <main className="flex-1 p-4 sm:p-6 overflow-auto">{children}</main>
            </div>
        </div>
    )
}

export default DashboardLayout

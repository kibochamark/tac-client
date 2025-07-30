// components/SidebarNavigation.tsx
import React from 'react'
import { BiCalendar, BiHome, BiUser } from 'react-icons/bi'
import { BsActivity } from 'react-icons/bs'
import { SidebarItem } from './sidebar-item'

interface SidebarNavigationProps {
    pathname: string
    isCollapsed: boolean
    isMobile: boolean
    onNavigate: (path: string) => void
}

export const navigationItems = [
    { id: 'dashboard', icon: BiHome, title: 'Dashboard', path: "/dashboard" },
    { id: 'patients', icon: BiUser, title: 'Patients', path: "/dashboard/patients", count: 24 },
    { id: 'events', icon: BsActivity, title: 'Events', path: "/dashboard/events", count: 3 },
    { id: 'appointments', icon: BiCalendar, title: 'Appointments', path: "/dashboard/appointments" }
]

export const SidebarNavigation = ({
    pathname,
    isCollapsed,
    isMobile,
    onNavigate
}: SidebarNavigationProps) => {
    const isNavItemActive = (itemPath: string): boolean => {
        if (itemPath === "/dashboard") {
            return pathname === "/dashboard"
        }
        return pathname === itemPath || pathname.startsWith(itemPath + '/')
    }

    return (
        <nav className="flex-1 p-2 space-y-1">
            {navigationItems.map(({ id, icon, title, path, count }) => (
                <SidebarItem
                    key={id}
                    id={id}
                    Icon={icon}
                    title={title}
                    path={path}
                    count={count}
                    isActive={isNavItemActive(path)}
                    isCollapsed={isCollapsed}
                    isMobile={isMobile}
                    onClick={onNavigate}
                />
            ))}
        </nav>
    )
}
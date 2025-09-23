// components/SidebarNavigation.tsx
import { Stack } from '@mantine/core'
import { BiCalendar, BiHome, BiUser } from 'react-icons/bi'
import { BsActivity } from 'react-icons/bs'
import { SidebarItem } from './sidebar-item'
import { PATHS } from '../lib/urls'

interface SidebarNavigationProps {
    pathname: string
    isCollapsed: boolean
    isMobile: boolean
    onNavigate: (path: string) => void
}

export const navigationItems = [
    { id: 'dashboard', icon: BiHome, title: 'Dashboard', path: PATHS.DASHBOARD },
    { id: 'patients', icon: BiUser, title: 'Patients', path: PATHS.PATIENTS, count: 24 },
    { id: 'events', icon: BsActivity, title: 'Events', path: PATHS.EVENTS, count: 3 },
    { id: 'appointments', icon: BiCalendar, title: 'Appointments', path: PATHS.APPOINTMENTS }
]

export const SidebarNavigation = ({
    pathname,
    isCollapsed,
    isMobile,
    onNavigate
}: SidebarNavigationProps) => {
    const isNavItemActive = (itemPath: string): boolean => {
        if (itemPath === PATHS.DASHBOARD) {
            return pathname === PATHS.DASHBOARD
        }
        return pathname === itemPath || pathname.startsWith(itemPath + '/')
    }

    return (
        <Stack gap="xs" p="xs" style={{ flex: 1 }}>
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
        </Stack>
    )
}
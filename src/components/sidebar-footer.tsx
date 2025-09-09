// components/SidebarFooter.tsx
import React from 'react'
import { NotificationButton } from './notification-button'
import { UserProfile } from './user-profile'
import { SignOutButton } from './sign-out-button'


interface SidebarFooterProps {
    isCollapsed: boolean
    isMobile: boolean
    onNavigate: (path: string) => void
    onSignOut: () => void
}

export const SidebarFooter = ({
    isCollapsed,
    isMobile,
    onNavigate,
    onSignOut
}: SidebarFooterProps) => {
    const user = {
        name: "Sarah Johnson",
        role: "Nurse",
        initials: "SJ"
    }

    return (
        <div className="p-2 border-t border-gray-200 space-y-1">
            <NotificationButton
                isCollapsed={isCollapsed}
                isMobile={isMobile}
                onClick={() => onNavigate('/dashboard/notifications')}
            />

            <UserProfile
                isCollapsed={isCollapsed}
                isMobile={isMobile}
                onClick={() => onNavigate('/dashboard/profile')}
                user={user}
            />

            <SignOutButton
                isCollapsed={isCollapsed}
                isMobile={isMobile}
                onSignOut={onSignOut}
            />
        </div>
    )
}

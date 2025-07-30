// components/NotificationButton.tsx
import React from 'react'
import { BiBell } from 'react-icons/bi'

interface NotificationButtonProps {
    isCollapsed: boolean
    isMobile: boolean
    onClick: () => void
    hasNotifications?: boolean
}

export const NotificationButton = ({
    isCollapsed,
    isMobile,
    onClick,
    hasNotifications = true
}: NotificationButtonProps) => {
    const baseBtnClasses = "w-full flex items-center rounded-full p-4 transition-all duration-200"
    const collapsed = (isCollapsed && !isMobile) ? 'justify-center' : 'space-x-3'

    return (
        <button
            onClick={onClick}
            className={`${baseBtnClasses} ${collapsed} text-gray-600 hover:bg-gray-100 hover:text-gray-900 relative`}
            title={(isCollapsed && !isMobile) ? 'Notifications' : undefined}
        >
            <BiBell className="w-5 h-5 flex-shrink-0" />
            {(!isCollapsed || isMobile) && <span className="text-sm font-medium flex-1 text-left">Notifications</span>}
            {hasNotifications && (
                <div className={`w-2 h-2 bg-red-500 rounded-full ${(isCollapsed && !isMobile) ? 'absolute -top-0.5 -right-0.5' : ''}`} />
            )}
        </button>
    )
}

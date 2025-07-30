// components/UserProfile.tsx
import React from 'react'

interface UserProfileProps {
    isCollapsed: boolean
    isMobile: boolean
    onClick: () => void
    user: {
        name: string
        role: string
        initials: string
    }
}

export const UserProfile = ({ isCollapsed, isMobile, onClick, user }: UserProfileProps) => {
    const collapsed = (isCollapsed && !isMobile) ? 'justify-center' : 'space-x-3'

    return (
        <div
            className={`flex items-center border border-gray-200 bg-white rounded-lg p-2 cursor-pointer hover:bg-gray-50 ${collapsed}`}
            onClick={onClick}
        >
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                {user.initials}
            </div>
            {(!isCollapsed || isMobile) && (
                <div className="min-w-0 ml-2">
                    <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user.role}</p>
                </div>
            )}
        </div>
    )
}

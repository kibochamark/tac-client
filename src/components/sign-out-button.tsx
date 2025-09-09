
// components/SignOutButton.tsx
import React from 'react'
import { BiLogOut } from 'react-icons/bi'

interface SignOutButtonProps {
    isCollapsed: boolean
    isMobile: boolean
    onSignOut: () => void
}

export const SignOutButton = ({ isCollapsed, isMobile, onSignOut }: SignOutButtonProps) => {
    const baseBtnClasses = "w-full flex items-center rounded-full p-4 transition-all duration-200"
    const collapsed = (isCollapsed && !isMobile) ? 'justify-center' : 'space-x-3'

    return (
        <button
            onClick={onSignOut}
            className={`${baseBtnClasses} ${collapsed} text-red-600 hover:bg-red-50`}
            title={(isCollapsed && !isMobile) ? 'Sign Out' : undefined}
        >
            <BiLogOut className="w-5 h-5 flex-shrink-0" />
            {(!isCollapsed || isMobile) && <span className="text-sm font-medium">Sign Out</span>}
        </button>
    )
}
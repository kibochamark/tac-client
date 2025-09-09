// components/SidebarItem.tsx
import React from 'react'
import type { IconType } from 'react-icons'

interface SidebarItemProps {
    id: string
    Icon: IconType
    title: string
    path: string
    count?: number
    isActive: boolean
    isCollapsed: boolean
    isMobile: boolean
    onClick: (path: string) => void
}

export const SidebarItem = ({
    Icon, title, count, path, isActive, isCollapsed, isMobile, onClick
}: SidebarItemProps) => {
    const baseBtnClasses = "w-full flex items-center rounded-full p-4 transition-all duration-200"
    const collapsed = (isCollapsed && !isMobile) ? 'justify-center' : 'space-x-3'

    return (
        <button
            onClick={() => onClick(path)}
            onKeyDown={(e) => e.key === 'Enter' && onClick(path)}
            tabIndex={0}
            className={`${baseBtnClasses} ${collapsed} ${isActive ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
            title={(isCollapsed && !isMobile) ? title : undefined}
        >
            <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : ''}`} />
            {(!isCollapsed || isMobile) && (
                <>
                    <span className="text-sm font-medium flex-1 text-left">{title}</span>
                    {count && (
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${isActive ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'}`}>
                            {count}
                        </span>
                    )}
                </>
            )}
        </button>
    )
}

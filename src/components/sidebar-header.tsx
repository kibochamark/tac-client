// components/SidebarHeader.tsx
import React from 'react'
import { BiChevronLeft, BiChevronRight, BiX } from 'react-icons/bi'
import { FaRegHeart } from 'react-icons/fa'

interface SidebarHeaderProps {
    isCollapsed: boolean
    isMobile: boolean
    toggleSidebar: () => void
    setIsMobileMenuOpen: (open: boolean) => void
}

export const SidebarHeader = ({
    isCollapsed,
    isMobile,
    toggleSidebar,
    setIsMobileMenuOpen
}: SidebarHeaderProps) => {
    return (
        <div className='flex items-center p-2 justify-between bg-white shadow-sm relative'>
            {!isMobile && (
                <button
                    onClick={toggleSidebar}
                    className="absolute -right-1 top-8 w-6 h-6 bg-white border rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 z-10"
                >
                    {isCollapsed ? <BiChevronRight className="w-4 h-4" /> : <BiChevronLeft className="w-4 h-4" />}
                </button>
            )}

            {isMobile && (
                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute right-2 top-2 w-8 h-8 bg-white border rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 z-10 lg:hidden"
                >
                    <BiX className="w-5 h-5" />
                </button>
            )}

            <div className="p-2 w-full">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        <FaRegHeart />
                    </div>
                    {(!isCollapsed || isMobile) && (
                        <div>
                            <h1 className="font-semibold text-sm text-gray-900">TAC System</h1>
                            <p className="text-xs text-gray-500">General Hospital</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

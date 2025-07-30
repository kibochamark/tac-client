// components/MobileMenuToggle.tsx
import React from 'react'
import { BiMenu, BiX } from 'react-icons/bi'

interface MobileMenuToggleProps {
    isMobileMenuOpen: boolean
    setIsMobileMenuOpen: (open: boolean) => void
}

export const MobileMenuToggle = ({ isMobileMenuOpen, setIsMobileMenuOpen }: MobileMenuToggleProps) => {
    return (
        <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 shadow-sm"
        >
            {isMobileMenuOpen ? <BiX className="w-5 h-5" /> : <BiMenu className="w-5 h-5" />}
        </button>
    )
}
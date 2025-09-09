// components/Sidebar.tsx (Main Component)
'use client'

import React, { useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { MobileMenuToggle } from '../mobile-menu-toggle'
import { SidebarHeader } from '../sidebar-header'
import { SidebarNavigation } from '../sidebar-navigation'
import { AddPatientButton } from '../add-patient-button'
import { SidebarFooter } from '../sidebar-footer'
import { useSidebar } from '@/hooks/useSidebar'
import { handleNavigation } from '@/lib/utils'

interface SidebarProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}

export const Sidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen }: SidebarProps) => {
  const { isCollapsed, isMobile, toggleSidebar } = useSidebar()
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (isMobileMenuOpen && isMobile) {
      const handleClickOutside = (e: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
          setIsMobileMenuOpen(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen, isMobile, setIsMobileMenuOpen])

  const onNavigate = (path: string) => {
    handleNavigation(path, router, isMobile, setIsMobileMenuOpen)
  }

  const onSignOut = () => {
    console.log('Signing out...')
    // Add your sign out logic here
  }

  return (
    <>
      <MobileMenuToggle
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {isMobile && isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" />
      )}

      <div
        ref={sidebarRef}
        className={`
          ${isMobile ? 'fixed' : 'relative'}
          h-screen bg-gray-50 border-r border-gray-200 flex flex-col transition-all duration-300 z-50
          ${isMobile
            ? `${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} w-64`
            : `${isCollapsed ? 'w-16' : 'w-64'}`
          }
        `}
      >
        <SidebarHeader
          isCollapsed={isCollapsed}
          isMobile={isMobile}
          toggleSidebar={toggleSidebar}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        <SidebarNavigation
          pathname={pathname}
          isCollapsed={isCollapsed}
          isMobile={isMobile}
          onNavigate={onNavigate}
        />

        <AddPatientButton
          isCollapsed={isCollapsed}
          isMobile={isMobile}
          onClick={() => onNavigate('/dashboard/patients/add')}
        />

        <SidebarFooter
          isCollapsed={isCollapsed}
          isMobile={isMobile}
          onNavigate={onNavigate}
          onSignOut={onSignOut}
        />
      </div>
    </>
  )
}

export default Sidebar
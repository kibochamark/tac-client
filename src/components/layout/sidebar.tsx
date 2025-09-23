// components/Sidebar.tsx (Main Component)
'use client'

import React, { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Paper, Stack, Box } from '@mantine/core'
import { MobileMenuToggle } from '../common'
import { SidebarHeader } from '../sidebar-header'
import { SidebarNavigation } from '../sidebar-navigation'
import { AddPatientButton } from '../add-patient-button'
import { NotificationButton } from '../notification-button'
import { NotificationsModal } from '../notifications-modal'
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
  const [isNotificationsModalOpen, setIsNotificationsModalOpen] = useState(false)
  const [isUserProfileModalOpen, setIsUserProfileModalOpen] = useState(false)

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

      <Paper
        ref={sidebarRef}
        style={{
          position: isMobile ? 'fixed' : 'relative',
          height: '100vh',
          width: isMobile ? '256px' : isCollapsed ? '64px' : '256px',
          transform: isMobile ? (isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)') : 'none',
          transition: 'all 0.3s ease',
          zIndex: 50,
        }}
        radius={0}
        withBorder
        className="flex flex-col"
      >
        <Stack gap={0} style={{ height: '100%' }}>
          <SidebarHeader
            isCollapsed={isCollapsed}
            isMobile={isMobile}
            toggleSidebar={toggleSidebar}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />

          <Box style={{ flex: 1 }}>
            <SidebarNavigation
              pathname={pathname}
              isCollapsed={isCollapsed}
              isMobile={isMobile}
              onNavigate={onNavigate}
            />
          </Box>

          <Stack gap="xs" p="xs">
            <AddPatientButton
              isCollapsed={isCollapsed}
              isMobile={isMobile}
              onClick={() => onNavigate('/dashboard/patients/add')}
            />

            <NotificationButton
              isCollapsed={isCollapsed}
              isMobile={isMobile}
              onOpenModal={() => setIsNotificationsModalOpen(true)}
              hasNotifications={true}
              count={5}
            />
          </Stack>

          <SidebarFooter
            isCollapsed={isCollapsed}
            isMobile={isMobile}
            onSignOut={onSignOut}
            isUserProfileModalOpen={isUserProfileModalOpen}
            setIsUserProfileModalOpen={setIsUserProfileModalOpen}
          />
        </Stack>
      </Paper>

      <NotificationsModal
        opened={isNotificationsModalOpen}
        onClose={() => setIsNotificationsModalOpen(false)}
      />
    </>
  )
}

export default Sidebar
'use client'

import React, { useState, useEffect } from 'react'
import {
  BiBell, BiCalendar, BiHome, BiLogOut, BiPlus, BiUser,
  BiChevronLeft, BiChevronRight, BiMenu, BiX
} from 'react-icons/bi'
import { BsActivity } from 'react-icons/bs'
import { FaRegHeart } from 'react-icons/fa'

const navigationItems = [
  { id: 'dashboard', icon: BiHome, title: 'Dashboard' },
  { id: 'patients', icon: BiUser, title: 'Patients', count: 24 },
  { id: 'events', icon: BsActivity, title: 'Events', count: 3 },
  { id: 'appointments', icon: BiCalendar, title: 'Appointments' }
]

interface SidebarProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}

const Sidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('dashboard')
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Close mobile menu when clicking outside or on item
  useEffect(() => {
    if (isMobileMenuOpen && isMobile) {
      const handleClickOutside = () => setIsMobileMenuOpen(false)
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen, isMobile, setIsMobileMenuOpen])

  const toggleSidebar = () => setIsCollapsed(!isCollapsed)

  const handleNavItemClick = (id: string) => {
    setActiveItem(id)
    if (isMobile) {
      setIsMobileMenuOpen(false)
    }
  }

  const baseBtnClasses = "w-full flex items-center rounded-full p-4 transition-all duration-200"
  const collapsed = (isCollapsed && !isMobile) ? 'justify-center' : 'space-x-3'

  const sidebarContent = (
    <>
      {/* Top Header */}
      <div className='flex items-center p-2 justify-between bg-white shadow-sm relative'>
        {/* Desktop collapse button */}
        {!isMobile && (
          <button
            onClick={toggleSidebar}
            className="absolute -right-1 top-8 w-6 h-6 bg-white border rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 z-10"
          >
            {isCollapsed ? <BiChevronRight className="w-4 h-4" /> : <BiChevronLeft className="w-4 h-4" />}
          </button>
        )}

        {/* Mobile close button */}
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

      {/* Navigation Items */}
      <nav className="flex-1 p-2 space-y-1">
        {navigationItems.map(({ id, icon: Icon, title, count }) => {
          const isActive = activeItem === id
          return (
            <button
              key={id}
              onClick={() => handleNavItemClick(id)}
              className={`
                ${baseBtnClasses} ${collapsed}
                ${isActive ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}
              `}
              title={(isCollapsed && !isMobile) ? title : undefined}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-white' : ''} flex-shrink-0`} />
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
        })}
      </nav>

      {/* Add Patient Button */}
      <div className="p-2">
        <button
          className={`${baseBtnClasses} ${collapsed} bg-gradient-to-r from-green-300 to-blue-500 via-cyan-500 hover:bg-green-700 text-white`}
          title={(isCollapsed && !isMobile) ? 'Add Patient' : undefined}
        >
          <BiPlus className="w-5 h-5 flex-shrink-0" />
          {(!isCollapsed || isMobile) && <span className="text-sm font-medium">Add Patient</span>}
        </button>
      </div>

      {/* Bottom Section */}
      <div className="p-2 border-t border-gray-200 space-y-1">
        {/* Notification */}
        <button
          className={`${baseBtnClasses} ${collapsed} text-gray-600 hover:bg-gray-100 hover:text-gray-900 relative`}
          title={(isCollapsed && !isMobile) ? 'Notifications' : undefined}
        >
          <BiBell className="w-5 h-5 flex-shrink-0" />
          {(!isCollapsed || isMobile) && <span className="text-sm font-medium flex-1 text-left">Notifications</span>}
          <div className={`w-2 h-2 bg-red-500 rounded-full ${(isCollapsed && !isMobile) ? 'absolute -top-0.5 -right-0.5' : ''}`} />
        </button>

        {/* User Info */}
        <div className={`flex items-center border border-gray-200 bg-white rounded-lg p-2 ${collapsed}`}>
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
            SJ
          </div>
          {(!isCollapsed || isMobile) && (
            <div className="min-w-0 ml-2">
              <p className="text-sm font-medium text-gray-900 truncate">Sarah Johnson</p>
              <p className="text-xs text-gray-500 truncate">Nurse</p>
            </div>
          )}
        </div>

        {/* Logout */}
        <button
          className={`${baseBtnClasses} ${collapsed} text-red-600 hover:bg-red-50`}
          title={(isCollapsed && !isMobile) ? 'Sign Out' : undefined}
        >
          <BiLogOut className="w-5 h-5 flex-shrink-0" />
          {(!isCollapsed || isMobile) && <span className="text-sm font-medium">Sign Out</span>}
        </button>
      </div>
    </>
  )

  return (
    <>
      {/* Mobile Menu Button - Fixed in header */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 shadow-sm"
      >
        {isMobileMenuOpen ? <BiX className="w-5 h-5" /> : <BiMenu className="w-5 h-5" />}
      </button>

      {/* Mobile Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" />
      )}

      {/* Sidebar */}
      <div
        className={`
          ${isMobile ? 'fixed' : 'relative'} 
          h-screen bg-gray-50 border-r border-gray-200 flex flex-col transition-all duration-300 z-50
          ${isMobile
            ? `${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} w-64`
            : `${isCollapsed ? 'w-16' : 'w-64'}`
          }
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {sidebarContent}
      </div>
    </>
  )
}
export default Sidebar
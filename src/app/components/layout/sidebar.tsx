'use client'

import React, { useState } from 'react'
import {
  BiBell, BiCalendar, BiHome, BiLogOut, BiPlus, BiUser,
  BiChevronLeft, BiChevronRight
} from 'react-icons/bi'
import { BsActivity } from 'react-icons/bs'
import { FaRegHeart } from 'react-icons/fa'

const navigationItems = [
  { id: 'dashboard', icon: BiHome, title: 'Dashboard' },
  { id: 'patients', icon: BiUser, title: 'Patients', count: 24 },
  { id: 'events', icon: BsActivity, title: 'Events', count: 3 },
  { id: 'appointments', icon: BiCalendar, title: 'Appointments' }
]

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('dashboard')

  const toggleSidebar = () => setIsCollapsed(!isCollapsed)

  const baseBtnClasses = "w-full flex items-center rounded-2xl p-4 transition-all duration-200"
  const collapsed = isCollapsed ? 'justify-center' : 'space-x-3'

  return (
    <div className={`relative bg-gray-50 border-r border-gray-200 flex flex-col transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      {/* Top Header */}
      <div className='flex items-center p-2 justify-between bg-white shadow-sm'>
        <button onClick={toggleSidebar} className="absolute -right-1 top-8 w-6 h-6 bg-white border rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 z-10">
          {isCollapsed ? <BiChevronRight className="w-6 h-6" /> : <BiChevronLeft className="w-6 h-6" />}
        </button>
        <div className="p-4 border-b w-full">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm"><FaRegHeart /></div>
            {!isCollapsed && (
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
              onClick={() => setActiveItem(id)}
              className={`
                ${baseBtnClasses} ${collapsed}
                ${isActive ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}
              `}
              title={isCollapsed ? title : undefined}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-white' : ''}`} />
              {!isCollapsed && (
                <>
                  <span className="text-sm font-medium flex-1 text-left truncate">{title}</span>
                  {count && (
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${isActive ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'}`}>
                      {count}
                    </span>
                  )}
                </>
              )}
              {isCollapsed && count && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {count > 9 ? '9+' : count}
                </div>
              )}
            </button>
          )
        })}
      </nav>

      {/* Add Patient Button */}
      <div className="p-2">
        <button
          className={`${baseBtnClasses} ${collapsed} bg-gradient-to-r from-green-300 to-blue-500 via-cyan-500 hover:bg-green-700 text-white`}
          title={isCollapsed ? 'Add Patient' : undefined}
        >
          <BiPlus className="w-5 h-5" />
          {!isCollapsed && <span className="text-sm font-medium">Add Patient</span>}
        </button>
      </div>

      {/* Bottom Section */}
      <div className="p-2 border-t border-gray-200 space-y-1">
        {/* Notification */}
        <button className={`${baseBtnClasses} ${collapsed} text-gray-600 hover:bg-gray-100 hover:text-gray-900 relative`} title={isCollapsed ? 'Notifications' : undefined}>
          <BiBell className="w-5 h-5" />
          {!isCollapsed && <span className="text-sm font-medium flex-1 text-left">Notifications</span>}
          <div className={`w-2 h-2 bg-red-500 rounded-full ${isCollapsed ? 'absolute -top-0.5 -right-0.5' : ''}`} />
        </button>

        {/* User Info */}
        <div className={`flex items-center border border-gray-200 bg-white rounded-lg p-2 ${collapsed}`}>
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">SJ</div>
          {!isCollapsed && (
            <div className="min-w-0 ml-2">
              <p className="text-sm font-medium text-gray-900 truncate">Sarah Johnson</p>
              <p className="text-xs text-gray-500 truncate">Nurse</p>
            </div>
          )}
        </div>

        {/* Logout */}
        <button className={`${baseBtnClasses} ${collapsed} text-red-600 hover:bg-red-50`} title={isCollapsed ? 'Sign Out' : undefined}>
          <BiLogOut className="w-5 h-5" />
          {!isCollapsed && <span className="text-sm font-medium">Sign Out</span>}
        </button>
      </div>
    </div>
  )
}

export default Sidebar

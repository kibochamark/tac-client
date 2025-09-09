// components/AddPatientButton.tsx
import React from 'react'
import { BiPlus } from 'react-icons/bi'

interface AddPatientButtonProps {
  isCollapsed: boolean
  isMobile: boolean
  onClick: () => void
}

export const AddPatientButton = ({ isCollapsed, isMobile, onClick }: AddPatientButtonProps) => {
  const baseBtnClasses = "w-full flex items-center rounded-full p-4 transition-all duration-200"
  const collapsed = (isCollapsed && !isMobile) ? 'justify-center' : 'space-x-3'

  return (
    <div className="p-2">
      <button
        onClick={onClick}
        className={`${baseBtnClasses} ${collapsed} bg-gradient-to-r from-green-300 to-blue-500 via-cyan-500 hover:bg-green-700 text-white`}
        title={(isCollapsed && !isMobile) ? 'Add Patient' : undefined}
      >
        <BiPlus className="w-5 h-5 flex-shrink-0" />
        {(!isCollapsed || isMobile) && <span className="text-sm font-medium">Add Patient</span>}
      </button>
    </div>
  )
}
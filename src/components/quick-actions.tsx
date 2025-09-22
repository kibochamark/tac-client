// components/Dashboard/QuickActions.tsx
'use client'

import { BiCalendar, BiPlus } from "react-icons/bi"
import { FiAlertCircle, FiZap } from "react-icons/fi"


const QuickActions = () => {
    const actions = [
        {
            title: 'Add Access Info',
            subtitle: 'Register new patient access',
            icon: BiPlus,
            color: 'bg-gradient-to-r from-blue-400 to-blue-500',
            hoverColor: 'hover:bg-blue-600',
            textColor: 'text-white'
        },
        {
            title: 'Log Event',
            subtitle: 'Report access complications',
            icon: FiAlertCircle,
            color: 'bg-gradient-to-r from-red-400 to-red-500',
            hoverColor: 'hover:bg-red-600',
            textColor: 'text-white'
        },
        {
            title: 'Schedule Appointment',
            subtitle: 'Book patient consultation',
            icon: BiCalendar,
            color: 'bg-gradient-to-r from-green-400 to-green-500',
            hoverColor: 'hover:bg-green-600',
            textColor: 'text-white'
        }
    ]

    return (
        <div className="space-y-3 sm:space-y-4 shadow-md hover:shadow-xl p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <FiZap className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Quick Actions</h3>
            </div>

            <div className="space-y-2 sm:space-y-3 px-2 sm:px-4">
                {actions.map((action, index) => (
                    <button
                        key={index}
                        className={`w-full ${action.color} ${action.hoverColor} ${action.textColor} rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3 transition-colors duration-200 shadow-sm`}
                    >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                            <action.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div className="text-left min-w-0 flex-1">
                            <div className="font-medium text-sm sm:text-base truncate">{action.title}</div>
                            <div className="text-xs sm:text-sm opacity-90 truncate">{action.subtitle}</div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default QuickActions
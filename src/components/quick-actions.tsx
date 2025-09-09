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
        <div className="space-y-4 shadow-md hover:shadow-xl p-6 rounded-2xl">
            <div className="flex items-center space-x-2 mb-6">


                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <FiZap className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            </div>

            <div className="space-y-3 px-4">
                {actions.map((action, index) => (
                    <button
                        key={index}
                        className={`w-full ${action.color} ${action.hoverColor} ${action.textColor} rounded-2xl p-4 flex items-center space-x-3 transition-colors duration-200 shadow-sm`}
                    >
                        <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                            <action.icon className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                            <div className="font-medium">{action.title}</div>
                            <div className="text-sm opacity-90">{action.subtitle}</div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default QuickActions
// components/Dashboard/CommonAccessEvents.tsx
'use client'

import { TbActivityHeartbeat } from "react-icons/tb"


const CommonAccessEvents = () => {
    const events = [
        {
            name: 'Bleeding',
            count: 8,
            severity: 'High',
            color: 'bg-red-500',
            textColor: 'text-red-700',
            bgColor: 'bg-orange-100',
            change: '↙12.5%',
            changeColor: 'text-green-600',
            progress: 80
        },
        {
            name: 'Infection',
            count: 3,
            severity: 'Critical',
            color: 'bg-red-600',
            textColor: 'text-red-700',
            bgColor: 'bg-red-100',
            change: '↙ 25.0%',
            changeColor: 'text-green-600',
            progress: 35
        },
        {
            name: 'Thrombosis',
            count: 5,
            severity: 'Medium',
            color: 'bg-orange-300',
            textColor: 'text-orange-700',
            bgColor: 'bg-yellow-200',
            change: '↗  15.0%',
            changeColor: 'text-red-600',
            progress: 55
        },
        {
            name: 'Stenosis',
            count: 12,
            severity: 'Medium',
            color: 'bg-orange-300',
            textColor: 'text-orange-700',
            bgColor: 'bg-yellow-200',
            change: '↗  8.3%',
            changeColor: 'text-red-600',
            progress: 95
        }
    ]

    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-200 p-4 my-6">
            <div className="flex items-center space-x-2 mb-6 ">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-300 to-red-400 rounded-full flex items-center justify-center">
                    <TbActivityHeartbeat className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Common Access Events</h3>
                <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-2xl text-sm font-medium">This Month</span>
            </div>

            <div className="space-y-6 px-4 py-2">
                {events.map((event, index) => (
                    <div key={index} className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className={`w-3 h-3 ${event.color} rounded-full`}></div>
                                <span className="font-medium text-gray-900">{event.name}</span>
                                <span className={`px-2 py-1 rounded-2xl text-xs font-medium ${event.bgColor} ${event.textColor}`}>
                                    {event.severity}
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-x-2">
                                <span className="font-bold text-gray-900 text-lg">{event.count}</span>
                                <span className={`text-sm ${event.changeColor}`}>
                                    {event.change}
                                </span>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className={`${event.color} h-2 rounded-full transition-all duration-300`}
                                style={{ width: `${event.progress}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommonAccessEvents
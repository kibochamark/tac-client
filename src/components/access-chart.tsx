// components/Dashboard/VascularAccessChart.tsx
'use client'

import { Badge } from "@mantine/core"
import { FiPieChart } from "react-icons/fi"
import { IoMdTrendingUp, IoMdTrendingDown } from "react-icons/io"

const data = [
    { name: 'AV Fistula', count: 45, percentage: 56.3, status: 'Optimal', color: 'bg-green-500', height: '140px', change: 5.2 },
    { name: 'AV Graft', count: 23, percentage: 28.8, status: 'Good', color: 'bg-orange-500', height: '90px', change: -2.1 },
    { name: 'Central Catheter', count: 12, percentage: 15.0, status: 'Monitoring', color: 'bg-red-500', height: '48px', change: -8.5 }
]

const VascularAccessChart = () => (
    <div className="bg-white rounded-lg p-2 sm:p-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2">
            <div className="flex items-center space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-300 to-blue-400 rounded-full flex items-center justify-center">
                    <FiPieChart className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Vascular Access Distribution</h3>
            </div>
            <Badge size="sm" variant="light" color="gray">Last updated: 7/25/2025</Badge>
        </div>

        {/* Chart Bars */}
        <div className="flex items-end justify-center space-x-1 sm:space-x-2 mb-6 sm:mb-8  lg:h-48">
            {data.map((item, i) => (
                <div key={i} className="flex flex-col items-center flex-1 max-w-16 sm:max-w-20">
                    <div
                        className={`${item.color} rounded-xl sm:rounded-2xl w-12 sm:w-16 lg:w-20 flex items-end justify-center text-white font-bold text-sm sm:text-base lg:text-lg pb-1 sm:pb-2`}
                        style={{ 
                            height: `clamp(60px, ${item.height}, 140px)`
                        }}
                    >
                        {item.count}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 text-center leading-tight">{item.name}</span>
                </div>
            ))}
        </div>

        {/* Legend */}
        <div className="space-y-2 sm:space-y-3">
            {data.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg gap-2">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className={`w-2 h-2 sm:w-3 sm:h-3 ${item.color} rounded-full flex-shrink-0`} />
                        <span className="font-medium text-gray-900 text-sm sm:text-base">{item.name}</span>
                        <span className="text-xs sm:text-sm text-gray-500">({item.status})</span>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                        <span className="font-bold text-gray-900 text-sm sm:text-base">{item.count}</span>
                        <span className="text-xs sm:text-sm text-gray-600">{item.percentage}%</span>
                        <div className="flex items-center space-x-1">
                            {item.change > 0 ? (
                                <IoMdTrendingUp className="w-3 h-3 text-green-600" />
                            ) : (
                                <IoMdTrendingDown className="w-3 h-3 text-red-600 transform scale-x-[-1]" />
                            )}
                            <span className={`text-xs sm:text-sm font-medium ${item.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {item.change > 0 ? `${item.change}%` : `${item.change * -1}%`}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)

export default VascularAccessChart

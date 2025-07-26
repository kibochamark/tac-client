// components/Dashboard/VascularAccessChart.tsx
'use client'

import { FiPieChart } from "react-icons/fi"

const data = [
    { name: 'AV Fistula', count: 45, percentage: 56.3, status: 'Optimal', color: 'bg-green-500', height: '140px', change: '↗ 5.2%' },
    { name: 'AV Graft', count: 23, percentage: 28.8, status: 'Good', color: 'bg-orange-500', height: '90px', change: '↙ 2.1%' },
    { name: 'Central Catheter', count: 12, percentage: 15.0, status: 'Monitoring', color: 'bg-red-500', height: '48px', change: '↙ 8.5%' }
]

const VascularAccessChart = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-300 to-blue-400 rounded-full flex items-center justify-center">
                    <FiPieChart className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Vascular Access Distribution</h3>
            </div>
            <span className="text-sm text-gray-500">Last updated: 7/25/2025</span>
        </div>

        {/* Chart Bars */}
        <div className="flex items-end justify-center space-x-4 mb-8 h-48">
            {data.map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                    <div
                        className={`${item.color} rounded-2xl w-20 flex items-end justify-center text-white font-bold text-lg pb-2`}
                        style={{ height: item.height }}
                    >
                        {item.count}
                    </div>
                    <span className="text-sm text-gray-600 mt-2">{item.name}</span>
                </div>
            ))}
        </div>

        {/* Legend */}
        <div className="space-y-3">
            {data.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 ${item.color} rounded-full`} />
                        <span className="font-medium text-gray-900">{item.name}</span>
                        <span className="text-sm text-gray-500">({item.status})</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="font-bold text-gray-900">{item.count}</span>
                        <span className="text-sm text-gray-600">{item.percentage}%</span>
                        <span className={`text-sm ${item.change.includes('↗') ? 'text-green-600' : 'text-red-600'}`}>
                            {item.change}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </div>
)

export default VascularAccessChart

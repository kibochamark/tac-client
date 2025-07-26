import React from 'react';
import { BiBed, BiCalendar, BiUser } from "react-icons/bi";
import { FiAlertTriangle } from "react-icons/fi";

const StatsCards = () => {
    const stats = [
        {
            title: "Dialysis Access Failures",
            value: "3",
            subtitle: "Critical events today",
            change: "12.3% from last month",
            changeType: "decrease",
            icon: FiAlertTriangle,
            titleColor: "text-red-600",
            valueColor: "text-gray-900",
            subtitleColor: "text-red-500",
            changeColor: "text-red-500",
            iconBg: "bg-red-100",
            iconColor: "text-red-600",
            hoverBg: "hover:bg-red-50/50"
        },
        {
            title: "Appointments Today",
            value: "24",
            subtitle: "Scheduled consultations",
            change: "3.4% from last month",
            changeType: "increase",
            icon: BiCalendar,
            titleColor: "text-gray-700",
            valueColor: "text-gray-900",
            subtitleColor: "text-gray-500",
            changeColor: "text-green-500",
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
            hoverBg: "hover:bg-green-50/30"
        },
        {
            title: "OPD Today",
            value: "89",
            subtitle: "Outpatient visits",
            change: "8.2% from last month",
            changeType: "increase",
            icon: BiUser,
            titleColor: "text-gray-700",
            valueColor: "text-gray-900",
            subtitleColor: "text-gray-500",
            changeColor: "text-green-500",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            hoverBg: "hover:bg-blue-50/30"
        },
        {
            title: "In-Patient Today",
            value: "45",
            subtitle: "Current admissions",
            change: "2.1% from last month",
            changeType: "decrease",
            icon: BiBed,
            titleColor: "text-gray-700",
            valueColor: "text-gray-900",
            subtitleColor: "text-gray-500",
            changeColor: "text-red-500",
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600",
            hoverBg: "hover:bg-purple-50/30"
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
            {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                    <div
                        key={index}
                        className={`
                            group bg-white rounded-2xl border border-gray-200 p-6 transition-all duration-200 
                            hover:shadow-lg hover:border-gray-300 cursor-pointer ${stat.hoverBg}
                        `}
                    >
                        {/* Header with title and icon */}
                        <div className=" flex items-center justify-between mb-4">
                            <div >
                            <h3 className={`text-sm font-medium ${stat.titleColor} leading-tight`}>
                                {stat.title}
                            </h3>

                            <span className={`text-4xl font-bold ${stat.valueColor} block leading-none`}>
                                {stat.value}
                            </span>
                            <p className={`text-sm font-medium ${stat.subtitleColor} mb-3`}>
                                {stat.subtitle}
                            </p>
                            {/* Change indicator */}
                            <div className="flex items-center">
                                <span className={`text-sm font-medium ${stat.changeColor} flex items-center`}>
                                    <span className="mr-1">
                                        {stat.changeType === 'increase' ? '↗' : '↙'}
                                    </span>
                                    {stat.change}
                                </span>
                            </div>
                            </div>
                        <div className={`${stat.iconBg} p-2 rounded-lg shadow-md flex-shrink-0 ml-3`}>
                            <Icon className={`w-5 h-5 ${stat.iconColor}`} />
                        </div>
                        </div>

                    </div>
                );
            })}
        </div>
    );
};

export default StatsCards;
// components/Badge.tsx
import React from 'react'

interface BadgeProps {
    count: number
    variant?: 'notification' | 'default'
}

const Badge = ({ count, variant = 'default' }: BadgeProps) => {
    return (
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            variant === 'notification' 
                ? 'bg-red-100 text-red-800' 
                : 'bg-gray-100 text-gray-800'
        }`}>
            {count}
        </span>
    )
}

interface ActiveBadgeProps {
    isActive: boolean
}

const ActiveBadge = ({ isActive }: ActiveBadgeProps) => {
    if (!isActive) return null
    
    return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Active
        </span>
    )
}

export default Badge
export { ActiveBadge }

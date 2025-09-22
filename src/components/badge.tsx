// components/Badge.tsx
import React from 'react'

interface BadgeProps {
  count: number
  variant?: 'default' | 'notification' | 'active' | 'inactive'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const Badge = ({ 
  count, 
  variant = 'default', 
  size = 'sm',
  className = ''
}: BadgeProps) => {
  const baseClasses = "rounded-full font-medium flex-shrink-0"
  
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-1",
    lg: "text-base px-3 py-1.5"
  }
  
  const variantClasses = {
    default: "bg-gray-100 text-gray-800",
    notification: "bg-red-100 text-red-800",
    active: "bg-blue-100 text-blue-800",
    inactive: "bg-gray-200 text-gray-600"
  }
  
//   const activeVariantClasses = {
//     default: "bg-white/20 text-white",
//     notification: "bg-red-200/30 text-white",
//     active: "bg-white/20 text-white",
//     inactive: "bg-white/20 text-white"
//   }
  
  return (
    <span 
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {count}
    </span>
  )
}

export const ActiveBadge = ({ 
  count, 
  size = 'sm',
  className = ''
}: Omit<BadgeProps, 'variant'>) => {
  const baseClasses = "rounded-full font-medium flex-shrink-0"
  
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-1",
    lg: "text-base px-3 py-1.5"
  }
  
  return (
    <span 
      className={`${baseClasses} ${sizeClasses[size]} bg-white/20 text-white ${className}`}
    >
      {count}
    </span>
  )
}

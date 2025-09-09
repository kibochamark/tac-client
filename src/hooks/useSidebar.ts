// hooks/useSidebar.ts
import { useState, useEffect } from 'react'

export const useSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const collapsed = localStorage.getItem('sidebar-collapsed') === 'true'
      setIsCollapsed(collapsed)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('sidebar-collapsed', String(isCollapsed))
    }
  }, [isCollapsed])

  const toggleSidebar = () => setIsCollapsed(!isCollapsed)

  return {
    isCollapsed,
    isMobile,
    toggleSidebar
  }
}

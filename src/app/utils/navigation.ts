
// utils/navigation.ts
export const isNavItemActive = (itemPath: string, pathname: string): boolean => {
  if (itemPath === "/dashboard") {
    return pathname === "/dashboard"
  }
  return pathname === itemPath || pathname.startsWith(itemPath + '/')
}

export const handleNavigation = (
  path: string,
  router: { push: (path: string) => void },
  isMobile: boolean,
  setIsMobileMenuOpen: (open: boolean) => void
) => {
  try {
    router.push(path)
    if (isMobile) {
      setIsMobileMenuOpen(false)
    }
  } catch (error) {
    console.error('Navigation error:', error)
    window.location.href = path
  }
}


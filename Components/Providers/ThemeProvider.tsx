'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

// Use the same Theme type as the rest of your app
type Theme = 'matrix' | 'lcars' | 'klingon' | 'borg' | 'light'

interface ThemeContextType {
  theme: Theme
  cycleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'matrix'
}) => {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  // Theme order for cycling
  const themes: Theme[] = ['matrix', 'lcars', 'klingon', 'borg', 'light']

  // Load theme on mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Update document when theme changes
  useEffect(() => {
    if (!mounted) return

    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.classList.toggle('dark', theme !== 'light')
    
    // Apply theme class to body for background effects
    document.body.className = `${theme}-bg transition-all duration-500`
  }, [theme, mounted])

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setThemeState(themes[nextIndex])
  }

  const setTheme = (newTheme: Theme) => {
    if (themes.includes(newTheme)) {
      setThemeState(newTheme)
    }
  }

  // Prevent flash of wrong theme
  if (!mounted) {
    return <div className="opacity-0">{children}</div>
  }

  return (
    <ThemeContext.Provider value={{ theme, cycleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
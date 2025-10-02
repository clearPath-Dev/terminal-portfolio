'use client'

import React, { useState, useEffect } from 'react'
import Terminal from '@/Components/Terminal/Terminal'
import { BorgTakeoverSystem } from '@/Components/Terminal/BorgTakeover'
import BackgroundProvider, { useBackground } from '@/Components/Providers/BackgroundProvider'
import TerminalInitScreen from '@/Components/Terminal/TerminalInitScreen'

type Theme = 'matrix' | 'lcars' | 'klingon' | 'borg' | 'light'

// Main component that uses the BackgroundProvider
const HomeContent = () => {
  const [theme, setTheme] = useState<Theme>('lcars')
  const [mounted, setMounted] = useState(false)
  const [showInitScreen, setShowInitScreen] = useState(true)
  const [isAssimilated, setIsAssimilated] = useState(false)
  const [showTakeoverOverlay, setShowTakeoverOverlay] = useState(false)
  const { setBackground, warpActive, toggleWarp } = useBackground()

  const themes: { name: Theme; label: string; icon: string; emoji: string; prompt: string }[] = [
    { name: 'matrix', label: 'Matrix', icon: '🔋', emoji: '🟢', prompt: 'user@matrix:~$' },
    { name: 'lcars', label: 'LCARS', icon: '🖖', emoji: '🔶', prompt: 'STARFLEET>' },
    { name: 'klingon', label: 'Klingon', icon: '⚔️', emoji: '🔥', prompt: 'WARRIOR>' },
    { name: 'borg', label: 'Borg', icon: '🤖', emoji: '🔷', prompt: 'COLLECTIVE>' },
    { name: 'light', label: 'Light', icon: '☀️', emoji: '⚪', prompt: 'user@terminal:~$' },
  ]


  useEffect(() => {
    if (!mounted ) return 
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.classList.toggle('dark', theme !== 'light')
    
    // Apply theme class to body for background effects
    document.body.className = `${theme}-bg transition-all duration-500`

    // Sync background with theme
    const backgroundMap = {
      matrix: 'matrix-rain' as const,
      lcars: 'lcars-grid' as const,
      klingon: 'klingon-fire' as const,
      borg: 'borg-cube' as const,
      light: 'none' as const
    }
    
    setBackground(backgroundMap[theme])
  }, [theme, mounted, setBackground])

  // Listen for Borg events
  useEffect(() => {
    const handleThemeReset = (event: CustomEvent) => {
      setTheme(event.detail.theme)
    }

    const handleForceTheme = (event: CustomEvent) => {
      setTheme(event.detail.theme)
    }

    const handleBorgTakeover = () => {
      setIsAssimilated(true)
      setTheme('borg')
      executeTakeoverSequence()
    }

    const handleAssimilationCommand = () => {
      setIsAssimilated(true)
      setTheme('borg')
    }

    // Handle submit command in Star Trek themes (forces Borg theme)
    const handleStarTrekSubmit = () => {
      if (theme === 'lcars' || theme === 'klingon') {
        setTheme('borg')
        const borgSystem = BorgTakeoverSystem.getInstance()
        borgSystem.initializeBorgTheme()
      }
    }

    window.addEventListener('themeReset', handleThemeReset as EventListener)
    window.addEventListener('forceTheme', handleForceTheme as EventListener)
    window.addEventListener('borgTakeover', handleBorgTakeover)
    window.addEventListener('assimilationCommand', handleAssimilationCommand)
    window.addEventListener('starTrekSubmit', handleStarTrekSubmit)

    return () => {
      window.removeEventListener('themeReset', handleThemeReset as EventListener)
      window.removeEventListener('forceTheme', handleForceTheme as EventListener)
      window.removeEventListener('borgTakeover', handleBorgTakeover)
      window.removeEventListener('assimilationCommand', handleAssimilationCommand)
      window.removeEventListener('starTrekSubmit', handleStarTrekSubmit)
    }
  }, [theme])

  const executeTakeoverSequence = () => {
    setShowTakeoverOverlay(true)
    
    setTimeout(() => {
      setShowTakeoverOverlay(false)
    }, 5000) // 5 second takeover sequence
  }

  const cycleTheme = () => {
    // Prevent theme changes if assimilated
    if (isAssimilated) {
      return
    }

    const currentIndex = themes.findIndex(t => t.name === theme)
    const nextIndex = (currentIndex + 1) % themes.length
    const nextTheme = themes[nextIndex].name
    
    setTheme(nextTheme)
    
    // Clean up Borg system when leaving Borg theme
    if (theme === 'borg' && nextTheme !== 'borg') {
      const borgSystem = BorgTakeoverSystem.getInstance()
      borgSystem.cleanup()
    }
  }

if (!mounted || showInitScreen) {
  return ( <TerminalInitScreen onComplete={() => {
        setShowInitScreen(false)
        setMounted(true)
      }} 
    />
  )
}

  return (
    <main className="min-h-screen flex items-center justify-center p-4 theme-transition">
      {/* Borg Takeover Overlay */}
      {showTakeoverOverlay && (
        <div className="borg-takeover-overlay">
          <div>
            <div className="text-2xl mb-4">▉▓▒░ ASSIMILATION COMPLETE ░▒▓▉</div>
            <div className="text-lg mb-4 opacity-70">Reinitializing systems...</div>
            <div className="borg-loading-bar">
              <div className="borg-loading-progress"></div>
            </div>
            <div className="text-sm mt-4 opacity-60">Your distinctiveness has been added to our own</div>
          </div>
        </div>
      )}
      
      {/* Terminal Container */}
      <div className="w-full max-w-4xl h-[600px] relative z-10">
        <Terminal 
          className="w-full h-full" 
          theme={theme}
        />
          
        {/* Control Panel - Theme and Warp buttons */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 z-20">
          {/* Theme Selector */}
          <button
            onClick={cycleTheme}
            disabled={isAssimilated}
            className={`w-12 h-12 rounded-lg backdrop-blur-sm transition-all duration-200 
                     flex flex-col items-center justify-center text-xs font-bold
                     border border-white/20 hover:border-white/40
                     ${isAssimilated 
                       ? 'bg-red-900/50 text-red-400 cursor-not-allowed opacity-50' 
                       : 'bg-black/50 hover:bg-black/70 text-white/80 hover:text-white'
                     }`}
            title={isAssimilated 
              ? 'Theme changes are futile. You have been assimilated.' 
              : `Current: ${themes.find(t => t.name === theme)?.label} - Click to cycle`
            }
          >
            <span className="text-lg">
              {isAssimilated ? '🤖' : themes.find(t => t.name === theme)?.icon}
            </span>
            <span className="text-xs mt-1">
              {isAssimilated ? 'LOCKED' : themes.find(t => t.name === theme)?.label}
            </span>
          </button>

          {/* LCARS Warp Speed Button - only show in LCARS theme */}
          {theme === 'lcars' && !isAssimilated && (
            <button
              onClick={toggleWarp}
              className="w-12 h-12 rounded-lg backdrop-blur-sm transition-all duration-200 
                       flex flex-col items-center justify-center text-xs font-bold
                       border border-orange-400/40 hover:border-orange-400/60
                       bg-orange-900/50 hover:bg-orange-900/70 text-orange-400 hover:text-orange-300"
              title={warpActive ? 'Exit warp speed' : 'Engage warp speed'}
              style={{
                fontFamily: 'Orbitron, sans-serif'
              }}
              onMouseEnter={(e) => {
                if (warpActive) {
                  e.currentTarget.style.boxShadow = '0 0 10px #eef, 0 0 12px #a0cdff inset'
                  e.currentTarget.style.textShadow = '0 0 12px #489cfa, 0 0 5px #fff'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = ''
                e.currentTarget.style.textShadow = ''
              }}
            >
              <span className="text-lg">🚀</span>
              <span className="text-xs mt-1">
                {warpActive ? 'EXIT' : 'WARP'}
              </span>
            </button>
          )}
        </div>

        {/* Assimilation status indicator */}
        {isAssimilated && (
          <div className="absolute bottom-4 left-4 z-20">
            <div className="bg-green-900/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-green-400/40">
              <p className="text-xs text-green-400 font-mono">
                <span className="animate-pulse">●</span> ASSIMILATED - RESISTANCE IS FUTILE
              </p>
            </div>
          </div>
        )}

        {/* Mobile hint */}
        <div className="md:hidden absolute bottom-4 right-4 z-20">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 text-center border border-white/20">
            <p className="text-xs text-white/70">
              💡 Rotate to landscape for better experience
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

// Main export wrapped with BackgroundProvider
export default function Home() {
  return (
    <BackgroundProvider>
      <HomeContent />
    </BackgroundProvider>
  )
}
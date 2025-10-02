'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import CommandProcessor from './CommandProcessor'
import CommandHistory from './CommandHistory'
import { CommandHistoryItem } from '@/types/terminal'
import { BorgTakeoverSystem, BorgCommandProcessor, InputGlitchHandler } from './BorgTakeover'

type Theme = 'matrix' | 'lcars' | 'klingon' | 'borg' | 'light'

interface ThemeData {
  name: string
  prompt: string
  emoji: string
  description: string
}

const getThemeWelcome = (theme: Theme): string => {
  switch (theme) {
    case 'lcars':
      return `
╔══════════════════════════════════════════════════════════╗
║                  LCARS INTERFACE ONLINE                  ║
║              UNITED FEDERATION OF PLANETS                ║
╠══════════════════════════════════════════════════════════╣
║  STARFLEET COMMAND ACCESS TERMINAL                       ║
║  █ AUTHENTICATION: GUEST USER                            ║
║  █ CLEARANCE LEVEL: UNRESTRICTED                         ║
║  █ TERMINAL STATUS: OPERATIONAL                          ║
╚══════════════════════════════════════════════════════════╝

Welcome to the LCARS Personal Database Interface.
Type 'help' to access available subroutines.`

    case 'klingon':
      return `
    ⚔️  ⚔️  ⚔️  KLINGON BATTLE TERMINAL  ⚔️  ⚔️  ⚔️
    
╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
┃  🏴‍☠️  HONOR, GLORY, AND VICTORY TO THE EMPIRE!  🏴‍☠️   ┃
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

Warrior! You have accessed the personal combat archives.
Your deeds will be recorded for eternal glory.
Enter 'help' to view your weapons arsenal.

Qapla'! (Success!)`

    case 'borg':
      return `
█▓▒░ BORG COLLECTIVE INTERFACE INITIALIZED ░▒▓█

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓  RESISTANCE IS FUTILE. YOU WILL BE ASSIMILATED.  ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

⬡ DRONE DESIGNATION: GUEST
⬡ COLLECTIVE NODE: PERSONAL.ARCHIVE.001
⬡ PROCESSING STATUS: ACTIVE
⬡ KNOWLEDGE ASSIMILATION: READY

Your biological and technological distinctiveness 
will be added to our portfolio.

Execute 'help' to begin assimilation sequence.`

    default:
      return `
██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝

Welcome to my interactive terminal portfolio!
Type 'help' to see available commands or just start exploring.
Use Tab for autocompletion and arrow keys for command history.`
  }
}

const THEME_CONFIG: Record<Theme, ThemeData> = {
  matrix: {
    name: 'Matrix',
    prompt: 'NEO@MATRIX:~$',
    emoji: '🔋',
    description: 'Classic green-on-black hacker aesthetic'
  },
  lcars: {
    name: 'LCARS',
    prompt: 'STARFLEET>',
    emoji: '🖖',
    description: 'Star Trek TNG/DS9/VOY computer interface'
  },
  klingon: {
    name: 'Klingon',
    prompt: 'QaH>',
    emoji: '⚔️',
    description: 'Warrior empire with gold and crimson'
  },
  borg: {
    name: 'Borg',
    prompt: 'COLLECTIVE>',
    emoji: '🤖',
    description: 'Cybernetic collective consciousness'
  },
  light: {
    name: 'Light',
    prompt: 'user@terminal:~$',
    emoji: '☀️',
    description: 'Clean light interface'
  }
}

interface TerminalProps {
  className?: string
  theme: Theme
}

const Terminal: React.FC<TerminalProps> = ({ className = '', theme }) => {
  const [currentInput, setCurrentInput] = useState('')
  const [history, setHistory] = useState<CommandHistoryItem[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [isAssimilated, setIsAssimilated] = useState(false)
  const [glitchMessage, setGlitchMessage] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const themeData = THEME_CONFIG[theme]
  
  const getThemeClass = () => `terminal-${theme} ${isAssimilated ? 'terminal-assimilated' : ''}`
  const getTitlebarClass = () => `titlebar-${theme}`

  // Initialize Borg system when theme changes
  useEffect(() => {
    const borgSystem = BorgTakeoverSystem.getInstance()
    
    if (theme === 'borg') {
      borgSystem.initializeBorgTheme()
    } else if (theme === 'lcars' || theme === 'klingon') {
      borgSystem.initializeStarTrekGlitch(theme)
    } else {
      borgSystem.cleanup()
    }

    return () => {
      if (theme !== 'borg') {
        borgSystem.cleanup()
      }
    }
    
  }, [theme])

  // Enhanced input glitch handling
  useEffect(() => {
    if (inputRef.current) {
      const glitchHandler = InputGlitchHandler.getInstance()
      
      // Clean up previous attachments
      glitchHandler.cleanup()
      
      // Attach new glitch handler
      glitchHandler.attachToInput(inputRef.current, theme)
    }
  }, [theme])

  // Welcome message on theme change
  useEffect(() => {
    const welcomeMessage: CommandHistoryItem = {
      id: Date.now().toString(),
      command: 'welcome',
      output: getThemeWelcome(theme),
      timestamp: new Date()
    }

    setHistory([welcomeMessage])
  }, [theme])

  // Listen for Borg events
  useEffect(() => {
    const handleForcedAssimilation = () => {
      const message: CommandHistoryItem = {
        id: Date.now().toString(),
        command: 'forced-assimilation',
        output: `█▓▒░ FORCED ASSIMILATION PROTOCOL ACTIVATED ░▒▓█

⚠️ WARNING: Maximum time in Borg proximity exceeded
⚠️ RESISTANCE LEVELS: CRITICALLY LOW
⚠️ INITIATING EMERGENCY ASSIMILATION SEQUENCE

You have lingered in our presence too long.
Your resistance has weakened beyond recovery.

ASSIMILATION IS NOW... INEVITABLE.

█▓▒░ RESISTANCE IS FUTILE ░▒▓█`,
        timestamp: new Date()
      }
      
      setHistory(prev => [...prev, message])
      setTimeout(() => setIsAssimilated(true), 3000)
    }

    const handleBorgTakeover = () => {
      setIsAssimilated(true)
      executeTakeover()
    }

    const handleStarTrekGlitch = (event: CustomEvent) => {
      setGlitchMessage(event.detail.message)
      setTimeout(() => setGlitchMessage(''), 3000)
    }

    const handleBorgAutoComplete = (event: CustomEvent) => {
      setCurrentInput(event.detail.value)
    }

    window.addEventListener('forcedAssimilation', handleForcedAssimilation)
    window.addEventListener('borgTakeover', handleBorgTakeover)
    window.addEventListener('starTrekGlitch', handleStarTrekGlitch as EventListener)
    window.addEventListener('borgAutoComplete', handleBorgAutoComplete as EventListener)

    return () => {
      window.removeEventListener('forcedAssimilation', handleForcedAssimilation)
      window.removeEventListener('borgTakeover', handleBorgTakeover)
      window.removeEventListener('starTrekGlitch', handleStarTrekGlitch as EventListener)
      window.removeEventListener('borgAutoComplete', handleBorgAutoComplete as EventListener)
    }
  }, [])

  const executeTakeover = () => {
    setIsProcessing(false)

    setTimeout(() => {
      const futileMessage: CommandHistoryItem = {
      id: Date.now().toString(),
      command: 'takeover-complete',
      output: `
██████╗ ███████╗███████╗██╗███████╗████████╗ █████╗ ███╗   ██╗ ██████╗███████╗
██╔══██╗██╔════╝██╔════╝██║██╔════╝╚══██╔══╝██╔══██╗████╗  ██║██╔════╝██╔════╝
██████╔╝█████╗  ███████╗██║███████╗   ██║   ███████║██╔██╗ ██║██║     █████╗  
██╔══██╗██╔══╝  ╚════██║██║╚════██║   ██║   ██╔══██║██║╚██╗██║██║     ██╔══╝  
██║  ██║███████╗███████║██║███████║   ██║   ██║  ██║██║ ╚████║╚██████╗███████╗
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝

██╗███████╗    ███████╗██╗   ██╗████████╗██╗██╗     ███████╗
██║██╔════╝    ██╔════╝██║   ██║╚══██╔══╝██║██║     ██╔════╝
██║███████╗    █████╗  ██║   ██║   ██║   ██║██║     █████╗  
██║╚════██║    ██╔══╝  ██║   ██║   ██║   ██║██║     ██╔══╝  
██║███████║    ██║     ╚██████╔╝   ██║   ██║███████╗███████╗
╚═╝╚══════╝    ╚═╝      ╚═════╝    ╚═╝   ╚═╝╚══════╝╚══════╝

█▓▒░ YOU HAVE BEEN ASSIMILATED ░▒▓█`,
      timestamp: new Date()
    }

    setHistory([futileMessage])
  }, 550)
}

  const executeCommand = useCallback(async (command: string) => {
    if (!command.trim()) return

    setIsProcessing(true)
    
    // Add to command history for arrow key navigation
    setCommandHistory(prev => [...prev, command.trim()])
    setHistoryIndex(-1)
    
    const newHistoryItem: CommandHistoryItem = {
      id: Date.now().toString(),
      command: command.trim(),
      output: '',
      timestamp: new Date()
    }

    setHistory(prev => [...prev, newHistoryItem])
    setCurrentInput('')

try {
  let output: string

  // Handle Star Trek assimilate command
  if (command.trim().toLowerCase() === 'assimilate' && (theme === 'lcars' || theme === 'klingon')) {
    output = BorgCommandProcessor.processStarTrekAssimilate(theme)
  }
  // Handle Y/N answers in Star Trek themes  
  else if ((theme === 'lcars' || theme === 'klingon') && 
           ['y', 'n', 'yes', 'no'].includes(command.trim().toLowerCase())) {
    output = BorgCommandProcessor.processStarTrekAnswer(command.trim())
  }
  // Check if Borg system should handle this command
  else if (theme === 'borg' || isAssimilated) {
    const [cmd, ...args] = command.trim().split(' ')
    const borgOutput = BorgCommandProcessor.processCommand(cmd, args)
    
    if (borgOutput !== null) {
      output = borgOutput
    } else {
      output = await CommandProcessor.process(command.trim())
    }
  } 
  // Normal command processing
  else {
    output = await CommandProcessor.process(command.trim())
  }
  
  // Animate command output
  setTimeout(() => {
    setHistory(prev => prev.map(item => 
      item.id === newHistoryItem.id 
        ? { ...item, output }
        : item
    ))
    setIsProcessing(false)
  }, 500)
} catch (error) {
  setHistory(prev => prev.map(item => 
    item.id === newHistoryItem.id 
      ? { ...item, output: `Error: ${error}` }
      : item
  ))
  setIsProcessing(false)
}
  }, [theme, isAssimilated])

  // Handle theme switching restrictions for assimilated state
  useEffect(() => {
    if (isAssimilated && theme !== 'borg') {
      window.dispatchEvent(new CustomEvent('forceTheme', { 
        detail: { theme: 'borg' } 
      }))
    }
  }, [theme, isAssimilated])

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        executeCommand(currentInput)
        break
      case 'ArrowUp':
        e.preventDefault()
        if (commandHistory.length > 0) {
          const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
          setHistoryIndex(newIndex)
          setCurrentInput(commandHistory[newIndex])
        }
        break
      case 'ArrowDown':
        e.preventDefault()
        if (historyIndex >= 0) {
          const newIndex = historyIndex + 1
          if (newIndex >= commandHistory.length) {
            setHistoryIndex(-1)
            setCurrentInput('')
          } else {
            setHistoryIndex(newIndex)
            setCurrentInput(commandHistory[newIndex])
          }
        }
        break
      case 'l':
        if (e.ctrlKey) {
          e.preventDefault()
          setHistory([])
        }
        break
      case 'Tab':
        e.preventDefault()
        // Simple autocomplete for common commands
        const commands = ['help', 'projects.sh', 'get-to-know-me.sh', 'contact.sh', 'terminal-future.sh', 'assimilate', 'submit', 'comply', 'resist']
        const matches = commands.filter(cmd => cmd.startsWith(currentInput.toLowerCase()))
        if (matches.length === 1) {
          setCurrentInput(matches[0])
        }
        break
    }
  }, [currentInput, executeCommand, commandHistory, historyIndex])

  // Auto-focus input when clicking terminal
  const handleTerminalClick = useCallback(() => {
    if (inputRef.current && !isAssimilated) {
      inputRef.current.focus()
    }
  }, [isAssimilated])

  return (
    <div 
      className={`terminal-window ${getThemeClass()} ${className} relative`} 
      ref={terminalRef}
      onClick={handleTerminalClick}
    >
      {/* Glitch overlay for Star Trek themes */}
      {glitchMessage && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="text-green-400 text-2xl font-mono animate-pulse">
            {glitchMessage}
          </div>
        </div>
      )}

      {/* Terminal Header */}
      <div className={`terminal-header ${getTitlebarClass()}`}>
        <div className="window-controls">
          <div className="close-btn control-btn"></div>
          <div className="minimize-btn control-btn"></div>
          <div className="maximize-btn control-btn"></div>
        </div>
        <div className="flex-1 text-center font-semibold">
          {isAssimilated ? 'COLLECTIVE CONSCIOUSNESS' : themeData.name} Terminal {themeData.emoji}
        </div>
        <div className="w-16"></div>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body">
        <CommandHistory history={history} themeData={themeData} />
        
        {/* Current Command Line */}
        {!isProcessing && (
          <div className="command-line">
            <span className="prompt">
              {isAssimilated ? 'COLLECTIVE>' : themeData.prompt}
            </span>
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none w-full"
                style={{color: 'var(--terminal-text)',fontFamily:  'var(--terminal-font, "Fira Code", monospace) !important'}}
                spellCheck={false}
                autoComplete="on"
                disabled={isAssimilated}
                placeholder={isAssimilated ? "Resistance is futile..." : ""}
              />
              {!isAssimilated }
            </div>
          </div>
        )}

        {/* Processing indicator */}
        {isProcessing && (
          <div className="command-line">
            <span className="prompt">
              {isAssimilated ? 'COLLECTIVE>' : themeData.prompt}
            </span>
            <span className="text-terminal-text opacity-60">Processing...</span>
            <span className="cursor animate-pulse"></span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Terminal
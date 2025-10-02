'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { CommandHistoryItem } from '@/types/terminal'

interface ThemeData {
  name: string
  prompt: string
  emoji: string
  description: string
}

interface CommandHistoryProps {
  history: CommandHistoryItem[]
  themeData: ThemeData
}

const CommandHistory: React.FC<CommandHistoryProps> = ({ history, themeData }) => {
  const historyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate new entries
    if (historyRef.current && history.length > 0) {
      const lastItem = historyRef.current.lastElementChild
      if (lastItem) {
        gsap.fromTo(lastItem,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        )
      }
    }
  }, [history.length])

  const formatOutput = (output: string) => {
    if (output === 'CLEAR_TERMINAL') return null
    
    // Handle different output types
    if (output.includes('█▓')) {
      // ASCII art - preserve formatting, use CSS variable for color
      return <pre className="font-mono whitespace-pre-wrap" style={{ color: 'var(--terminal-text)' }}>{output}</pre>
    }
    
    if (output.includes('Error:')) {
      return <div className="text-red-500">{output}</div>
    }
    
    if (output.includes('Available commands:')) {
      const [description, commands] = output.split('Available commands:')
      return (
        <div>
          <div className="text-red-500 mb-2">{description}</div>
          <div style={{ color: 'var(--terminal-text)' }}>
            Available commands: {commands}
          </div>
        </div>
      )
    }
    
    // Default formatting with syntax highlighting
    return (
      <div className="whitespace-pre-wrap">
        {output.split('\n').map((line, index) => {
          if (line.startsWith('Usage:')) {
            return <div key={index} style={{ color: 'var(--accent-yellow, #f1fa8c)' }}>{line}</div>
          }
          if (line.startsWith('Description:')) {
            return <div key={index} style={{ color: 'var(--terminal-text)' }}>{line}</div>
          }
          if (line.includes('.sh')) {
            return (
              <div key={index} style={{ color: 'var(--accent-green, #50fa7b)' }}>
                {line.replace(/(\w+\.sh)/g, '🔧 $1')}
              </div>
            )
          }
          if (line.startsWith('•') || line.startsWith('-')) {
            return <div key={index} className="ml-2" style={{ color: 'var(--accent-purple, #bd93f9)' }}>{line}</div>
          }
          return <div key={index} style={{ color: 'var(--terminal-text)' }}>{line}</div>
        })}
      </div>
    )
  }

  return (
    <div ref={historyRef} className="command-history">
      {history.map((item) => {
        const output = formatOutput(item.output)
        if (output === null) return null // Don't render CLEAR_TERMINAL
        
        return (
          <div key={item.id} className="mb-4">
            {/* Show command line for non-welcome commands */}
            {item.command !== 'welcome' && (
              <div className="command-line">
                <span className="prompt">{themeData.prompt}</span>
                <span className="text-terminal-text-dark">{item.command}</span>
              </div>
            )}
            
            {/* Command output */}
            {item.output && (
              <div className="command-output">
                {output}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default CommandHistory
'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Matrix characters (Katakana + numbers + symbols)
    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?'
    
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    
    // Array to track each column's position
    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100 // Start at random heights above screen
    }

    const draw = () => {
      // Semi-transparent black background for trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Matrix green color
      ctx.fillStyle = '#0F3'
      ctx.font = `${fontSize}px 'Fira Code', monospace`
      
      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)]
        
        // Draw character
        const x = i * fontSize
        const y = drops[i] * fontSize
        
        ctx.fillStyle = '#0F3'
        ctx.fillText(char, x, y)
        
        // Occasionally add a brighter character (head of the trail)
        if (Math.random() > 0.975) {
          ctx.fillStyle = '#FFF'
          ctx.fillText(char, x, y)
        }
        
        // Reset drop to top when it reaches bottom or randomly
        if (y > canvas.height || Math.random() > 0.975) {
          drops[i] = Math.random() * -100
        }
        
        // Move drop down
        drops[i]++
      }
    }

    // Animation loop
    const animate = () => {
      draw()
      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-10 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  )
}

export default MatrixRain
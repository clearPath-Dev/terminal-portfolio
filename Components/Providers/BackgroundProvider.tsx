'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

// Simplified background types that match your actual themes
type BackgroundType = 'matrix-rain' | 'lcars-grid' | 'klingon-fire' | 'borg-cube' | 'none'

interface BackgroundContextType {
  currentBackground: BackgroundType
  changeBackground: () => void
  setBackground: (bg: BackgroundType) => void
  warpActive: boolean
  toggleWarp: () => void
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined)

export const useBackground = () => {
  const context = useContext(BackgroundContext)
  if (context === undefined) {
    throw new Error('useBackground must be used within a BackgroundProvider')
  }
  return context
}

// Backgrounds that actually exist in your theme system
const backgrounds: BackgroundType[] = [
  'matrix-rain',
  'lcars-grid', 
  'klingon-fire',
  'borg-cube',
  'none'
]

interface BackgroundProviderProps {
  children: React.ReactNode
}

const BackgroundProvider: React.FC<BackgroundProviderProps> = ({ children }) => {
  const [currentBackground, setCurrentBackground] = useState<BackgroundType>('matrix-rain')
  const [mounted, setMounted] = useState(false)
  const [warpActive, setWarpActive] = useState(false)
  const warpRef = React.useRef(0)

  useEffect(() => {
    // Remove localStorage usage for Claude artifacts
    setMounted(true)
  }, [])

  const changeBackground = () => {
    const currentIndex = backgrounds.indexOf(currentBackground)
    const nextIndex = (currentIndex + 1) % backgrounds.length
    setCurrentBackground(backgrounds[nextIndex])
  }

  const setBackground = (bg: BackgroundType) => {
    setCurrentBackground(bg)
  }

  const toggleWarp = () => {
    warpRef.current = warpRef.current === 1 ? 0 : 1
    setWarpActive(warpRef.current === 1)
  }

  // Matrix Rain Component
  const MatrixRain = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)

    React.useEffect(() => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
      const fontSize = 14
      const columns = Math.floor(canvas.width / fontSize)
      const drops: number[] = []

      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100
      }

      const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        
        ctx.fillStyle = '#0F3'
        ctx.font = `${fontSize}px monospace`
        
        for (let i = 0; i < drops.length; i++) {
          const char = chars[Math.floor(Math.random() * chars.length)]
          const x = i * fontSize
          const y = drops[i] * fontSize
          
          ctx.fillText(char, x, y)
          
          if (y > canvas.height || Math.random() > 0.975) {
            drops[i] = Math.random() * -100
          }
          drops[i]++
        }
      }

      const interval = setInterval(draw, 50)
      return () => clearInterval(interval)
    }, [])

    return (
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 opacity-10 pointer-events-none"
      />
    )
  }

  // LCARS Starfield Component (replacing LCARSGrid)
  const LCARSStarfield = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const animationIdRef = React.useRef<number>()
    const starsRef = React.useRef<any[]>([])

    React.useEffect(() => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const numStars = 1900
      let focalLength: number
      let centerX: number, centerY: number

      const initializeStars = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        centerX = canvas.width / 2
        centerY = canvas.height / 2
        focalLength = canvas.width * 2
        starsRef.current = []
        
        for (let i = 0; i < numStars; i++) {
          const star = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width,
            o: 0.1 + Math.random() * 0.9
          }
          starsRef.current.push(star)
        }
      }

      const moveStars = () => {
        const speed = warpRef.current === 1 ? 5 : 1
        for (let i = 0; i < starsRef.current.length; i++) {
          const star = starsRef.current[i]
          star.z -= speed
          if (star.z <= 0) {
            star.z = canvas.width
            star.x = Math.random() * canvas.width
            star.y = Math.random() * canvas.height
          }
        }
      }

      const drawStars = () => {
        if (warpRef.current === 0) {
          ctx.fillStyle = "rgba(0,10,20,0.1)"
        } else {
          ctx.fillStyle = "rgba(0,10,20,0.02)"
        }
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        for (let i = 0; i < starsRef.current.length; i++) {
          const star = starsRef.current[i]
          const pixelX = (star.x - centerX) * (focalLength / star.z) + centerX
          const pixelY = (star.y - centerY) * (focalLength / star.z) + centerY
          const pixelRadius = Math.max(1, (focalLength / star.z) * 0.5)
          
          if (warpRef.current === 1) {
            const speed = 15
            const oldPixelX = (star.x - centerX) * (focalLength / (star.z + speed)) + centerX
            const oldPixelY = (star.y - centerY) * (focalLength / (star.z + speed)) + centerY
            
            ctx.beginPath()
            ctx.moveTo(oldPixelX, oldPixelY)
            ctx.lineTo(pixelX, pixelY)
            ctx.strokeStyle = `rgba(209, 255, 255, ${star.o * 0.9})`
            ctx.lineWidth = Math.max(1, pixelRadius * 0.5)
            ctx.stroke()
            
            ctx.fillStyle = `rgba(255, 255, 255, ${star.o})`
            ctx.fillRect(pixelX - pixelRadius/2, pixelY - pixelRadius/2, pixelRadius, pixelRadius)
          } else {
            ctx.fillStyle = `rgba(209, 255, 255, ${star.o})`
            ctx.fillRect(pixelX - pixelRadius/2, pixelY - pixelRadius/2, pixelRadius, pixelRadius)
          }
        }
      }

      const executeFrame = () => {
        moveStars()
        drawStars()
        animationIdRef.current = requestAnimationFrame(executeFrame)
      }

      setTimeout(() => {
        initializeStars()
        executeFrame()
      }, 100)

      const handleResize = () => {
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current)
        }
        initializeStars()
        executeFrame()
      }
      window.addEventListener('resize', handleResize)

      return () => {
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current)
        }
        window.removeEventListener('resize', handleResize)
      }
    }, [])

    return (
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: 'rgba(0,10,20,1) url(https://i.imgur.com/r838U7u.jpg) center no-repeat',
            backgroundSize: 'cover',
            imageRendering: 'pixelated'
          }}
        />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
      </div>
    )
  }

  const KlingonFire = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const animationIdRef = React.useRef<number>()

    React.useEffect(() => {
      const canvas = canvasRef.current
      if (!canvas) return

      const gl = canvas.getContext('webgl2')
      if (!gl) return

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      gl.viewport(0, 0, canvas.width, canvas.height)

      const vertexShader = gl.createShader(gl.VERTEX_SHADER)!
      gl.shaderSource(vertexShader, `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`)
      gl.compileShader(vertexShader)

      const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!
      gl.shaderSource(fragmentShader, `#version 300 es
precision highp float;
out vec4 O;
uniform float T;
uniform vec2 R;
#define FC gl_FragCoord.xy
#define MN min(R.x,R.y)

float rnd(vec2 p) {
  p=fract(p*vec2(12.9898,78.233));
  p+=dot(p,p+34.56);
  return fract(p.x*p.y);
}

float noise(in vec2 p) {
  vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
  float
  a=rnd(i),
  b=rnd(i+vec2(1,0)),
  c=rnd(i+vec2(0,1)),
  d=rnd(i+1.);
  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
}

float fbm(vec2 p) {
  float t=.0, a=1.; mat2 m=mat2(1.,-.5,.2,1.2);
  for (int i=0; i<5; i++) {
    t+=a*noise(p);
    p*=2.*m;
    a*=.5;
  }
  return t;
}

float clouds(vec2 p) {
  float d=1., t=.0;
  for (float i=.0; i<3.; i++) {
    float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
    t=mix(t,d,a);
    d=a;
    p*=2./(i+1.);
  }
  return t;
}

void main(void) {
  vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
  vec3 col=vec3(0);
  float bg=clouds(vec2(st.x+T*.5,-st.y));
  uv*=1.-.3*(sin(T*.2)*.5+.5);
  for (float i=1.; i<12.; i++) {
    uv+=.1*cos(i*vec2(.1+.01*i, .8)+i*i+T*.5+.1*uv.x);
    vec2 p=uv;
    float d=length(p);
    col+=.00125/d*(cos(sin(i)*vec3(1,2,3))+1.);
    float b=noise(i+p+bg*1.731);
    col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
    col=mix(col,vec3(bg*.25,bg*.137,bg*.05),d);
  }
  O=vec4(col,1);
}`)
      gl.compileShader(fragmentShader)

      const program = gl.createProgram()!
      gl.attachShader(program, vertexShader)
      gl.attachShader(program, fragmentShader)
      gl.linkProgram(program)

      const buffer = gl.createBuffer()
      const vertices = [-1, 1, -1, -1, 1, 1, 1, -1]
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)

      const position = gl.getAttribLocation(program, "position")
      gl.enableVertexAttribArray(position)
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)

      const timeUniform = gl.getUniformLocation(program, "T")
      const resolutionUniform = gl.getUniformLocation(program, "R")

      const render = (time: number) => {
        gl.clearColor(0, 0, 0, 1)
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.useProgram(program)
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
        
        gl.uniform1f(timeUniform, time * 0.001)
        gl.uniform2f(resolutionUniform, canvas.width, canvas.height)
        
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
        animationIdRef.current = requestAnimationFrame(render)
      }

      const handleResize = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        gl.viewport(0, 0, canvas.width, canvas.height)
      }

      window.addEventListener('resize', handleResize)
      animationIdRef.current = requestAnimationFrame(render)

      return () => {
        window.removeEventListener('resize', handleResize)
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current)
        }
        gl.deleteProgram(program)
        gl.deleteShader(vertexShader)
        gl.deleteShader(fragmentShader)
        gl.deleteBuffer(buffer)
      }
    }, [])

    return (
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 opacity-80 pointer-events-none"
        style={{ background: 'black' }}
      />
    )
  }

const BorgCube = () => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const skyRef = React.useRef<HTMLDivElement>(null)
  const cubeRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    // Inject CSS directly into document head
    const styleElement = document.createElement('style')
    styleElement.id = 'borg-animations'
    styleElement.textContent = `
      .borg-cube-animated {
        transform: rotateY(-30deg) rotateX(0deg);
        animation: borgApproach 90s ease-in-out infinite alternate !important;
      }

      @keyframes borgApproach {
        0% { transform: rotateY(-30deg) rotateX(0deg) scale(0.85); }
        100% { transform: rotateY(-30deg) rotateX(0deg) scale(1.15); }
      }
    `
    document.head.appendChild(styleElement)

    // Apply animation classes after a short delay
    setTimeout(() => {
      if (cubeRef.current) {
        cubeRef.current.classList.add('borg-cube-animated')
      }
    }, 100)

    const sky = skyRef.current
    if (!sky) return

    // Clear any existing stars
    sky.innerHTML = ''

    const center = {
      x: sky.clientWidth / 2,
      y: sky.clientHeight / 2,
    }

    // Create 360 stars with different sizes and animations
    for (let i = 1; i <= 360; i++) {
      const size = Math.round(Math.random() + 1)
      const star = document.createElement('div')
      
      // Basic styling
      star.style.position = 'absolute'
      star.style.top = center.y + 'px'
      star.style.left = center.x + 'px'
      star.style.width = size + 'px'
      star.style.height = size + 'px'
      star.style.background = 'white'
      star.style.borderRadius = '100%'
      star.style.boxShadow = '0 0 6px rgba(255, 255, 255, 0.8)'
      star.style.opacity = '0'
      star.style.transformOrigin = '0 0'
      
      // Calculate movement for elliptical orbit
      const angle = (i * 4) % 360
      const radians = (Math.PI * 2 * angle) / 360
      const x = 80 * Math.cos(radians)
      const y = 80 * Math.sin(radians)
      
      // Random timing
      const duration = 5000 + Math.random() * 35000
      const fadeDelay = Math.random() * 20
      
      // Apply animations using CSS
      star.style.animation = `
        borgMove${i} ${duration}ms linear infinite -30s,
        borgFade ${duration}ms linear infinite -30s
      `
      
      // Add keyframes dynamically
      const style = document.createElement('style')
      style.textContent = `
        @keyframes borgMove${i} {
          100% { transform: translate(${x}vw, ${y}vh); }
        }
        @keyframes borgFade {
          ${fadeDelay}% { opacity: 0; }
          ${fadeDelay + 10}% { opacity: 1; }
          100% { opacity: 1; }
        }
      `
      document.head.appendChild(style)
      
      sky.appendChild(star)
    }

    const handleResize = () => {
      const newCenter = {
        x: sky.clientWidth / 2,
        y: sky.clientHeight / 2,
      }
      
      const stars = sky.querySelectorAll('div')
      stars.forEach((star) => {
        const starEl = star as HTMLElement
        starEl.style.top = newCenter.y + 'px'
        starEl.style.left = newCenter.x + 'px'
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      // Clean up dynamic styles
      const styles = document.head.querySelectorAll('style')
      styles.forEach(style => {
        if (style.textContent?.includes('borgMove') || style.textContent?.includes('borgFade') || style.id === 'borg-animations') {
          document.head.removeChild(style)
        }
      })
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Star field background */}
      <div
        ref={skyRef}
        className="absolute inset-0 w-full h-full bg-black"
      />

      {/* Radial gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 75% 30%, rgba(0, 255, 65, 0.06) 0%, rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0.7) 80%)'
        }}
      />

      {/* Borg Cube Container - original off-center positioning */}
      <div
        ref={containerRef}
        className="absolute"
        style={{
          width: '30vw',
          height: '30vw',
          position: 'absolute',
          perspective: '2000px',
          top: '4vh',
          right: '4vw',
          zIndex: 2
        }}
      >
        <div
          ref={cubeRef}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Front face */}
          <div
            style={{
              margin: 0,
              width: '100%',
              height: '100%',
              display: 'block',
              position: 'absolute',
              outline: '1px solid transparent',
              backgroundImage: 'url(https://i.imgur.com/hwtc0sD.jpg)',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              transform: 'rotateY(0deg) translateZ(15vw)'
            }}
          />
          
          {/* Right face */}
          <div
            style={{
              margin: 0,
              width: '100%',
              height: '100%',
              display: 'block',
              position: 'absolute',
              outline: '1px solid transparent',
              backgroundImage: 'url(https://i.imgur.com/hwtc0sD.jpg)',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              transform: 'rotateY(90deg) translateZ(15vw)'
            }}
          />
          
          {/* Top face */}
          <div
            style={{
              margin: 0,
              width: '100%',
              height: '100%',
              display: 'block',
              position: 'absolute',
              outline: '1px solid transparent',
              backgroundImage: 'url(https://i.imgur.com/hwtc0sD.jpg)',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              transform: 'rotateX(90deg) translateZ(15vw)'
            }}
          />
        </div>
      </div>
    </div>
  )
}
  const renderBackground = () => {
    if (!mounted) return null

    switch (currentBackground) {
      case 'matrix-rain':
        return <MatrixRain />
      case 'lcars-grid':
        return <LCARSStarfield />
      case 'klingon-fire':
        return <KlingonFire />
      case 'borg-cube':
        return <BorgCube />
      case 'none':
      default:
        return null
    }
  }

  return (
    <BackgroundContext.Provider 
      value={{ 
        currentBackground, 
        changeBackground, 
        setBackground,
        warpActive,
        toggleWarp
      }}
    >
      {renderBackground()}
      <div className="relative z-10">
        {children}
      </div>
    </BackgroundContext.Provider>
  )
}

export default BackgroundProvider
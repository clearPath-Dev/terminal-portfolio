import React, { useState, useEffect, useRef } from 'react';

const TerminalInitScreen = ({ onComplete }: { onComplete?: () => void }) => {
  const [currentText, setCurrentText] = useState('');
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [currentStatementIndex, setCurrentStatementIndex] = useState(0);
  const textRef = useRef('');
  const progressRef = useRef(0);

  const statements = [
    "Initializing Terminal Interface...",
    "Loading system components...",
    "Establishing secure connections...",
    "System ready. Welcome to the Terminal."
  ];

  // Random delay function for realistic typing
  const randomDelay = (min: number, max: number) => min + Math.random() * (max - min);

  // Simulate realistic typing with variable speeds
  const typeText = async (text: string, baseDelay = 80) => {
    textRef.current = '';
    setCurrentText('');
    
    for (let i = 0; i <= text.length; i++) {
      const char = text[i];
      let delay = baseDelay;
      
      // Variable typing speed based on character
      if (char === ' ') delay *= 0.3; // Faster for spaces
      else if (char === '.') delay *= 2; // Slower for punctuation
      else if (char === char?.toUpperCase() && char !== char?.toLowerCase()) delay *= 1.2; // Slightly slower for capitals
      
      textRef.current = text.slice(0, i);
      setCurrentText(textRef.current);
      
      if (i < text.length) {
        await new Promise(resolve => setTimeout(resolve, randomDelay(delay * 0.5, delay * 1.5)));
      }
    }
  };

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Progress bar animation - smooth and realistic
// Add this state at the top with your other useState declarations:
const [minTimeElapsed, setMinTimeElapsed] = useState(false);

// Add this useEffect for minimum display time:
useEffect(() => {
  const timer = setTimeout(() => {
    setMinTimeElapsed(true);
  }, 8000); // Minimum 8 seconds display time

  return () => clearTimeout(timer);
}, []);

// Update your existing progress useEffect:
useEffect(() => {
  const progressInterval = setInterval(() => {
    setProgress(prevProgress => {
      const increment = Math.random() * 2 + 0.5; // Random increment between 0.5-2.5
      const newProgress = Math.min(prevProgress + increment, 100);
      progressRef.current = newProgress;
      
      // Add minTimeElapsed to the condition:
      if (newProgress >= 100 && !isComplete && minTimeElapsed) {
        clearInterval(progressInterval);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(() => onComplete?.(), 750);
        }, 700);
      }
      return newProgress;
    });
  }, 170); // Update every 120ms for smooth animation
  return () => clearInterval(progressInterval);
}, [onComplete, isComplete, minTimeElapsed]); // Add minTimeElapsed to dependencies

  // Text animation sequence
  useEffect(() => {
    const animateStatements = async () => {
      for (let i = 0; i < statements.length; i++) {
        setCurrentStatementIndex(i);
        await typeText(statements[i], 60);
        
        // Pause after each statement
        await new Promise(resolve => setTimeout(resolve, randomDelay(800, 1200)));
        
        // Clear text except for the last statement
        if (i < statements.length - 1) {
          setCurrentText('');
          await new Promise(resolve => setTimeout(resolve, randomDelay(200, 400)));
        }
      }
    };

    animateStatements();
  }, []);

  // Scanlines animation
  const scanlineStyle = {
    background: `linear-gradient(
      transparent 0%,
      rgba(0, 255, 0, 0.03) 50%,
      transparent 100%
    )`,
    backgroundSize: '4px 4px',
    animation: 'scanlines 0.1s linear infinite'
  };

  return (
    <div className="fixed inset-0 bg-black overflow-hidden z-50" style={{ filter: 'blur(1px)' }}>
      {/* Main CRT scanlines overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            rgba(0, 20, 0, 0.15) 0px,
            transparent 1px,
            transparent 2px,
            rgba(0, 20, 0, 0.15) 3px,
            rgba(0, 20, 0, 0.15) 4px
          )`,
          backgroundSize: '4px 4px',
          animation: 'scanlines 0.1s linear infinite'
        }}
      />
      
      {/* Additional vintage overlay effects */}
      <div 
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%),
            linear-gradient(90deg, rgba(255, 0, 0, 0.6), rgba(0, 255, 0, 0.2), rgba(0, 0, 255, 0.6))
          `,
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* Screen flicker effect */}
      <div 
        className="absolute inset-0 bg-black opacity-10 pointer-events-none z-10"
        style={{ 
          animation: 'flicker 0.15s ease-in-out infinite alternate' 
        }}
      />
      
      {/* CRT curvature simulation */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, transparent 50%, rgba(0, 0, 0, 0.8) 100%),
            linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, transparent 10%, transparent 90%, rgba(0, 0, 0, 0.2) 100%),
            linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, transparent 10%, transparent 90%, rgba(0, 0, 0, 0.2) 100%)
          `
        }}
      />
      
      {/* Main content */}
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        {/* Terminal text */}
        <div className="mb-16">
          <div 
            className="text-green-400 font-mono text-3xl md:text-4xl lg:text-5xl leading-relaxed"
            style={{
              textShadow: '1px 0px 5px #0f0, -1px 0px 2px #0f0',
              fontFamily: 'Ubuntu Mono, Fira Code, monospace',
              fontWeight: 300
            }}
          >
            {currentText}
            {showCursor && (
              <span 
                className="inline-block w-3 ml-1 bg-green-400"
                style={{ animation: 'cursor-blink 1s infinite' }}
              >
                |
              </span>
            )}
          </div>
        </div>

        {/* Progress section */}
        <div className="w-full max-w-md">
          {/* Progress bar */}
          <div className="mb-4">
            <div 
              className="h-2 bg-gray-800 border border-green-600 overflow-hidden"
              style={{ boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)' }}
            >
              <div 
                className="h-full bg-green-400 transition-all duration-100 ease-out"
                style={{ 
                  width: `${progress}%`,
                  boxShadow: '0 0 8px rgba(0, 255, 0, 0.8)',
                  background: 'linear-gradient(90deg, #00ff00, #00aa00, #00ff00)'
                }}
              />
            </div>
          </div>

          {/* Progress percentage */}
          <div 
            className="text-green-400 font-mono text-lg"
            style={{ textShadow: '0 0 5px #0f0' }}
          >
            {Math.floor(progress)}%
          </div>

          {/* Status indicators */}
          <div className="mt-6 space-y-2 text-left">
            {statements.map((statement, index) => (
              <div 
                key={index}
                className={`text-sm font-mono transition-all duration-300 ${
                  index <= currentStatementIndex 
                    ? 'text-green-400 opacity-100' 
                    : 'text-green-700 opacity-40'
                }`}
              >
                <span className="mr-2">
                  {index < currentStatementIndex 
                    ? '✓' 
                    : index === currentStatementIndex 
                      ? '◊' 
                      : '○'
                  }
                </span>
                {statement}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes scanlines {
          0% { transform: translateY(0px); }
          100% { transform: translateY(4px); }
        }
        
        @keyframes flicker {
          0% { opacity: 0.1; }
          2% { opacity: 0.08; }
          4% { opacity: 0.12; }
          8% { opacity: 0.09; }
          70% { opacity: 0.1; }
          100% { opacity: 0.11; }
        }
        
        @keyframes cursor-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        /* Additional vintage effects */
        @keyframes phosphor-glow {
          0%, 100% { text-shadow: 1px 0px 5px #0f0, -1px 0px 2px #0f0; }
          50% { text-shadow: 1px 0px 8px #0f0, -1px 0px 4px #0f0, 0 0 15px #0f0; }
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap');
      `}</style>
    </div>
  );
};

export default TerminalInitScreen;


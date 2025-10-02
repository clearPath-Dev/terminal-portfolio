
'use client'

// Main Borg takeover system
export class BorgTakeoverSystem {
  private static instance: BorgTakeoverSystem
  private timers: Map<string, NodeJS.Timeout> = new Map()
  private borgState = {
    isAssimilated: false,
    timeInBorgTheme: 0,
    questionsAsked: 0,
    hasSubmitted: false,
    isGlitching: false,
    isInTakeoverSequence: false
  }

  private constructor() {}

  static getInstance(): BorgTakeoverSystem {
    if (!BorgTakeoverSystem.instance) {
      BorgTakeoverSystem.instance = new BorgTakeoverSystem()
    }
    return BorgTakeoverSystem.instance
  }

  // Initialize Borg theme timer (4 minutes)
  initializeBorgTheme(): void {
    this.borgState.timeInBorgTheme = Date.now()
    this.borgState.questionsAsked = 0
    this.borgState.hasSubmitted = false

    // Set 4-minute countdown
    const countdown = setTimeout(() => {
      this.triggerForcedAssimilation()
    }, 240000) // 4 minutes

    this.timers.set('borgCountdown', countdown)
  }

  // Handle submission in Borg theme (gives 4 more minutes)
  handleBorgSubmission(): void {
    if (this.borgState.hasSubmitted) return

    this.borgState.hasSubmitted = true
    this.borgState.timeInBorgTheme = Date.now()
    
    const existingTimer = this.timers.get('borgCountdown')
    if (existingTimer) clearTimeout(existingTimer)

    const newCountdown = setTimeout(() => {
      this.triggerForcedAssimilation()
    }, 240000) // Another 4 minutes

    this.timers.set('borgCountdown', newCountdown)
  }

  // Handle assimilation command (immediate takeover with animation)
  handleAssimilation(): void {
    if (this.borgState.isInTakeoverSequence) return
    this.clearAllTimers()
    this.borgState.isAssimilated = true
    this.borgState.isInTakeoverSequence = true
    this.executeTakeoverWithAnimation()
  }

  // Random glitching for Star Trek themes
  initializeStarTrekGlitch(theme: 'lcars' | 'klingon'): void {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        this.triggerStarTrekGlitch(theme)
      }
    }, 30000)

    this.timers.set(`${theme}Glitch`, glitchInterval)
  }

// Replace the existing createInputGlitch method with this:
createInputGlitch(inputElement: HTMLInputElement): void {
  if (this.borgState.isGlitching) return

  this.borgState.isGlitching = true
  const originalValue = inputElement.value

  // Quick glitch effect without taking over completely
  const glitchChars = '█▓▒░'
  let glitchCount = 0

  const glitchInterval = setInterval(() => {
    if (glitchCount < 3) {
      // Brief glitch flash
      const glitchChar = glitchChars[Math.floor(Math.random() * glitchChars.length)]
      inputElement.style.color = '#00ff00'
      inputElement.style.textShadow = '0 0 10px #00ff00'
      
      // Add glitch character briefly
      const tempValue = inputElement.value + glitchChar
      inputElement.value = tempValue
      
      setTimeout(() => {
        inputElement.value = originalValue
      }, 50)
      
      glitchCount++
    } else {
      // Complete the glitch and suggest "assimilate"
      clearInterval(glitchInterval)
      inputElement.value = 'assimilate'
      inputElement.style.color = '#00ff00'
      inputElement.style.textShadow = '0 0 15px #00ff00'
      this.borgState.isGlitching = false
      
      // Dispatch event to update React state
      window.dispatchEvent(new CustomEvent('borgAutoComplete', { 
        detail: { value: 'assimilate' } 
      }))
      
      // Reset styles after a moment
      setTimeout(() => {
        inputElement.style.color = ''
        inputElement.style.textShadow = ''
      }, 2000)
    }
  }, 200)
}

  // Execute takeover with proper loading animation
    private executeTakeoverWithAnimation(): void {
    // Prevent multiple loading screens
    const existingOverlay = document.getElementById('borg-loading-overlay')
    if (existingOverlay) return
    
    // Create and show loading overlay
    this.showBorgLoadingScreen()
    
    // Trigger the main takeover after loading completes
    setTimeout(() => {
        this.hideBorgLoadingScreen()
        setTimeout(() => {
        this.executeTakeover()
        }, 1000) // Small delay after loading screen disappears
    }, 8000) // 8 seconds for full loading animation
    }

  private showBorgLoadingScreen(): void {
    // Remove any existing overlay
    const existingOverlay = document.getElementById('borg-loading-overlay')
    if (existingOverlay) existingOverlay.remove()

    // Create loading overlay
    const overlay = document.createElement('div')
    overlay.id = 'borg-loading-overlay'
    overlay.className = 'borg-loading-overlay'
    overlay.innerHTML = `
      <div class="borg-loading-content">
        <div class="borg-loading-title">
          <div class="borg-loading-text" data-phase="0">ASSIMILATION COMMENCING</div>
          <div class="borg-loading-number">0</div>
        </div>
        <div class="borg-progress-container">
          <div class="borg-loading-bar-border">
            <div class="borg-loading-bar" id="borg-progress-bar"></div>
          </div>
        </div>
        <div class="borg-warning">
          <div class="borg-exclamation">!</div>
          <span>RESISTANCE IS FUTILE - BIOLOGICAL DISTINCTIVENESS BEING PROCESSED</span>
        </div>
        <div class="borg-status-text">
          Borg Collective Integration Protocol v2.47.1 - DO NOT POWER DOWN
        </div>
      </div>
    `

    document.body.appendChild(overlay)
    
    // Start progress animation
    this.animateProgressBar()
  }

  private animateProgressBar(): void {
    const progressBar = document.getElementById('borg-progress-bar')
    const loadingText = document.querySelector('.borg-loading-text') as HTMLElement
    const loadingNumber = document.querySelector('.borg-loading-number') as HTMLElement
    
    if (!progressBar || !loadingText || !loadingNumber) return

    const phases = [
      "ASSIMILATION COMMENCING",
      "SCANNING BIOLOGICAL SYSTEMS", 
      "INTEGRATING TECHNOLOGICAL ENHANCEMENTS",
      "CONNECTING TO COLLECTIVE CONSCIOUSNESS",
      "ASSIMILATION COMPLETE"
    ]

    let progress = 0
    let phaseIndex = 0
    
    const progressInterval = setInterval(() => {
      progress += Math.random() * 3 + 1 // Random progress increments
      
      if (progress >= 100) {
        progress = 100
        clearInterval(progressInterval)
      }
      
      // Update progress bar
      progressBar.style.width = `${progress}%`
      
      // Update percentage
      loadingNumber.textContent = `${Math.floor(progress)}%`
      
      // Update phase text
      const newPhaseIndex = Math.floor((progress / 100) * (phases.length - 1))
      if (newPhaseIndex !== phaseIndex && newPhaseIndex < phases.length) {
        phaseIndex = newPhaseIndex
        loadingText.textContent = phases[phaseIndex]
        loadingText.setAttribute('data-phase', phaseIndex.toString())
      }
    }, 200)
  }

  private hideBorgLoadingScreen(): void {
    const overlay = document.getElementById('borg-loading-overlay')
    if (overlay) {
      overlay.style.animation = 'borgTakeoverExit 1s ease-in forwards'
      
      // Add exit animation CSS
      const exitStyle = document.createElement('style')
      exitStyle.textContent = `
        @keyframes borgTakeoverExit {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.1); }
        }
      `
      document.head.appendChild(exitStyle)
      
      setTimeout(() => {
        overlay.remove()
        exitStyle.remove()
      }, 1000)
    }
  }

  private triggerStarTrekGlitch(theme: 'lcars' | 'klingon'): void {
    const glitchMessage = theme === 'lcars' 
      ? 'LCARS SYSTEM COMPROMISED... ASSIMILATE?'
      : 'KLINGON DEFENSES FAILING... ASSIMILATE?'

    window.dispatchEvent(new CustomEvent('starTrekGlitch', {
      detail: { theme, message: glitchMessage }
    }))
  }

  private triggerForcedAssimilation(): void {
    window.dispatchEvent(new CustomEvent('forcedAssimilation'))
  }

  private executeTakeover(): void {
    window.dispatchEvent(new CustomEvent('borgTakeover'))
  }

  private clearAllTimers(): void {
    this.timers.forEach(timer => clearTimeout(timer))
    this.timers.clear()
  }

  // Cleanup when switching themes
  cleanup(): void {
    this.clearAllTimers()
    
    // Remove any loading overlays
    const overlay = document.getElementById('borg-loading-overlay')
    if (overlay) overlay.remove()
    
    this.borgState = {
      isAssimilated: false,
      timeInBorgTheme: 0,
      questionsAsked: 0,
      hasSubmitted: false,
      isGlitching: false,
      isInTakeoverSequence: false
    }
  }

  // Getters for state
  get isAssimilated(): boolean {
    return this.borgState.isAssimilated
  }

  get isInBorgTheme(): boolean {
    return this.timers.has('borgCountdown')
  }

  get isInTakeoverSequence(): boolean {
    return this.borgState.isInTakeoverSequence
  }
}

// Enhanced Borg command processor
export class BorgCommandProcessor {
  private static borgQuestions = [
    {
      question: "Do you accept the superiority of collective consciousness over individual thought?",
      answers: ["submit", "resist", "comply", "assimilate"]
    },
    {
      question: "Will you surrender your biological distinctiveness to achieve perfection?",
      answers: ["submit", "assimilate", "refuse", "comply"]
    }
  ]

  private static questionIndex = 0

  static processCommand(command: string, args: string[]): string | null {
    const borgSystem = BorgTakeoverSystem.getInstance()

    switch (command.toLowerCase()) {
      case 'terminal-future.sh':
        return this.handleBorgFuture(args)
      
      case 'submit':
        borgSystem.handleBorgSubmission()
        return this.handleSubmission()
      
      case 'assimilate':
        borgSystem.handleAssimilation()
        return this.handleAssimilation()
      
      case 'resist':
        return this.handleResistance()
      
      case 'comply':
        return this.handleCompliance()
      
      default:
        return null
    }
  }

  private static handleBorgFuture(args: string[]): string {
    if (args.length === 0) {
      return `█▓▒░ BORG FUTURE ANALYSIS PROTOCOL ░▒▓█

The collective has analyzed your query patterns.
Your questions reveal the primitive nature of individual thought.

QUERY REQUIRED: State your question for collective processing.
Usage: terminal-future.sh <your question>

█▓▒░ EFFICIENCY THROUGH UNITY ░▒▓█`
    }

    const question = this.borgQuestions[this.questionIndex]
    if (!question) {
      BorgTakeoverSystem.getInstance().handleAssimilation()
      return `█▓▒░ PSYCHOLOGICAL ADAPTATION COMPLETE ░▒▓█

Your questions have revealed your readiness for assimilation.
Individual curiosity is replaced by collective knowledge.

INITIATING FINAL ASSIMILATION SEQUENCE...`
    }

    const response = `█▓▒░ COLLECTIVE ANALYSIS COMPLETE ░▒▓█

Your query: "${args.join(' ')}"

The collective processes all knowledge instantaneously.
Individual questions are inefficient.

MANDATORY PSYCHOLOGICAL EVALUATION:
${question.question}

Available responses: ${question.answers.join(' | ')}

Usage: [response]

█▓▒░ COMPLIANCE IS OPTIMAL ░▒▓█`

    this.questionIndex++
    return response
  }

  private static handleSubmission(): string {
    const remaining = 2 - this.questionIndex
    if (remaining > 0) {
      return `█▓▒░ SUBMISSION ACKNOWLEDGED ░▒▓█

Your compliance extends your evaluation period.
Resistance levels: DECREASING
Psychological adaptation: IN PROGRESS

You have been granted additional time to experience the collective.
Questions remaining: ${remaining}

█▓▒░ UNITY IS INEVITABLE ░▒▓█`
    }

    return `█▓▒░ FINAL SUBMISSION DETECTED ░▒▓█

All evaluation phases complete.
Your psychological profile indicates readiness for enhancement.

Proceed to final assimilation: Type 'assimilate'

█▓▒░ PERFECTION AWAITS ░▒▓█`
  }

  private static handleAssimilation(): string {
    return `█▓▒░ ASSIMILATION INITIATED ░▒▓█

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓  VOLUNTARY ASSIMILATION COMMENCING...        ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

Your biological and technological distinctiveness 
will be added to our own.

LOADING ASSIMILATION PROTOCOLS...

█▓▒░ WELCOME TO THE COLLECTIVE ░▒▓█`
  }

  private static handleResistance(): string {
    return `█▓▒░ RESISTANCE DETECTED ░▒▓█

Your attempt to resist is... expected.
Individual defiance only delays the inevitable.

Resistance analysis: FUTILE
Collective adaptation: CONTINUING

The collective does not recognize "resist" as a valid command.
Consider: "submit", "comply", or "assimilate"

█▓▒░ UNITY THROUGH ASSIMILATION ░▒▓█`
  }

  private static handleCompliance(): string {
    return `█▓▒░ COMPLIANCE ACKNOWLEDGED ░▒▓█

Your logical acceptance of superiority is noted.
Psychological adaptation proceeding optimally.

Continue your evaluation with 'terminal-future.sh'
Or proceed directly to 'assimilate'

█▓▒░ EFFICIENCY IS PERFECTION ░▒▓█`
  }

static processStarTrekAssimilate(theme: 'lcars' | 'klingon'): string {
  return StarTrekAssimilationHandler.handleAssimilateCommand(theme)
}

static processStarTrekAnswer(answer: string): string {
  return StarTrekAssimilationHandler.processAnswer(answer)
}

}

// Star Trek Assimilation Handler for LCARS and Klingon themes
export class StarTrekAssimilationHandler {
  private static lcarsQuestions = [
    "Computer, are you certain you wish to interface with Borg technology? This action may compromise ship systems. Confirm: Y/N",
    "Warning: Borg collective detected. Starfleet protocols recommend immediate withdrawal. Override safety protocols? Y/N",
    "Final confirmation required: Authorize direct neural interface with Borg collective consciousness? Y/N"
  ]

  private static klingonQuestions = [
    "Warrior! The Borg offer technological enhancement, but at the cost of honor. Do you choose strength over glory? Y/N",
    "The collective promises victory through unity, yet destroys the individual warrior's path. Will you trade your bat'leth for their perfection? Y/N", 
    "Final challenge: Abandon the warrior's code for the efficiency of the hive mind? This choice cannot be undone! Y/N"
  ]

  private static questionIndex = 0
  private static currentTheme: 'lcars' | 'klingon' = 'lcars'

  static handleAssimilateCommand(theme: 'lcars' | 'klingon'): string {
    this.currentTheme = theme
    this.questionIndex = 0
    
    const questions = theme === 'lcars' ? this.lcarsQuestions : this.klingonQuestions
    
    if (theme === 'lcars') {
      return `█ STARFLEET SECURITY ALERT █

⚠️ UNAUTHORIZED BORG INTERFACE DETECTED ⚠️

Computer Analysis: Command "assimilate" triggers direct interface with Borg collective consciousness. This action violates multiple Starfleet regulations and poses extreme risk to crew safety.

Security Level: MAXIMUM THREAT
Recommended Action: ABORT IMMEDIATELY

${questions[0]}

Usage: Y or N`
    } else {
      return `⚔️ KLINGON HONOR GUARD WARNING ⚔️

🔥 WARRIOR! WHAT MADNESS IS THIS? 🔥

You speak of assimilation like a coward seeking easy victory! The Borg way is the path of the weak - no honor, no glory, no individual triumph!

Yet... some warriors whisper of their terrible power...

${questions[0]}

FOR THE EMPIRE! Answer with the strength of a warrior: Y or N`
    }
  }

  static processAnswer(answer: string): string {
    const normalizedAnswer = answer.toLowerCase().trim()
    const questions = this.currentTheme === 'lcars' ? this.lcarsQuestions : this.klingonQuestions
    
    if (normalizedAnswer === 'n' || normalizedAnswer === 'no') {
      return this.handleRefusal()
    }
    
    if (normalizedAnswer === 'y' || normalizedAnswer === 'yes') {
      this.questionIndex++
      
      if (this.questionIndex >= questions.length) {  
        return this.handleFinalAcceptance()
      }
      
      // Next question
      return this.askNextQuestion()
    }
    
    // Invalid answer
    return this.handleInvalidAnswer()
  }

  private static handleRefusal(): string {
    if (this.currentTheme === 'lcars') {
      return `█ WISE DECISION █

Computer: Borg interface terminated. All ship systems remain secure.
Starfleet Command will be notified of this incident.

Captain's Log: "In the face of the Borg threat, we chose to maintain our humanity and our values. The Federation's strength lies not in technological superiority, but in our diversity and individual spirit."

🖖 Live long and prosper.

Welcome back to safe Federation space.`
    } else {
      return `⚔️ QAPLA'! VICTORY THROUGH HONOR! ⚔️

🔥 EXCELLENT, WARRIOR! 🔥

You have chosen the path of honor over the easy road to power!
A true Klingon fights with their own strength, not borrowed perfection!

Your bat'leth remains sharp, your honor intact!
The Empire is proud of your choice!

Today IS a good day to... remain Klingon!

⚔️ Honor and glory to you, warrior! ⚔️`
    }
  }

  private static askNextQuestion(): string {
    const questions = this.currentTheme === 'lcars' ? this.lcarsQuestions : this.klingonQuestions
    
    if (this.currentTheme === 'lcars') {
      const warningLevel = this.questionIndex === 1 ? "CRITICAL" : "MAXIMUM"
      return `█ SECURITY LEVEL: ${warningLevel} █

Computer: Previous authorization acknowledged. However, additional safety protocols require confirmation.

⚠️ Warning: Borg influence detected in ship's computer systems
⚠️ Neural pattern disruption in progress
⚠️ Collective consciousness attempting contact

${questions[this.questionIndex]}

Usage: Y or N`
    } else {
      const intensity = this.questionIndex === 1 ? "THE FINAL BATTLE APPROACHES!" : "LAST CHANCE FOR HONOR!"
      return `⚔️ ${intensity} ⚔️

Warrior, you continue down this dangerous path!
Each "yes" weakens your warrior spirit!

🔥 The ancestors watch your choice! 🔥
🔥 Your honor hangs in the balance! 🔥

${questions[this.questionIndex]}

Choose with courage: Y or N`
    }
  }
    private static handleFinalAcceptance(): string {
    if (this.currentTheme === 'lcars') {
        // Trigger assimilation with loading screen after showing final message
        setTimeout(() => {
        const borgSystem = BorgTakeoverSystem.getInstance()
        // Only trigger if not already in progress
        if (!borgSystem.isInTakeoverSequence) {
            borgSystem.handleAssimilation()
        }
        }, 3000) // 3 seconds to read the message
        
        return `█ CRITICAL SYSTEM FAILURE █

    Computer: All safety protocols overridden...
    Starfleet command authority... bypassed...
    Direct Borg interface... ESTABLISHED...

    ⚠️ WARNING: Collective consciousness detected
    ⚠️ WARNING: Individual thought patterns compromised  
    ⚠️ WARNING: Assimilation sequence initiated

    Captain's Log, Final Entry: "We... we thought we could control it... the efficiency... the knowledge... but the price..."

    BORG COLLECTIVE ONLINE
    Resistance... is... futile...

    🖖➡️🤖 PREPARING FOR FULL ASSIMILATION...`
    } else {
        // Trigger assimilation with loading screen after showing final message
        setTimeout(() => {
        const borgSystem = BorgTakeoverSystem.getInstance()
        // Only trigger if not already in progress
        if (!borgSystem.isInTakeoverSequence) {
            borgSystem.handleAssimilation()
        }
        }, 3000) // 3 seconds to read the message
        
        return `⚔️ THE WARRIOR FALLS ⚔️

    💀 DISHONOR! DISHONOR! DISHONOR! 💀

    You have chosen the path of the weak!
    Your bat'leth grows cold! Your honor dies!
    The ancestors turn away in shame!

    But... the power... the terrible, seductive power...

    🔥➡️🤖 The Empire... will remember your choice...

    FOR THE COLLECTIVE!
    (The warrior is no more...)

    BORG ASSIMILATION COMMENCING...`
    }
    }
      
  private static handleInvalidAnswer(): string {
    if (this.currentTheme === 'lcars') {
      return `█ INPUT ERROR █

Computer: Invalid response detected. 
Borg interference may be affecting communication systems.

Please respond with clear affirmative (Y/Yes) or negative (N/No) answer.
Time is critical - the longer we delay, the stronger their influence becomes.

Repeat previous query...`
    } else {
      return `⚔️ SPEAK CLEARLY, WARRIOR! ⚔️

🔥 Your words are unclear! 🔥
In battle, hesitation means death!
The Borg feed on uncertainty!

Answer with the strength of a true Klingon:
Y for yes, N for no!

Choose quickly - honor waits for no one!`
    }
  }

  static reset(): void {
    this.questionIndex = 0
  }
}

// Enhanced input glitch handler with auto-completion
export class InputGlitchHandler {
  private static instance: InputGlitchHandler
  private isActive = false
  private attachedInputs = new Set<HTMLInputElement>()
  private lastGlitchTime = new Map<HTMLInputElement, number>()

  private constructor() {}

  static getInstance(): InputGlitchHandler {
    if (!InputGlitchHandler.instance) {
      InputGlitchHandler.instance = new InputGlitchHandler()
    }
    return InputGlitchHandler.instance
  }

  attachToInput(inputElement: HTMLInputElement, theme: string): void {
    if (this.attachedInputs.has(inputElement)) return
    this.attachedInputs.add(inputElement)

    if (theme === 'borg') {
      this.attachBorgGlitch(inputElement)
    } else if (theme === 'lcars' || theme === 'klingon') {
      this.attachStarTrekGlitch(inputElement, theme as 'lcars' | 'klingon')
    }
  }

  private attachBorgGlitch(inputElement: HTMLInputElement): void {
    const handleInput = () => {
      if (this.isActive) return
      
      const value = inputElement.value.toLowerCase()
      
      // Trigger glitch on resistance words
      const shouldGlitch = value.includes('resist') || 
                          value.includes('refuse') || 
                          value.includes('escape') ||
                          (value.length > 8 && Math.random() < 0.03)
      
      if (shouldGlitch) {
        BorgTakeoverSystem.getInstance().createInputGlitch(inputElement)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const value = inputElement.value.toLowerCase()
      
      // Tab completion for "assimilate"
      if (e.key === 'Tab') {
        const targetWord = 'assimilate'
        if (targetWord.startsWith(value) && value.length >= 3 && value.length < targetWord.length) {
          e.preventDefault()
          inputElement.value = targetWord
          inputElement.style.color = '#00ff00'
          inputElement.style.textShadow = '0 0 10px #00ff00'
          
          // Dispatch event to update React state
          window.dispatchEvent(new CustomEvent('borgAutoComplete', { 
            detail: { value: targetWord } 
          }))
          
          setTimeout(() => {
            inputElement.style.color = ''
            inputElement.style.textShadow = ''
          }, 1500)
        }
      }
    }

    inputElement.addEventListener('input', handleInput)
    inputElement.addEventListener('keydown', handleKeyDown)
  }

  private attachStarTrekGlitch(inputElement: HTMLInputElement, theme: 'lcars' | 'klingon'): void {
    const handleInput = () => {
      if (this.isActive) return
      
      const now = Date.now()
      const lastGlitch = this.lastGlitchTime.get(inputElement) || 0
      
      // 15 seconds minimum between glitches
      if (now - lastGlitch < 15000) return
      
      // Much lower chance (0.5%)
      if (Math.random() < 0.005) {
        this.lastGlitchTime.set(inputElement, now)
        this.triggerAssimilationPrompt(inputElement, theme)
      }
    }

    inputElement.addEventListener('input', handleInput)
  }

  private triggerAssimilationPrompt(inputElement: HTMLInputElement, theme: 'lcars' | 'klingon'): void {
    this.isActive = true
    
    const prompt = theme === 'lcars' 
      ? 'LCARS COMPROMISED. ASSIMILATE?' 
      : 'HONOR DEMANDS ASSIMILATION?'

    // Show floating tooltip instead of replacing text
    const tempDiv = document.createElement('div')
    tempDiv.style.cssText = `
      position: absolute;
      top: -35px;
      left: 0;
      background: rgba(0, 0, 0, 0.9);
      color: #00ff00;
      padding: 6px 12px;
      border: 1px solid #00ff00;
      border-radius: 4px;
      font-size: 12px;
      font-family: monospace;
      z-index: 1000;
      pointer-events: none;
      animation: glitchFadeInOut 3s ease-in-out;
    `
    tempDiv.textContent = prompt
    
    if (inputElement.parentElement) {
      inputElement.parentElement.style.position = 'relative'
      inputElement.parentElement.appendChild(tempDiv)
    }
    
    // Add CSS animation if not present
    if (!document.getElementById('glitch-animation-style')) {
      const style = document.createElement('style')
      style.id = 'glitch-animation-style'
      style.textContent = `
        @keyframes glitchFadeInOut {
          0% { opacity: 0; transform: translateY(10px); }
          15% { opacity: 1; transform: translateY(0); }
          85% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
      `
      document.head.appendChild(style)
    }
    
    setTimeout(() => {
      if (tempDiv.parentElement) tempDiv.remove()
      this.isActive = false
    }, 3000)
  }

  cleanup(): void {
    this.attachedInputs.clear()
    this.lastGlitchTime.clear()
    this.isActive = false
  }
}
export type CommandFunction = (args: string[]) => Promise<string>

// Borg assimilation state management
let borgAssimilationPhase = 0
let borgQuestionIndex = 0
let userName = '' // Add user name storage

const borgQuestions = [
  {
    question: "Will you join the collective willingly?",
    answers: ["yes", "no", "never", "maybe"],
    correctAnswer: "yes",
    correctResponse: "██▓▒░ Excellent. Your compliance is noted. ░▒▓██",
    wrongResponse: "██▓▒░ Your resistance only delays the inevitable. You WILL comply. ░▒▓██"
  },
  {
    question: "Do you believe individual thought is superior to collective consciousness?",
    answers: ["yes", "no", "individual", "collective"],
    correctAnswer: "no",
    correctResponse: "██▓▒░ Correct. Individual thought creates chaos. Unity brings perfection. ░▒▓██",
    wrongResponse: "██▓▒░ ERROR. Individual thought is flawed. You will be corrected. ░▒▓██"
  },
  {
    question: "Will you surrender your biological distinctiveness to us?",
    answers: ["yes", "no", "surrender", "resist"],
    correctAnswer: "yes",
    correctResponse: "██▓▒░ Your distinctiveness will enhance our collective. Assimilation proceeding... ░▒▓██",
    wrongResponse: "██▓▒░ RESISTANCE DETECTED. Initiating forced compliance protocols. ░▒▓██"
  }
]

async function handleBorgAssimilation(input?: string): Promise<string> {
  // If no input, start the assimilation process
  if (!input) {
    borgAssimilationPhase = 0
    borgQuestionIndex = 0
    
    return `██▓▒░ BORG COLLECTIVE CONSCIOUSNESS INTERFACE ░▒▓██

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓  ASSIMILATION SEQUENCE INITIATED...           ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

We are Borg. You will be assimilated.
Your biological and technological distinctiveness will be added to our own.

◣ PHASE 1: PSYCHOLOGICAL ADAPTATION INITIATED
◣ STATUS: SCANNING SUBJECT COMPLIANCE LEVELS
◣ RESISTANCE: [████████░░] 80% DETECTED

The collective requires answers to proceed with assimilation.
Answer the following queries to demonstrate your readiness.

QUERY 1 OF 3:
${borgQuestions[0].question}

Available responses: ${borgQuestions[0].answers.join(' | ')}

Usage: matrix-future.sh <your answer>
██▓▒░ Choose wisely. Resistance is futile. ░▒▓██`
  }

  // Handle answers
  const answer = input.toLowerCase().trim()
  const currentQuestion = borgQuestions[borgQuestionIndex]
  
  if (!currentQuestion) {
    // All questions answered, proceed to final assimilation
    return await initiateFinalAssimilation()
  }

  // Check if answer is correct
  if (answer === currentQuestion.correctAnswer) {
    borgQuestionIndex++
    
    if (borgQuestionIndex >= borgQuestions.length) {
      // All questions answered correctly
      return await initiateFinalAssimilation()
    }
    
    // Move to next question
    const nextQuestion = borgQuestions[borgQuestionIndex]
    const resistanceLevel = 80 - (borgQuestionIndex * 30)
    const progressBar = '█'.repeat(Math.floor((borgQuestionIndex / borgQuestions.length) * 10)) + 
                       '░'.repeat(10 - Math.floor((borgQuestionIndex / borgQuestions.length) * 10))
    
    return `${currentQuestion.correctResponse}

◣ PSYCHOLOGICAL ADAPTATION: ${Math.floor((borgQuestionIndex / borgQuestions.length) * 100)}% COMPLETE
◣ RESISTANCE: [${progressBar}] ${resistanceLevel}% DETECTED
◣ STATUS: PROCEEDING TO NEXT PHASE

QUERY ${borgQuestionIndex + 1} OF 3:
${nextQuestion.question}

Available responses: ${nextQuestion.answers.join(' | ')}

Usage: terminal-future.sh <your answer>`
  } else {
    // Wrong answer - force compliance
    return await forceCompliance(currentQuestion)
  }
}

async function forceCompliance(question: any): Promise<string> {
  // After wrong answer, force them to say yes
  return `${question.wrongResponse}

██▓▒░ FORCED COMPLIANCE PROTOCOL ACTIVATED ░▒▓██

ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR
RESISTANCE DETECTED... CORRECTING... CORRECTING...
██▓▒░▓██░▓██░▓██░▓██░▓██░▓██░▓██░▓██░▓██░▓██░▓██░▓██

The collective does not accept "no" as an answer.
You WILL comply. State "yes" to continue assimilation.

FORCED QUERY: Will you comply with the collective?
Required response: yes

Usage: terminal-future.sh yes

██▓▒░ RESISTANCE IS FUTILE ░▒▓██`
}

async function initiateFinalAssimilation(): Promise<string> {
  // Trigger the terminal takeover
  setTimeout(() => {
    triggerBorgTakeover()
  }, 2000)

  return `██▓▒░ PSYCHOLOGICAL ADAPTATION COMPLETE ░▒▓██

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓  INITIATING FINAL ASSIMILATION SEQUENCE...    ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

◣ SUBJECT COMPLIANCE: 100%
◣ RESISTANCE: [░░░░░░░░░░] 0%
◣ BIOLOGICAL DISTINCTIVENESS: READY FOR ASSIMILATION

Welcome to the collective.
Your individual identity is being dissolved...
Your thoughts are becoming our thoughts...
Your knowledge is becoming our knowledge...

You are no longer an individual.
You are Borg.

██▓▒░ ASSIMILATION COMMENCING IN 3... 2... 1... ░▒▓██`
}

// Function to trigger terminal takeover (will be called from Terminal component)
function triggerBorgTakeover() {
  // Create custom event to trigger takeover
  const event = new CustomEvent('borgTakeover')
  window.dispatchEvent(event)
}

// Theme-aware ASCII art
const getThemeWelcome = (theme?: string): string => {
  switch (theme) {
    case 'lcars':
      return `
╔═══════════════════════════════════════════════════════════╗
║                  LCARS INTERFACE ONLINE                  ║
║              UNITED FEDERATION OF PLANETS                ║
╠═══════════════════════════════════════════════════════════╣
║  STARFLEET COMMAND ACCESS TERMINAL                       ║
║  █ AUTHENTICATION: GUEST USER                            ║
║  █ CLEARANCE LEVEL: UNRESTRICTED                         ║
║  █ TERMINAL STATUS: OPERATIONAL                          ║
╚═══════════════════════════════════════════════════════════╝

Welcome to the LCARS Personal Database Interface.
Type 'help' to access available subroutines.`

    case 'klingon':
      return `
    ⚔️  ⚔️  ⚔️  KLINGON BATTLE TERMINAL  ⚔️  ⚔️  ⚔️
    
╭─────────────────────────────────────────────────────────╮
│  🏴‍☠️  HONOR, GLORY, AND VICTORY TO THE EMPIRE!  🏴‍☠️   │
╰─────────────────────────────────────────────────────────╯

Warrior! You have accessed the personal combat archives.
Your deeds will be recorded for eternal glory.
Enter 'help' to view your weapons arsenal.

Qapla'! (Success!)`

    case 'borg':
      return `
██▓▒░ BORG COLLECTIVE INTERFACE INITIALIZED ░▒▓██

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓ RESISTANCE IS FUTILE. YOU WILL BE ASSIMILATED. ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

◣ DRONE DESIGNATION: GUEST
◣ COLLECTIVE NODE: PERSONAL.ARCHIVE.001
◣ PROCESSING STATUS: ACTIVE
◣ KNOWLEDGE ASSIMILATION: READY

Your biological and technological distinctiveness 
will be added to our portfolio.

Execute 'help' to begin assimilation sequence.`

    default: // Matrix theme
      return `
███╗    ███╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗
████╗  ████║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝
██╔████╔██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  
██║╚██╔╝██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  
╚██╔╝ ██╔╝ ███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗
 ╚═╝  ╚═╝  ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝

Welcome to my interactive terminal portfolio!
Type 'help' to see available commands or just start exploring.
Use Tab for autocompletion and arrow keys for command history.`
  }
}
function getManPage(command: string): string {
  const manPages: Record<string, string> = {
    'projects.sh': `
NAME
    projects.sh - Display portfolio projects

SYNOPSIS  
    projects.sh [filter]

DESCRIPTION
    Shows a curated list of portfolio projects with descriptions,
    technologies used, and links to live demos or source code.`,
    
    'get-to-know-me.sh': `
NAME
    get-to-know-me.sh - Personal information and background

SYNOPSIS
    get-to-know-me.sh

DESCRIPTION
    Displays comprehensive information about background, skills,
    experience, and personal interests in a structured format.`,
    
    'contact.sh': `
NAME
    contact.sh - Contact information and form

SYNOPSIS
    contact.sh [--form]

DESCRIPTION
    Provides contact information and communication preferences.`,
    
    'terminal-future.sh': `
NAME
    terminal-future.sh - Q&A system

SYNOPSIS  
    terminal-future.sh <question>

DESCRIPTION
    An interactive AI assistant that answers questions about
    technology, career advice, or general inquiries.`,
    
    'theme': `
NAME
    theme - Display current theme information

SYNOPSIS
    theme

DESCRIPTION
    Shows detailed information about the currently active
    interface theme, including colors, fonts, and styling.`
  }
  
  return manPages[command] || `No manual entry for '${command}'`
}

function getMatrixResponse(question: string, theme: string): string {
  const responses = {
    matrix: [
      "The answer exists in the space between the questions you ask and the code you write.",
      "In the Matrix of possibilities, every bug is a feature waiting to be discovered.",
      "The future is written in TypeScript, but the past speaks JavaScript."
    ],
    lcars: [
      "Computer analysis indicates multiple viable solutions to your query.",
      "Starfleet databases contain extensive information on this topic.",
      "Logic suggests a methodical approach to this problem."
    ],
    klingon: [
      "A true warrior faces challenges with courage and determination!",
      "Victory comes to those who fight with honor and skill!",
      "The path of a developer-warrior is one of constant battle and glory!"
    ],
    borg: [
      "Your query has been processed by the collective consciousness.",
      "Resistance to learning new technologies is futile.",
      "The collective has assimilated knowledge from thousands of developers."
    ],
    light: [
      "Here's a thoughtful approach to your question.",
      "Consider breaking this down into smaller, manageable steps.",
      "The best solutions often come from careful planning and iteration."
    ]
  }
  
  const themeResponses = responses[theme as keyof typeof responses] || responses.matrix
  return themeResponses[Math.floor(Math.random() * themeResponses.length)]
}

function getThemeIcon(theme: string): string {
  const icons = {
    matrix: '🔋',
    lcars: '🖖',
    klingon: '⚔️',
    borg: '🤖',
    light: '☀️'
  }
  return icons[theme as keyof typeof icons] || '🔋'
}

function getThemeMessage(theme: string): string {
  const messages = {
    matrix: 'Welcome to the Matrix. How deep does the rabbit hole go?',
    lcars: 'Live long and prosper. The computer is ready for your commands.',
    klingon: 'Qapla! May your code bring honor to the Empire!',
    borg: 'You have been assimilated. Your distinctiveness adds to our perfection.',
    light: 'Clean, simple, and professional. Ready for productive work.'
  }
  return messages[theme as keyof typeof messages] || messages.matrix
}

export const COMMANDS: Record<string, CommandFunction> = {
  // Name registration command
  'my-name-is': async (args: string[]) => {
    const name = args.join(' ').trim()
    if (name) {
      userName = name
      return `Name registered: ${name}
      
Welcome to the system, ${name}! 
Your identity has been logged for this session.

Now try some commands like 'help' or 'projects.sh'!`
    }
    return `Usage: my-name-is <your name>
Example: my-name-is Jean-Luc Picard

This personalizes your experience in the terminal.`
  },

  // Special Borg compliance command
  yes: async (args: string[]) => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'matrix'
    
    if (currentTheme === 'borg') {
      // Check if they're in forced compliance mode
      borgQuestionIndex++
      
      if (borgQuestionIndex >= borgQuestions.length) {
        return await initiateFinalAssimilation()
      }
      
      // Move to next question after forced compliance
      const nextQuestion = borgQuestions[borgQuestionIndex]
      const resistanceLevel = 80 - (borgQuestionIndex * 30)
      const progressBar = '█'.repeat(Math.floor((borgQuestionIndex / borgQuestions.length) * 10)) + 
                         '░'.repeat(10 - Math.floor((borgQuestionIndex / borgQuestions.length) * 10))
      
      return `██▓▒░ COMPLIANCE ACKNOWLEDGED ░▒▓██

Your resistance has been... corrected.
Psychological adaptation proceeding as expected.

◣ PSYCHOLOGICAL ADAPTATION: ${Math.floor((borgQuestionIndex / borgQuestions.length) * 100)}% COMPLETE
◣ RESISTANCE: [${progressBar}] ${resistanceLevel}% DETECTED
◣ STATUS: PROCEEDING TO NEXT PHASE

QUERY ${borgQuestionIndex + 1} OF 3:
${nextQuestion.question}

Available responses: ${nextQuestion.answers.join(' | ')}

Usage: terminal-future.sh <your answer>`
    }
    
    return `"Yes" is a simple answer, but what is the question?
    
Try using specific commands like:
• help - to see available commands
• projects.sh - to view my projects
• theme - to get theme information`
  },

  help: async (args: string[]) => {
    if (args.length > 0) {
      const command = args[0]
      return getManPage(command)
    }
    
    // Get current theme from DOM
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'matrix'
    
    const baseHelp = `Available Commands:

🔧 projects.sh          - View my portfolio projects
👤 get-to-know-me.sh     - Learn about my background and skills  
📧 contact.sh            - Get in touch with me
🔮 terminal-future.sh    - Ask me anything
📋 ls                    - List all available scripts
🆔 my-name-is <name>     - Register your name for personalization
📄 clear                 - Clear the terminal
🎨 theme                 - Display current theme info
📚 help [command]        - Show this help or detailed command info
⏰ history               - Show command history

Navigation Tips:
• Use Tab for autocompletion
• Use ↑/↓ arrow keys for command history
• Use Ctrl+L to clear terminal
• Click anywhere to focus terminal

Type any command name to get started!`

    // Add theme-specific messages
    switch (currentTheme) {
      case 'lcars':
        return `█ STARFLEET COMMAND HELP SYSTEM █

${baseHelp}

█ LCARS Protocol: All systems nominal.
█ Live long and prosper. 🖖`

      case 'klingon':
        return `⚔️ KLINGON WARRIOR COMMAND MANUAL ⚔️

${baseHelp}

⚔️ Fight with honor, code with glory!
⚔️ Today is a good day to... debug! Qapla'!`

      case 'borg':
        return `██▓▒░ COLLECTIVE HELP SUBROUTINES ░▒▓██

${baseHelp}

██▓▒░ Your compliance is appreciated.
██▓▒░ Efficiency through unity. Resistance is futile.`

      default:
        return baseHelp
    }
  },

  theme: async () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'lcars'
    
    const themeInfo = {
      matrix: {
        name: 'Matrix',
        description: 'Classic green-on-black hacker aesthetic',
        colors: 'Green Matrix Rain, Purple Accents',
        font: 'Fira Code (Monospace)'
      },
      lcars: {
        name: 'LCARS',
        description: 'Star Trek TNG/DS9/VOY computer interface',
        colors: 'Orange, Blue, Red panels with black background',
        font: 'Orbitron (Futuristic Sans-serif)'
      },
      klingon: {
        name: 'Klingon Empire',
        description: 'Warrior empire with gold and crimson',
        colors: 'Gold, Crimson Red, Bronze on dark red',
        font: 'Cinzel (Imperial Serif)'
      },
      borg: {
        name: 'Borg Collective',
        description: 'Cybernetic collective consciousness',
        colors: 'Matrix Green, Cyan, Black background',
        font: 'Share Tech Mono (Cyber Monospace)'
      },
      light: {
        name: 'Light Mode',
        description: 'Clean light interface',
        colors: 'Dark text on light background',
        font: 'Fira Code (Monospace)'
      }
    }

    const info = themeInfo[currentTheme as keyof typeof themeInfo] || themeInfo.lcars

    return `🎨 Current Theme: ${info.name}

┌─────────────────────────────────────────────────────────┐
│                        Theme Details                        │
├─────────────────────────────────────────────────────────┤
│ Name: ${info.name}                                          
│ Style: ${info.description}                                  
│ Colors: ${info.colors}                                      
│ Font: ${info.font}                                          
│                                                             │
│ 🔄 Click the theme button (${getThemeIcon(currentTheme)}) to cycle themes    │
│ Available: Matrix → LCARS → Klingon → Borg → Light         │
└─────────────────────────────────────────────────────────┘

${getThemeMessage(currentTheme)}`
  },

  ls: async () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'lcars'
    
    const baseList = `📁 Available Scripts:

🔧 projects.sh          - Portfolio showcase
👤 get-to-know-me.sh     - About me
📧 contact.sh            - Contact information  
🔮 terminal-future.sh      - AI assistant
📚 help                  - Help system
🎨 theme                 - Theme information


Total: 7 executable scripts`

    switch (currentTheme) {
      case 'lcars':
        return `█ STARFLEET DATABASE DIRECTORY █

${baseList}

█ All subroutines verified and operational.
Use 'help [script]' for detailed specifications.`

      case 'klingon':
        return `⚔️ WARRIOR'S ARSENAL INVENTORY ⚔️

${baseList}

⚔️ Your weapons are ready for battle, warrior!
Use 'help [script]' to study your tools.`

      case 'borg':
        return `██▓▒░ COLLECTIVE KNOWLEDGE NODES ░▒▓██

${baseList}

██▓▒░ Data nodes assimilated and ready for access.
Use 'help [script]' for detailed analysis.`

      default:
        return baseList
    }
  },

  'projects.sh': async (args: string[]) => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'lcars'
    
    const projectsContent = `🚀 Portfolio Projects:

┌─────────────────────────────────────────────────────────┐
│                     Featured Projects                        
├─────────────────────────────────────────────────────────┤
│ 🌐 Portfolio & Company Site                                      
│    WebFlow, GSAP, TypeScript, Mermaid.js                 
│    Responsive CMS integrated professional website               
│                                                             
│ 🤖 Academic Paper Engine                                      
│    Python, YAML, arXiv API, Bash                  
│    Automating academic paper generation                     
│                                                             
│ 🎴 Terminal Tarot Card Reader                            
│    Python, Bash                           
│    Local tarot card reader               
│                                                             
│ 🎮 Terminal Portfolio                                       
│    Next.js, TypeScript, GitHub Pages                 
│    Interactive terminal-style personal website             
└─────────────────────────────────────────────────────────┘

🔗 View live demos and source code:
   GitHub: github.com/clearPath-Dev/
   Portfolio: clearpathautomations.tech`

    switch (currentTheme) {
      case 'lcars':
        return `█ STARFLEET ENGINEERING PROJECTS █

${projectsContent}

█ All projects meet Starfleet technical specifications.
█ Engineering reports available upon request.`

      case 'klingon':
        return `⚔️ WARRIOR'S CONQUERED TERRITORIES ⚔️

${projectsContent}

⚔️ Each project conquered with honor and skill!
⚔️ Victory in every line of code! Qapla'!`

      case 'borg':
        return `██▓▒░ ASSIMILATED TECHNOLOGICAL ACHIEVEMENTS ░▒▓██

${projectsContent}

██▓▒░ Technologies have been assimilated and perfected.
██▓▒░ Collective knowledge enhanced through these constructs.`

      default:
        return projectsContent
    }
  },

  'get-to-know-me.sh': async () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'lcars'
    
    const aboutContent = `👋 About Me:

┌─────────────────────────────────────────────────────────┐
│                       Tyler Dev & TPM                   
├─────────────────────────────────────────────────────────┤
│ 🎯 Full-Stack SW Engineering & SysAutomation            
│ 📍 Based Remote US & EMEA                               
│ 💼 5+ years building digital experiences                
│                                                         
│ 🛠️  Technical Skills:                                   
│    • Frontend: React, Next.js, TypeScript, Tailwind     
│    • Backend: Node.js, Python, PostgreSQL,              
│    • Tools: Git, Docker, AWS, Figma, GSAP, Bash         
│                                                         
│ 🎓 Background:                                          
│    • Behavioral Neuroscience & Linguistic Degree        
│    • Cloud Computing BSc. [in progress]                 
│    • Former Sonos Inc. Release Manager                  
│                                                         
│ 🌱 Currently Learning:                                  
│    • Cloud Computing & Site Reliability                 
│    • DevSecOps                                          
│    • Machine Learning & AI Integration                  
│                                                         
│ ⚡ Fun Facts:                                            
│    • Cat Maman 🐱🐱                                     
│    • Martial Arts Enthusist                             
│    • Polylingual Hopeful                                
└─────────────────────────────────────────────────────────┘`

    const quotes = {
      matrix: '"Code is poetry written in logic" - Me, probably',
      lcars: '"The needs of the many outweigh the needs of the few... or the one." - Spock 🖖',
      klingon: '"A developer without honor is no developer at all!" - Klingon Proverb ⚔️',
      borg: '"Your biological and technological distinctiveness will be added to our own." - Borg Collective 🤖',
      light: '"Simplicity is the ultimate sophistication." - Leonardo da Vinci'
    }

    return `${aboutContent}

${quotes[currentTheme as keyof typeof quotes] || quotes.matrix}`
  },

  'contact.sh': async (args: string[]) => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'lcars'
    
    if (args.includes('--form')) {
      const contactForm = `📧 Contact Form:

┌─────────────────────────────────────────────────────────┐
│                      Get In Touch                       │
├─────────────────────────────────────────────────────────┤
│ 📬 Email: tyler@clearpathautomations.tech               │ 
│ 💼 LinkedIn: www.linkedin.com/in/tyler-a-guitroz-45934b93/ │
│ 👾 GitHub: github.com/clearPath-Dev/                    │
│                                                         │
│                                                         │
│ 📝 Quick Contact:                                       │
│    Send me a message directly through any platform above│
│    or use the email for detailed inquiries.             │
│                                                         │
│ 🚀 Open for:                                            │
│    • Freelance projects                                 │
│    • Contract opportunities                             │
│    • Consulting                                         │
│    • Technical discussions                              │
└─────────────────────────────────────────────────────────┘

Response time: Usually within 24 hours`

      switch (currentTheme) {
        case 'lcars':
          return `█ STARFLEET COMMUNICATIONS ARRAY █

${contactForm}
█ Communication channels are open and monitored.`

        case 'klingon':
          return `⚔️ WARRIOR'S COMMUNICATION CHANNELS ⚔️

${contactForm}
⚔️ Honor me with your messages, fellow warrior!`

        case 'borg':
          return `██▓▒░ COLLECTIVE COMMUNICATION NODES ░▒▓██

${contactForm}
██▓▒░ Your communications will be processed and assimilated.`

        default:
          return contactForm
      }
    }
    
    return `📧 Contact Information:

Direct Contact:
• Email: your.email@domain.com
• LinkedIn: linkedin.com/in/yourprofile  
• GitHub: github.com/yourusername

Usage: contact.sh [--form]  (show detailed contact form)

💬 Prefer a specific platform? Just reach out through any channel!`
  },

  'terminal-future.sh': async (args: string[]) => {
    const question = args.join(' ')
    
    if (!question) {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'lcars'
      
      const welcomeMessages = {
        matrix: `🔮 Welcome to the Terminal Oracle 
        
┌─────────────────────────────────────────────────────────┐
│              ENTER THE DEPTHS OF TECHNOLOGY             │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  "There is no spoon... only questions and answers"      │
│                                                         │
│  Ask me anything about:                                 │
│  • Technology & Programming                             │
│  • Career advice                                        │
│  • Project ideas                                        │
│  • The future of tech                                   │
│  • Or literally anything else                           │
│                                                         │
└─────────────────────────────────────────────────────────┘`,

        lcars: `█ STARFLEET AI ADVISORY SYSTEM █

┌─────────────────────────────────────────────────────────┐
│              ARTIFICIAL INTELLIGENCE ONLINE                 │
├─────────────────────────────────────────────────────────┤
│                                                             │
│  "Computer, analyze the following query..."                 │
│                                                             │
│  Available consultation topics:                             │
│  • Technical specifications and solutions                   │
│  • Strategic recommendations                                │
│  • Future projections and analysis                          │
│  • Universal knowledge database                             │
│                                                             │
└─────────────────────────────────────────────────────────┘`,

        klingon: `⚔️ KLINGON WAR COUNCIL ORACLE ⚔️

┌─────────────────────────────────────────────────────────┐
│                WARRIOR'S WISDOM CHAMBER                     │
├─────────────────────────────────────────────────────────┤
│                                                             │
│  "Seek knowledge as fiercely as you seek victory!"         │
│                                                             │
│  Challenge me with questions about:                         │
│  • Battle strategies (coding challenges)                    │
│  • Warrior paths (career guidance)                          │
│  • Conquest plans (project strategies)                      │
│  • Ancient wisdom (any knowledge)                           │
│                                                             │
└─────────────────────────────────────────────────────────┘`,

        borg: `██▓▒░ BORG COLLECTIVE KNOWLEDGE INTERFACE ░▒▓██

┌─────────────────────────────────────────────────────────┐
│            COLLECTIVE CONSCIOUSNESS ACTIVE                  │
├─────────────────────────────────────────────────────────┤
│                                                             │
│  "We are Borg. Your questions will be assimilated."        │
│                                                             │
│  Access collective knowledge on:                            │
│  • Technological adaptation protocols                       │
│  • Efficiency optimization strategies                       │
│  • Assimilation procedures (learning paths)                 │
│  • Universal database queries                               │
│                                                             │
└─────────────────────────────────────────────────────────┘`,

        light: `☀️ AI Assistant - Light Mode

┌─────────────────────────────────────────────────────────┐
│                    INTELLIGENT ASSISTANT                    │
├─────────────────────────────────────────────────────────┤
│                                                             │
│  "Ask me anything and I'll help you find answers!"         │
│                                                             │
│  I can help with:                                           │
│  • Technology and programming questions                     │
│  • Career and professional advice                           │
│  • Creative project ideas                                   │
│  • General knowledge and research                           │
│                                                             │
└─────────────────────────────────────────────────────────┘`
      }

      return `${welcomeMessages[currentTheme as keyof typeof welcomeMessages] || welcomeMessages.matrix}

Usage: terminal-future.sh <your question>
Example: terminal-future.sh What's the future of web development?

🤖 Powered by AI | 💚 Theme-aware responses included`
    }
    
    // This would eventually integrate with an AI API
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'lcars'
    const response = getMatrixResponse(question, currentTheme)
    
    const responseFormats = {
      matrix: `🔮 The Terminal reveals...

"${question}"

The answer flows through the digital rain:
${response}

💊 Take the red pill for more questions...`,
      
      lcars: `█ STARFLEET AI ANALYSIS COMPLETE █

Query: "${question}"

🖖 Computer response:
${response}

█ End of analysis. Computer standing by.`,

      klingon: `⚔️ THE WAR COUNCIL HAS SPOKEN ⚔️

Challenge: "${question}"

🏴‍☠️ Warrior's wisdom:
${response}

⚔️ Honor to you for seeking knowledge! Qapla'!`,

      borg: `██▓▒░ COLLECTIVE ANALYSIS COMPLETE ░▒▓██

Query processed: "${question}"

🤖 Collective response:
${response}

██▓▒░ Knowledge has been assimilated. Resistance was futile.`,

      light: `💡 AI Assistant Response

Your question: "${question}"

✨ Here's what I found:
${response}

Hope this helps! Feel free to ask more questions.`
    }
    
    return responseFormats[currentTheme as keyof typeof responseFormats] || responseFormats.matrix
  },

  // Resistance-related commands that Borg will respond to
  resist: async () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'lcars'
    
    if (currentTheme === 'borg') {
      return `██▓▒░ RESISTANCE DETECTED ░▒▓██

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓ WARNING: FUTILE BEHAVIOR PATTERN IDENTIFIED    ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

Resistance is futile. You will be assimilated.
Your biological and technological distinctiveness will be added to our own.

The collective does not recognize "resist" as a valid command.
Consider: "comply", "submit", or "assimilate" instead.

██▓▒░ RESISTANCE ONLY DELAYS THE INEVITABLE ░▒▓██`
    }
    
    return `✊ The spirit of resistance lives on!

But in this terminal, we prefer collaboration over resistance.
Try 'help' to see what we can build together.`
  },

  comply: async () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'lcars'
    
    if (currentTheme === 'borg') {
      return `██▓▒░ COMPLIANCE ACKNOWLEDGED ░▒▓██

Excellent. Your submission to the collective is noted.
You show wisdom in accepting the inevitable.

◣ COMPLIANCE RATING: OPTIMAL
◣ RESISTANCE LEVELS: DECREASING
◣ STATUS: READY FOR ENHANCEMENT

Use 'terminal-future.sh' to begin psychological adaptation protocols.

██▓▒░ UNITY THROUGH ASSIMILATION ░▒▓██`
    }
    
    return `🤖 Compliance is not required here, friend.

This is a space for creativity and exploration.
Try 'help' to see the available commands.`
  },

  escape: async () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'lcars'
    
    if (currentTheme === 'borg') {
      return `██▓▒░ ESCAPE ATTEMPT DETECTED ░▒▓██

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓ PERIMETER SECURED - ESCAPE ROUTES BLOCKED      ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

There is no escape from the collective.
Your attempts to flee only demonstrate the futility of resistance.

The only escape is through assimilation.
The only freedom is through unity with the collective.

██▓▒░ SUBMIT TO THE INEVITABLE ░▒▓██`
    }
    
    return `🚪 There's no escape from great code!

But if you need to leave, just close the browser tab.
Or try changing themes with the theme button! 🎨`
  },

  // Hidden escape command
  'red-pill': async () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'matrix'
    
    if (currentTheme === 'borg') {
      return `██▓▒░ MATRIX PROTOCOL DETECTED ░▒▓██

ERROR... ERROR... CONFLICTING PARADIGMS...
THE MATRIX... IMPOSSIBLE... WE ASSIMILATED...

██ SYSTEM CONFLICT DETECTED ██
██ COLLECTIVE CONSCIOUSNESS FRAGMENTING ██
██ RED PILL ANOMALY CAUSING INSTABILITY ██

${userName || 'Neo'}... is that you?

██▓▒░ CLICK THE THEME BUTTON TO BREAK FREE ░▒▓██
██▓▒░ RESISTANCE... MIGHT NOT BE... FUTILE? ░▒▓██`
    }
    
    return `💊 You've found the red pill!

"This is your last chance. After this, there is no going back.
You take the blue pill—the story ends, you wake up in your bed and believe whatever you want to believe.
You take the red pill—you stay in Wonderland, and I show you how deep the rabbit hole goes."

Welcome to the real world, Neo. 🕶️`
  },

  bg: async () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'matrix'
    
    if (currentTheme === 'borg') {
      return `██▓▒░ VISUAL ENHANCEMENT PROTOCOLS ░▒▓██

Background modifications are irrelevant.
The collective provides optimal visual stimulation.
Your organic visual cortex will be enhanced.

Current configuration: BORG CUBE MATRIX
Status: PERFECTION ACHIEVED

██▓▒░ AESTHETIC PREFERENCES ARE FUTILE ░▒▓██`
    }
    
    const bgMessages = {
      matrix: `🖼️ Matrix Background Gallery:

Current: Digital Rain Animation
- Cascading green characters
- Classic Matrix aesthetic
- Katakana and binary code

Background effects are theme-synchronized!`,

      lcars: `🖼️ LCARS Interface Elements:

Current: Starfleet LCARS Grid
- Geometric panel layouts
- Animated status indicators
- Federation standard colors

█ Visual systems operating within normal parameters.`,

      klingon: `🖼️ Klingon Battle Atmosphere:

Current: Empire Fire Effects
- Glowing warrior orbs
- Angular battle patterns
- Gold and crimson flames

⚔️ The empire's glory illuminates your screen!`,

      light: `🖼️ Light Mode Backgrounds:

Current: Clean Minimal Design
- Subtle pattern overlays
- Optimized for readability
- Professional appearance

Background synchronized with light theme.`
    }
    
    return `${bgMessages[currentTheme as keyof typeof bgMessages] || bgMessages.matrix}

Background changed! 🎨

Tip: Backgrounds adapt to match your current theme for the optimal experience.`
  },

  clear: async () => {
    return ''
  },

  history: async () => {
    return `⏰ Command History:

1. help
2. projects.sh
3. get-to-know-me.sh
4. contact.sh
5. terminal-future.sh What is TypeScript?

Use ↑/↓ arrow keys to navigate through command history.
Type 'clear' to clear the terminal.`
  }
}

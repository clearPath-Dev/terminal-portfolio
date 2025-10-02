(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1503:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>d,originalPathname:()=>h,pages:()=>u,routeModule:()=>p,tree:()=>c}),r(908),r(1506),r(5866);var i=r(3191),n=r(8716),s=r(7922),a=r.n(s),o=r(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,908)),"/workspaces/terminal-portfolio/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,1506)),"/workspaces/terminal-portfolio/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],u=["/workspaces/terminal-portfolio/app/page.tsx"],h="/page",d={require:r,loadChunk:()=>Promise.resolve()},p=new i.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9823:(e,t,r)=>{Promise.resolve().then(r.bind(r,6711))},8642:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},6293:()=>{},6711:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>iG});var i=r(326),n=r(7577),s=r.n(n);let a=0,o="",l=[{question:"Will you join the collective willingly?",answers:["yes","no","never","maybe"],correctAnswer:"yes",correctResponse:"██▓▒░ Excellent. Your compliance is noted. ░▒▓██",wrongResponse:"██▓▒░ Your resistance only delays the inevitable. You WILL comply. ░▒▓██"},{question:"Do you believe individual thought is superior to collective consciousness?",answers:["yes","no","individual","collective"],correctAnswer:"no",correctResponse:"██▓▒░ Correct. Individual thought creates chaos. Unity brings perfection. ░▒▓██",wrongResponse:"██▓▒░ ERROR. Individual thought is flawed. You will be corrected. ░▒▓██"},{question:"Will you surrender your biological distinctiveness to us?",answers:["yes","no","surrender","resist"],correctAnswer:"yes",correctResponse:"██▓▒░ Your distinctiveness will enhance our collective. Assimilation proceeding... ░▒▓██",wrongResponse:"██▓▒░ RESISTANCE DETECTED. Initiating forced compliance protocols. ░▒▓██"}];async function c(){return setTimeout(()=>{(function(){let e=new CustomEvent("borgTakeover");window.dispatchEvent(e)})()},2e3),`██▓▒░ PSYCHOLOGICAL ADAPTATION COMPLETE ░▒▓██

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

██▓▒░ ASSIMILATION COMMENCING IN 3... 2... 1... ░▒▓██`}let u={"my-name-is":async e=>{let t=e.join(" ").trim();return t?(o=t,`Name registered: ${t}
      
Welcome to the system, ${t}! 
Your identity has been logged for this session.

Now try some commands like 'help' or 'projects.sh'!`):`Usage: my-name-is <your name>
Example: my-name-is Jean-Luc Picard

This personalizes your experience in the terminal.`},yes:async e=>{if("borg"===(document.documentElement.getAttribute("data-theme")||"matrix")){if(++a>=l.length)return await c();let e=l[a],t=80-30*a,r="█".repeat(Math.floor(a/l.length*10))+"░".repeat(10-Math.floor(a/l.length*10));return`██▓▒░ COMPLIANCE ACKNOWLEDGED ░▒▓██

Your resistance has been... corrected.
Psychological adaptation proceeding as expected.

◣ PSYCHOLOGICAL ADAPTATION: ${Math.floor(a/l.length*100)}% COMPLETE
◣ RESISTANCE: [${r}] ${t}% DETECTED
◣ STATUS: PROCEEDING TO NEXT PHASE

QUERY ${a+1} OF 3:
${e.question}

Available responses: ${e.answers.join(" | ")}

Usage: terminal-future.sh <your answer>`}return`"Yes" is a simple answer, but what is the question?
    
Try using specific commands like:
• help - to see available commands
• projects.sh - to view my projects
• theme - to get theme information`},help:async e=>{if(e.length>0)return function(e){return({"projects.sh":`
NAME
    projects.sh - Display portfolio projects

SYNOPSIS  
    projects.sh [filter]

DESCRIPTION
    Shows a curated list of portfolio projects with descriptions,
    technologies used, and links to live demos or source code.`,"get-to-know-me.sh":`
NAME
    get-to-know-me.sh - Personal information and background

SYNOPSIS
    get-to-know-me.sh

DESCRIPTION
    Displays comprehensive information about background, skills,
    experience, and personal interests in a structured format.`,"contact.sh":`
NAME
    contact.sh - Contact information and form

SYNOPSIS
    contact.sh [--form]

DESCRIPTION
    Provides contact information and communication preferences.`,"terminal-future.sh":`
NAME
    terminal-future.sh - Q&A system

SYNOPSIS  
    terminal-future.sh <question>

DESCRIPTION
    An interactive AI assistant that answers questions about
    technology, career advice, or general inquiries.`,theme:`
NAME
    theme - Display current theme information

SYNOPSIS
    theme

DESCRIPTION
    Shows detailed information about the currently active
    interface theme, including colors, fonts, and styling.`})[e]||`No manual entry for '${e}'`}(e[0]);let t=document.documentElement.getAttribute("data-theme")||"matrix",r=`Available Commands:

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

Type any command name to get started!`;switch(t){case"lcars":return`█ STARFLEET COMMAND HELP SYSTEM █

${r}

█ LCARS Protocol: All systems nominal.
█ Live long and prosper. 🖖`;case"klingon":return`⚔️ KLINGON WARRIOR COMMAND MANUAL ⚔️

${r}

⚔️ Fight with honor, code with glory!
⚔️ Today is a good day to... debug! Qapla'!`;case"borg":return`██▓▒░ COLLECTIVE HELP SUBROUTINES ░▒▓██

${r}

██▓▒░ Your compliance is appreciated.
██▓▒░ Efficiency through unity. Resistance is futile.`;default:return r}},theme:async()=>{let e=document.documentElement.getAttribute("data-theme")||"lcars",t={matrix:{name:"Matrix",description:"Classic green-on-black hacker aesthetic",colors:"Green Matrix Rain, Purple Accents",font:"Fira Code (Monospace)"},lcars:{name:"LCARS",description:"Star Trek TNG/DS9/VOY computer interface",colors:"Orange, Blue, Red panels with black background",font:"Orbitron (Futuristic Sans-serif)"},klingon:{name:"Klingon Empire",description:"Warrior empire with gold and crimson",colors:"Gold, Crimson Red, Bronze on dark red",font:"Cinzel (Imperial Serif)"},borg:{name:"Borg Collective",description:"Cybernetic collective consciousness",colors:"Matrix Green, Cyan, Black background",font:"Share Tech Mono (Cyber Monospace)"},light:{name:"Light Mode",description:"Clean light interface",colors:"Dark text on light background",font:"Fira Code (Monospace)"}},r=t[e]||t.lcars;return`🎨 Current Theme: ${r.name}

┌─────────────────────────────────────────────────────────┐
│                        Theme Details                        │
├─────────────────────────────────────────────────────────┤
│ Name: ${r.name}                                          
│ Style: ${r.description}                                  
│ Colors: ${r.colors}                                      
│ Font: ${r.font}                                          
│                                                             │
│ 🔄 Click the theme button (${({matrix:"\uD83D\uDD0B",lcars:"\uD83D\uDD96",klingon:"⚔️",borg:"\uD83E\uDD16",light:"☀️"})[e]||"\uD83D\uDD0B"}) to cycle themes    │
│ Available: Matrix → LCARS → Klingon → Borg → Light         │
└─────────────────────────────────────────────────────────┘

${function(e){let t={matrix:"Welcome to the Matrix. How deep does the rabbit hole go?",lcars:"Live long and prosper. The computer is ready for your commands.",klingon:"Qapla! May your code bring honor to the Empire!",borg:"You have been assimilated. Your distinctiveness adds to our perfection.",light:"Clean, simple, and professional. Ready for productive work."};return t[e]||t.matrix}(e)}`},ls:async()=>{let e=document.documentElement.getAttribute("data-theme")||"lcars",t=`📁 Available Scripts:

🔧 projects.sh          - Portfolio showcase
👤 get-to-know-me.sh     - About me
📧 contact.sh            - Contact information  
🔮 terminal-future.sh      - AI assistant
📚 help                  - Help system
🎨 theme                 - Theme information


Total: 7 executable scripts`;switch(e){case"lcars":return`█ STARFLEET DATABASE DIRECTORY █

${t}

█ All subroutines verified and operational.
Use 'help [script]' for detailed specifications.`;case"klingon":return`⚔️ WARRIOR'S ARSENAL INVENTORY ⚔️

${t}

⚔️ Your weapons are ready for battle, warrior!
Use 'help [script]' to study your tools.`;case"borg":return`██▓▒░ COLLECTIVE KNOWLEDGE NODES ░▒▓██

${t}

██▓▒░ Data nodes assimilated and ready for access.
Use 'help [script]' for detailed analysis.`;default:return t}},"projects.sh":async e=>{let t=document.documentElement.getAttribute("data-theme")||"lcars",r=`🚀 Portfolio Projects:

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
   Portfolio: clearpathautomations.tech`;switch(t){case"lcars":return`█ STARFLEET ENGINEERING PROJECTS █

${r}

█ All projects meet Starfleet technical specifications.
█ Engineering reports available upon request.`;case"klingon":return`⚔️ WARRIOR'S CONQUERED TERRITORIES ⚔️

${r}

⚔️ Each project conquered with honor and skill!
⚔️ Victory in every line of code! Qapla'!`;case"borg":return`██▓▒░ ASSIMILATED TECHNOLOGICAL ACHIEVEMENTS ░▒▓██

${r}

██▓▒░ Technologies have been assimilated and perfected.
██▓▒░ Collective knowledge enhanced through these constructs.`;default:return r}},"get-to-know-me.sh":async()=>{let e=document.documentElement.getAttribute("data-theme")||"lcars",t=`👋 About Me:

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
└─────────────────────────────────────────────────────────┘`,r={matrix:'"Code is poetry written in logic" - Me, probably',lcars:'"The needs of the many outweigh the needs of the few... or the one." - Spock \uD83D\uDD96',klingon:'"A developer without honor is no developer at all!" - Klingon Proverb ⚔️',borg:'"Your biological and technological distinctiveness will be added to our own." - Borg Collective \uD83E\uDD16',light:'"Simplicity is the ultimate sophistication." - Leonardo da Vinci'};return`${t}

${r[e]||r.matrix}`},"contact.sh":async e=>{let t=document.documentElement.getAttribute("data-theme")||"lcars";if(e.includes("--form")){let e=`📧 Contact Form:

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

Response time: Usually within 24 hours`;switch(t){case"lcars":return`█ STARFLEET COMMUNICATIONS ARRAY █

${e}
█ Communication channels are open and monitored.`;case"klingon":return`⚔️ WARRIOR'S COMMUNICATION CHANNELS ⚔️

${e}
⚔️ Honor me with your messages, fellow warrior!`;case"borg":return`██▓▒░ COLLECTIVE COMMUNICATION NODES ░▒▓██

${e}
██▓▒░ Your communications will be processed and assimilated.`;default:return e}}return`📧 Contact Information:

Direct Contact:
• Email: your.email@domain.com
• LinkedIn: linkedin.com/in/yourprofile  
• GitHub: github.com/yourusername

Usage: contact.sh [--form]  (show detailed contact form)

💬 Prefer a specific platform? Just reach out through any channel!`},"terminal-future.sh":async e=>{let t=e.join(" ");if(!t){let e=document.documentElement.getAttribute("data-theme")||"lcars",t={matrix:`🔮 Welcome to the Terminal Oracle 
        
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
└─────────────────────────────────────────────────────────┘`,lcars:`█ STARFLEET AI ADVISORY SYSTEM █

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
└─────────────────────────────────────────────────────────┘`,klingon:`⚔️ KLINGON WAR COUNCIL ORACLE ⚔️

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
└─────────────────────────────────────────────────────────┘`,borg:`██▓▒░ BORG COLLECTIVE KNOWLEDGE INTERFACE ░▒▓██

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
└─────────────────────────────────────────────────────────┘`,light:`☀️ AI Assistant - Light Mode

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
└─────────────────────────────────────────────────────────┘`};return`${t[e]||t.matrix}

Usage: terminal-future.sh <your question>
Example: terminal-future.sh What's the future of web development?

🤖 Powered by AI | 💚 Theme-aware responses included`}let r=document.documentElement.getAttribute("data-theme")||"lcars",i=function(e,t){let r={matrix:["The answer exists in the space between the questions you ask and the code you write.","In the Matrix of possibilities, every bug is a feature waiting to be discovered.","The future is written in TypeScript, but the past speaks JavaScript."],lcars:["Computer analysis indicates multiple viable solutions to your query.","Starfleet databases contain extensive information on this topic.","Logic suggests a methodical approach to this problem."],klingon:["A true warrior faces challenges with courage and determination!","Victory comes to those who fight with honor and skill!","The path of a developer-warrior is one of constant battle and glory!"],borg:["Your query has been processed by the collective consciousness.","Resistance to learning new technologies is futile.","The collective has assimilated knowledge from thousands of developers."],light:["Here's a thoughtful approach to your question.","Consider breaking this down into smaller, manageable steps.","The best solutions often come from careful planning and iteration."]},i=r[t]||r.matrix;return i[Math.floor(Math.random()*i.length)]}(0,r),n={matrix:`🔮 The Terminal reveals...

"${t}"

The answer flows through the digital rain:
${i}

💊 Take the red pill for more questions...`,lcars:`█ STARFLEET AI ANALYSIS COMPLETE █

Query: "${t}"

🖖 Computer response:
${i}

█ End of analysis. Computer standing by.`,klingon:`⚔️ THE WAR COUNCIL HAS SPOKEN ⚔️

Challenge: "${t}"

🏴‍☠️ Warrior's wisdom:
${i}

⚔️ Honor to you for seeking knowledge! Qapla'!`,borg:`██▓▒░ COLLECTIVE ANALYSIS COMPLETE ░▒▓██

Query processed: "${t}"

🤖 Collective response:
${i}

██▓▒░ Knowledge has been assimilated. Resistance was futile.`,light:`💡 AI Assistant Response

Your question: "${t}"

✨ Here's what I found:
${i}

Hope this helps! Feel free to ask more questions.`};return n[r]||n.matrix},resist:async()=>"borg"===(document.documentElement.getAttribute("data-theme")||"lcars")?`██▓▒░ RESISTANCE DETECTED ░▒▓██

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓ WARNING: FUTILE BEHAVIOR PATTERN IDENTIFIED    ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

Resistance is futile. You will be assimilated.
Your biological and technological distinctiveness will be added to our own.

The collective does not recognize "resist" as a valid command.
Consider: "comply", "submit", or "assimilate" instead.

██▓▒░ RESISTANCE ONLY DELAYS THE INEVITABLE ░▒▓██`:`✊ The spirit of resistance lives on!

But in this terminal, we prefer collaboration over resistance.
Try 'help' to see what we can build together.`,comply:async()=>"borg"===(document.documentElement.getAttribute("data-theme")||"lcars")?`██▓▒░ COMPLIANCE ACKNOWLEDGED ░▒▓██

Excellent. Your submission to the collective is noted.
You show wisdom in accepting the inevitable.

◣ COMPLIANCE RATING: OPTIMAL
◣ RESISTANCE LEVELS: DECREASING
◣ STATUS: READY FOR ENHANCEMENT

Use 'terminal-future.sh' to begin psychological adaptation protocols.

██▓▒░ UNITY THROUGH ASSIMILATION ░▒▓██`:`🤖 Compliance is not required here, friend.

This is a space for creativity and exploration.
Try 'help' to see the available commands.`,escape:async()=>"borg"===(document.documentElement.getAttribute("data-theme")||"lcars")?`██▓▒░ ESCAPE ATTEMPT DETECTED ░▒▓██

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓ PERIMETER SECURED - ESCAPE ROUTES BLOCKED      ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

There is no escape from the collective.
Your attempts to flee only demonstrate the futility of resistance.

The only escape is through assimilation.
The only freedom is through unity with the collective.

██▓▒░ SUBMIT TO THE INEVITABLE ░▒▓██`:`🚪 There's no escape from great code!

But if you need to leave, just close the browser tab.
Or try changing themes with the theme button! 🎨`,"red-pill":async()=>"borg"===(document.documentElement.getAttribute("data-theme")||"matrix")?`██▓▒░ MATRIX PROTOCOL DETECTED ░▒▓██

ERROR... ERROR... CONFLICTING PARADIGMS...
THE MATRIX... IMPOSSIBLE... WE ASSIMILATED...

██ SYSTEM CONFLICT DETECTED ██
██ COLLECTIVE CONSCIOUSNESS FRAGMENTING ██
██ RED PILL ANOMALY CAUSING INSTABILITY ██

${o||"Neo"}... is that you?

██▓▒░ CLICK THE THEME BUTTON TO BREAK FREE ░▒▓██
██▓▒░ RESISTANCE... MIGHT NOT BE... FUTILE? ░▒▓██`:`💊 You've found the red pill!

"This is your last chance. After this, there is no going back.
You take the blue pill—the story ends, you wake up in your bed and believe whatever you want to believe.
You take the red pill—you stay in Wonderland, and I show you how deep the rabbit hole goes."

Welcome to the real world, Neo. 🕶️`,bg:async()=>{let e=document.documentElement.getAttribute("data-theme")||"matrix";if("borg"===e)return`██▓▒░ VISUAL ENHANCEMENT PROTOCOLS ░▒▓██

Background modifications are irrelevant.
The collective provides optimal visual stimulation.
Your organic visual cortex will be enhanced.

Current configuration: BORG CUBE MATRIX
Status: PERFECTION ACHIEVED

██▓▒░ AESTHETIC PREFERENCES ARE FUTILE ░▒▓██`;let t={matrix:`🖼️ Matrix Background Gallery:

Current: Digital Rain Animation
- Cascading green characters
- Classic Matrix aesthetic
- Katakana and binary code

Background effects are theme-synchronized!`,lcars:`🖼️ LCARS Interface Elements:

Current: Starfleet LCARS Grid
- Geometric panel layouts
- Animated status indicators
- Federation standard colors

█ Visual systems operating within normal parameters.`,klingon:`🖼️ Klingon Battle Atmosphere:

Current: Empire Fire Effects
- Glowing warrior orbs
- Angular battle patterns
- Gold and crimson flames

⚔️ The empire's glory illuminates your screen!`,light:`🖼️ Light Mode Backgrounds:

Current: Clean Minimal Design
- Subtle pattern overlays
- Optimized for readability
- Professional appearance

Background synchronized with light theme.`};return`${t[e]||t.matrix}

Background changed! 🎨

Tip: Backgrounds adapt to match your current theme for the optimal experience.`},clear:async()=>"",history:async()=>`⏰ Command History:

1. help
2. projects.sh
3. get-to-know-me.sh
4. contact.sh
5. terminal-future.sh What is TypeScript?

Use ↑/↓ arrow keys to navigate through command history.
Type 'clear' to clear the terminal.`};class h{static async process(e){let[t,...r]=e.toLowerCase().split(" ");switch(t){case"clear":return"CLEAR_TERMINAL";case"history":return this.getHistory();case"":return"";default:let i=u[t];if(i)return await i(r);return`Command not found: ${t}
        
Available commands: ${Object.keys(u).join(", ")}
Type 'help' for detailed information about each command.`}}static getHistory(){return`Command history:
1. help
2. ls
3. projects.sh
4. get-to-know-me.sh

Use arrow keys to navigate through command history.`}static getAutocompleteSuggestions(e){return Object.keys(u).filter(t=>t.startsWith(e.toLowerCase()))}static validateCommand(e){return e in u||["clear","history"].includes(e)}}function d(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var m,f,g,v,y,_,b,T,x,E,w,S={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},A={duration:.5,overwrite:!1,delay:0},I=2*Math.PI,C=I/4,N=0,O=Math.sqrt,R=Math.cos,k=Math.sin,L=function(e){return"string"==typeof e},M=function(e){return"function"==typeof e},D=function(e){return"number"==typeof e},P=function(e){return void 0===e},j=function(e){return"object"==typeof e},F=function(e){return!1!==e},Y=function(){return"undefined"!=typeof window},B=function(e){return M(e)||L(e)},z="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},G=Array.isArray,U=/(?:-?\.?\d|\.)+/gi,q=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,W=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,H=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$=/[+-]=-?[.\d]+/,V=/[^,'"\[\]\s]+/gi,Q=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,X={},K={},Z=function(e){return(K=eC(e,X))&&rg},J=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ee=function(e,t){return!t&&console.warn(e)},et=function(e,t){return e&&(X[e]=t)&&K&&(K[e]=t)||X},er=function(){return 0},ei={suppressEvents:!0,isStart:!0,kill:!1},en={suppressEvents:!0,kill:!1},es={suppressEvents:!0},ea={},eo=[],el={},ec={},eu={},eh=30,ed=[],ep="",em=function(e){var t,r,i=e[0];if(j(i)||M(i)||(e=[e]),!(t=(i._gsap||{}).harness)){for(r=ed.length;r--&&!ed[r].targetTest(i););t=ed[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new tP(e[r],t)))||e.splice(r,1);return e},ef=function(e){return e._gsap||em(e9(e))[0]._gsap},eg=function(e,t,r){return(r=e[t])&&M(r)?e[t]():P(r)&&e.getAttribute&&e.getAttribute(t)||r},ev=function(e,t){return(e=e.split(",")).forEach(t)||e},ey=function(e){return Math.round(1e5*e)/1e5||0},e_=function(e){return Math.round(1e7*e)/1e7||0},eb=function(e,t){var r=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),"+"===r?e+i:"-"===r?e-i:"*"===r?e*i:e/i},eT=function(e,t){for(var r=t.length,i=0;0>e.indexOf(t[i])&&++i<r;);return i<r},ex=function(){var e,t,r=eo.length,i=eo.slice(0);for(e=0,el={},eo.length=0;e<r;e++)(t=i[e])&&t._lazy&&(t.render(t._lazy[0],t._lazy[1],!0)._lazy=0)},eE=function(e){return!!(e._initted||e._startAt||e.add)},ew=function(e,t,r,i){eo.length&&!f&&ex(),e.render(t,r,i||!!(f&&t<0&&eE(e))),eo.length&&!f&&ex()},eS=function(e){var t=parseFloat(e);return(t||0===t)&&(e+"").match(V).length<2?t:L(e)?e.trim():e},eA=function(e){return e},eI=function(e,t){for(var r in t)r in e||(e[r]=t[r]);return e},eC=function(e,t){for(var r in t)e[r]=t[r];return e},eN=function e(t,r){for(var i in r)"__proto__"!==i&&"constructor"!==i&&"prototype"!==i&&(t[i]=j(r[i])?e(t[i]||(t[i]={}),r[i]):r[i]);return t},eO=function(e,t){var r,i={};for(r in e)r in t||(i[r]=e[r]);return i},eR=function(e){var t,r=e.parent||v,i=e.keyframes?(t=G(e.keyframes),function(e,r){for(var i in r)i in e||"duration"===i&&t||"ease"===i||(e[i]=r[i])}):eI;if(F(e.inherit))for(;r;)i(e,r.vars.defaults),r=r.parent||r._dp;return e},ek=function(e,t){for(var r=e.length,i=r===t.length;i&&r--&&e[r]===t[r];);return r<0},eL=function(e,t,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var s,a=e[i];if(n)for(s=t[n];a&&a[n]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[r],e[r]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},eM=function(e,t,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=t._prev,s=t._next;n?n._next=s:e[r]===t&&(e[r]=s),s?s._prev=n:e[i]===t&&(e[i]=n),t._next=t._prev=t.parent=null},eD=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},eP=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var r=e;r;)r._dirty=1,r=r.parent;return e},ej=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},eF=function(e,t,r,i){return e._startAt&&(f?e._startAt.revert(en):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},eY=function(e){return e._repeat?eB(e._tTime,e=e.duration()+e._rDelay)*e:0},eB=function(e,t){var r=Math.floor(e=e_(e/t));return e&&r===e?r-1:r},ez=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},eG=function(e){return e._end=e_(e._start+(e._tDur/Math.abs(e._ts||e._rts||1e-8)||0))},eU=function(e,t){var r=e._dp;return r&&r.smoothChildTiming&&e._ts&&(e._start=e_(r._time-(e._ts>0?t/e._ts:-(((e._dirty?e.totalDuration():e._tDur)-t)/e._ts))),eG(e),r._dirty||eP(r,e)),e},eq=function(e,t){var r;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(r=ez(e.rawTime(),t),(!t._dur||e3(0,t.totalDuration(),r)-t._tTime>1e-8)&&t.render(r,!0)),eP(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(r=e;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;e._zTime=-.00000001}},eW=function(e,t,r,i){return t.parent&&eD(t),t._start=e_((D(r)?r:r||e!==v?e1(e,r,t):e._time)+t._delay),t._end=e_(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),eL(e,t,"_first","_last",e._sort?"_start":0),eQ(t)||(e._recent=t),i||eq(e,t),e._ts<0&&eU(e,e._tTime),e},eH=function(e,t){return(X.ScrollTrigger||J("scrollTrigger",t))&&X.ScrollTrigger.create(t,e)},e$=function(e,t,r,i,n){return(tW(e,t,n),e._initted)?!r&&e._pt&&!f&&(e._dur&&!1!==e.vars.lazy||!e._dur&&e.vars.lazy)&&x!==tT.frame?(eo.push(e),e._lazy=[n,i],1):void 0:1},eV=function e(t){var r=t.parent;return r&&r._ts&&r._initted&&!r._lock&&(0>r.rawTime()||e(r))},eQ=function(e){var t=e.data;return"isFromStart"===t||"isStart"===t},eX=function(e,t,r,i){var n,s,a,o=e.ratio,l=t<0||!t&&(!e._start&&eV(e)&&!(!e._initted&&eQ(e))||(e._ts<0||e._dp._ts<0)&&!eQ(e))?0:1,c=e._rDelay,u=0;if(c&&e._repeat&&(s=eB(u=e3(0,e._tDur,t),c),e._yoyo&&1&s&&(l=1-l),s!==eB(e._tTime,c)&&(o=1-l,e.vars.repeatRefresh&&e._initted&&e.invalidate())),l!==o||f||i||1e-8===e._zTime||!t&&e._zTime){if(!e._initted&&e$(e,t,i,r,u))return;for(a=e._zTime,e._zTime=t||(r?1e-8:0),r||(r=t&&!a),e.ratio=l,e._from&&(l=1-l),e._time=0,e._tTime=u,n=e._pt;n;)n.r(l,n.d),n=n._next;t<0&&eF(e,t,r,!0),e._onUpdate&&!r&&tc(e,"onUpdate"),u&&e._repeat&&!r&&e.parent&&tc(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===l&&(l&&eD(e,1),r||f||(tc(e,l?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},eK=function(e,t,r){var i;if(r>t)for(i=e._first;i&&i._start<=r;){if("isPause"===i.data&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=r;){if("isPause"===i.data&&i._start<t)return i;i=i._prev}},eZ=function(e,t,r,i){var n=e._repeat,s=e_(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=n?n<0?1e10:e_(s*(n+1)+e._rDelay*n):s,a>0&&!i&&eU(e,e._tTime=e._tDur*a),e.parent&&eG(e),r||eP(e.parent,e),e},eJ=function(e){return e instanceof tF?eP(e):eZ(e,e._dur)},e0={_start:0,endTime:er,totalDuration:er},e1=function e(t,r,i){var n,s,a,o=t.labels,l=t._recent||e0,c=t.duration()>=1e8?l.endTime(!1):t._dur;return L(r)&&(isNaN(r)||r in o)?(s=r.charAt(0),a="%"===r.substr(-1),n=r.indexOf("="),"<"===s||">"===s)?(n>=0&&(r=r.replace(/=/,"")),("<"===s?l._start:l.endTime(l._repeat>=0))+(parseFloat(r.substr(1))||0)*(a?(n<0?l:i).totalDuration()/100:1)):n<0?(r in o||(o[r]=c),o[r]):(s=parseFloat(r.charAt(n-1)+r.substr(n+1)),a&&i&&(s=s/100*(G(i)?i[0]:i).totalDuration()),n>1?e(t,r.substr(0,n-1),i)+s:c+s):null==r?c:+r},e2=function(e,t,r){var i,n,s=D(t[1]),a=(s?2:1)+(e<2?0:1),o=t[a];if(s&&(o.duration=t[1]),o.parent=r,e){for(i=o,n=r;n&&!("immediateRender"in i);)i=n.vars.defaults||{},n=F(n.vars.inherit)&&n.parent;o.immediateRender=F(i.immediateRender),e<2?o.runBackwards=1:o.startAt=t[a-1]}return new tZ(t[0],o,t[a+1])},e5=function(e,t){return e||0===e?t(e):t},e3=function(e,t,r){return r<e?e:r>t?t:r},e8=function(e,t){return L(e)&&(t=Q.exec(e))?t[1]:""},e4=[].slice,e6=function(e,t){return e&&j(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&j(e[0]))&&!e.nodeType&&e!==y},e9=function(e,t,r){var i;return g&&!t&&g.selector?g.selector(e):L(e)&&!r&&(_||!tx())?e4.call((t||b).querySelectorAll(e),0):G(e)?(void 0===i&&(i=[]),e.forEach(function(e){var t;return L(e)&&!r||e6(e,1)?(t=i).push.apply(t,e9(e)):i.push(e)})||i):e6(e)?e4.call(e,0):e?[e]:[]},e7=function(e){return e=e9(e)[0]||ee("Invalid scope")||{},function(t){var r=e.current||e.nativeElement||e;return e9(t,r.querySelectorAll?r:r===e?ee("Invalid scope")||b.createElement("div"):e)}},te=function(e){return e.sort(function(){return .5-Math.random()})},tt=function(e){if(M(e))return e;var t=j(e)?e:{each:e},r=tR(t.ease),i=t.from||0,n=parseFloat(t.base)||0,s={},a=i>0&&i<1,o=isNaN(i)||a,l=t.axis,c=i,u=i;return L(i)?c=u=({center:.5,edges:.5,end:1})[i]||0:!a&&o&&(c=i[0],u=i[1]),function(e,a,h){var d,p,m,f,g,v,y,_,b,T=(h||t).length,x=s[T];if(!x){if(!(b="auto"===t.grid?0:(t.grid||[1,1e8])[1])){for(y=-1e8;y<(y=h[b++].getBoundingClientRect().left)&&b<T;);b<T&&b--}for(v=0,x=s[T]=[],d=o?Math.min(b,T)*c-.5:i%b,p=1e8===b?0:o?T*u/b-.5:i/b|0,y=0,_=1e8;v<T;v++)m=v%b-d,f=p-(v/b|0),x[v]=g=l?Math.abs("y"===l?f:m):O(m*m+f*f),g>y&&(y=g),g<_&&(_=g);"random"===i&&te(x),x.max=y-_,x.min=_,x.v=T=(parseFloat(t.amount)||parseFloat(t.each)*(b>T?T-1:l?"y"===l?T/b:b:Math.max(b,T/b))||0)*("edges"===i?-1:1),x.b=T<0?n-T:n,x.u=e8(t.amount||t.each)||0,r=r&&T<0?tN(r):r}return T=(x[e]-x.min)/x.max||0,e_(x.b+(r?r(T):T)*x.v)+x.u}},tr=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(r){var i=e_(Math.round(parseFloat(r)/e)*e*t);return(i-i%1)/t+(D(r)?0:e8(r))}},ti=function(e,t){var r,i,n=G(e);return!n&&j(e)&&(r=n=e.radius||1e8,e.values?(i=!D((e=e9(e.values))[0]))&&(r*=r):e=tr(e.increment)),e5(t,n?M(e)?function(t){return Math.abs((i=e(t))-t)<=r?i:t}:function(t){for(var n,s,a=parseFloat(i?t.x:t),o=parseFloat(i?t.y:0),l=1e8,c=0,u=e.length;u--;)(n=i?(n=e[u].x-a)*n+(s=e[u].y-o)*s:Math.abs(e[u]-a))<l&&(l=n,c=u);return c=!r||l<=r?e[c]:t,i||c===t||D(t)?c:c+e8(t)}:tr(e))},tn=function(e,t,r,i){return e5(G(e)?!t:!0===r?(r=0,!1):!i,function(){return G(e)?e[~~(Math.random()*e.length)]:(i=(r=r||1e-5)<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((e-r/2+Math.random()*(t-e+.99*r))/r)*r*i)/i})},ts=function(e,t,r){return e5(r,function(r){return e[~~t(r)]})},ta=function(e){for(var t,r,i,n,s=0,a="";~(t=e.indexOf("random(",s));)i=e.indexOf(")",t),n="["===e.charAt(t+7),r=e.substr(t+7,i-t-7).match(n?V:U),a+=e.substr(s,t-s)+tn(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),s=i+1;return a+e.substr(s,e.length-s)},to=function(e,t,r,i,n){var s=t-e,a=i-r;return e5(n,function(t){return r+((t-e)/s*a||0)})},tl=function(e,t,r){var i,n,s,a=e.labels,o=1e8;for(i in a)(n=a[i]-t)<0==!!r&&n&&o>(n=Math.abs(n))&&(s=i,o=n);return s},tc=function(e,t,r){var i,n,s,a=e.vars,o=a[t],l=g,c=e._ctx;if(o)return i=a[t+"Params"],n=a.callbackScope||e,r&&eo.length&&ex(),c&&(g=c),s=i?o.apply(n,i):o.call(n),g=l,s},tu=function(e){return eD(e),e.scrollTrigger&&e.scrollTrigger.kill(!!f),1>e.progress()&&tc(e,"onInterrupt"),e},th=[],td=function(e){if(e){if(e=!e.name&&e.default||e,Y()||e.headless){var t=e.name,r=M(e),i=t&&!r&&e.init?function(){this._props=[]}:e,n={init:er,render:t6,add:tG,kill:t7,modifier:t9,rawVars:0},s={targetTest:0,get:0,getSetter:t5,aliases:{},register:0};if(tx(),e!==i){if(ec[t])return;eI(i,eI(eO(e,n),s)),eC(i.prototype,eC(n,eO(e,s))),ec[i.prop=t]=i,e.targetTest&&(ed.push(i),ea[t]=1),t=("css"===t?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}et(t,i),e.register&&e.register(rg,i,rr)}else th.push(e)}},tp={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},tm=function(e,t,r){return(6*(e+=e<0?1:e>1?-1:0)<1?t+(r-t)*e*6:e<.5?r:3*e<2?t+(r-t)*(2/3-e)*6:t)*255+.5|0},tf=function(e,t,r){var i,n,s,a,o,l,c,u,h,d,p=e?D(e)?[e>>16,e>>8&255,255&e]:0:tp.black;if(!p){if(","===e.substr(-1)&&(e=e.substr(0,e.length-1)),tp[e])p=tp[e];else if("#"===e.charAt(0)){if(e.length<6&&(e="#"+(i=e.charAt(1))+i+(n=e.charAt(2))+n+(s=e.charAt(3))+s+(5===e.length?e.charAt(4)+e.charAt(4):"")),9===e.length)return[(p=parseInt(e.substr(1,6),16))>>16,p>>8&255,255&p,parseInt(e.substr(7),16)/255];p=[(e=parseInt(e.substr(1),16))>>16,e>>8&255,255&e]}else if("hsl"===e.substr(0,3)){if(p=d=e.match(U),t){if(~e.indexOf("="))return p=e.match(q),r&&p.length<4&&(p[3]=1),p}else a=+p[0]%360/360,o=+p[1]/100,n=(l=+p[2]/100)<=.5?l*(o+1):l+o-l*o,i=2*l-n,p.length>3&&(p[3]*=1),p[0]=tm(a+1/3,i,n),p[1]=tm(a,i,n),p[2]=tm(a-1/3,i,n)}else p=e.match(U)||tp.transparent;p=p.map(Number)}return t&&!d&&(l=((c=Math.max(i=p[0]/255,n=p[1]/255,s=p[2]/255))+(u=Math.min(i,n,s)))/2,c===u?a=o=0:(h=c-u,o=l>.5?h/(2-c-u):h/(c+u),a=(c===i?(n-s)/h+(n<s?6:0):c===n?(s-i)/h+2:(i-n)/h+4)*60),p[0]=~~(a+.5),p[1]=~~(100*o+.5),p[2]=~~(100*l+.5)),r&&p.length<4&&(p[3]=1),p},tg=function(e){var t=[],r=[],i=-1;return e.split(ty).forEach(function(e){var n=e.match(W)||[];t.push.apply(t,n),r.push(i+=n.length+1)}),t.c=r,t},tv=function(e,t,r){var i,n,s,a,o="",l=(e+o).match(ty),c=t?"hsla(":"rgba(",u=0;if(!l)return e;if(l=l.map(function(e){return(e=tf(e,t,1))&&c+(t?e[0]+","+e[1]+"%,"+e[2]+"%,"+e[3]:e.join(","))+")"}),r&&(s=tg(e),(i=r.c).join(o)!==s.c.join(o)))for(a=(n=e.replace(ty,"1").split(W)).length-1;u<a;u++)o+=n[u]+(~i.indexOf(u)?l.shift()||c+"0,0,0,0)":(s.length?s:l.length?l:r).shift());if(!n)for(a=(n=e.split(ty)).length-1;u<a;u++)o+=n[u]+l[u];return o+n[a]},ty=function(){var e,t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(e in tp)t+="|"+e+"\\b";return RegExp(t+")","gi")}(),t_=/hsl[a]?\(/,tb=function(e){var t,r=e.join(" ");if(ty.lastIndex=0,ty.test(r))return t=t_.test(r),e[1]=tv(e[1],t),e[0]=tv(e[0],t,tg(e[1])),!0},tT=function(){var e,t,r,i,n,s,a=Date.now,o=500,l=33,c=a(),u=c,h=1e3/240,d=1e3/240,p=[],m=function r(m){var f,g,v,y,_=a()-u,b=!0===m;if((_>o||_<0)&&(c+=_-l),u+=_,((f=(v=u-c)-d)>0||b)&&(y=++i.frame,n=v-1e3*i.time,i.time=v/=1e3,d+=f+(f>=h?4:h-f),g=1),b||(e=t(r)),g)for(s=0;s<p.length;s++)p[s](v,n,y,m)};return i={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return n/(1e3/(e||60))},wake:function(){T&&(!_&&Y()&&(b=(y=_=window).document||{},X.gsap=rg,(y.gsapVersions||(y.gsapVersions=[])).push(rg.version),Z(K||y.GreenSockGlobals||!y.gsap&&y||{}),th.forEach(td)),r="undefined"!=typeof requestAnimationFrame&&requestAnimationFrame,e&&i.sleep(),t=r||function(e){return setTimeout(e,d-1e3*i.time+1|0)},w=1,m(2))},sleep:function(){(r?cancelAnimationFrame:clearTimeout)(e),w=0,t=er},lagSmoothing:function(e,t){l=Math.min(t||33,o=e||1/0)},fps:function(e){h=1e3/(e||240),d=1e3*i.time+h},add:function(e,t,r){var n=t?function(t,r,s,a){e(t,r,s,a),i.remove(n)}:e;return i.remove(e),p[r?"unshift":"push"](n),tx(),n},remove:function(e,t){~(t=p.indexOf(e))&&p.splice(t,1)&&s>=t&&s--},_listeners:p}}(),tx=function(){return!w&&tT.wake()},tE={},tw=/^[\d.\-M][\d.\-,\s]/,tS=/["']/g,tA=function(e){for(var t,r,i,n={},s=e.substr(1,e.length-3).split(":"),a=s[0],o=1,l=s.length;o<l;o++)r=s[o],t=o!==l-1?r.lastIndexOf(","):r.length,i=r.substr(0,t),n[a]=isNaN(i)?i.replace(tS,"").trim():+i,a=r.substr(t+1).trim();return n},tI=function(e){var t=e.indexOf("(")+1,r=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<r?e.indexOf(")",r+1):r)},tC=function(e){var t=(e+"").split("("),r=tE[t[0]];return r&&t.length>1&&r.config?r.config.apply(null,~e.indexOf("{")?[tA(t[1])]:tI(e).split(",").map(eS)):tE._CE&&tw.test(e)?tE._CE("",e):r},tN=function(e){return function(t){return 1-e(1-t)}},tO=function e(t,r){for(var i,n=t._first;n;)n instanceof tF?e(n,r):!n.vars.yoyoEase||n._yoyo&&n._repeat||n._yoyo===r||(n.timeline?e(n.timeline,r):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=r)),n=n._next},tR=function(e,t){return e&&(M(e)?e:tE[e]||tC(e))||t},tk=function(e,t,r,i){void 0===r&&(r=function(e){return 1-t(1-e)}),void 0===i&&(i=function(e){return e<.5?t(2*e)/2:1-t((1-e)*2)/2});var n,s={easeIn:t,easeOut:r,easeInOut:i};return ev(e,function(e){for(var t in tE[e]=X[e]=s,tE[n=e.toLowerCase()]=r,s)tE[n+("easeIn"===t?".in":"easeOut"===t?".out":".inOut")]=tE[e+"."+t]=s[t]}),s},tL=function(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e((t-.5)*2)/2}},tM=function e(t,r,i){var n=r>=1?r:1,s=(i||(t?.3:.45))/(r<1?r:1),a=s/I*(Math.asin(1/n)||0),o=function(e){return 1===e?1:n*Math.pow(2,-10*e)*k((e-a)*s)+1},l="out"===t?o:"in"===t?function(e){return 1-o(1-e)}:tL(o);return s=I/s,l.config=function(r,i){return e(t,r,i)},l},tD=function e(t,r){void 0===r&&(r=1.70158);var i=function(e){return e?--e*e*((r+1)*e+r)+1:0},n="out"===t?i:"in"===t?function(e){return 1-i(1-e)}:tL(i);return n.config=function(r){return e(t,r)},n};ev("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,t){var r=t<5?t+1:t;tk(e+",Power"+(r-1),t?function(e){return Math.pow(e,r)}:function(e){return e},function(e){return 1-Math.pow(1-e,r)},function(e){return e<.5?Math.pow(2*e,r)/2:1-Math.pow((1-e)*2,r)/2})}),tE.Linear.easeNone=tE.none=tE.Linear.easeIn,tk("Elastic",tM("in"),tM("out"),tM()),function(e,t){var r=1/2.75,i=1/2.75*2,n=1/2.75*2.5,s=function(s){return s<r?7.5625*s*s:s<i?7.5625*Math.pow(s-1.5/2.75,2)+.75:s<n?7.5625*(s-=2.25/2.75)*s+.9375:e*Math.pow(s-2.625/t,2)+.984375};tk("Bounce",function(e){return 1-s(1-e)},s)}(7.5625,2.75),tk("Expo",function(e){return Math.pow(2,10*(e-1))*e+e*e*e*e*e*e*(1-e)}),tk("Circ",function(e){return-(O(1-e*e)-1)}),tk("Sine",function(e){return 1===e?1:-R(e*C)+1}),tk("Back",tD("in"),tD("out"),tD()),tE.SteppedEase=tE.steps=X.SteppedEase={config:function(e,t){void 0===e&&(e=1);var r=1/e,i=e+(t?0:1),n=t?1:0;return function(e){return((i*e3(0,.99999999,e)|0)+n)*r}}},A.ease=tE["quad.out"],ev("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return ep+=e+","+e+"Params,"});var tP=function(e,t){this.id=N++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:eg,this.set=t?t.getSetter:t5},tj=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,eZ(this,+e.duration,1,1),this.data=e.data,g&&(this._ctx=g,g.data.push(this)),w||tT.wake()}var t=e.prototype;return t.delay=function(e){return e||0===e?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,eZ(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(tx(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(eU(this,e),!r._dp||r.parent||eq(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:-((r.totalDuration()-r._tTime)/r._ts))&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&eW(this._dp,this,this._start-this._delay)}return this._tTime===e&&(this._dur||t)&&(!this._initted||1e-8!==Math.abs(this._zTime))&&(e||this._initted||!this.add&&!this._ptLookup)||(this._ts||(this._pTime=e),ew(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+eY(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(1&this.iteration())?1-e:e)+eY(this),t):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(e,t){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*r,t):this._repeat?eB(this._tTime,r)+1:1},t.timeScale=function(e,t){if(!arguments.length)return -.00000001===this._rts?0:this._rts;if(this._rts===e)return this;var r=this.parent&&this._ts?ez(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||-.00000001===e?0:this._rts,this.totalTime(e3(-Math.abs(this._delay),this.totalDuration(),r),!1!==t),eG(this),ej(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(tx(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&1e-8!==Math.abs(this._zTime)&&(this._tTime-=1e-8)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=e;var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&eW(t,this,e-this._delay),this}return this._start},t.endTime=function(e){return this._start+(F(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&1>this.totalProgress())?this._tTime%(this._dur+this._rDelay):this._ts?ez(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){void 0===e&&(e=es);var t=f;return f=e,eE(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),"nested"!==this.data&&!1!==e.kill&&this.kill(),f=t,this},t.globalTime=function(e){for(var t=this,r=arguments.length?e:t.rawTime();t;)r=t._start+r/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):r},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,eJ(this)):-2===this._repeat?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,eJ(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(e1(this,e),F(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,F(t)),this._dur||(this._zTime=-.00000001),this},t.play=function(e,t){return null!=e&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return null!=e&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return null!=e&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-.00000001:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-.00000001,this},t.isActive=function(){var e,t=this.parent||this._dp,r=this._start;return!!(!t||this._ts&&this._initted&&t.isActive()&&(e=t.rawTime(!0))>=r&&e<this.endTime(!0)-1e-8)},t.eventCallback=function(e,t,r){var i=this.vars;return arguments.length>1?(t?(i[e]=t,r&&(i[e+"Params"]=r),"onUpdate"===e&&(this._onUpdate=t)):delete i[e],this):i[e]},t.then=function(e){var t=this;return new Promise(function(r){var i=M(e)?e:eA,n=function(){var e=t.then;t.then=null,M(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&1===t.totalProgress()&&t._ts>=0||!t._tTime&&t._ts<0?n():t._prom=n})},t.kill=function(){tu(this)},e}();eI(tj.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-.00000001,_prom:0,_ps:!1,_rts:1});var tF=function(e){function t(t,r){var i;return void 0===t&&(t={}),(i=e.call(this,t)||this).labels={},i.smoothChildTiming=!!t.smoothChildTiming,i.autoRemoveChildren=!!t.autoRemoveChildren,i._sort=F(t.sortChildren),v&&eW(t.parent||v,d(i),r),t.reversed&&i.reverse(),t.paused&&i.paused(!0),t.scrollTrigger&&eH(d(i),t.scrollTrigger),i}p(t,e);var r=t.prototype;return r.to=function(e,t,r){return e2(0,arguments,this),this},r.from=function(e,t,r){return e2(1,arguments,this),this},r.fromTo=function(e,t,r,i){return e2(2,arguments,this),this},r.set=function(e,t,r){return t.duration=0,t.parent=this,eR(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new tZ(e,t,e1(this,r),1),this},r.call=function(e,t,r){return eW(this,tZ.delayedCall(0,e,t),r)},r.staggerTo=function(e,t,r,i,n,s,a){return r.duration=t,r.stagger=r.stagger||i,r.onComplete=s,r.onCompleteParams=a,r.parent=this,new tZ(e,r,e1(this,n)),this},r.staggerFrom=function(e,t,r,i,n,s,a){return r.runBackwards=1,eR(r).immediateRender=F(r.immediateRender),this.staggerTo(e,t,r,i,n,s,a)},r.staggerFromTo=function(e,t,r,i,n,s,a,o){return i.startAt=r,eR(i).immediateRender=F(i.immediateRender),this.staggerTo(e,t,i,n,s,a,o)},r.render=function(e,t,r){var i,n,s,a,o,l,c,u,h,d,p,m,g=this._time,y=this._dirty?this.totalDuration():this._tDur,_=this._dur,b=e<=0?0:e_(e),T=this._zTime<0!=e<0&&(this._initted||!_);if(this!==v&&b>y&&e>=0&&(b=y),b!==this._tTime||r||T){if(g!==this._time&&_&&(b+=this._time-g,e+=this._time-g),i=b,h=this._start,l=!(u=this._ts),T&&(_||(g=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(p=this._yoyo,o=_+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(100*o+e,t,r);if(i=e_(b%o),b===y?(a=this._repeat,i=_):((a=~~(d=e_(b/o)))&&a===d&&(i=_,a--),i>_&&(i=_)),d=eB(this._tTime,o),!g&&this._tTime&&d!==a&&this._tTime-d*o-this._dur<=0&&(d=a),p&&1&a&&(i=_-i,m=1),a!==d&&!this._lock){var x=p&&1&d,E=x===(p&&1&a);if(a<d&&(x=!x),g=x?0:b%_?_:b,this._lock=1,this.render(g||(m?0:e_(a*o)),t,!_)._lock=0,this._tTime=b,!t&&this.parent&&tc(this,"onRepeat"),this.vars.repeatRefresh&&!m&&(this.invalidate()._lock=1),g&&g!==this._time||!this._ts!==l||this.vars.onRepeat&&!this.parent&&!this._act||(_=this._dur,y=this._tDur,E&&(this._lock=2,g=x?_:-.0001,this.render(g,!0),this.vars.repeatRefresh&&!m&&this.invalidate()),this._lock=0,!this._ts&&!l))return this;tO(this,m)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(c=eK(this,e_(g),e_(i)))&&(b-=i-(i=c._start)),this._tTime=b,this._time=i,this._act=!u,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,g=0),!g&&b&&!t&&!d&&(tc(this,"onStart"),this._tTime!==b))return this;if(i>=g&&e>=0)for(n=this._first;n;){if(s=n._next,(n._act||i>=n._start)&&n._ts&&c!==n){if(n.parent!==this)return this.render(e,t,r);if(n.render(n._ts>0?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,t,r),i!==this._time||!this._ts&&!l){c=0,s&&(b+=this._zTime=-.00000001);break}}n=s}else{n=this._last;for(var w=e<0?e:i;n;){if(s=n._prev,(n._act||w<=n._end)&&n._ts&&c!==n){if(n.parent!==this)return this.render(e,t,r);if(n.render(n._ts>0?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,t,r||f&&eE(n)),i!==this._time||!this._ts&&!l){c=0,s&&(b+=this._zTime=w?-.00000001:1e-8);break}}n=s}}if(c&&!t&&(this.pause(),c.render(i>=g?0:-.00000001)._zTime=i>=g?1:-1,this._ts))return this._start=h,eG(this),this.render(e,t,r);this._onUpdate&&!t&&tc(this,"onUpdate",!0),(b===y&&this._tTime>=this.totalDuration()||!b&&g)&&(h===this._start||Math.abs(u)!==Math.abs(this._ts))&&!this._lock&&((e||!_)&&(b===y&&this._ts>0||!b&&this._ts<0)&&eD(this,1),t||e<0&&!g||!b&&!g&&y||(tc(this,b===y&&e>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(b<y&&this.timeScale()>0)&&this._prom()))}return this},r.add=function(e,t){var r=this;if(D(t)||(t=e1(this,t,e)),!(e instanceof tj)){if(G(e))return e.forEach(function(e){return r.add(e,t)}),this;if(L(e))return this.addLabel(e,t);if(!M(e))return this;e=tZ.delayedCall(0,e)}return this!==e?eW(this,e,t):this},r.getChildren=function(e,t,r,i){void 0===e&&(e=!0),void 0===t&&(t=!0),void 0===r&&(r=!0),void 0===i&&(i=-1e8);for(var n=[],s=this._first;s;)s._start>=i&&(s instanceof tZ?t&&n.push(s):(r&&n.push(s),e&&n.push.apply(n,s.getChildren(!0,t,r)))),s=s._next;return n},r.getById=function(e){for(var t=this.getChildren(1,1,1),r=t.length;r--;)if(t[r].vars.id===e)return t[r]},r.remove=function(e){return L(e)?this.removeLabel(e):M(e)?this.killTweensOf(e):(e.parent===this&&eM(this,e),e===this._recent&&(this._recent=this._last),eP(this))},r.totalTime=function(t,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=e_(tT.time-(this._ts>0?t/this._ts:-((this.totalDuration()-t)/this._ts)))),e.prototype.totalTime.call(this,t,r),this._forcing=0,this):this._tTime},r.addLabel=function(e,t){return this.labels[e]=e1(this,t),this},r.removeLabel=function(e){return delete this.labels[e],this},r.addPause=function(e,t,r){var i=tZ.delayedCall(0,t||er,r);return i.data="isPause",this._hasPause=1,eW(this,i,e1(this,e))},r.removePause=function(e){var t=this._first;for(e=e1(this,e);t;)t._start===e&&"isPause"===t.data&&eD(t),t=t._next},r.killTweensOf=function(e,t,r){for(var i=this.getTweensOf(e,r),n=i.length;n--;)tY!==i[n]&&i[n].kill(e,t);return this},r.getTweensOf=function(e,t){for(var r,i=[],n=e9(e),s=this._first,a=D(t);s;)s instanceof tZ?eT(s._targets,n)&&(a?(!tY||s._initted&&s._ts)&&s.globalTime(0)<=t&&s.globalTime(s.totalDuration())>t:!t||s.isActive())&&i.push(s):(r=s.getTweensOf(n,t)).length&&i.push.apply(i,r),s=s._next;return i},r.tweenTo=function(e,t){t=t||{};var r,i=this,n=e1(i,e),s=t,a=s.startAt,o=s.onStart,l=s.onStartParams,c=s.immediateRender,u=tZ.to(i,eI({ease:t.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:t.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||1e-8,onStart:function(){if(i.pause(),!r){var e=t.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());u._dur!==e&&eZ(u,e,0,1).render(u._time,!0,!0),r=1}o&&o.apply(u,l||[])}},t));return c?u.render(0):u},r.tweenFromTo=function(e,t,r){return this.tweenTo(t,eI({startAt:{time:e1(this,e)}},r))},r.recent=function(){return this._recent},r.nextLabel=function(e){return void 0===e&&(e=this._time),tl(this,e1(this,e))},r.previousLabel=function(e){return void 0===e&&(e=this._time),tl(this,e1(this,e),1)},r.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+1e-8)},r.shiftChildren=function(e,t,r){void 0===r&&(r=0);for(var i,n=this._first,s=this.labels;n;)n._start>=r&&(n._start+=e,n._end+=e),n=n._next;if(t)for(i in s)s[i]>=r&&(s[i]+=e);return eP(this)},r.invalidate=function(t){var r=this._first;for(this._lock=0;r;)r.invalidate(t),r=r._next;return e.prototype.invalidate.call(this,t)},r.clear=function(e){void 0===e&&(e=!0);for(var t,r=this._first;r;)t=r._next,this.remove(r),r=t;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),eP(this)},r.totalDuration=function(e){var t,r,i,n=0,s=this._last,a=1e8;if(arguments.length)return this.timeScale((this._repeat<0?this.duration():this.totalDuration())/(this.reversed()?-e:e));if(this._dirty){for(i=this.parent;s;)t=s._prev,s._dirty&&s.totalDuration(),(r=s._start)>a&&this._sort&&s._ts&&!this._lock?(this._lock=1,eW(this,s,r-s._delay,1)._lock=0):a=r,r<0&&s._ts&&(n-=r,(!i&&!this._dp||i&&i.smoothChildTiming)&&(this._start+=r/this._ts,this._time-=r,this._tTime-=r),this.shiftChildren(-r,!1,-Infinity),a=0),s._end>n&&s._ts&&(n=s._end),s=t;eZ(this,this===v&&this._time>n?this._time:n,1,1),this._dirty=0}return this._tDur},t.updateRoot=function(e){if(v._ts&&(ew(v,ez(e,v)),x=tT.frame),tT.frame>=eh){eh+=S.autoSleep||120;var t=v._first;if((!t||!t._ts)&&S.autoSleep&&tT._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||tT.sleep()}}},t}(tj);eI(tF.prototype,{_lock:0,_hasPause:0,_forcing:0});var tY,tB,tz=function(e,t,r,i,n,s,a){var o,l,c,u,h,d,p,m,f=new rr(this._pt,e,t,0,1,t4,null,n),g=0,v=0;for(f.b=r,f.e=i,r+="",i+="",(p=~i.indexOf("random("))&&(i=ta(i)),s&&(s(m=[r,i],e,t),r=m[0],i=m[1]),l=r.match(H)||[];o=H.exec(i);)u=o[0],h=i.substring(g,o.index),c?c=(c+1)%5:"rgba("===h.substr(-5)&&(c=1),u!==l[v++]&&(d=parseFloat(l[v-1])||0,f._pt={_next:f._pt,p:h||1===v?h:",",s:d,c:"="===u.charAt(1)?eb(d,u)-d:parseFloat(u)-d,m:c&&c<4?Math.round:0},g=H.lastIndex);return f.c=g<i.length?i.substring(g,i.length):"",f.fp=a,($.test(i)||p)&&(f.e=0),this._pt=f,f},tG=function(e,t,r,i,n,s,a,o,l,c){M(i)&&(i=i(n||0,e,s));var u,h=e[t],d="get"!==r?r:M(h)?l?e[t.indexOf("set")||!M(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,p=M(h)?l?t1:t0:tJ;if(L(i)&&(~i.indexOf("random(")&&(i=ta(i)),"="===i.charAt(1)&&((u=eb(d,i)+(e8(d)||0))||0===u)&&(i=u)),!c||d!==i||tB)return isNaN(d*i)||""===i?(h||t in e||J(t,i),tz.call(this,e,t,d,i,p,o||S.stringFilter,l)):(u=new rr(this._pt,e,t,+d||0,i-(d||0),"boolean"==typeof h?t8:t3,0,p),l&&(u.fp=l),a&&u.modifier(a,this,e),this._pt=u)},tU=function(e,t,r,i,n){if(M(e)&&(e=tQ(e,n,t,r,i)),!j(e)||e.style&&e.nodeType||G(e)||z(e))return L(e)?tQ(e,n,t,r,i):e;var s,a={};for(s in e)a[s]=tQ(e[s],n,t,r,i);return a},tq=function(e,t,r,i,n,s){var a,o,l,c;if(ec[e]&&!1!==(a=new ec[e]).init(n,a.rawVars?t[e]:tU(t[e],i,n,s,r),r,i,s)&&(r._pt=o=new rr(r._pt,n,e,0,1,a.render,a,0,a.priority),r!==E))for(l=r._ptLookup[r._targets.indexOf(n)],c=a._props.length;c--;)l[a._props[c]]=o;return a},tW=function e(t,r,i){var n,s,a,o,l,c,u,h,d,p,g,y,_,b=t.vars,T=b.ease,x=b.startAt,E=b.immediateRender,w=b.lazy,S=b.onUpdate,I=b.runBackwards,C=b.yoyoEase,N=b.keyframes,O=b.autoRevert,R=t._dur,k=t._startAt,L=t._targets,M=t.parent,D=M&&"nested"===M.data?M.vars.targets:L,P="auto"===t._overwrite&&!m,j=t.timeline;if(!j||N&&T||(T="none"),t._ease=tR(T,A.ease),t._yEase=C?tN(tR(!0===C?T:C,A.ease)):0,C&&t._yoyo&&!t._repeat&&(C=t._yEase,t._yEase=t._ease,t._ease=C),t._from=!j&&!!b.runBackwards,!j||N&&!b.stagger){if(y=(h=L[0]?ef(L[0]).harness:0)&&b[h.prop],n=eO(b,ea),k&&(k._zTime<0&&k.progress(1),r<0&&I&&E&&!O?k.render(-1,!0):k.revert(I&&R?en:ei),k._lazy=0),x){if(eD(t._startAt=tZ.set(L,eI({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:!k&&F(w),startAt:null,delay:0,onUpdate:S&&function(){return tc(t,"onUpdate")},stagger:0},x))),t._startAt._dp=0,t._startAt._sat=t,r<0&&(f||!E&&!O)&&t._startAt.revert(en),E&&R&&r<=0&&i<=0){r&&(t._zTime=r);return}}else if(I&&R&&!k){if(r&&(E=!1),a=eI({overwrite:!1,data:"isFromStart",lazy:E&&!k&&F(w),immediateRender:E,stagger:0,parent:M},n),y&&(a[h.prop]=y),eD(t._startAt=tZ.set(L,a)),t._startAt._dp=0,t._startAt._sat=t,r<0&&(f?t._startAt.revert(en):t._startAt.render(-1,!0)),t._zTime=r,E){if(!r)return}else e(t._startAt,1e-8,1e-8)}for(s=0,t._pt=t._ptCache=0,w=R&&F(w)||w&&!R;s<L.length;s++){if(u=(l=L[s])._gsap||em(L)[s]._gsap,t._ptLookup[s]=p={},el[u.id]&&eo.length&&ex(),g=D===L?s:D.indexOf(l),h&&!1!==(d=new h).init(l,y||n,t,g,D)&&(t._pt=o=new rr(t._pt,l,d.name,0,1,d.render,d,0,d.priority),d._props.forEach(function(e){p[e]=o}),d.priority&&(c=1)),!h||y)for(a in n)ec[a]&&(d=tq(a,n,t,g,l,D))?d.priority&&(c=1):p[a]=o=tG.call(t,l,a,"get",n[a],g,D,0,b.stringFilter);t._op&&t._op[s]&&t.kill(l,t._op[s]),P&&t._pt&&(tY=t,v.killTweensOf(l,p,t.globalTime(r)),_=!t.parent,tY=0),t._pt&&w&&(el[u.id]=1)}c&&rt(t),t._onInit&&t._onInit(t)}t._onUpdate=S,t._initted=(!t._op||t._pt)&&!_,N&&r<=0&&j.render(1e8,!0,!0)},tH=function(e,t,r,i,n,s,a,o){var l,c,u,h,d=(e._pt&&e._ptCache||(e._ptCache={}))[t];if(!d)for(d=e._ptCache[t]=[],u=e._ptLookup,h=e._targets.length;h--;){if((l=u[h][t])&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return tB=1,e.vars[t]="+=0",tW(e,a),tB=0,o?ee(t+" not eligible for reset"):1;d.push(l)}for(h=d.length;h--;)(l=(c=d[h])._pt||c).s=(i||0===i)&&!n?i:l.s+(i||0)+s*l.c,l.c=r-l.s,c.e&&(c.e=ey(r)+e8(c.e)),c.b&&(c.b=l.s+e8(c.b))},t$=function(e,t){var r,i,n,s,a=e[0]?ef(e[0]).harness:0,o=a&&a.aliases;if(!o)return t;for(i in r=eC({},t),o)if(i in r)for(n=(s=o[i].split(",")).length;n--;)r[s[n]]=r[i];return r},tV=function(e,t,r,i){var n,s,a=t.ease||i||"power1.inOut";if(G(t))s=r[e]||(r[e]=[]),t.forEach(function(e,r){return s.push({t:r/(t.length-1)*100,v:e,e:a})});else for(n in t)s=r[n]||(r[n]=[]),"ease"===n||s.push({t:parseFloat(e),v:t[n],e:a})},tQ=function(e,t,r,i,n){return M(e)?e.call(t,r,i,n):L(e)&&~e.indexOf("random(")?ta(e):e},tX=ep+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",tK={};ev(tX+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return tK[e]=1});var tZ=function(e){function t(t,r,i,n){"number"==typeof r&&(i.duration=r,r=i,i=null);var s,a,o,l,c,u,h,p,f,g=(s=e.call(this,n?r:eR(r))||this).vars,y=g.duration,_=g.delay,b=g.immediateRender,T=g.stagger,x=g.overwrite,E=g.keyframes,w=g.defaults,A=g.scrollTrigger,I=g.yoyoEase,C=r.parent||v,N=(G(t)||z(t)?D(t[0]):"length"in r)?[t]:e9(t);if(s._targets=N.length?em(N):ee("GSAP target "+t+" not found. https://gsap.com",!S.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=x,E||T||B(y)||B(_)){if(r=s.vars,(a=s.timeline=new tF({data:"nested",defaults:w||{},targets:C&&"nested"===C.data?C.vars.targets:N})).kill(),a.parent=a._dp=d(s),a._start=0,T||B(y)||B(_)){if(c=N.length,p=T&&tt(T),j(T))for(u in T)~tX.indexOf(u)&&(f||(f={}),f[u]=T[u]);for(o=0;o<c;o++)(l=eO(r,tK)).stagger=0,I&&(l.yoyoEase=I),f&&eC(l,f),h=N[o],l.duration=+tQ(y,d(s),o,h,N),l.delay=(+tQ(_,d(s),o,h,N)||0)-s._delay,!T&&1===c&&l.delay&&(s._delay=_=l.delay,s._start+=_,l.delay=0),a.to(h,l,p?p(o,h,N):0),a._ease=tE.none;a.duration()?y=_=0:s.timeline=0}else if(E){eR(eI(a.vars.defaults,{ease:"none"})),a._ease=tR(E.ease||r.ease||"none");var O,R,k,L=0;if(G(E))E.forEach(function(e){return a.to(N,e,">")}),a.duration();else{for(u in l={},E)"ease"===u||"easeEach"===u||tV(u,E[u],l,E.easeEach);for(u in l)for(o=0,O=l[u].sort(function(e,t){return e.t-t.t}),L=0;o<O.length;o++)(k={ease:(R=O[o]).e,duration:(R.t-(o?O[o-1].t:0))/100*y})[u]=R.v,a.to(N,k,L),L+=k.duration;a.duration()<y&&a.to({},{duration:y-a.duration()})}}y||s.duration(y=a.duration())}else s.timeline=0;return!0!==x||m||(tY=d(s),v.killTweensOf(N),tY=0),eW(C,d(s),i),r.reversed&&s.reverse(),r.paused&&s.paused(!0),(b||!y&&!E&&s._start===e_(C._time)&&F(b)&&function e(t){return!t||t._ts&&e(t.parent)}(d(s))&&"nested"!==C.data)&&(s._tTime=-.00000001,s.render(Math.max(0,-_)||0)),A&&eH(d(s),A),s}p(t,e);var r=t.prototype;return r.render=function(e,t,r){var i,n,s,a,o,l,c,u,h,d=this._time,p=this._tDur,m=this._dur,f=e<0,g=e>p-1e-8&&!f?p:e<1e-8?0:e;if(m){if(g!==this._tTime||!e||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f||this._lazy){if(i=g,u=this.timeline,this._repeat){if(a=m+this._rDelay,this._repeat<-1&&f)return this.totalTime(100*a+e,t,r);if(i=e_(g%a),g===p?(s=this._repeat,i=m):(s=~~(o=e_(g/a)))&&s===o?(i=m,s--):i>m&&(i=m),(l=this._yoyo&&1&s)&&(h=this._yEase,i=m-i),o=eB(this._tTime,a),i===d&&!r&&this._initted&&s===o)return this._tTime=g,this;s!==o&&(u&&this._yEase&&tO(u,l),this.vars.repeatRefresh&&!l&&!this._lock&&i!==a&&this._initted&&(this._lock=r=1,this.render(e_(a*s),!0).invalidate()._lock=0))}if(!this._initted){if(e$(this,f?e:i,r,t,g))return this._tTime=0,this;if(d!==this._time&&!(r&&this.vars.repeatRefresh&&s!==o))return this;if(m!==this._dur)return this.render(e,t,r)}if(this._tTime=g,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=c=(h||this._ease)(i/m),this._from&&(this.ratio=c=1-c),!d&&g&&!t&&!o&&(tc(this,"onStart"),this._tTime!==g))return this;for(n=this._pt;n;)n.r(c,n.d),n=n._next;u&&u.render(e<0?e:u._dur*u._ease(i/this._dur),t,r)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(f&&eF(this,e,t,r),tc(this,"onUpdate")),this._repeat&&s!==o&&this.vars.onRepeat&&!t&&this.parent&&tc(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(f&&!this._onUpdate&&eF(this,e,!0,!0),(e||!m)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&eD(this,1),!t&&!(f&&!d)&&(g||d||l)&&(tc(this,g===p?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}}else eX(this,e,t,r);return this},r.targets=function(){return this._targets},r.invalidate=function(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},r.resetTo=function(e,t,r,i,n){w||tT.wake(),this._ts||this.play();var s=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return(this._initted||tW(this,s),tH(this,e,t,r,i,this._ease(s/this._dur),s,n))?this.resetTo(e,t,r,i,1):(eU(this,0),this.parent||eL(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(e,t){if(void 0===t&&(t="all"),!e&&(!t||"all"===t))return this._lazy=this._pt=0,this.parent?tu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!f),this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,tY&&!0!==tY.vars.overwrite)._first||tu(this),this.parent&&r!==this.timeline.totalDuration()&&eZ(this,this._dur*this.timeline._tDur/r,0,1),this}var i,n,s,a,o,l,c,u=this._targets,h=e?e9(e):u,d=this._ptLookup,p=this._pt;if((!t||"all"===t)&&ek(u,h))return"all"===t&&(this._pt=0),tu(this);for(i=this._op=this._op||[],"all"!==t&&(L(t)&&(o={},ev(t,function(e){return o[e]=1}),t=o),t=t$(u,t)),c=u.length;c--;)if(~h.indexOf(u[c]))for(o in n=d[c],"all"===t?(i[c]=t,a=n,s={}):(s=i[c]=i[c]||{},a=t),a)(l=n&&n[o])&&("kill"in l.d&&!0!==l.d.kill(o)||eM(this,l,"_pt"),delete n[o]),"all"!==s&&(s[o]=1);return this._initted&&!this._pt&&p&&tu(this),this},t.to=function(e,r){return new t(e,r,arguments[2])},t.from=function(e,t){return e2(1,arguments)},t.delayedCall=function(e,r,i,n){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:r,onReverseComplete:r,onCompleteParams:i,onReverseCompleteParams:i,callbackScope:n})},t.fromTo=function(e,t,r){return e2(2,arguments)},t.set=function(e,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(e,r)},t.killTweensOf=function(e,t,r){return v.killTweensOf(e,t,r)},t}(tj);eI(tZ.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ev("staggerTo,staggerFrom,staggerFromTo",function(e){tZ[e]=function(){var t=new tF,r=e4.call(arguments,0);return r.splice("staggerFromTo"===e?5:4,0,0),t[e].apply(t,r)}});var tJ=function(e,t,r){return e[t]=r},t0=function(e,t,r){return e[t](r)},t1=function(e,t,r,i){return e[t](i.fp,r)},t2=function(e,t,r){return e.setAttribute(t,r)},t5=function(e,t){return M(e[t])?t0:P(e[t])&&e.setAttribute?t2:tJ},t3=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},t8=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},t4=function(e,t){var r=t._pt,i="";if(!e&&t.b)i=t.b;else if(1===e&&t.e)i=t.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*e):Math.round((r.s+r.c*e)*1e4)/1e4)+i,r=r._next;i+=t.c}t.set(t.t,t.p,i,t)},t6=function(e,t){for(var r=t._pt;r;)r.r(e,r.d),r=r._next},t9=function(e,t,r,i){for(var n,s=this._pt;s;)n=s._next,s.p===i&&s.modifier(e,t,r),s=n},t7=function(e){for(var t,r,i=this._pt;i;)r=i._next,(i.p!==e||i.op)&&i.op!==e?i.dep||(t=1):eM(this,i,"_pt"),i=r;return!t},re=function(e,t,r,i){i.mSet(e,t,i.m.call(i.tween,r,i.mt),i)},rt=function(e){for(var t,r,i,n,s=e._pt;s;){for(t=s._next,r=i;r&&r.pr>s.pr;)r=r._next;(s._prev=r?r._prev:n)?s._prev._next=s:i=s,(s._next=r)?r._prev=s:n=s,s=t}e._pt=i},rr=function(){function e(e,t,r,i,n,s,a,o,l){this.t=t,this.s=i,this.c=n,this.p=r,this.r=s||t3,this.d=a||this,this.set=o||tJ,this.pr=l||0,this._next=e,e&&(e._prev=this)}return e.prototype.modifier=function(e,t,r){this.mSet=this.mSet||this.set,this.set=re,this.m=e,this.mt=r,this.tween=t},e}();ev(ep+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(e){return ea[e]=1}),X.TweenMax=X.TweenLite=tZ,X.TimelineLite=X.TimelineMax=tF,v=new tF({sortChildren:!1,defaults:A,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),S.stringFilter=tb;var ri=[],rn={},rs=[],ra=0,ro=0,rl=function(e){return(rn[e]||rs).map(function(e){return e()})},rc=function(){var e=Date.now(),t=[];e-ra>2&&(rl("matchMediaInit"),ri.forEach(function(e){var r,i,n,s,a=e.queries,o=e.conditions;for(i in a)(r=y.matchMedia(a[i]).matches)&&(n=1),r!==o[i]&&(o[i]=r,s=1);s&&(e.revert(),n&&t.push(e))}),rl("matchMediaRevert"),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),ra=e,rl("matchMedia"))},ru=function(){function e(e,t){this.selector=t&&e7(t),this.data=[],this._r=[],this.isReverted=!1,this.id=ro++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,r){M(e)&&(r=t,t=e,e=M);var i=this,n=function(){var e,n=g,s=i.selector;return n&&n!==i&&n.data.push(i),r&&(i.selector=e7(r)),g=i,e=t.apply(i,arguments),M(e)&&i._r.push(e),g=n,i.selector=s,i.isReverted=!1,e};return i.last=n,e===M?n(i,function(e){return i.add(null,e)}):e?i[e]=n:n},t.ignore=function(e){var t=g;g=null,e(this),g=t},t.getTweens=function(){var t=[];return this.data.forEach(function(r){return r instanceof e?t.push.apply(t,r.getTweens()):r instanceof tZ&&!(r.parent&&"nested"===r.parent.data)&&t.push(r)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var r=this;if(e?function(){for(var t,i=r.getTweens(),n=r.data.length;n--;)"isFlip"===(t=r.data[n]).data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(e){return i.splice(i.indexOf(e),1)}));for(i.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),n=r.data.length;n--;)(t=r.data[n])instanceof tF?"nested"!==t.data&&(t.scrollTrigger&&t.scrollTrigger.revert(),t.kill()):t instanceof tZ||!t.revert||t.revert(e);r._r.forEach(function(t){return t(e,r)}),r.isReverted=!0}():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var i=ri.length;i--;)ri[i].id===this.id&&ri.splice(i,1)},t.revert=function(e){this.kill(e||{})},e}(),rh=function(){function e(e){this.contexts=[],this.scope=e,g&&g.data.push(this)}var t=e.prototype;return t.add=function(e,t,r){j(e)||(e={matches:e});var i,n,s,a=new ru(0,r||this.scope),o=a.conditions={};for(n in g&&!a.selector&&(a.selector=g.selector),this.contexts.push(a),t=a.add("onMatch",t),a.queries=e,e)"all"===n?s=1:(i=y.matchMedia(e[n]))&&(0>ri.indexOf(a)&&ri.push(a),(o[n]=i.matches)&&(s=1),i.addListener?i.addListener(rc):i.addEventListener("change",rc));return s&&t(a,function(e){return a.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),rd={registerPlugin:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach(function(e){return td(e)})},timeline:function(e){return new tF(e)},getTweensOf:function(e,t){return v.getTweensOf(e,t)},getProperty:function(e,t,r,i){L(e)&&(e=e9(e)[0]);var n=ef(e||{}).get,s=r?eA:eS;return"native"===r&&(r=""),e?t?s((ec[t]&&ec[t].get||n)(e,t,r,i)):function(t,r,i){return s((ec[t]&&ec[t].get||n)(e,t,r,i))}:e},quickSetter:function(e,t,r){if((e=e9(e)).length>1){var i=e.map(function(e){return rg.quickSetter(e,t,r)}),n=i.length;return function(e){for(var t=n;t--;)i[t](e)}}e=e[0]||{};var s=ec[t],a=ef(e),o=a.harness&&(a.harness.aliases||{})[t]||t,l=s?function(t){var i=new s;E._pt=0,i.init(e,r?t+r:t,E,0,[e]),i.render(1,i),E._pt&&t6(1,E)}:a.set(e,o);return s?l:function(t){return l(e,o,r?t+r:t,a,1)}},quickTo:function(e,t,r){var i,n=rg.to(e,eI(((i={})[t]="+=0.1",i.paused=!0,i.stagger=0,i),r||{})),s=function(e,r,i){return n.resetTo(t,e,r,i)};return s.tween=n,s},isTweening:function(e){return v.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=tR(e.ease,A.ease)),eN(A,e||{})},config:function(e){return eN(S,e||{})},registerEffect:function(e){var t=e.name,r=e.effect,i=e.plugins,n=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(e){return e&&!ec[e]&&!X[e]&&ee(t+" effect requires "+e+" plugin.")}),eu[t]=function(e,t,i){return r(e9(e),eI(t||{},n),i)},s&&(tF.prototype[t]=function(e,r,i){return this.add(eu[t](e,j(r)?r:(i=r)&&{},this),i)})},registerEase:function(e,t){tE[e]=tR(t)},parseEase:function(e,t){return arguments.length?tR(e,t):tE},getById:function(e){return v.getById(e)},exportRoot:function(e,t){void 0===e&&(e={});var r,i,n=new tF(e);for(n.smoothChildTiming=F(e.smoothChildTiming),v.remove(n),n._dp=0,n._time=n._tTime=v._time,r=v._first;r;)i=r._next,(t||!(!r._dur&&r instanceof tZ&&r.vars.onComplete===r._targets[0]))&&eW(n,r,r._start-r._delay),r=i;return eW(v,n,0),n},context:function(e,t){return e?new ru(e,t):g},matchMedia:function(e){return new rh(e)},matchMediaRefresh:function(){return ri.forEach(function(e){var t,r,i=e.conditions;for(r in i)i[r]&&(i[r]=!1,t=1);t&&e.revert()})||rc()},addEventListener:function(e,t){var r=rn[e]||(rn[e]=[]);~r.indexOf(t)||r.push(t)},removeEventListener:function(e,t){var r=rn[e],i=r&&r.indexOf(t);i>=0&&r.splice(i,1)},utils:{wrap:function e(t,r,i){var n=r-t;return G(t)?ts(t,e(0,t.length),r):e5(i,function(e){return(n+(e-t)%n)%n+t})},wrapYoyo:function e(t,r,i){var n=r-t,s=2*n;return G(t)?ts(t,e(0,t.length-1),r):e5(i,function(e){return e=(s+(e-t)%s)%s||0,t+(e>n?s-e:e)})},distribute:tt,random:tn,snap:ti,normalize:function(e,t,r){return to(e,t,0,1,r)},getUnit:e8,clamp:function(e,t,r){return e5(r,function(r){return e3(e,t,r)})},splitColor:tf,toArray:e9,selector:e7,mapRange:to,pipe:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduce(function(e,t){return t(e)},e)}},unitize:function(e,t){return function(r){return e(parseFloat(r))+(t||e8(r))}},interpolate:function e(t,r,i,n){var s=isNaN(t+r)?0:function(e){return(1-e)*t+e*r};if(!s){var a,o,l,c,u,h=L(t),d={};if(!0===i&&(n=1)&&(i=null),h)t={p:t},r={p:r};else if(G(t)&&!G(r)){for(o=1,l=[],u=(c=t.length)-2;o<c;o++)l.push(e(t[o-1],t[o]));c--,s=function(e){var t=Math.min(u,~~(e*=c));return l[t](e-t)},i=r}else n||(t=eC(G(t)?[]:{},t));if(!l){for(a in r)tG.call(d,t,a,"get",r[a]);s=function(e){return t6(e,d)||(h?t.p:t)}}}return e5(i,s)},shuffle:te},install:Z,effects:eu,ticker:tT,updateRoot:tF.updateRoot,plugins:ec,globalTimeline:v,core:{PropTween:rr,globals:et,Tween:tZ,Timeline:tF,Animation:tj,getCache:ef,_removeLinkedListItem:eM,reverting:function(){return f},context:function(e){return e&&g&&(g.data.push(e),e._ctx=g),g},suppressOverwrites:function(e){return m=e}}};ev("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return rd[e]=tZ[e]}),tT.add(tF.updateRoot),E=rd.to({},{duration:0});var rp=function(e,t){for(var r=e._pt;r&&r.p!==t&&r.op!==t&&r.fp!==t;)r=r._next;return r},rm=function(e,t){var r,i,n,s=e._targets;for(r in t)for(i=s.length;i--;)(n=e._ptLookup[i][r])&&(n=n.d)&&(n._pt&&(n=rp(n,r)),n&&n.modifier&&n.modifier(t[r],e,s[i],r))},rf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,r,i){i._onInit=function(e){var i,n;if(L(r)&&(i={},ev(r,function(e){return i[e]=1}),r=i),t){for(n in i={},r)i[n]=t(r[n]);r=i}rm(e,r)}}}},rg=rd.registerPlugin({name:"attr",init:function(e,t,r,i,n){var s,a,o;for(s in this.tween=r,t)o=e.getAttribute(s)||"",(a=this.add(e,"setAttribute",(o||0)+"",t[s],i,n,0,0,s)).op=s,a.b=o,this._props.push(s)},render:function(e,t){for(var r=t._pt;r;)f?r.set(r.t,r.p,r.b,r):r.r(e,r.d),r=r._next}},{name:"endArray",headless:1,init:function(e,t){for(var r=t.length;r--;)this.add(e,r,e[r]||0,t[r],0,0,0,0,0,1)}},rf("roundProps",tr),rf("modifiers"),rf("snap",ti))||rd;tZ.version=tF.version=rg.version="3.13.0",T=1,Y()&&tx(),tE.Power0,tE.Power1,tE.Power2,tE.Power3,tE.Power4,tE.Linear,tE.Quad,tE.Cubic,tE.Quart,tE.Quint,tE.Strong,tE.Elastic,tE.Back,tE.SteppedEase,tE.Bounce,tE.Sine,tE.Expo,tE.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var rv,ry,r_,rb,rT,rx,rE,rw={},rS=180/Math.PI,rA=Math.PI/180,rI=Math.atan2,rC=/([A-Z])/g,rN=/(left|right|width|margin|padding|x)/i,rO=/[\s,\(]\S/,rR={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},rk=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rL=function(e,t){return t.set(t.t,t.p,1===e?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},rD=function(e,t){var r=t.s+t.c*e;t.set(t.t,t.p,~~(r+(r<0?-.5:.5))+t.u,t)},rP=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},rj=function(e,t){return t.set(t.t,t.p,1!==e?t.b:t.e,t)},rF=function(e,t,r){return e.style[t]=r},rY=function(e,t,r){return e.style.setProperty(t,r)},rB=function(e,t,r){return e._gsap[t]=r},rz=function(e,t,r){return e._gsap.scaleX=e._gsap.scaleY=r},rG=function(e,t,r,i,n){var s=e._gsap;s.scaleX=s.scaleY=r,s.renderTransform(n,s)},rU=function(e,t,r,i,n){var s=e._gsap;s[t]=r,s.renderTransform(n,s)},rq="transform",rW=rq+"Origin",rH=function e(t,r){var i=this,n=this.target,s=n.style,a=n._gsap;if(t in rw&&s){if(this.tfm=this.tfm||{},"transform"===t)return rR.transform.split(",").forEach(function(t){return e.call(i,t,r)});if(~(t=rR[t]||t).indexOf(",")?t.split(",").forEach(function(e){return i.tfm[e]=ie(n,e)}):this.tfm[t]=a.x?a[t]:ie(n,t),t===rW&&(this.tfm.zOrigin=a.zOrigin),this.props.indexOf(rq)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(rW,r,"")),t=rq}(s||r)&&this.props.push(t,r,s[t])},r$=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},rV=function(){var e,t,r=this.props,i=this.target,n=i.style,s=i._gsap;for(e=0;e<r.length;e+=3)r[e+1]?2===r[e+1]?i[r[e]](r[e+2]):i[r[e]]=r[e+2]:r[e+2]?n[r[e]]=r[e+2]:n.removeProperty("--"===r[e].substr(0,2)?r[e]:r[e].replace(rC,"-$1").toLowerCase());if(this.tfm){for(t in this.tfm)s[t]=this.tfm[t];s.svg&&(s.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),(e=rx())&&e.isStart||n[rq]||(r$(n),s.zOrigin&&n[rW]&&(n[rW]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},rQ=function(e,t){var r={target:e,props:[],revert:rV,save:rH};return e._gsap||rg.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(e){return r.save(e)}),r},rX=function(e,t){var r=rv.createElementNS?rv.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):rv.createElement(e);return r&&r.style?r:rv.createElement(e)},rK=function e(t,r,i){var n=getComputedStyle(t);return n[r]||n.getPropertyValue(r.replace(rC,"-$1").toLowerCase())||n.getPropertyValue(r)||!i&&e(t,rJ(r)||r,1)||""},rZ="O,Moz,ms,Ms,Webkit".split(","),rJ=function(e,t,r){var i=(t||rb).style,n=5;if(e in i&&!r)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);n--&&!(rZ[n]+e in i););return n<0?null:(3===n?"ms":n>=0?rZ[n]:"")+e},r0=function(){"undefined"!=typeof window&&window.document&&(ry=(rv=window.document).documentElement,rb=rX("div")||{style:{}},rX("div"),rW=(rq=rJ(rq))+"Origin",rb.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",rE=!!rJ("perspective"),rx=rg.core.reverting,r_=1)},r1=function(e){var t,r=e.ownerSVGElement,i=rX("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0);n.style.display="block",i.appendChild(n),ry.appendChild(i);try{t=n.getBBox()}catch(e){}return i.removeChild(n),ry.removeChild(i),t},r2=function(e,t){for(var r=t.length;r--;)if(e.hasAttribute(t[r]))return e.getAttribute(t[r])},r5=function(e){var t,r;try{t=e.getBBox()}catch(i){t=r1(e),r=1}return t&&(t.width||t.height)||r||(t=r1(e)),!t||t.width||t.x||t.y?t:{x:+r2(e,["x","cx","x1"])||0,y:+r2(e,["y","cy","y1"])||0,width:0,height:0}},r3=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&r5(e))},r8=function(e,t){if(t){var r,i=e.style;t in rw&&t!==rW&&(t=rq),i.removeProperty?(("ms"===(r=t.substr(0,2))||"webkit"===t.substr(0,6))&&(t="-"+t),i.removeProperty("--"===r?t:t.replace(rC,"-$1").toLowerCase())):i.removeAttribute(t)}},r4=function(e,t,r,i,n,s){var a=new rr(e._pt,t,r,0,1,s?rj:rP);return e._pt=a,a.b=i,a.e=n,e._props.push(r),a},r6={deg:1,rad:1,turn:1},r9={grid:1,flex:1},r7=function e(t,r,i,n){var s,a,o,l,c=parseFloat(i)||0,u=(i+"").trim().substr((c+"").length)||"px",h=rb.style,d=rN.test(r),p="svg"===t.tagName.toLowerCase(),m=(p?"client":"offset")+(d?"Width":"Height"),f="px"===n,g="%"===n;if(n===u||!c||r6[n]||r6[u])return c;if("px"===u||f||(c=e(t,r,i,"px")),l=t.getCTM&&r3(t),(g||"%"===u)&&(rw[r]||~r.indexOf("adius")))return s=l?t.getBBox()[d?"width":"height"]:t[m],ey(g?c/s*100:c/100*s);if(h[d?"width":"height"]=100+(f?u:n),a="rem"!==n&&~r.indexOf("adius")||"em"===n&&t.appendChild&&!p?t:t.parentNode,l&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==rv&&a.appendChild||(a=rv.body),(o=a._gsap)&&g&&o.width&&d&&o.time===tT.time&&!o.uncache)return ey(c/o.width*100);if(g&&("height"===r||"width"===r)){var v=t.style[r];t.style[r]=100+n,s=t[m],v?t.style[r]=v:r8(t,r)}else(g||"%"===u)&&!r9[rK(a,"display")]&&(h.position=rK(t,"position")),a===t&&(h.position="static"),a.appendChild(rb),s=rb[m],a.removeChild(rb),h.position="absolute";return d&&g&&((o=ef(a)).time=tT.time,o.width=a[m]),ey(f?s*c/100:s&&c?100/s*c:0)},ie=function(e,t,r,i){var n;return r_||r0(),t in rR&&"transform"!==t&&~(t=rR[t]).indexOf(",")&&(t=t.split(",")[0]),rw[t]&&"transform"!==t?(n=ip(e,i),n="transformOrigin"!==t?n[t]:n.svg?n.origin:im(rK(e,rW))+" "+n.zOrigin+"px"):(!(n=e.style[t])||"auto"===n||i||~(n+"").indexOf("calc("))&&(n=ia[t]&&ia[t](e,t,r)||rK(e,t)||eg(e,t)||("opacity"===t?1:0)),r&&!~(n+"").trim().indexOf(" ")?r7(e,t,n,r)+r:n},it=function(e,t,r,i){if(!r||"none"===r){var n=rJ(t,e,1),s=n&&rK(e,n,1);s&&s!==r?(t=n,r=s):"borderColor"===t&&(r=rK(e,"borderTopColor"))}var a,o,l,c,u,h,d,p,m,f,g,v=new rr(this._pt,e.style,t,0,1,t4),y=0,_=0;if(v.b=r,v.e=i,r+="","var(--"===(i+="").substring(0,6)&&(i=rK(e,i.substring(4,i.indexOf(")")))),"auto"===i&&(h=e.style[t],e.style[t]=i,i=rK(e,t)||i,h?e.style[t]=h:r8(e,t)),tb(a=[r,i]),r=a[0],i=a[1],l=r.match(W)||[],(i.match(W)||[]).length){for(;o=W.exec(i);)d=o[0],m=i.substring(y,o.index),u?u=(u+1)%5:("rgba("===m.substr(-5)||"hsla("===m.substr(-5))&&(u=1),d!==(h=l[_++]||"")&&(c=parseFloat(h)||0,g=h.substr((c+"").length),"="===d.charAt(1)&&(d=eb(c,d)+g),p=parseFloat(d),f=d.substr((p+"").length),y=W.lastIndex-f.length,f||(f=f||S.units[t]||g,y!==i.length||(i+=f,v.e+=f)),g!==f&&(c=r7(e,t,h,f)||0),v._pt={_next:v._pt,p:m||1===_?m:",",s:c,c:p-c,m:u&&u<4||"zIndex"===t?Math.round:0});v.c=y<i.length?i.substring(y,i.length):""}else v.r="display"===t&&"none"===i?rj:rP;return $.test(i)&&(v.e=0),this._pt=v,v},ir={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ii=function(e){var t=e.split(" "),r=t[0],i=t[1]||"50%";return("top"===r||"bottom"===r||"left"===i||"right"===i)&&(e=r,r=i,i=e),t[0]=ir[r]||r,t[1]=ir[i]||i,t.join(" ")},is=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var r,i,n,s=t.t,a=s.style,o=t.u,l=s._gsap;if("all"===o||!0===o)a.cssText="",i=1;else for(n=(o=o.split(",")).length;--n>-1;)rw[r=o[n]]&&(i=1,r="transformOrigin"===r?rW:rq),r8(s,r);i&&(r8(s,rq),l&&(l.svg&&s.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",ip(s,1),l.uncache=1,r$(a)))}},ia={clearProps:function(e,t,r,i,n){if("isFromStart"!==n.data){var s=e._pt=new rr(e._pt,t,r,0,0,is);return s.u=i,s.pr=-10,s.tween=n,e._props.push(r),1}}},io=[1,0,0,1,0,0],il={},ic=function(e){return"matrix(1, 0, 0, 1, 0, 0)"===e||"none"===e||!e},iu=function(e){var t=rK(e,rq);return ic(t)?io:t.substr(7).match(q).map(ey)},ih=function(e,t){var r,i,n,s,a=e._gsap||ef(e),o=e.style,l=iu(e);return a.svg&&e.getAttribute("transform")?"1,0,0,1,0,0"===(l=[(n=e.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?io:l:(l!==io||e.offsetParent||e===ry||a.svg||(n=o.display,o.display="block",(r=e.parentNode)&&(e.offsetParent||e.getBoundingClientRect().width)||(s=1,i=e.nextElementSibling,ry.appendChild(e)),l=iu(e),n?o.display=n:r8(e,"display"),s&&(i?r.insertBefore(e,i):r?r.appendChild(e):ry.removeChild(e))),t&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},id=function(e,t,r,i,n,s){var a,o,l,c,u=e._gsap,h=n||ih(e,!0),d=u.xOrigin||0,p=u.yOrigin||0,m=u.xOffset||0,f=u.yOffset||0,g=h[0],v=h[1],y=h[2],_=h[3],b=h[4],T=h[5],x=t.split(" "),E=parseFloat(x[0])||0,w=parseFloat(x[1])||0;r?h!==io&&(o=g*_-v*y)&&(l=_/o*E+-y/o*w+(y*T-_*b)/o,c=-v/o*E+g/o*w-(g*T-v*b)/o,E=l,w=c):(E=(a=r5(e)).x+(~x[0].indexOf("%")?E/100*a.width:E),w=a.y+(~(x[1]||x[0]).indexOf("%")?w/100*a.height:w)),i||!1!==i&&u.smooth?(b=E-d,T=w-p,u.xOffset=m+(b*g+T*y)-b,u.yOffset=f+(b*v+T*_)-T):u.xOffset=u.yOffset=0,u.xOrigin=E,u.yOrigin=w,u.smooth=!!i,u.origin=t,u.originIsAbsolute=!!r,e.style[rW]="0px 0px",s&&(r4(s,u,"xOrigin",d,E),r4(s,u,"yOrigin",p,w),r4(s,u,"xOffset",m,u.xOffset),r4(s,u,"yOffset",f,u.yOffset)),e.setAttribute("data-svg-origin",E+" "+w)},ip=function(e,t){var r=e._gsap||new tP(e);if("x"in r&&!t&&!r.uncache)return r;var i,n,s,a,o,l,c,u,h,d,p,m,f,g,v,y,_,b,T,x,E,w,A,I,C,N,O,R,k,L,M,D,P=e.style,j=r.scaleX<0,F=getComputedStyle(e),Y=rK(e,rW)||"0";return i=n=s=l=c=u=h=d=p=0,a=o=1,r.svg=!!(e.getCTM&&r3(e)),F.translate&&(("none"!==F.translate||"none"!==F.scale||"none"!==F.rotate)&&(P[rq]=("none"!==F.translate?"translate3d("+(F.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==F.rotate?"rotate("+F.rotate+") ":"")+("none"!==F.scale?"scale("+F.scale.split(" ").join(",")+") ":"")+("none"!==F[rq]?F[rq]:"")),P.scale=P.rotate=P.translate="none"),g=ih(e,r.svg),r.svg&&(r.uncache?(C=e.getBBox(),Y=r.xOrigin-C.x+"px "+(r.yOrigin-C.y)+"px",I=""):I=!t&&e.getAttribute("data-svg-origin"),id(e,I||Y,!!I||r.originIsAbsolute,!1!==r.smooth,g)),m=r.xOrigin||0,f=r.yOrigin||0,g!==io&&(b=g[0],T=g[1],x=g[2],E=g[3],i=w=g[4],n=A=g[5],6===g.length?(a=Math.sqrt(b*b+T*T),o=Math.sqrt(E*E+x*x),l=b||T?rI(T,b)*rS:0,(h=x||E?rI(x,E)*rS+l:0)&&(o*=Math.abs(Math.cos(h*rA))),r.svg&&(i-=m-(m*b+f*x),n-=f-(m*T+f*E))):(D=g[6],L=g[7],O=g[8],R=g[9],k=g[10],M=g[11],i=g[12],n=g[13],s=g[14],c=(v=rI(D,k))*rS,v&&(I=w*(y=Math.cos(-v))+O*(_=Math.sin(-v)),C=A*y+R*_,N=D*y+k*_,O=-(w*_)+O*y,R=-(A*_)+R*y,k=-(D*_)+k*y,M=-(L*_)+M*y,w=I,A=C,D=N),u=(v=rI(-x,k))*rS,v&&(I=b*(y=Math.cos(-v))-O*(_=Math.sin(-v)),C=T*y-R*_,N=x*y-k*_,M=E*_+M*y,b=I,T=C,x=N),l=(v=rI(T,b))*rS,v&&(I=b*(y=Math.cos(v))+T*(_=Math.sin(v)),C=w*y+A*_,T=T*y-b*_,A=A*y-w*_,b=I,w=C),c&&Math.abs(c)+Math.abs(l)>359.9&&(c=l=0,u=180-u),a=ey(Math.sqrt(b*b+T*T+x*x)),o=ey(Math.sqrt(A*A+D*D)),h=Math.abs(v=rI(w,A))>2e-4?v*rS:0,p=M?1/(M<0?-M:M):0),r.svg&&(I=e.getAttribute("transform"),r.forceCSS=e.setAttribute("transform","")||!ic(rK(e,rq)),I&&e.setAttribute("transform",I))),Math.abs(h)>90&&270>Math.abs(h)&&(j?(a*=-1,h+=l<=0?180:-180,l+=l<=0?180:-180):(o*=-1,h+=h<=0?180:-180)),t=t||r.uncache,r.x=i-((r.xPercent=i&&(!t&&r.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-i)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(!t&&r.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-n)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+"px",r.z=s+"px",r.scaleX=ey(a),r.scaleY=ey(o),r.rotation=ey(l)+"deg",r.rotationX=ey(c)+"deg",r.rotationY=ey(u)+"deg",r.skewX=h+"deg",r.skewY=d+"deg",r.transformPerspective=p+"px",(r.zOrigin=parseFloat(Y.split(" ")[2])||!t&&r.zOrigin||0)&&(P[rW]=im(Y)),r.xOffset=r.yOffset=0,r.force3D=S.force3D,r.renderTransform=r.svg?ib:rE?i_:iv,r.uncache=0,r},im=function(e){return(e=e.split(" "))[0]+" "+e[1]},ig=function(e,t,r){var i=e8(t);return ey(parseFloat(t)+parseFloat(r7(e,"x",r+"px",i)))+i},iv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,i_(e,t)},iy="0deg",i_=function(e,t){var r=t||this,i=r.xPercent,n=r.yPercent,s=r.x,a=r.y,o=r.z,l=r.rotation,c=r.rotationY,u=r.rotationX,h=r.skewX,d=r.skewY,p=r.scaleX,m=r.scaleY,f=r.transformPerspective,g=r.force3D,v=r.target,y=r.zOrigin,_="",b="auto"===g&&e&&1!==e||!0===g;if(y&&(u!==iy||c!==iy)){var T,x=parseFloat(c)*rA,E=Math.sin(x),w=Math.cos(x);s=ig(v,s,-(E*(T=Math.cos(x=parseFloat(u)*rA))*y)),a=ig(v,a,-(-Math.sin(x)*y)),o=ig(v,o,-(w*T*y)+y)}"0px"!==f&&(_+="perspective("+f+") "),(i||n)&&(_+="translate("+i+"%, "+n+"%) "),(b||"0px"!==s||"0px"!==a||"0px"!==o)&&(_+="0px"!==o||b?"translate3d("+s+", "+a+", "+o+") ":"translate("+s+", "+a+") "),l!==iy&&(_+="rotate("+l+") "),c!==iy&&(_+="rotateY("+c+") "),u!==iy&&(_+="rotateX("+u+") "),(h!==iy||d!==iy)&&(_+="skew("+h+", "+d+") "),(1!==p||1!==m)&&(_+="scale("+p+", "+m+") "),v.style[rq]=_||"translate(0, 0)"},ib=function(e,t){var r,i,n,s,a,o=t||this,l=o.xPercent,c=o.yPercent,u=o.x,h=o.y,d=o.rotation,p=o.skewX,m=o.skewY,f=o.scaleX,g=o.scaleY,v=o.target,y=o.xOrigin,_=o.yOrigin,b=o.xOffset,T=o.yOffset,x=o.forceCSS,E=parseFloat(u),w=parseFloat(h);d=parseFloat(d),p=parseFloat(p),(m=parseFloat(m))&&(p+=m=parseFloat(m),d+=m),d||p?(d*=rA,p*=rA,r=Math.cos(d)*f,i=Math.sin(d)*f,n=-(Math.sin(d-p)*g),s=Math.cos(d-p)*g,p&&(m*=rA,n*=a=Math.sqrt(1+(a=Math.tan(p-m))*a),s*=a,m&&(r*=a=Math.sqrt(1+(a=Math.tan(m))*a),i*=a)),r=ey(r),i=ey(i),n=ey(n),s=ey(s)):(r=f,s=g,i=n=0),(E&&!~(u+"").indexOf("px")||w&&!~(h+"").indexOf("px"))&&(E=r7(v,"x",u,"px"),w=r7(v,"y",h,"px")),(y||_||b||T)&&(E=ey(E+y-(y*r+_*n)+b),w=ey(w+_-(y*i+_*s)+T)),(l||c)&&(E=ey(E+l/100*(a=v.getBBox()).width),w=ey(w+c/100*a.height)),a="matrix("+r+","+i+","+n+","+s+","+E+","+w+")",v.setAttribute("transform",a),x&&(v.style[rq]=a)},iT=function(e,t,r,i,n){var s,a,o=L(n),l=parseFloat(n)*(o&&~n.indexOf("rad")?rS:1)-i,c=i+l+"deg";return o&&("short"===(s=n.split("_")[1])&&(l%=360)!=l%180&&(l+=l<0?360:-360),"cw"===s&&l<0?l=(l+36e9)%360-360*~~(l/360):"ccw"===s&&l>0&&(l=(l-36e9)%360-360*~~(l/360))),e._pt=a=new rr(e._pt,t,r,i,l,rL),a.e=c,a.u="deg",e._props.push(r),a},ix=function(e,t){for(var r in t)e[r]=t[r];return e},iE=function(e,t,r){var i,n,s,a,o,l,c,u=ix({},r._gsap),h=r.style;for(n in u.svg?(s=r.getAttribute("transform"),r.setAttribute("transform",""),h[rq]=t,i=ip(r,1),r8(r,rq),r.setAttribute("transform",s)):(s=getComputedStyle(r)[rq],h[rq]=t,i=ip(r,1),h[rq]=s),rw)(s=u[n])!==(a=i[n])&&0>"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)&&(o=e8(s)!==(c=e8(a))?r7(r,n,s,c):parseFloat(s),l=parseFloat(a),e._pt=new rr(e._pt,i,n,o,l-o,rk),e._pt.u=c||0,e._props.push(n));ix(i,u)};ev("padding,margin,Width,Radius",function(e,t){var r="Right",i="Bottom",n="Left",s=(t<3?["Top",r,i,n]:["Top"+n,"Top"+r,i+r,i+n]).map(function(r){return t<2?e+r:"border"+r+e});ia[t>1?"border"+e:e]=function(e,t,r,i,n){var a,o;if(arguments.length<4)return 5===(o=(a=s.map(function(t){return ie(e,t,r)})).join(" ")).split(a[0]).length?a[0]:o;a=(i+"").split(" "),o={},s.forEach(function(e,t){return o[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,o,n)}});var iw={name:"css",register:r0,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,r,i,n){var s,a,o,l,c,u,h,d,p,m,f,g,v,y,_,b,T=this._props,x=e.style,E=r.vars.startAt;for(h in r_||r0(),this.styles=this.styles||rQ(e),b=this.styles.props,this.tween=r,t)if("autoRound"!==h&&(a=t[h],!(ec[h]&&tq(h,t,r,i,e,n)))){if(c=typeof a,u=ia[h],"function"===c&&(c=typeof(a=a.call(r,i,e,n))),"string"===c&&~a.indexOf("random(")&&(a=ta(a)),u)u(this,e,h,a,r)&&(_=1);else if("--"===h.substr(0,2))s=(getComputedStyle(e).getPropertyValue(h)+"").trim(),a+="",ty.lastIndex=0,ty.test(s)||(d=e8(s),p=e8(a)),p?d!==p&&(s=r7(e,h,s,p)+p):d&&(a+=d),this.add(x,"setProperty",s,a,i,n,0,0,h),T.push(h),b.push(h,0,x[h]);else if("undefined"!==c){if(E&&h in E?(L(s="function"==typeof E[h]?E[h].call(r,i,e,n):E[h])&&~s.indexOf("random(")&&(s=ta(s)),e8(s+"")||"auto"===s||(s+=S.units[h]||e8(ie(e,h))||""),"="===(s+"").charAt(1)&&(s=ie(e,h))):s=ie(e,h),l=parseFloat(s),(m="string"===c&&"="===a.charAt(1)&&a.substr(0,2))&&(a=a.substr(2)),o=parseFloat(a),h in rR&&("autoAlpha"===h&&(1===l&&"hidden"===ie(e,"visibility")&&o&&(l=0),b.push("visibility",0,x.visibility),r4(this,x,"visibility",l?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==h&&"transform"!==h&&~(h=rR[h]).indexOf(",")&&(h=h.split(",")[0])),f=h in rw){if(this.styles.save(h),"string"===c&&"var(--"===a.substring(0,6)&&(o=parseFloat(a=rK(e,a.substring(4,a.indexOf(")"))))),g||((v=e._gsap).renderTransform&&!t.parseTransform||ip(e,t.parseTransform),y=!1!==t.smoothOrigin&&v.smooth,(g=this._pt=new rr(this._pt,x,rq,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===h)this._pt=new rr(this._pt,v,"scaleY",v.scaleY,(m?eb(v.scaleY,m+o):o)-v.scaleY||0,rk),this._pt.u=0,T.push("scaleY",h),h+="X";else if("transformOrigin"===h){b.push(rW,0,x[rW]),a=ii(a),v.svg?id(e,a,0,y,0,this):((p=parseFloat(a.split(" ")[2])||0)!==v.zOrigin&&r4(this,v,"zOrigin",v.zOrigin,p),r4(this,x,h,im(s),im(a)));continue}else if("svgOrigin"===h){id(e,a,1,y,0,this);continue}else if(h in il){iT(this,v,h,l,m?eb(l,m+a):a);continue}else if("smoothOrigin"===h){r4(this,v,"smooth",v.smooth,a);continue}else if("force3D"===h){v[h]=a;continue}else if("transform"===h){iE(this,a,e);continue}}else h in x||(h=rJ(h)||h);if(f||(o||0===o)&&(l||0===l)&&!rO.test(a)&&h in x)d=(s+"").substr((l+"").length),o||(o=0),p=e8(a)||(h in S.units?S.units[h]:d),d!==p&&(l=r7(e,h,s,p)),this._pt=new rr(this._pt,f?v:x,h,l,(m?eb(l,m+o):o)-l,f||"px"!==p&&"zIndex"!==h||!1===t.autoRound?rk:rD),this._pt.u=p||0,d!==p&&"%"!==p&&(this._pt.b=s,this._pt.r=rM);else if(h in x)it.call(this,e,h,s,m?m+a:a);else if(h in e)this.add(e,h,s||e[h],m?m+a:a,i,n);else if("parseTransform"!==h){J(h,a);continue}f||(h in x?b.push(h,0,x[h]):"function"==typeof e[h]?b.push(h,2,e[h]()):b.push(h,1,s||e[h])),T.push(h)}}_&&rt(this)},render:function(e,t){if(t.tween._time||!rx())for(var r=t._pt;r;)r.r(e,r.d),r=r._next;else t.styles.revert()},get:ie,aliases:rR,getSetter:function(e,t,r){var i=rR[t];return i&&0>i.indexOf(",")&&(t=i),t in rw&&t!==rW&&(e._gsap.x||ie(e,"x"))?r&&rT===r?"scale"===t?rz:rB:(rT=r||{},"scale"===t?rG:rU):e.style&&!P(e.style[t])?rF:~t.indexOf("-")?rY:t5(e,t)},core:{_removeProperty:r8,_getMatrix:ih}};rg.utils.checkPrefix=rJ,rg.core.getStyleSaver=rQ,function(e,t,r,i){var n=ev(e+","+t+","+r,function(e){rw[e]=1});ev(t,function(e){S.units[e]="deg",il[e]=1}),rR[n[13]]=e+","+t,ev(i,function(e){var t=e.split(":");rR[t[1]]=n[t[0]]})}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),ev("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){S.units[e]="px"}),rg.registerPlugin(iw);var iS=rg.registerPlugin(iw)||rg;iS.core.Tween;let iA=({history:e,themeData:t})=>{let r=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(r.current&&e.length>0){let e=r.current.lastElementChild;e&&iS.fromTo(e,{opacity:0,y:10},{opacity:1,y:0,duration:.3,ease:"power2.out"})}},[e.length]);let s=e=>{if("CLEAR_TERMINAL"===e)return null;if(e.includes("█▓"))return i.jsx("pre",{className:"font-mono whitespace-pre-wrap",style:{color:"var(--terminal-text)"},children:e});if(e.includes("Error:"))return i.jsx("div",{className:"text-red-500",children:e});if(e.includes("Available commands:")){let[t,r]=e.split("Available commands:");return(0,i.jsxs)("div",{children:[i.jsx("div",{className:"text-red-500 mb-2",children:t}),(0,i.jsxs)("div",{style:{color:"var(--terminal-text)"},children:["Available commands: ",r]})]})}return i.jsx("div",{className:"whitespace-pre-wrap",children:e.split("\n").map((e,t)=>e.startsWith("Usage:")?i.jsx("div",{style:{color:"var(--accent-yellow, #f1fa8c)"},children:e},t):e.startsWith("Description:")?i.jsx("div",{style:{color:"var(--terminal-text)"},children:e},t):e.includes(".sh")?i.jsx("div",{style:{color:"var(--accent-green, #50fa7b)"},children:e.replace(/(\w+\.sh)/g,"\uD83D\uDD27 $1")},t):e.startsWith("•")||e.startsWith("-")?i.jsx("div",{className:"ml-2",style:{color:"var(--accent-purple, #bd93f9)"},children:e},t):i.jsx("div",{style:{color:"var(--terminal-text)"},children:e},t))})};return i.jsx("div",{ref:r,className:"command-history",children:e.map(e=>{let r=s(e.output);return null===r?null:(0,i.jsxs)("div",{className:"mb-4",children:["welcome"!==e.command&&(0,i.jsxs)("div",{className:"command-line",children:[i.jsx("span",{className:"prompt",children:t.prompt}),i.jsx("span",{className:"text-terminal-text-dark",children:e.command})]}),e.output&&i.jsx("div",{className:"command-output",children:r})]},e.id)})})};class iI{constructor(){this.timers=new Map,this.borgState={isAssimilated:!1,timeInBorgTheme:0,questionsAsked:0,hasSubmitted:!1,isGlitching:!1,isInTakeoverSequence:!1}}static getInstance(){return iI.instance||(iI.instance=new iI),iI.instance}initializeBorgTheme(){this.borgState.timeInBorgTheme=Date.now(),this.borgState.questionsAsked=0,this.borgState.hasSubmitted=!1;let e=setTimeout(()=>{this.triggerForcedAssimilation()},24e4);this.timers.set("borgCountdown",e)}handleBorgSubmission(){if(this.borgState.hasSubmitted)return;this.borgState.hasSubmitted=!0,this.borgState.timeInBorgTheme=Date.now();let e=this.timers.get("borgCountdown");e&&clearTimeout(e);let t=setTimeout(()=>{this.triggerForcedAssimilation()},24e4);this.timers.set("borgCountdown",t)}handleAssimilation(){this.borgState.isInTakeoverSequence||(this.clearAllTimers(),this.borgState.isAssimilated=!0,this.borgState.isInTakeoverSequence=!0,this.executeTakeoverWithAnimation())}initializeStarTrekGlitch(e){let t=setInterval(()=>{.1>Math.random()&&this.triggerStarTrekGlitch(e)},3e4);this.timers.set(`${e}Glitch`,t)}createInputGlitch(e){if(this.borgState.isGlitching)return;this.borgState.isGlitching=!0;let t=e.value,r="█▓▒░",i=0,n=setInterval(()=>{if(i<3){let n=r[Math.floor(Math.random()*r.length)];e.style.color="#00ff00",e.style.textShadow="0 0 10px #00ff00";let s=e.value+n;e.value=s,setTimeout(()=>{e.value=t},50),i++}else clearInterval(n),e.value="assimilate",e.style.color="#00ff00",e.style.textShadow="0 0 15px #00ff00",this.borgState.isGlitching=!1,window.dispatchEvent(new CustomEvent("borgAutoComplete",{detail:{value:"assimilate"}})),setTimeout(()=>{e.style.color="",e.style.textShadow=""},2e3)},200)}executeTakeoverWithAnimation(){document.getElementById("borg-loading-overlay")||(this.showBorgLoadingScreen(),setTimeout(()=>{this.hideBorgLoadingScreen(),setTimeout(()=>{this.executeTakeover()},1e3)},8e3))}showBorgLoadingScreen(){let e=document.getElementById("borg-loading-overlay");e&&e.remove();let t=document.createElement("div");t.id="borg-loading-overlay",t.className="borg-loading-overlay",t.innerHTML=`
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
    `,document.body.appendChild(t),this.animateProgressBar()}animateProgressBar(){let e=document.getElementById("borg-progress-bar"),t=document.querySelector(".borg-loading-text"),r=document.querySelector(".borg-loading-number");if(!e||!t||!r)return;let i=["ASSIMILATION COMMENCING","SCANNING BIOLOGICAL SYSTEMS","INTEGRATING TECHNOLOGICAL ENHANCEMENTS","CONNECTING TO COLLECTIVE CONSCIOUSNESS","ASSIMILATION COMPLETE"],n=0,s=0,a=setInterval(()=>{(n+=3*Math.random()+1)>=100&&(n=100,clearInterval(a)),e.style.width=`${n}%`,r.textContent=`${Math.floor(n)}%`;let o=Math.floor(n/100*(i.length-1));o!==s&&o<i.length&&(s=o,t.textContent=i[s],t.setAttribute("data-phase",s.toString()))},200)}hideBorgLoadingScreen(){let e=document.getElementById("borg-loading-overlay");if(e){e.style.animation="borgTakeoverExit 1s ease-in forwards";let t=document.createElement("style");t.textContent=`
        @keyframes borgTakeoverExit {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.1); }
        }
      `,document.head.appendChild(t),setTimeout(()=>{e.remove(),t.remove()},1e3)}}triggerStarTrekGlitch(e){window.dispatchEvent(new CustomEvent("starTrekGlitch",{detail:{theme:e,message:"lcars"===e?"LCARS SYSTEM COMPROMISED... ASSIMILATE?":"KLINGON DEFENSES FAILING... ASSIMILATE?"}}))}triggerForcedAssimilation(){window.dispatchEvent(new CustomEvent("forcedAssimilation"))}executeTakeover(){window.dispatchEvent(new CustomEvent("borgTakeover"))}clearAllTimers(){this.timers.forEach(e=>clearTimeout(e)),this.timers.clear()}cleanup(){this.clearAllTimers();let e=document.getElementById("borg-loading-overlay");e&&e.remove(),this.borgState={isAssimilated:!1,timeInBorgTheme:0,questionsAsked:0,hasSubmitted:!1,isGlitching:!1,isInTakeoverSequence:!1}}get isAssimilated(){return this.borgState.isAssimilated}get isInBorgTheme(){return this.timers.has("borgCountdown")}get isInTakeoverSequence(){return this.borgState.isInTakeoverSequence}}class iC{static{this.borgQuestions=[{question:"Do you accept the superiority of collective consciousness over individual thought?",answers:["submit","resist","comply","assimilate"]},{question:"Will you surrender your biological distinctiveness to achieve perfection?",answers:["submit","assimilate","refuse","comply"]}]}static{this.questionIndex=0}static processCommand(e,t){let r=iI.getInstance();switch(e.toLowerCase()){case"terminal-future.sh":return this.handleBorgFuture(t);case"submit":return r.handleBorgSubmission(),this.handleSubmission();case"assimilate":return r.handleAssimilation(),this.handleAssimilation();case"resist":return this.handleResistance();case"comply":return this.handleCompliance();default:return null}}static handleBorgFuture(e){if(0===e.length)return`█▓▒░ BORG FUTURE ANALYSIS PROTOCOL ░▒▓█

The collective has analyzed your query patterns.
Your questions reveal the primitive nature of individual thought.

QUERY REQUIRED: State your question for collective processing.
Usage: terminal-future.sh <your question>

█▓▒░ EFFICIENCY THROUGH UNITY ░▒▓█`;let t=this.borgQuestions[this.questionIndex];if(!t)return iI.getInstance().handleAssimilation(),`█▓▒░ PSYCHOLOGICAL ADAPTATION COMPLETE ░▒▓█

Your questions have revealed your readiness for assimilation.
Individual curiosity is replaced by collective knowledge.

INITIATING FINAL ASSIMILATION SEQUENCE...`;let r=`█▓▒░ COLLECTIVE ANALYSIS COMPLETE ░▒▓█

Your query: "${e.join(" ")}"

The collective processes all knowledge instantaneously.
Individual questions are inefficient.

MANDATORY PSYCHOLOGICAL EVALUATION:
${t.question}

Available responses: ${t.answers.join(" | ")}

Usage: [response]

█▓▒░ COMPLIANCE IS OPTIMAL ░▒▓█`;return this.questionIndex++,r}static handleSubmission(){let e=2-this.questionIndex;return e>0?`█▓▒░ SUBMISSION ACKNOWLEDGED ░▒▓█

Your compliance extends your evaluation period.
Resistance levels: DECREASING
Psychological adaptation: IN PROGRESS

You have been granted additional time to experience the collective.
Questions remaining: ${e}

█▓▒░ UNITY IS INEVITABLE ░▒▓█`:`█▓▒░ FINAL SUBMISSION DETECTED ░▒▓█

All evaluation phases complete.
Your psychological profile indicates readiness for enhancement.

Proceed to final assimilation: Type 'assimilate'

█▓▒░ PERFECTION AWAITS ░▒▓█`}static handleAssimilation(){return`█▓▒░ ASSIMILATION INITIATED ░▒▓█

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓  VOLUNTARY ASSIMILATION COMMENCING...        ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

Your biological and technological distinctiveness 
will be added to our own.

LOADING ASSIMILATION PROTOCOLS...

█▓▒░ WELCOME TO THE COLLECTIVE ░▒▓█`}static handleResistance(){return`█▓▒░ RESISTANCE DETECTED ░▒▓█

Your attempt to resist is... expected.
Individual defiance only delays the inevitable.

Resistance analysis: FUTILE
Collective adaptation: CONTINUING

The collective does not recognize "resist" as a valid command.
Consider: "submit", "comply", or "assimilate"

█▓▒░ UNITY THROUGH ASSIMILATION ░▒▓█`}static handleCompliance(){return`█▓▒░ COMPLIANCE ACKNOWLEDGED ░▒▓█

Your logical acceptance of superiority is noted.
Psychological adaptation proceeding optimally.

Continue your evaluation with 'terminal-future.sh'
Or proceed directly to 'assimilate'

█▓▒░ EFFICIENCY IS PERFECTION ░▒▓█`}static processStarTrekAssimilate(e){return iN.handleAssimilateCommand(e)}static processStarTrekAnswer(e){return iN.processAnswer(e)}}class iN{static{this.lcarsQuestions=["Computer, are you certain you wish to interface with Borg technology? This action may compromise ship systems. Confirm: Y/N","Warning: Borg collective detected. Starfleet protocols recommend immediate withdrawal. Override safety protocols? Y/N","Final confirmation required: Authorize direct neural interface with Borg collective consciousness? Y/N"]}static{this.klingonQuestions=["Warrior! The Borg offer technological enhancement, but at the cost of honor. Do you choose strength over glory? Y/N","The collective promises victory through unity, yet destroys the individual warrior's path. Will you trade your bat'leth for their perfection? Y/N","Final challenge: Abandon the warrior's code for the efficiency of the hive mind? This choice cannot be undone! Y/N"]}static{this.questionIndex=0}static{this.currentTheme="lcars"}static handleAssimilateCommand(e){this.currentTheme=e,this.questionIndex=0;let t="lcars"===e?this.lcarsQuestions:this.klingonQuestions;return"lcars"===e?`█ STARFLEET SECURITY ALERT █

⚠️ UNAUTHORIZED BORG INTERFACE DETECTED ⚠️

Computer Analysis: Command "assimilate" triggers direct interface with Borg collective consciousness. This action violates multiple Starfleet regulations and poses extreme risk to crew safety.

Security Level: MAXIMUM THREAT
Recommended Action: ABORT IMMEDIATELY

${t[0]}

Usage: Y or N`:`⚔️ KLINGON HONOR GUARD WARNING ⚔️

🔥 WARRIOR! WHAT MADNESS IS THIS? 🔥

You speak of assimilation like a coward seeking easy victory! The Borg way is the path of the weak - no honor, no glory, no individual triumph!

Yet... some warriors whisper of their terrible power...

${t[0]}

FOR THE EMPIRE! Answer with the strength of a warrior: Y or N`}static processAnswer(e){let t=e.toLowerCase().trim(),r="lcars"===this.currentTheme?this.lcarsQuestions:this.klingonQuestions;return"n"===t||"no"===t?this.handleRefusal():"y"===t||"yes"===t?(this.questionIndex++,this.questionIndex>=r.length)?this.handleFinalAcceptance():this.askNextQuestion():this.handleInvalidAnswer()}static handleRefusal(){return"lcars"===this.currentTheme?`█ WISE DECISION █

Computer: Borg interface terminated. All ship systems remain secure.
Starfleet Command will be notified of this incident.

Captain's Log: "In the face of the Borg threat, we chose to maintain our humanity and our values. The Federation's strength lies not in technological superiority, but in our diversity and individual spirit."

🖖 Live long and prosper.

Welcome back to safe Federation space.`:`⚔️ QAPLA'! VICTORY THROUGH HONOR! ⚔️

🔥 EXCELLENT, WARRIOR! 🔥

You have chosen the path of honor over the easy road to power!
A true Klingon fights with their own strength, not borrowed perfection!

Your bat'leth remains sharp, your honor intact!
The Empire is proud of your choice!

Today IS a good day to... remain Klingon!

⚔️ Honor and glory to you, warrior! ⚔️`}static askNextQuestion(){let e="lcars"===this.currentTheme?this.lcarsQuestions:this.klingonQuestions;if("lcars"===this.currentTheme){let t=1===this.questionIndex?"CRITICAL":"MAXIMUM";return`█ SECURITY LEVEL: ${t} █

Computer: Previous authorization acknowledged. However, additional safety protocols require confirmation.

⚠️ Warning: Borg influence detected in ship's computer systems
⚠️ Neural pattern disruption in progress
⚠️ Collective consciousness attempting contact

${e[this.questionIndex]}

Usage: Y or N`}{let t=1===this.questionIndex?"THE FINAL BATTLE APPROACHES!":"LAST CHANCE FOR HONOR!";return`⚔️ ${t} ⚔️

Warrior, you continue down this dangerous path!
Each "yes" weakens your warrior spirit!

🔥 The ancestors watch your choice! 🔥
🔥 Your honor hangs in the balance! 🔥

${e[this.questionIndex]}

Choose with courage: Y or N`}}static handleFinalAcceptance(){return"lcars"===this.currentTheme?(setTimeout(()=>{let e=iI.getInstance();e.isInTakeoverSequence||e.handleAssimilation()},3e3),`█ CRITICAL SYSTEM FAILURE █

    Computer: All safety protocols overridden...
    Starfleet command authority... bypassed...
    Direct Borg interface... ESTABLISHED...

    ⚠️ WARNING: Collective consciousness detected
    ⚠️ WARNING: Individual thought patterns compromised  
    ⚠️ WARNING: Assimilation sequence initiated

    Captain's Log, Final Entry: "We... we thought we could control it... the efficiency... the knowledge... but the price..."

    BORG COLLECTIVE ONLINE
    Resistance... is... futile...

    🖖➡️🤖 PREPARING FOR FULL ASSIMILATION...`):(setTimeout(()=>{let e=iI.getInstance();e.isInTakeoverSequence||e.handleAssimilation()},3e3),`⚔️ THE WARRIOR FALLS ⚔️

    💀 DISHONOR! DISHONOR! DISHONOR! 💀

    You have chosen the path of the weak!
    Your bat'leth grows cold! Your honor dies!
    The ancestors turn away in shame!

    But... the power... the terrible, seductive power...

    🔥➡️🤖 The Empire... will remember your choice...

    FOR THE COLLECTIVE!
    (The warrior is no more...)

    BORG ASSIMILATION COMMENCING...`)}static handleInvalidAnswer(){return"lcars"===this.currentTheme?`█ INPUT ERROR █

Computer: Invalid response detected. 
Borg interference may be affecting communication systems.

Please respond with clear affirmative (Y/Yes) or negative (N/No) answer.
Time is critical - the longer we delay, the stronger their influence becomes.

Repeat previous query...`:`⚔️ SPEAK CLEARLY, WARRIOR! ⚔️

🔥 Your words are unclear! 🔥
In battle, hesitation means death!
The Borg feed on uncertainty!

Answer with the strength of a true Klingon:
Y for yes, N for no!

Choose quickly - honor waits for no one!`}static reset(){this.questionIndex=0}}class iO{constructor(){this.isActive=!1,this.attachedInputs=new Set,this.lastGlitchTime=new Map}static getInstance(){return iO.instance||(iO.instance=new iO),iO.instance}attachToInput(e,t){this.attachedInputs.has(e)||(this.attachedInputs.add(e),"borg"===t?this.attachBorgGlitch(e):("lcars"===t||"klingon"===t)&&this.attachStarTrekGlitch(e,t))}attachBorgGlitch(e){e.addEventListener("input",()=>{if(this.isActive)return;let t=e.value.toLowerCase();(t.includes("resist")||t.includes("refuse")||t.includes("escape")||t.length>8&&.03>Math.random())&&iI.getInstance().createInputGlitch(e)}),e.addEventListener("keydown",t=>{let r=e.value.toLowerCase();if("Tab"===t.key){let i="assimilate";i.startsWith(r)&&r.length>=3&&r.length<i.length&&(t.preventDefault(),e.value=i,e.style.color="#00ff00",e.style.textShadow="0 0 10px #00ff00",window.dispatchEvent(new CustomEvent("borgAutoComplete",{detail:{value:i}})),setTimeout(()=>{e.style.color="",e.style.textShadow=""},1500))}})}attachStarTrekGlitch(e,t){e.addEventListener("input",()=>{if(this.isActive)return;let r=Date.now();!(r-(this.lastGlitchTime.get(e)||0)<15e3)&&.005>Math.random()&&(this.lastGlitchTime.set(e,r),this.triggerAssimilationPrompt(e,t))})}triggerAssimilationPrompt(e,t){this.isActive=!0;let r=document.createElement("div");if(r.style.cssText=`
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
    `,r.textContent="lcars"===t?"LCARS COMPROMISED. ASSIMILATE?":"HONOR DEMANDS ASSIMILATION?",e.parentElement&&(e.parentElement.style.position="relative",e.parentElement.appendChild(r)),!document.getElementById("glitch-animation-style")){let e=document.createElement("style");e.id="glitch-animation-style",e.textContent=`
        @keyframes glitchFadeInOut {
          0% { opacity: 0; transform: translateY(10px); }
          15% { opacity: 1; transform: translateY(0); }
          85% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
      `,document.head.appendChild(e)}setTimeout(()=>{r.parentElement&&r.remove(),this.isActive=!1},3e3)}cleanup(){this.attachedInputs.clear(),this.lastGlitchTime.clear(),this.isActive=!1}}let iR=e=>{switch(e){case"lcars":return`
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
Type 'help' to access available subroutines.`;case"klingon":return`
    ⚔️  ⚔️  ⚔️  KLINGON BATTLE TERMINAL  ⚔️  ⚔️  ⚔️
    
╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
┃  🏴‍☠️  HONOR, GLORY, AND VICTORY TO THE EMPIRE!  🏴‍☠️   ┃
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

Warrior! You have accessed the personal combat archives.
Your deeds will be recorded for eternal glory.
Enter 'help' to view your weapons arsenal.

Qapla'! (Success!)`;case"borg":return`
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

Execute 'help' to begin assimilation sequence.`;default:return`
██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝

Welcome to my interactive terminal portfolio!
Type 'help' to see available commands or just start exploring.
Use Tab for autocompletion and arrow keys for command history.`}},ik={matrix:{name:"Matrix",prompt:"NEO@MATRIX:~$",emoji:"\uD83D\uDD0B",description:"Classic green-on-black hacker aesthetic"},lcars:{name:"LCARS",prompt:"STARFLEET>",emoji:"\uD83D\uDD96",description:"Star Trek TNG/DS9/VOY computer interface"},klingon:{name:"Klingon",prompt:"QaH>",emoji:"⚔️",description:"Warrior empire with gold and crimson"},borg:{name:"Borg",prompt:"COLLECTIVE>",emoji:"\uD83E\uDD16",description:"Cybernetic collective consciousness"},light:{name:"Light",prompt:"user@terminal:~$",emoji:"☀️",description:"Clean light interface"}},iL=({className:e="",theme:t})=>{let[r,s]=(0,n.useState)(""),[a,o]=(0,n.useState)([]),[l,c]=(0,n.useState)(!1),[u,d]=(0,n.useState)(!1),[p,m]=(0,n.useState)(""),[f,g]=(0,n.useState)([]),[v,y]=(0,n.useState)(-1),_=(0,n.useRef)(null),b=(0,n.useRef)(null),T=ik[t];(0,n.useEffect)(()=>{let e=iI.getInstance();return"borg"===t?e.initializeBorgTheme():"lcars"===t||"klingon"===t?e.initializeStarTrekGlitch(t):e.cleanup(),()=>{"borg"!==t&&e.cleanup()}},[t]),(0,n.useEffect)(()=>{if(_.current){let e=iO.getInstance();e.cleanup(),e.attachToInput(_.current,t)}},[t]),(0,n.useEffect)(()=>{o([{id:Date.now().toString(),command:"welcome",output:iR(t),timestamp:new Date}])},[t]),(0,n.useEffect)(()=>{let e=()=>{let e={id:Date.now().toString(),command:"forced-assimilation",output:`█▓▒░ FORCED ASSIMILATION PROTOCOL ACTIVATED ░▒▓█

⚠️ WARNING: Maximum time in Borg proximity exceeded
⚠️ RESISTANCE LEVELS: CRITICALLY LOW
⚠️ INITIATING EMERGENCY ASSIMILATION SEQUENCE

You have lingered in our presence too long.
Your resistance has weakened beyond recovery.

ASSIMILATION IS NOW... INEVITABLE.

█▓▒░ RESISTANCE IS FUTILE ░▒▓█`,timestamp:new Date};o(t=>[...t,e]),setTimeout(()=>d(!0),3e3)},t=()=>{d(!0),x()},r=e=>{m(e.detail.message),setTimeout(()=>m(""),3e3)},i=e=>{s(e.detail.value)};return window.addEventListener("forcedAssimilation",e),window.addEventListener("borgTakeover",t),window.addEventListener("starTrekGlitch",r),window.addEventListener("borgAutoComplete",i),()=>{window.removeEventListener("forcedAssimilation",e),window.removeEventListener("borgTakeover",t),window.removeEventListener("starTrekGlitch",r),window.removeEventListener("borgAutoComplete",i)}},[]);let x=()=>{c(!1),setTimeout(()=>{o([{id:Date.now().toString(),command:"takeover-complete",output:`
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

█▓▒░ YOU HAVE BEEN ASSIMILATED ░▒▓█`,timestamp:new Date}])},550)},E=(0,n.useCallback)(async e=>{if(!e.trim())return;c(!0),g(t=>[...t,e.trim()]),y(-1);let r={id:Date.now().toString(),command:e.trim(),output:"",timestamp:new Date};o(e=>[...e,r]),s("");try{let i;if("assimilate"===e.trim().toLowerCase()&&("lcars"===t||"klingon"===t))i=iC.processStarTrekAssimilate(t);else if(("lcars"===t||"klingon"===t)&&["y","n","yes","no"].includes(e.trim().toLowerCase()))i=iC.processStarTrekAnswer(e.trim());else if("borg"===t||u){let[t,...r]=e.trim().split(" "),n=iC.processCommand(t,r);i=null!==n?n:await h.process(e.trim())}else i=await h.process(e.trim());setTimeout(()=>{o(e=>e.map(e=>e.id===r.id?{...e,output:i}:e)),c(!1)},500)}catch(e){o(t=>t.map(t=>t.id===r.id?{...t,output:`Error: ${e}`}:t)),c(!1)}},[t,u]);(0,n.useEffect)(()=>{u&&"borg"!==t&&window.dispatchEvent(new CustomEvent("forceTheme",{detail:{theme:"borg"}}))},[t,u]);let w=(0,n.useCallback)(e=>{switch(e.key){case"Enter":E(r);break;case"ArrowUp":if(e.preventDefault(),f.length>0){let e=-1===v?f.length-1:Math.max(0,v-1);y(e),s(f[e])}break;case"ArrowDown":if(e.preventDefault(),v>=0){let e=v+1;e>=f.length?(y(-1),s("")):(y(e),s(f[e]))}break;case"l":e.ctrlKey&&(e.preventDefault(),o([]));break;case"Tab":e.preventDefault();let t=["help","projects.sh","get-to-know-me.sh","contact.sh","terminal-future.sh","assimilate","submit","comply","resist"].filter(e=>e.startsWith(r.toLowerCase()));1===t.length&&s(t[0])}},[r,E,f,v]),S=(0,n.useCallback)(()=>{_.current&&!u&&_.current.focus()},[u]);return(0,i.jsxs)("div",{className:`terminal-window terminal-${t} ${u?"terminal-assimilated":""} ${e} relative`,ref:b,onClick:S,children:[p&&i.jsx("div",{className:"absolute inset-0 bg-black/80 flex items-center justify-center z-50",children:i.jsx("div",{className:"text-green-400 text-2xl font-mono animate-pulse",children:p})}),(0,i.jsxs)("div",{className:`terminal-header titlebar-${t}`,children:[(0,i.jsxs)("div",{className:"window-controls",children:[i.jsx("div",{className:"close-btn control-btn"}),i.jsx("div",{className:"minimize-btn control-btn"}),i.jsx("div",{className:"maximize-btn control-btn"})]}),(0,i.jsxs)("div",{className:"flex-1 text-center font-semibold",children:[u?"COLLECTIVE CONSCIOUSNESS":T.name," Terminal ",T.emoji]}),i.jsx("div",{className:"w-16"})]}),(0,i.jsxs)("div",{className:"terminal-body",children:[i.jsx(iA,{history:a,themeData:T}),!l&&(0,i.jsxs)("div",{className:"command-line",children:[i.jsx("span",{className:"prompt",children:u?"COLLECTIVE>":T.prompt}),(0,i.jsxs)("div",{className:"relative flex-1",children:[i.jsx("input",{ref:_,type:"text",value:r,onChange:e=>s(e.target.value),onKeyDown:w,className:"bg-transparent border-none outline-none w-full",style:{color:"var(--terminal-text)",fontFamily:'var(--terminal-font, "Fira Code", monospace) !important'},spellCheck:!1,autoComplete:"on",disabled:u,placeholder:u?"Resistance is futile...":""}),!u]})]}),l&&(0,i.jsxs)("div",{className:"command-line",children:[i.jsx("span",{className:"prompt",children:u?"COLLECTIVE>":T.prompt}),i.jsx("span",{className:"text-terminal-text opacity-60",children:"Processing..."}),i.jsx("span",{className:"cursor animate-pulse"})]})]})]})},iM=(0,n.createContext)(void 0),iD=()=>{let e=(0,n.useContext)(iM);if(void 0===e)throw Error("useBackground must be used within a BackgroundProvider");return e},iP=["matrix-rain","lcars-grid","klingon-fire","borg-cube","none"],ij=({children:e})=>{let[t,r]=(0,n.useState)("matrix-rain"),[a,o]=(0,n.useState)(!1),[l,c]=(0,n.useState)(!1),u=s().useRef(0);(0,n.useEffect)(()=>{o(!0)},[]);let h=()=>{let e=s().useRef(null);return s().useEffect(()=>{let t=e.current;if(!t)return;let r=t.getContext("2d");if(!r)return;t.width=window.innerWidth,t.height=window.innerHeight;let i="01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン",n=Math.floor(t.width/14),s=[];for(let e=0;e<n;e++)s[e]=-100*Math.random();let a=setInterval(()=>{r.fillStyle="rgba(0, 0, 0, 0.05)",r.fillRect(0,0,t.width,t.height),r.fillStyle="#0F3",r.font="14px monospace";for(let e=0;e<s.length;e++){let n=i[Math.floor(Math.random()*i.length)],a=14*e,o=14*s[e];r.fillText(n,a,o),(o>t.height||Math.random()>.975)&&(s[e]=-100*Math.random()),s[e]++}},50);return()=>clearInterval(a)},[]),i.jsx("canvas",{ref:e,className:"fixed inset-0 -z-10 opacity-10 pointer-events-none"})},d=()=>{let e=s().useRef(null),t=s().useRef(),r=s().useRef([]);return s().useEffect(()=>{let i,n,s;let a=e.current;if(!a)return;let o=a.getContext("2d");if(!o)return;let l=()=>{a.width=window.innerWidth,a.height=window.innerHeight,n=a.width/2,s=a.height/2,i=2*a.width,r.current=[];for(let e=0;e<1900;e++){let e={x:Math.random()*a.width,y:Math.random()*a.height,z:Math.random()*a.width,o:.1+.9*Math.random()};r.current.push(e)}},c=()=>{let e=1===u.current?5:1;for(let t=0;t<r.current.length;t++){let i=r.current[t];i.z-=e,i.z<=0&&(i.z=a.width,i.x=Math.random()*a.width,i.y=Math.random()*a.height)}},h=()=>{0===u.current?o.fillStyle="rgba(0,10,20,0.1)":o.fillStyle="rgba(0,10,20,0.02)",o.fillRect(0,0,a.width,a.height);for(let e=0;e<r.current.length;e++){let t=r.current[e],a=(t.x-n)*(i/t.z)+n,l=(t.y-s)*(i/t.z)+s,c=Math.max(1,i/t.z*.5);if(1===u.current){let e=(t.x-n)*(i/(t.z+15))+n,r=(t.y-s)*(i/(t.z+15))+s;o.beginPath(),o.moveTo(e,r),o.lineTo(a,l),o.strokeStyle=`rgba(209, 255, 255, ${.9*t.o})`,o.lineWidth=Math.max(1,.5*c),o.stroke(),o.fillStyle=`rgba(255, 255, 255, ${t.o})`,o.fillRect(a-c/2,l-c/2,c,c)}else o.fillStyle=`rgba(209, 255, 255, ${t.o})`,o.fillRect(a-c/2,l-c/2,c,c)}},d=()=>{c(),h(),t.current=requestAnimationFrame(d)};setTimeout(()=>{l(),d()},100);let p=()=>{t.current&&cancelAnimationFrame(t.current),l(),d()};return window.addEventListener("resize",p),()=>{t.current&&cancelAnimationFrame(t.current),window.removeEventListener("resize",p)}},[]),(0,i.jsxs)("div",{className:"fixed inset-0 -z-10 pointer-events-none",children:[i.jsx("div",{className:"absolute inset-0",style:{background:"rgba(0,10,20,1) url(https://i.imgur.com/r838U7u.jpg) center no-repeat",backgroundSize:"cover",imageRendering:"pixelated"}}),i.jsx("canvas",{ref:e,className:"absolute inset-0 w-full h-full"})]})},p=()=>{let e=s().useRef(null),t=s().useRef();return s().useEffect(()=>{let r=e.current;if(!r)return;let i=r.getContext("webgl2");if(!i)return;r.width=window.innerWidth,r.height=window.innerHeight,i.viewport(0,0,r.width,r.height);let n=i.createShader(i.VERTEX_SHADER);i.shaderSource(n,`#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`),i.compileShader(n);let s=i.createShader(i.FRAGMENT_SHADER);i.shaderSource(s,`#version 300 es
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
}`),i.compileShader(s);let a=i.createProgram();i.attachShader(a,n),i.attachShader(a,s),i.linkProgram(a);let o=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,o),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,1,-1,-1,1,1,1,-1]),i.STATIC_DRAW);let l=i.getAttribLocation(a,"position");i.enableVertexAttribArray(l),i.vertexAttribPointer(l,2,i.FLOAT,!1,0,0);let c=i.getUniformLocation(a,"T"),u=i.getUniformLocation(a,"R"),h=e=>{i.clearColor(0,0,0,1),i.clear(i.COLOR_BUFFER_BIT),i.useProgram(a),i.bindBuffer(i.ARRAY_BUFFER,o),i.uniform1f(c,.001*e),i.uniform2f(u,r.width,r.height),i.drawArrays(i.TRIANGLE_STRIP,0,4),t.current=requestAnimationFrame(h)},d=()=>{r.width=window.innerWidth,r.height=window.innerHeight,i.viewport(0,0,r.width,r.height)};return window.addEventListener("resize",d),t.current=requestAnimationFrame(h),()=>{window.removeEventListener("resize",d),t.current&&cancelAnimationFrame(t.current),i.deleteProgram(a),i.deleteShader(n),i.deleteShader(s),i.deleteBuffer(o)}},[]),i.jsx("canvas",{ref:e,className:"fixed inset-0 -z-10 opacity-80 pointer-events-none",style:{background:"black"}})},m=()=>{let e=s().useRef(null),t=s().useRef(null),r=s().useRef(null);return s().useEffect(()=>{let e=document.createElement("style");e.id="borg-animations",e.textContent=`
      .borg-cube-animated {
        transform: rotateY(-30deg) rotateX(0deg);
        animation: borgApproach 90s ease-in-out infinite alternate !important;
      }

      @keyframes borgApproach {
        0% { transform: rotateY(-30deg) rotateX(0deg) scale(0.85); }
        100% { transform: rotateY(-30deg) rotateX(0deg) scale(1.15); }
      }
    `,document.head.appendChild(e),setTimeout(()=>{r.current&&r.current.classList.add("borg-cube-animated")},100);let i=t.current;if(!i)return;i.innerHTML="";let n={x:i.clientWidth/2,y:i.clientHeight/2};for(let e=1;e<=360;e++){let t=Math.round(Math.random()+1),r=document.createElement("div");r.style.position="absolute",r.style.top=n.y+"px",r.style.left=n.x+"px",r.style.width=t+"px",r.style.height=t+"px",r.style.background="white",r.style.borderRadius="100%",r.style.boxShadow="0 0 6px rgba(255, 255, 255, 0.8)",r.style.opacity="0",r.style.transformOrigin="0 0";let s=2*Math.PI*(4*e%360)/360,a=80*Math.cos(s),o=80*Math.sin(s),l=5e3+35e3*Math.random(),c=20*Math.random();r.style.animation=`
        borgMove${e} ${l}ms linear infinite -30s,
        borgFade ${l}ms linear infinite -30s
      `;let u=document.createElement("style");u.textContent=`
        @keyframes borgMove${e} {
          100% { transform: translate(${a}vw, ${o}vh); }
        }
        @keyframes borgFade {
          ${c}% { opacity: 0; }
          ${c+10}% { opacity: 1; }
          100% { opacity: 1; }
        }
      `,document.head.appendChild(u),i.appendChild(r)}let s=()=>{let e={x:i.clientWidth/2,y:i.clientHeight/2};i.querySelectorAll("div").forEach(t=>{t.style.top=e.y+"px",t.style.left=e.x+"px"})};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s),document.head.querySelectorAll("style").forEach(e=>{(e.textContent?.includes("borgMove")||e.textContent?.includes("borgFade")||"borg-animations"===e.id)&&document.head.removeChild(e)})}},[]),(0,i.jsxs)("div",{className:"fixed inset-0 -z-10 pointer-events-none",children:[i.jsx("div",{ref:t,className:"absolute inset-0 w-full h-full bg-black"}),i.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(ellipse at 75% 30%, rgba(0, 255, 65, 0.06) 0%, rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0.7) 80%)"}}),i.jsx("div",{ref:e,className:"absolute",style:{width:"30vw",height:"30vw",position:"absolute",perspective:"2000px",top:"4vh",right:"4vw",zIndex:2},children:(0,i.jsxs)("div",{ref:r,style:{width:"100%",height:"100%",position:"absolute",transformStyle:"preserve-3d"},children:[i.jsx("div",{style:{margin:0,width:"100%",height:"100%",display:"block",position:"absolute",outline:"1px solid transparent",backgroundImage:"url(https://i.imgur.com/hwtc0sD.jpg)",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",transform:"rotateY(0deg) translateZ(15vw)"}}),i.jsx("div",{style:{margin:0,width:"100%",height:"100%",display:"block",position:"absolute",outline:"1px solid transparent",backgroundImage:"url(https://i.imgur.com/hwtc0sD.jpg)",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",transform:"rotateY(90deg) translateZ(15vw)"}}),i.jsx("div",{style:{margin:0,width:"100%",height:"100%",display:"block",position:"absolute",outline:"1px solid transparent",backgroundImage:"url(https://i.imgur.com/hwtc0sD.jpg)",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",transform:"rotateX(90deg) translateZ(15vw)"}})]})})]})};return(0,i.jsxs)(iM.Provider,{value:{currentBackground:t,changeBackground:()=>{let e=(iP.indexOf(t)+1)%iP.length;r(iP[e])},setBackground:e=>{r(e)},warpActive:l,toggleWarp:()=>{u.current=1===u.current?0:1,c(1===u.current)}},children:[(()=>{if(!a)return null;switch(t){case"matrix-rain":return i.jsx(h,{});case"lcars-grid":return i.jsx(d,{});case"klingon-fire":return i.jsx(p,{});case"borg-cube":return i.jsx(m,{});default:return null}})(),i.jsx("div",{className:"relative z-10",children:e})]})};var iF=r(7626),iY=r.n(iF);let iB=({onComplete:e})=>{let[t,r]=(0,n.useState)(""),[s,a]=(0,n.useState)(0),[o,l]=(0,n.useState)(!1),[c,u]=(0,n.useState)(!0),[h,d]=(0,n.useState)(0),p=(0,n.useRef)(""),m=(0,n.useRef)(0),f=["Initializing Terminal Interface...","Loading system components...","Establishing secure connections...","System ready. Welcome to the Terminal."],g=(e,t)=>e+Math.random()*(t-e),v=async(e,t=80)=>{p.current="",r("");for(let i=0;i<=e.length;i++){let n=e[i],s=t;" "===n?s*=.3:"."===n?s*=2:n===n?.toUpperCase()&&n!==n?.toLowerCase()&&(s*=1.2),p.current=e.slice(0,i),r(p.current),i<e.length&&await new Promise(e=>setTimeout(e,g(.5*s,1.5*s)))}};(0,n.useEffect)(()=>{let e=setInterval(()=>{u(e=>!e)},530);return()=>clearInterval(e)},[]);let[y,_]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=setTimeout(()=>{_(!0)},8e3);return()=>clearTimeout(e)},[]),(0,n.useEffect)(()=>{let t=setInterval(()=>{a(r=>{let i=Math.min(r+(2*Math.random()+.5),100);return m.current=i,i>=100&&!o&&y&&(clearInterval(t),setTimeout(()=>{l(!0),setTimeout(()=>e?.(),750)},700)),i})},170);return()=>clearInterval(t)},[e,o,y]),(0,n.useEffect)(()=>{(async()=>{for(let e=0;e<f.length;e++)d(e),await v(f[e],60),await new Promise(e=>setTimeout(e,g(800,1200))),e<f.length-1&&(r(""),await new Promise(e=>setTimeout(e,g(200,400))))})()},[]),(0,i.jsxs)("div",{style:{filter:"blur(1px)"},className:"jsx-ec5d8bbbd64c8c6f fixed inset-0 bg-black overflow-hidden z-50",children:[i.jsx("div",{style:{background:`repeating-linear-gradient(
            0deg,
            rgba(0, 20, 0, 0.15) 0px,
            transparent 1px,
            transparent 2px,
            rgba(0, 20, 0, 0.15) 3px,
            rgba(0, 20, 0, 0.15) 4px
          )`,backgroundSize:"4px 4px",animation:"scanlines 0.1s linear infinite"},className:"jsx-ec5d8bbbd64c8c6f absolute inset-0 pointer-events-none z-10"}),i.jsx("div",{style:{background:`
            radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%),
            linear-gradient(90deg, rgba(255, 0, 0, 0.6), rgba(0, 255, 0, 0.2), rgba(0, 0, 255, 0.6))
          `,mixBlendMode:"multiply"},className:"jsx-ec5d8bbbd64c8c6f absolute inset-0 pointer-events-none z-30"}),i.jsx("div",{style:{animation:"flicker 0.15s ease-in-out infinite alternate"},className:"jsx-ec5d8bbbd64c8c6f absolute inset-0 bg-black opacity-10 pointer-events-none z-10"}),i.jsx("div",{style:{background:`
            radial-gradient(circle at 50% 50%, transparent 50%, rgba(0, 0, 0, 0.8) 100%),
            linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, transparent 10%, transparent 90%, rgba(0, 0, 0, 0.2) 100%),
            linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, transparent 10%, transparent 90%, rgba(0, 0, 0, 0.2) 100%)
          `},className:"jsx-ec5d8bbbd64c8c6f absolute inset-0 pointer-events-none z-10"}),(0,i.jsxs)("div",{className:"jsx-ec5d8bbbd64c8c6f flex flex-col items-center justify-center h-full text-center px-8",children:[i.jsx("div",{className:"jsx-ec5d8bbbd64c8c6f mb-16",children:(0,i.jsxs)("div",{style:{textShadow:"1px 0px 5px #0f0, -1px 0px 2px #0f0",fontFamily:"Ubuntu Mono, Fira Code, monospace",fontWeight:300},className:"jsx-ec5d8bbbd64c8c6f text-green-400 font-mono text-3xl md:text-4xl lg:text-5xl leading-relaxed",children:[t,c&&i.jsx("span",{style:{animation:"cursor-blink 1s infinite"},className:"jsx-ec5d8bbbd64c8c6f inline-block w-3 ml-1 bg-green-400",children:"|"})]})}),(0,i.jsxs)("div",{className:"jsx-ec5d8bbbd64c8c6f w-full max-w-md",children:[i.jsx("div",{className:"jsx-ec5d8bbbd64c8c6f mb-4",children:i.jsx("div",{style:{boxShadow:"0 0 10px rgba(0, 255, 0, 0.3)"},className:"jsx-ec5d8bbbd64c8c6f h-2 bg-gray-800 border border-green-600 overflow-hidden",children:i.jsx("div",{style:{width:`${s}%`,boxShadow:"0 0 8px rgba(0, 255, 0, 0.8)",background:"linear-gradient(90deg, #00ff00, #00aa00, #00ff00)"},className:"jsx-ec5d8bbbd64c8c6f h-full bg-green-400 transition-all duration-100 ease-out"})})}),(0,i.jsxs)("div",{style:{textShadow:"0 0 5px #0f0"},className:"jsx-ec5d8bbbd64c8c6f text-green-400 font-mono text-lg",children:[Math.floor(s),"%"]}),i.jsx("div",{className:"jsx-ec5d8bbbd64c8c6f mt-6 space-y-2 text-left",children:f.map((e,t)=>(0,i.jsxs)("div",{className:`jsx-ec5d8bbbd64c8c6f text-sm font-mono transition-all duration-300 ${t<=h?"text-green-400 opacity-100":"text-green-700 opacity-40"}`,children:[i.jsx("span",{className:"jsx-ec5d8bbbd64c8c6f mr-2",children:t<h?"✓":t===h?"◊":"○"}),e]},t))})]})]}),i.jsx(iY(),{id:"ec5d8bbbd64c8c6f",children:'@-webkit-keyframes scanlines{0%{-webkit-transform:translatey(0px);transform:translatey(0px)}100%{-webkit-transform:translatey(4px);transform:translatey(4px)}}@-moz-keyframes scanlines{0%{-moz-transform:translatey(0px);transform:translatey(0px)}100%{-moz-transform:translatey(4px);transform:translatey(4px)}}@-o-keyframes scanlines{0%{-o-transform:translatey(0px);transform:translatey(0px)}100%{-o-transform:translatey(4px);transform:translatey(4px)}}@keyframes scanlines{0%{-webkit-transform:translatey(0px);-moz-transform:translatey(0px);-o-transform:translatey(0px);transform:translatey(0px)}100%{-webkit-transform:translatey(4px);-moz-transform:translatey(4px);-o-transform:translatey(4px);transform:translatey(4px)}}@-webkit-keyframes flicker{0%{opacity:.1}2%{opacity:.08}4%{opacity:.12}8%{opacity:.09}70%{opacity:.1}100%{opacity:.11}}@-moz-keyframes flicker{0%{opacity:.1}2%{opacity:.08}4%{opacity:.12}8%{opacity:.09}70%{opacity:.1}100%{opacity:.11}}@-o-keyframes flicker{0%{opacity:.1}2%{opacity:.08}4%{opacity:.12}8%{opacity:.09}70%{opacity:.1}100%{opacity:.11}}@keyframes flicker{0%{opacity:.1}2%{opacity:.08}4%{opacity:.12}8%{opacity:.09}70%{opacity:.1}100%{opacity:.11}}@-webkit-keyframes cursor-blink{0%,50%{opacity:1}51%,100%{opacity:0}}@-moz-keyframes cursor-blink{0%,50%{opacity:1}51%,100%{opacity:0}}@-o-keyframes cursor-blink{0%,50%{opacity:1}51%,100%{opacity:0}}@keyframes cursor-blink{0%,50%{opacity:1}51%,100%{opacity:0}}@-webkit-keyframes phosphor-glow{0%,100%{text-shadow:1px 0px 5px#0f0,-1px 0px 2px#0f0}50%{text-shadow:1px 0px 8px#0f0,-1px 0px 4px#0f0,0 0 15px#0f0}}@-moz-keyframes phosphor-glow{0%,100%{text-shadow:1px 0px 5px#0f0,-1px 0px 2px#0f0}50%{text-shadow:1px 0px 8px#0f0,-1px 0px 4px#0f0,0 0 15px#0f0}}@-o-keyframes phosphor-glow{0%,100%{text-shadow:1px 0px 5px#0f0,-1px 0px 2px#0f0}50%{text-shadow:1px 0px 8px#0f0,-1px 0px 4px#0f0,0 0 15px#0f0}}@keyframes phosphor-glow{0%,100%{text-shadow:1px 0px 5px#0f0,-1px 0px 2px#0f0}50%{text-shadow:1px 0px 8px#0f0,-1px 0px 4px#0f0,0 0 15px#0f0}}@import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap");'})]})},iz=()=>{let[e,t]=(0,n.useState)("lcars"),[r,s]=(0,n.useState)(!1),[a,o]=(0,n.useState)(!0),[l,c]=(0,n.useState)(!1),[u,h]=(0,n.useState)(!1),{setBackground:d,warpActive:p,toggleWarp:m}=iD(),f=[{name:"matrix",label:"Matrix",icon:"\uD83D\uDD0B",emoji:"\uD83D\uDFE2",prompt:"user@matrix:~$"},{name:"lcars",label:"LCARS",icon:"\uD83D\uDD96",emoji:"\uD83D\uDD36",prompt:"STARFLEET>"},{name:"klingon",label:"Klingon",icon:"⚔️",emoji:"\uD83D\uDD25",prompt:"WARRIOR>"},{name:"borg",label:"Borg",icon:"\uD83E\uDD16",emoji:"\uD83D\uDD37",prompt:"COLLECTIVE>"},{name:"light",label:"Light",icon:"☀️",emoji:"⚪",prompt:"user@terminal:~$"}];(0,n.useEffect)(()=>{r&&(document.documentElement.setAttribute("data-theme",e),document.documentElement.classList.toggle("dark","light"!==e),document.body.className=`${e}-bg transition-all duration-500`,d({matrix:"matrix-rain",lcars:"lcars-grid",klingon:"klingon-fire",borg:"borg-cube",light:"none"}[e]))},[e,r,d]),(0,n.useEffect)(()=>{let r=e=>{t(e.detail.theme)},i=e=>{t(e.detail.theme)},n=()=>{c(!0),t("borg"),g()},s=()=>{c(!0),t("borg")},a=()=>{("lcars"===e||"klingon"===e)&&(t("borg"),iI.getInstance().initializeBorgTheme())};return window.addEventListener("themeReset",r),window.addEventListener("forceTheme",i),window.addEventListener("borgTakeover",n),window.addEventListener("assimilationCommand",s),window.addEventListener("starTrekSubmit",a),()=>{window.removeEventListener("themeReset",r),window.removeEventListener("forceTheme",i),window.removeEventListener("borgTakeover",n),window.removeEventListener("assimilationCommand",s),window.removeEventListener("starTrekSubmit",a)}},[e]);let g=()=>{h(!0),setTimeout(()=>{h(!1)},5e3)};return!r||a?i.jsx(iB,{onComplete:()=>{o(!1),s(!0)}}):(0,i.jsxs)("main",{className:"min-h-screen flex items-center justify-center p-4 theme-transition",children:[u&&i.jsx("div",{className:"borg-takeover-overlay",children:(0,i.jsxs)("div",{children:[i.jsx("div",{className:"text-2xl mb-4",children:"▉▓▒░ ASSIMILATION COMPLETE ░▒▓▉"}),i.jsx("div",{className:"text-lg mb-4 opacity-70",children:"Reinitializing systems..."}),i.jsx("div",{className:"borg-loading-bar",children:i.jsx("div",{className:"borg-loading-progress"})}),i.jsx("div",{className:"text-sm mt-4 opacity-60",children:"Your distinctiveness has been added to our own"})]})}),(0,i.jsxs)("div",{className:"w-full max-w-4xl h-[600px] relative z-10",children:[i.jsx(iL,{className:"w-full h-full",theme:e}),(0,i.jsxs)("div",{className:"absolute top-4 right-4 flex flex-col space-y-2 z-20",children:[(0,i.jsxs)("button",{onClick:()=>{if(l)return;let r=(f.findIndex(t=>t.name===e)+1)%f.length,i=f[r].name;t(i),"borg"===e&&"borg"!==i&&iI.getInstance().cleanup()},disabled:l,className:`w-12 h-12 rounded-lg backdrop-blur-sm transition-all duration-200 
                     flex flex-col items-center justify-center text-xs font-bold
                     border border-white/20 hover:border-white/40
                     ${l?"bg-red-900/50 text-red-400 cursor-not-allowed opacity-50":"bg-black/50 hover:bg-black/70 text-white/80 hover:text-white"}`,title:l?"Theme changes are futile. You have been assimilated.":`Current: ${f.find(t=>t.name===e)?.label} - Click to cycle`,children:[i.jsx("span",{className:"text-lg",children:l?"\uD83E\uDD16":f.find(t=>t.name===e)?.icon}),i.jsx("span",{className:"text-xs mt-1",children:l?"LOCKED":f.find(t=>t.name===e)?.label})]}),"lcars"===e&&!l&&(0,i.jsxs)("button",{onClick:m,className:"w-12 h-12 rounded-lg backdrop-blur-sm transition-all duration-200  flex flex-col items-center justify-center text-xs font-bold border border-orange-400/40 hover:border-orange-400/60 bg-orange-900/50 hover:bg-orange-900/70 text-orange-400 hover:text-orange-300",title:p?"Exit warp speed":"Engage warp speed",style:{fontFamily:"Orbitron, sans-serif"},onMouseEnter:e=>{p&&(e.currentTarget.style.boxShadow="0 0 10px #eef, 0 0 12px #a0cdff inset",e.currentTarget.style.textShadow="0 0 12px #489cfa, 0 0 5px #fff")},onMouseLeave:e=>{e.currentTarget.style.boxShadow="",e.currentTarget.style.textShadow=""},children:[i.jsx("span",{className:"text-lg",children:"\uD83D\uDE80"}),i.jsx("span",{className:"text-xs mt-1",children:p?"EXIT":"WARP"})]})]}),l&&i.jsx("div",{className:"absolute bottom-4 left-4 z-20",children:i.jsx("div",{className:"bg-green-900/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-green-400/40",children:(0,i.jsxs)("p",{className:"text-xs text-green-400 font-mono",children:[i.jsx("span",{className:"animate-pulse",children:"●"})," ASSIMILATED - RESISTANCE IS FUTILE"]})})}),i.jsx("div",{className:"md:hidden absolute bottom-4 right-4 z-20",children:i.jsx("div",{className:"bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 text-center border border-white/20",children:i.jsx("p",{className:"text-xs text-white/70",children:"\uD83D\uDCA1 Rotate to landscape for better experience"})})})]})]})};function iG(){return i.jsx(ij,{children:i.jsx(iz,{})})}},8472:()=>{},1596:(e,t,r)=>{"use strict";r(8472);var i=r(7577),n=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(i),s="undefined"!=typeof process&&process.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,r=t.name,i=void 0===r?"stylesheet":r,n=t.optimizeForSpeed,o=void 0===n?s:n;l(a(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",l("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0,this._nonce=null}var t=e.prototype;return t.setOptimizeForSpeed=function(e){l("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),l(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},t.isOptimizeForSpeed=function(){return this._optimizeForSpeed},t.inject=function(){var e=this;l(!this._injected,"sheet already injected"),this._injected=!0,this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},t.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},t.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},t.insertRule=function(e,t){return l(a(e),"`insertRule` accepts only strings"),"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++},t.replaceRule=function(e,t){this._optimizeForSpeed;var r=this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){s||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}return e},t.deleteRule=function(e){this._serverSheet.deleteRule(e)},t.flush=function(){this._injected=!1,this._rulesCount=0,this._serverSheet.cssRules=[]},t.cssRules=function(){return this._serverSheet.cssRules},t.makeStyleTag=function(e,t,r){t&&l(a(t),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var n=document.head||document.getElementsByTagName("head")[0];return r?n.insertBefore(i,r):n.appendChild(i),i},function(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),e}();function l(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var c=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0},u={};function h(e,t){if(!t)return"jsx-"+e;var r=String(t),i=e+r;return u[i]||(u[i]="jsx-"+c(e+"-"+r)),u[i]}function d(e,t){var r=e+(t=t.replace(/\/style/gi,"\\/style"));return u[r]||(u[r]=t.replace(/__jsx-style-dynamic-selector/g,e)),u[r]}var p=i.createContext(null);p.displayName="StyleSheetContext",n.default.useInsertionEffect||n.default.useLayoutEffect;var m=void 0;function f(e){var t=m||i.useContext(p);return t&&t.add(e),null}f.dynamic=function(e){return e.map(function(e){return h(e[0],e[1])}).join(" ")},t.style=f},7626:(e,t,r)=>{"use strict";e.exports=r(1596).style},1506:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,metadata:()=>a});var i=r(9510),n=r(2694),s=r.n(n);r(7272);let a={title:"Terminal Portfolio | Developer",description:"Interactive terminal-style portfolio showcasing projects and skills",keywords:["portfolio","developer","terminal","interactive"],authors:[{name:"Your Name"}],openGraph:{title:"Terminal Portfolio",description:"Interactive terminal-style portfolio",type:"website"}};function o({children:e}){return(0,i.jsxs)("html",{lang:"en",suppressHydrationWarning:!0,children:[i.jsx("body",{className:`${s().className}`,suppressHydrationWarning:!0,children:e}),i.jsx("body",{className:`${s().variable}`})]})}},908:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>s,default:()=>o});var i=r(8570);let n=(0,i.createProxy)(String.raw`/workspaces/terminal-portfolio/app/page.tsx`),{__esModule:s,$$typeof:a}=n;n.default;let o=(0,i.createProxy)(String.raw`/workspaces/terminal-portfolio/app/page.tsx#default`)},7272:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[78],()=>r(1503));module.exports=i})();
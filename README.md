# 🖥️ Terminal Portfolio

An interactive, retro-futuristic terminal-style portfolio website featuring multiple sci-fi themes including Matrix, Star Trek LCARS, Klingon, and Borg aesthetics. Built with Next.js, TypeScript, and GSAP animations.

![Terminal Portfolio Demo](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 Multiple Themes
- **Matrix Theme**: Classic green-on-black hacker aesthetic with falling code rain
- **LCARS Theme**: Star Trek's iconic computer interface with orange/blue panels
- **Klingon Theme**: Warrior empire design with gold and crimson accents
- **Borg Theme**: Cybernetic collective consciousness with green glitch effects
- **Light Theme**: Clean, professional light mode for accessibility

### 🚀 Interactive Terminal
- Real-time command processing
- Command history navigation (↑/↓ arrow keys)
- Tab autocompletion (coming soon)
- Theme-aware responses and ASCII art
- Smooth animations powered by GSAP

### 🎭 Special Theme Features
- **Dynamic Backgrounds**: Each theme has unique animated backgrounds
- **Borg Assimilation System**: Interactive storyline with psychological adaptation
- **Star Trek Easter Eggs**: Special commands and responses for Trek themes
- **Glitch Effects**: Theme-specific visual effects and transitions

### 📱 Responsive Design
- Mobile-friendly interface
- Touch-optimized controls
- Landscape mode recommendations
- Adaptive font sizes and spacing

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS Modules
- **Animations**: GSAP (GreenSock Animation Platform)
- **Fonts**: Google Fonts (Orbitron, Cinzel, Share Tech Mono, Fira Code)
- **Deployment**: GitHub Pages (static export)

## 📋 Available Commands

```bash
help                    # Display all available commands
projects.sh             # View portfolio projects
get-to-know-me.sh      # Learn about background and skills
contact.sh             # Get contact information
matrix-future.sh       # AI-powered Q&A assistant
ls                     # List all available scripts
my-name-is <name>      # Personalize your terminal session
theme                  # Display current theme information
clear                  # Clear the terminal
history                # Show command history
```

### 🤖 Borg Theme Special Commands
When in Borg theme, try these special commands:
```bash
submit                 # Submit to the collective
comply                 # Show compliance
resist                 # Attempt resistance (futile)
assimilate            # Trigger full assimilation sequence
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/clearpath-dev/terminal-portfolio.git
cd terminal-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deploy to GitHub Pages

1. **Update `next.config.js`** with your repository name:
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',
  images: {
    unoptimized: true
  }
}
```

2. **Build and export**
```bash
npm run build
```

3. **Deploy to GitHub Pages**
```bash
# Push the out/ directory to gh-pages branch
npm run deploy
```

Or use the provided GitHub Actions workflow for automatic deployment.

## 🎨 Customization

### Adding New Commands

Edit `/data/commands.ts`:
```typescript
export const COMMANDS: Record<string, CommandFunction> = {
  'your-command': async (args: string[]) => {
    return `Your command output here`
  }
}
```

### Creating New Themes

1. Add theme variables in `/styles/themes.css`:
```css
.terminal-yourtheme {
  --terminal-bg: rgba(0, 0, 0, 0.95);
  --terminal-text: #yourcolor;
  --prompt-color: #yourcolor;
  /* ... more variables */
}
```

2. Add theme to configuration in `/app/page.tsx`:
```typescript
const themes = [
  // ... existing themes
  { name: 'yourtheme', label: 'Your Theme', icon: '🎨', emoji: '🟣', prompt: 'YOU>' }
]
```

### Modifying Background Effects

Edit `/Components/Providers/BackgroundProvider.tsx` to add new background animations.

## 📁 Project Structure

```
terminal-portfolio/
├── app/
│   ├── globals.css          # Global styles and theme imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page with theme management
├── Components/
│   ├── Terminal/
│   │   ├── Terminal.tsx           # Main terminal component
│   │   ├── CommandHistory.tsx     # Command history display
│   │   ├── CommandProcessor.ts    # Command execution logic
│   │   └── BorgTakeover.tsx       # Borg assimilation system
│   └── Providers/
│       ├── BackgroundProvider.tsx  # Animated backgrounds
│       └── ThemeProvider.tsx       # Theme management
├── data/
│   └── commands.ts          # Command definitions and logic
├── styles/
│   ├── terminal.css         # Base terminal styles
│   ├── themes.css           # Theme-specific styles
│   ├── star-trek-themes.css # Star Trek theme variations
│   └── borg-glitch.css      # Borg glitch effects
├── types/
│   └── terminal.ts          # TypeScript type definitions
└── public/                  # Static assets
```

## 🎯 Roadmap

- [ ] Add more interactive Easter eggs
- [ ] Implement tab autocompletion
- [ ] Add sound effects for different themes
- [ ] Create more background animations
- [ ] Add file system simulation
- [ ] Implement more AI-powered responses
- [ ] Add accessibility improvements
- [ ] Create mobile-specific gestures

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by classic terminal interfaces and sci-fi aesthetics
- Star Trek LCARS design from the Star Trek franchise
- Matrix digital rain effect
- Borg collective design from Star Trek
- Font families from Google Fonts

## 🐛 Known Issues

- Theme switching may briefly show unstyled content on slow connections
- Some mobile keyboards may interfere with terminal focus
- Background animations may impact performance on older devices

## 📧 Contact

Project Link: [https://github.com/clearpath-dev/terminal-portfolio](https://github.com/clearpath-dev/terminal-portfolio)

Live Demo: [https://clearpath-dev.github.io/terminal-portfolio](https://clearpath-dev.github.io/terminal-portfolio)

---

⭐ Star this repo if you find it useful!

Made with 💚 by [Your Name]

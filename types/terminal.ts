export interface CommandHistoryItem {
  id: string
  command: string
  output: string
  timestamp: Date
}

export interface TerminalState {
  history: CommandHistoryItem[]
  currentInput: string
  isProcessing: boolean
  theme: ThemeMode  // Changed from 'light' | 'dark' to use ThemeMode
  background: string
}

export interface CommandContext {
  args: string[]
  flags: Record<string, boolean>
  history: CommandHistoryItem[]
  theme: ThemeMode  // Changed from 'light' | 'dark' to use ThemeMode
}

export type Theme = 'matrix' | 'lcars' | 'klingon' | 'borg' | 'light'

export interface ThemeData {
  name: ThemeMode
  label: string
  icon: string
  emoji: string
  prompt: string
}

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  image?: string
  status: 'completed' | 'in-progress' | 'planned'
}

export interface ContactForm {
  name: string
  email: string
  message: string
  subject?: string
}

export type ThemeMode = Theme

export type BackgroundType = 
  | 'matrix-rain'
  | 'cyberpunk-city' 
  | 'geometric-pattern'
  | 'minimal-grid'
  | 'custom-gif'
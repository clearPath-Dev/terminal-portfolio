import { COMMANDS, CommandFunction } from '@/data/commands'

export class CommandProcessor {
  static async process(input: string): Promise<string> {
    const [command, ...args] = input.toLowerCase().split(' ')
    
    // Handle built-in commands first
    switch (command) {
      case 'clear':
        return 'CLEAR_TERMINAL'
        
      case 'history':
        return this.getHistory()
        
      case '':
        return ''
        
      default:
        // Check if command exists in our command registry
        const commandFn = COMMANDS[command as keyof typeof COMMANDS]
        if (commandFn) {
          return await commandFn(args)
        }
        
        // Command not found
        return `Command not found: ${command}
        
Available commands: ${Object.keys(COMMANDS).join(', ')}
Type 'help' for detailed information about each command.`
    }
  }
  
  private static getHistory(): string {
    // This would typically fetch from localStorage or state
    return `Command history:
1. help
2. ls
3. projects.sh
4. get-to-know-me.sh

Use arrow keys to navigate through command history.`
  }
  
  static getAutocompleteSuggestions(input: string): string[] {
    const commands = Object.keys(COMMANDS)
    return commands.filter(cmd => cmd.startsWith(input.toLowerCase()))
  }
  
  static validateCommand(command: string): boolean {
    return command in COMMANDS || ['clear', 'history'].includes(command)
  }
}

export default CommandProcessor
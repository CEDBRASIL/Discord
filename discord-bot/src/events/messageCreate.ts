import { Message } from 'discord.js';
import { Command } from '../types';

const commands: Command[] = [
    // Import your commands here
    // Example: { name: 'ping', execute: ping }
];

export const messageCreate = (message: Message) => {
    // Ignore messages from the bot itself
    if (message.author.bot) return;

    // Check if the message starts with a command prefix
    const prefix = '!';
    if (!message.content.startsWith(prefix)) return;

    // Extract the command name and arguments
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift()?.toLowerCase();

    // Find the command in the commands array
    const command = commands.find(cmd => cmd.name === commandName);

    // If the command exists, execute it
    if (command) {
        command.execute(message, args);
    }
};
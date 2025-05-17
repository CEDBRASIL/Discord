import { Client, GatewayIntentBits } from 'discord.js';
import { ping } from './commands/ping';
import { onReady } from './events/ready';
import { onMessageCreate } from './events/messageCreate';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', onReady);
client.on('messageCreate', onMessageCreate);

client.login(process.env.BOT_TOKEN);
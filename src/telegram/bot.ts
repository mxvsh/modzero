import { Composer } from 'grammy';
import databaseComposer from './database';

const bot = new Composer();

bot.use(databaseComposer);

bot.command('start', (ctx) => {
	ctx.reply('Hello!');
});

export default bot;

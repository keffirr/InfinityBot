const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
	name: 'help',
	description: 'Список всех команд бота.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		if(message.author.id === !message.author.id) {
        const prefix = '!'
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
            data.push('Вот список всех моих команд:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nТы можешь написать \`${prefix}help [command name]\` чтобы получить информацию о команде!`);
        
            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('Я отправил список команд в личные сообщения.');
                })
                .catch(error => {
                    console.error(`Не удалось отправить список команд ${message.author.tag}.\n`, error);
                    message.reply('Почему-то не вышло отправить список команд! Ты закрыл личные сообщения?');
                });
		}

        const name = args[0].toLowerCase();
const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

if (!command) {
	return message.reply('Это не верная команда!');
}

data.push(`**Name:** ${command.name}`);

if (command.aliases) data.push(`**Псевдонимы:** ${command.aliases.join(', ')}`);
if (command.description) data.push(`**Описание:** ${command.description}`);
if (command.usage) data.push(`**Использование:** ${prefix}${command.name} ${command.usage}`);

message.channel.send(data, { split: true });
	}},
};

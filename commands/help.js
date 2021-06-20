const { prefix } = require('../config.json');
module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
        const data = [];
        const { commands } = message.client;
        
        if (!args.length) {
            const name = args[0];
            const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

            if (!command) {
        	return message.reply('Это не правильная команда!');
        }

         data.push(`**Название:** ${command.name}`);

         if (command.aliases) data.push(`**Синонимы:** ${command.aliases.join(', ')}`);
         if (command.description) data.push(`**Описание:** ${command.description}`);
         if (command.usage) data.push(`**Использование:** ${prefix}${command.name} ${command.usage}`);

         data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

            message.channel.send(data, { split: true });
            data.push('Это список моих команд:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nВы можете написать \`${prefix}help [название команды]\` чтобы получить информацию о конкретной команде!`);
            
            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('I\'ve sent you a DM with all my commands!');
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
                });
        }
	},
};
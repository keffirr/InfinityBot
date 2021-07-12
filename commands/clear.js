const { prefix, token, owner, нельзя } = require('./config.json');
module.exports = {
	name: 'clear',
	description: 'Команда для удаления сообщений (максимум 100)',
    args: true,
    usage: '1-99',
    cooldown: 5,
    guildOnly: true,
    permissions: 'MANAGE_MESSAGES',
    execute(message, args) {
if(message.author.bot) return message.channel.send('У вас недостаточно прав для использования этой команды, чтобы ее использовать вам нужно иметь право на удаление сообщений.')
		const amount = parseInt(args[0]) + 1;
    
        if (isNaN(amount)) {
            return message.reply('Это, кажется, не является допустимым числом.');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('`Удалить` можно только от `1` до `99` сообщений.');
        }
        message.channel.bulkDelete(amount, true); {
            message.channel.send(`удалено ${args[0]} сообщений\(я\)`).then(message => {
                message.delete({ timeout: 10000 })
              })
        };
	},
};

module.exports = {
	name: 'clear',
	description: 'Команда для удаления сообщений (максимум 100)',
    args: true,
    usage: '1-99',
    cooldown: 5,
    execute(message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return
		const amount = parseInt(args[0]) + 1;
    
        if (isNaN(amount)) {
            return message.reply('Это, кажется, не является допустимым числом.');
        } else if (amount <= 0 || amount > 100) {
            return message.reply('Удалить можно только от 1 до 99 сообщений.');
        }
        message.channel.bulkDelete(amount, true); {
            message.channel.send(`удалено ${args[0]} сообщений\(я\)`).then(message => {
                message.delete({ timeout: 10000 })
              })
        };
	},
};

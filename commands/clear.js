const { prefix, token, owner, нельзя } = require('./config.json');
module.exports = {
	name: 'clear',
	description: 'Команда для удаления сообщений (максимум 100)',
    args: true,
    usage: '1-99',
    cooldown: 5,
    execute(message, args) {
if(message.author.id !== '851924727685840906' || message.author.id !== '662646406447628288') return message.channel.send(нельзя)
if(!message.member.guild.me.hasPermission("MANAGE_MESSAGES")) return
		const amount = parseInt(args[0]) + 1;
    
        if (isNaN(amount)) {
            return message.reply('Это, кажется, не является допустимым числом.');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('Удалить можно только от 1 до 99 сообщений.');
        }
        message.channel.bulkDelete(amount, true); {
            message.channel.send(`удалено ${args[0]} сообщений\(я\)`).then(message => {
                message.delete({ timeout: 10000 })
              })
        };
	},
};

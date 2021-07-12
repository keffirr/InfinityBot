const Discord = require("discord.js");

module.exports = {
	name: 'avatar',
    aliases: ['icon', 'pfp', 'av'],
    description: 'Вы должны увидеть свой прекрасный аватар с помощью этой команды!',
    cooldown: 5,
    execute(message, args) {
        const av = new Discord.MessageEmbed() 
    .setTitle(`Ваш аватар:`)
    .setColor('RANDOM')
    .setImage(`${message.author.displayAvatarURL({dynamic: true, size: 2048 })}`);
		if (!message.mentions.users.size) {
            return message.channel.send(av);
        }
        const user = message.mentions.users.first()
     const embed = new Discord.MessageEmbed() 
    .setTitle(`Аватар **${user.username}**`)
    .setColor('RANDOM')
    .setImage(`${user.displayAvatarURL({dynamic: true, size: 2048 })}`);
             message.channel.send(embed);
}}

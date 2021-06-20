const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const path = require('path')
const { prefix, token, owner, нельзя } = require('./config.json');
module.exports = {
	name: 'eval',
	description: 'eval',
    args: true,
    usage: 'content',
	cooldown: 5,
	execute(message, args, client, api, member, ytdl) {
        const запрос = new Discord.MessageEmbed()
        .setColor('5865f2')
        .setTitle('**Запрос:**')
        .setDescription(`\n\`\`\`js\n${message.content.split(" ").slice(1).join(" ")}\`\`\``)
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
        .setTimestamp();
if(message.author.id !== '851924727685840906') return message.channel.send(нельзя)
        message.delete()
    message.channel.send(запрос)
    var result = message.content.split(" ").slice(1).join(" ")
    let evaled = eval(result);
    const результат = new Discord.MessageEmbed()
        .setColor('5865f2')
        .setTitle('**Результат:**')
        .setDescription(`\n\`\`\`js\n${evaled}\`\`\``)
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
        .setTimestamp();
        message.channel.send(результат)
    }}
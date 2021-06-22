const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const path = require('path')
module.exports = {
	name: 'заметка-посмотреть',
	description: 'eval',
	cooldown: 5,
	execute(message, args) {
message.channel.send(`Ваша заметка: **${fs.readFileSync(`${message.author.username}.txt`)}**\nЕсли вы хотите обновить свою заметку позже, напишите команду \`!заметка *текст*\``)
}}

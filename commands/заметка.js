const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const path = require('path')
module.exports = {
	name: 'заметка',
	description: 'eval',
        args: true,
        usage: 'content',
	cooldown: 5,
	execute(message, args) {
if (message.content === `!заметка посмотреть`) return
const zametka = fs.writeFileSync(`${message.author.username}.txt`, `${message.content.split(" ").slice(1).join(" ")}`)
zametka
message.channel.send(`Ваша заметка сохранена! Вот как она выглядит: **${fs.readFileSync(`${message.author.username}.txt`)}**\nЕсли вы хотите посмотреть свою заметку позже, напишите команду \`!заметка-посмотреть\``)
}}

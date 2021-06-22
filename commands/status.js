const { MessageButton, MessageActionRow } = require('discord-buttons');
const { randomInt } = require('crypto');
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const path = require('path')
module.exports = {
	name: 'status',
	description: 'eval',
	cooldown: 5,
	execute(message, args, client, api) {
const embed = new Discord.MessageEmbed()
.setTitle('Infinity Bot Status')
.setDescription(`Бот нагружен на ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100} MB`)
.setThumbnail('https://images-ext-2.discordapp.net/external/Z4oniAqvvYvHpAF-b40h3AT2PsCoRoUf-uyiU1GHvk8/https/cdn.discordapp.com/avatars/851945606799949844/236cf6c8e0ffea770b2e4eb24992b28b.png')
.setURL('https://status.romoz.ml')
.setTimestamp()
.setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
.setColor('FFFFFF');
message.channel.send(`Посмотрите статиску на сайте ** https://status.romoz.ml ** , более подробная на ** https://status.romoz.ml/подробная **`, { embed })
}}

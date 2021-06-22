const { MessageButton, MessageActionRow } = require('discord-buttons');
const { randomInt } = require('crypto');
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const path = require('path')
module.exports = {
	name: '911',
	description: 'eval',
	cooldown: 5,
        guildOnly: true,
	execute(message, args, client, api) {
if(message.content === '911') {
const moder = '732196406491611157'
const embed = new Discord.MessageEmbed()
.setTitle('Время вызова')
.setColor('5865f2')
.setTimestamp();
message.channel.send(`<@${message.author.id}> вызвал <@&${moder}>`, { embed} )
  }}}

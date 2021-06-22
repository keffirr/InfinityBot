const { MessageButton, MessageActionRow } = require('discord-buttons');
const { randomInt } = require('crypto');
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const path = require('path')
module.exports = {
	name: 'bot',
	description: 'eval',
	cooldown: 5,
	execute(message, args, client, api) {
client.generateInvite({
 permissions: ['ADMINISTRATOR']}).then(link => message.channel.send(`Ссылка на бота ${link} `))
  }}

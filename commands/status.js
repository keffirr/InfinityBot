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
message.channel.send(`Посмотрите статистику на сайте ** https://status.romoz.ml, ** более подробную на ** https://status.romoz.ml/подробная **`)
}}

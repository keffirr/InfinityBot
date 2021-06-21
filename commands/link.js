const { MessageButton, MessageActionRow } = require('discord-buttons');
const { randomInt } = require('crypto');
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const path = require('path')
module.exports = {
	name: 'invite',
	description: 'eval',
	cooldown: 5,
	execute(message, args, client, api) {
message.channel.createInvite().then(invite => message.channel.send(`Ссылка на ${message.guild} https://discord.gg/${invite.code}`))
}

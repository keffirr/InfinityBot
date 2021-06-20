const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const path = require('path')
const { prefix, token, owner, нельзя } = require('./config.json');
module.exports = {
	name: 'restart',
	description: 'eval',
	cooldown: 5,
	execute(message, args) {
		if(message.author.id !== owner) return message.channel.send(нельзя)
message.channel.send('Перезагрузка...')
setTimeout(reload, 3000)
function reload(){
process.exit()
}
    }}
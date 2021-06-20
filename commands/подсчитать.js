const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const path = require('path')
const { prefix, token, owner, нельзя } = require('./config.json');
module.exports = {
	name: 'подсчитать',
	description: 'eval',
    args: true,
    usage: 'content',
	cooldown: 5,
	execute(message, args, client, api, member, ytdl) {
        message.channel.send(`Ваше сообщение: \`${message.content.split(" ").slice(1).join(" ")}\``).then(sent => {
            sent.edit(`Думаю...`, {timeout: 3000}).then(senr => {
                senr.edit(`В вашем сообщении ${message.content.split(" ").slice(1).join(" ").length} символов!`);
        })
    })}}
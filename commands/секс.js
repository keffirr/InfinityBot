const { randomInt } = require('crypto');
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const path = require('path')
module.exports = {
	name: 'секс',
	description: 'eval',
	cooldown: 5,
	execute(message, args, client, api) {
    if(message.content === '!секс nsfw') return message.channel.send('Правильное использование \`\`\`!секс nsfw on\n!секс nsfw off\`\`\`')
    if(message.content === '!секс nsfw on') return message.channel.setNSFW(true), message.channel.send('NSFW метка успешно включена').then(message => {
        message.delete({ timeout: 10000 })
      })
    if(message.content === '!секс nsfw off') return message.channel.setNSFW(false), message.channel.send('NSFW метка успешно выключена').then(message => {
        message.delete({ timeout: 10000 })
      })
        if (message.channel.nsfw) {
            const search = [
                "anal",
                "pussy",
                "hentai",
                "ass"
              ];
            (async () => {
                const image = await api.get(search[randomInt(6)]);
              const embed = new Discord.MessageEmbed()
              .setTitle("Porn:")
              .setImage(image)
              .setColor('RANDOM')
              .setURL(image) 
          return message.channel.send({ embed });
        })();
        } else {
            message.channel.send(`поставьте метку NSFW, чтобы данная команда работала в канале <#${message.channel.id}>`)
        }
    }}
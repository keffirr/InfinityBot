const { MessageButton, MessageActionRow } = require('discord-buttons');
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
    let a = new MessageButton()
    .setStyle('blurple')
    .setLabel('anal') 
    .setID('1')
    let b = new MessageButton()
    .setStyle('blurple')
    .setLabel('pussy') 
    .setID('2') 
    let c = new MessageButton()
    .setStyle('blurple')
    .setLabel('hentai') 
    .setID('3') 
    if(message.content === '!секс nsfw') return message.channel.send('Правильное использование \`\`\`!секс nsfw on\n!секс nsfw off\`\`\`')
    if(message.content === '!секс nsfw on') return message.channel.setNSFW(true), message.channel.send('NSFW метка успешно включена').then(message => {
        message.delete({ timeout: 10000 })
      })
    if(message.content === '!секс nsfw off') return message.channel.setNSFW(false), message.channel.send('NSFW метка успешно выключена').then(message => {
        message.delete({ timeout: 10000 })
      })
        if (message.channel.nsfw) {
          client.on('clickButton', async (button) => {
            if(button.id === '1') {
              const image = await api.get('anal');
              const embed = new Discord.MessageEmbed()
              .setTitle("Anal")
              .setImage(image)
              .setColor('RANDOM')
              .setURL(image) 
              button.message.edit("Выбери нажав на одну из кнопок, чтобы увидеть нужный контент", { embed, components: [ buttonRow ] })
        await button.defer()
            }})
            client.on('clickButton', async (button) => {
              if(button.id === '2') {
                const image = await api.get('pussy');
                const embed = new Discord.MessageEmbed()
                .setTitle("pussy")
                .setImage(image)
                .setColor('RANDOM')
                .setURL(image) 
                button.message.edit("Выбери нажав на одну из кнопок, чтобы увидеть нужный контент", { embed, components: [ buttonRow ] })
          await button.defer()
              }})
              client.on('clickButton', async (button) => {
                if(button.id === '3') {
                  const image = await api.get('hentai');
                  const embed = new Discord.MessageEmbed()
                  .setTitle("hentai")
                  .setImage(image)
                  .setColor('RANDOM')
                  .setURL(image) 
              button.message.edit("Выбери нажав на одну из кнопок, чтобы увидеть нужный контент", { embed, components: [ buttonRow ] });
            await button.defer()
                }})

let buttonRow = new MessageActionRow()
.addComponent(a)
.addComponent(b)
.addComponent(c);
            const search = [
                "anal",
                "pussy",
                "hentai",
              ];
            (async () => {
          return message.channel.send("Выбери нажав на одну из кнопок, чтобы увидеть нужный контент", { components: [ buttonRow ] });
        })();
        } else {
            message.channel.send(`поставьте метку NSFW, чтобы данная команда работала в канале <#${message.channel.id}>`)
        }
    }}

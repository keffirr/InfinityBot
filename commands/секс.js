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
    .setEmoji('🔎')
    .setLabel(':anal') 
    .setID('1')
    let b = new MessageButton()
    .setStyle('blurple')
    .setEmoji('🔎')
    .setLabel('pussy') 
    .setID('2') 
    let c = new MessageButton()
    .setStyle('blurple')
    .setEmoji('🔎')
    .setLabel('hentai') 
    .setID('3')
    let d = new MessageButton()
    .setStyle('blurple')
    .setEmoji('🔎')
    .setLabel('pgif') 
    .setID('4')
    let r = new MessageButton()
    .setStyle('blurple')
    .setEmoji('🔎')
    .setLabel('neko') 
    .setID('5')
    let e = new MessageButton()
    .setStyle('blurple')
    .setEmoji('🔎')
    .setLabel('boobs') 
    .setID('6')
    let u = new MessageButton()
    .setStyle('blurple')
    .setEmoji('🔎')
    .setLabel('4k') 
    .setID('8')
    let o = new MessageButton()
    .setStyle('blurple')
    .setEmoji('🔎')
    .setLabel('ass') 
    .setID('9')
    if(message.member.guild.me.hasPermission('ADMINISTRATOR') || message.member.guild.me.hasPermission('MANAGE_MESSAGES')){
    if(message.content === '!секс nsfw') return message.channel.send('Правильное использование \`\`\`!секс nsfw on\n!секс nsfw off\`\`\`')
    if(message.content === '!секс nsfw on') return message.channel.setNSFW(true), message.channel.send('NSFW метка успешно включена').then(message => {
        message.delete({ timeout: 10000 })
      })
    if(message.content === '!секс nsfw off') return message.channel.setNSFW(false), message.channel.send('NSFW метка успешно выключена').then(message => {
        message.delete({ timeout: 10000 })
      })
    } else {
	    message.channel.send('Недостаточно прав для использования данной команды, чтобы использовать даанную команду вам нужно иметь одно из из перечисленных прав \`Администратор\`, \`Управление сообщениями\`.')
    }
          client.on('clickButton', async (button) => {
            if(button.id === '1') {
              const image = await api.get('anal');
              const embed = new Discord.MessageEmbed()
              .setTitle("anal")
              .setImage(image)
              .setColor('RANDOM')
              .setURL(image) 
              button.message.edit("Выбери нажав на одну из кнопок, чтобы увидеть нужный контент", { embed, components: [ buttonRow, buttonRow2 ] })
        await button.defer()
	    }
		  if(button.id === '2') {
                const image = await api.get('pussy');
                const embed = new Discord.MessageEmbed()
                .setTitle("pussy")
                .setImage(image)
                .setColor('RANDOM')
                .setURL(image) 
                button.message.edit("Выбери нажав на одну из кнопок, чтобы увидеть нужный контент", { embed, components: [ buttonRow, buttonRow2 ] })
          await button.defer()
		  }
		  if(button.id === '3') {
                  const image = await api.get('hentai');
                  const embed = new Discord.MessageEmbed()
                  .setTitle("hentai")
                  .setImage(image)
                  .setColor('RANDOM')
                  .setURL(image) 
              button.message.edit("Выбери нажав на одну из кнопок, чтобы увидеть нужный контент", { embed, components: [ buttonRow, buttonRow2 ] });
            await button.defer()
		  }
		  if(button.id === '4') {
                  const image = await api.get('pgif');
                  const embed = new Discord.MessageEmbed()
                  .setTitle("pgif")
                  .setImage(image)
                  .setColor('RANDOM')
                  .setURL(image) 
              button.message.edit("Выбери нажав на одну из кнопок, чтобы увидеть нужный контент", { embed, components: [ buttonRow, buttonRow2 ] });
            await button.defer()
		  }
		  if(button.id === '5') {
                  const image = await api.get('neko');
                  const embed = new Discord.MessageEmbed()
                  .setTitle("neko")
                  .setImage(image)
                  .setColor('RANDOM')
                  .setURL(image) 
              button.message.edit("Выбери нажав на одну из кнопок, чтобы увидеть нужный контент", { embed, components: [ buttonRow, buttonRow2 ] });
            await button.defer()
		  }
		  if(button.id === '6') {
                  const image = await api.get('boobs');
                  const embed = new Discord.MessageEmbed()
                  .setTitle("boobs")
                  .setImage(image)
                  .setColor('RANDOM')
                  .setURL(image) 
              button.message.edit("Выбери нажав на одну из кнопок, чтобы увидеть нужный контент", { embed, components: [ buttonRow, buttonRow2 ] });
            await button.defer()
		  }
		  if(button.id === '8') {
                  const image = await api.get('4k');
                  const embed = new Discord.MessageEmbed()
                  .setTitle("4k")
                  .setImage(image)
                  .setColor('RANDOM')
                  .setURL(image) 
              button.message.edit("Выбери нажав на одну из кнопок, чтобы увидеть нужный контент", { embed, components: [ buttonRow, buttonRow2 ] });
            await button.defer()
		  }
		  if(button.id === '9') {
                  const image = await api.get('ass');
                  const embed = new Discord.MessageEmbed()
                  .setTitle("ass")
                  .setImage(image)
                  .setColor('RANDOM')
                  .setURL(image) 
              button.message.edit("Выбери нажав на одну из кнопок, чтобы увидеть нужный контент", { embed, components: [ buttonRow, buttonRow2 ] });
            await button.defer()
		  }
            });

let buttonRow = new MessageActionRow()
.addComponent(a)
.addComponent(b)
.addComponent(c)
.addComponent(d);
let buttonRow2 = new MessageActionRow()
.addComponent(r)
.addComponent(e)
.addComponent(u)
.addComponent(o);
const search = [
  "anal",
  "pussy",
  "hentai",
];
if (message.channel.nsfw) {
          return message.channel.send("Выбери нажав на одну из кнопок, чтобы увидеть нужный контент", { components: [ buttonRow, buttonRow2 ] });

        } else {
            message.channel.send(`поставьте метку NSFW, чтобы данная команда работала в канале <#${message.channel.id}>`)
        }
    }}

const { MessageButton, MessageActionRow } = require('discord-buttons'); 
const Discord = require('discord.js'); 
    const MessageEmbed = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'clicker',
    description: 'Ping!',
    cooldown: 5,
    execute(message, args, client, MessageEmbed, Discord) {
let button = new MessageButton()
.setStyle('red') 
.setLabel(1)
.setID(`clicker`);
    message.channel.send(`${button.label} раз нажали на кнопку`, button)
client.on('clickButton', async (button) => {
let button2 = new MessageButton()
.setStyle('red') 
.setLabel(button.message.content[0] + 1)
.setID(`clicker`);
    if(button.id === 'clicker') {
button.reply.send(`${button2.label} раз нажали на кнопку`, button2, { type: 7 })
}
})
}}
 

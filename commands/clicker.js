const { MessageButton, MessageActionRow } = require('discord-buttons'); 
const Discord = require('discord.js'); 
    const MessageEmbed = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'clicker',
    description: 'Ping!',
    cooldown: 5,
    execute(message, args, client, MessageEmbed, Discord) {
let button = new disbut.MessageButton()
.setStyle('red') 
.setLabel(1)
.setID(`clicker`);
    message.channel.send(`${button.label} раз нажали на кнопку`, button)
client.on('clickButton', async (button) => {
let button2 = new disbut.MessageButton()
.setStyle('red') 
.setLabel(button.message.content[0] + 1)
.setID(`clicker`);
    if(button.id === 'clicker') {
button.message.edit(`${button2.label} раз нажали на кнопку`, button2)
}
})
}}
 

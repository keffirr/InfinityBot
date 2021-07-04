const { MessageButton, MessageActionRow } = require('discord-buttons'); 
const Discord = require('discord.js'); 
    const MessageEmbed = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'clicker',
    description: 'Ping!',
    cooldown: 5,
    execute(message, args, client, MessageEmbed, Discord) {
const colors = [
'red',
'green',
'blurple',
]
const randomIndex = Math.floor(Math.random() * (colors.length - 1) + 1)
const randomColor = colors[randomIndex]
let button = new MessageButton()
.setStyle(randomColor) 
.setLabel(1)
.setID(`clicker`);
    message.channel.send(`${button.label}`, button).then(message => {
                message.delete({ timeout: 100000 })})
client.on('clickButton', async (button) => {
let button2 = new MessageButton()
.setStyle(randomColor) 
.setLabel(+button.message.content + +1)
.setID(`clicker`);
    if(button.id === 'clicker') {
button.reply.send(`${button2.label}`, button2).then(message => {
                message.delete({ timeout: 100000 })})
}
})
}}
 

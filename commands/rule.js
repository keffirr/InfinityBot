const { MessageButton, MessageActionRow } = require('discord-buttons'); 
const Discord = require('discord.js'); 
    const MessageEmbed = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'rule',
    description: 'Ping!',
    cooldown: 5,
    execute(message, args, client, MessageEmbed, Discord) {
    let role = new MessageButton()
    .setStyle('blurple')
    .setEmoji('✅')
    .setID('rule')
	let buttonRow = new MessageActionRow()
	.addComponent(role)
	const hook = new Discord.WebhookClient('761546981910249482', 'KFPIL85SxQREs2EV6WPB_hgjmaYHpKdeLrPD4CJt-qjaTYi7Q2daa8s_0TxrBrC-rWl9');
	const embed = new Discord.MessageEmbed()
	.setDescription('**Нажмите на кнопку чтобы получить доступ к каналам\nClick on button to access channels**')
	.setColor('FFFFFF')

	// Send a message using the webhook
	message.channel.send(`1 человека прошли верификацию`, { embed: embed, components: [ buttonRow ] }); 

    },
};

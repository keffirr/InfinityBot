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
    .setLabel('Верификация')
    .setID('rule')
	let buttonRow = new MessageActionRow()
	.addComponent(role)
	const hook = new Discord.WebhookClient('761546981910249482', 'KFPIL85SxQREs2EV6WPB_hgjmaYHpKdeLrPD4CJt-qjaTYi7Q2daa8s_0TxrBrC-rWl9');
	const embed = new Discord.MessageEmbed()
	.setDescription('**Нажмите на кнопку чтобы получить доступ к каналам\nClick on button to access channels**')
	.setColor('FFFFFF')

	// Send a message using the webhook
	message.channel.send(`Верификацию прошло 1 человека`, { embed: embed, components: [ buttonRow ] }); 
client.on('clickButton', async (button) => {
    if(button.id === 'rule') {
        const give = '771297776042639360'
                    const role = button.guild.roles.cache.get(give);
                    const member = message.guild.members.cache.get(button.clicker.user.id);
                    member.roles.add(role);
                    if(message.member.roles.cache.has(give)) return message.guild.members.cache.get(button.clicker.user.id).send('Вы уже прошли верификацию, повторно ее пройти нельзя!')
                    button.message.edit(`Верификацию прошло ${eval(1 + message.content.split(" ").slice(3).join(" "))} человека`, { embed: embed, components: [ buttonRow ] })
await button.reply.send(`<@${button.clicker.user.id}> успешно прошел верификацию!`, true)
    }
})
    },
};

const { MessageButton, MessageActionRow } = require('discord-buttons'); 
const MessageEmbed = require('discord.js');
module.exports = {
    name: 'rule',
    description: 'Ping!',
    cooldown: 5,
    execute(message, args, client, Discord) {
    let role = new MessageButton()
    .setStyle('blurple')
    .setEmoji('✅')
    .setID('rule')
	let buttonRow = new MessageActionRow()
	.addComponent(role)
	const embed = new Discord.MessageEmbed()
	.setDescription('**Нажмите на кнопку чтобы получить доступ к каналам\nClick on button to access channels**')
	.setColor('FFFFFF')

	// Send a message using the webhook
	message.channel.send(`1 человека прошли верификацию`, { embed: embed, components: [ buttonRow ] }); 
client.on('clickButton', async (button) => {
    if(button.id === 'rule') {
        const give = '771297776042639360'
                    const role = button.guild.roles.cache.get(give);
                    const member = message.guild.members.cache.get(button.clicker.user.id);
                    member.roles.add(role);
                    if(message.member.roles.cache.has(give)) return message.guild.members.cache.get(button.clicker.user.id).send('Вы уже прошли верификацию, повторно ее пройти нельзя!'), await button.defer()
                    button.message.edit(`${eval(1 + button.message.content[0] - 9)} человека прошли верификацию`, { embed: embed, components: [ buttonRow ] })
await button.reply.send(`<@${button.clicker.user.id}> успешно прошел верификацию!`, true)
    }
})

    },
};

const { MessageButton, MessageActionRow } = require('discord-buttons');
module.exports = {
	name: 'role',
	description: 'Ping!',
	cooldown: 5,
	execute(message, args, client) {
            let button = new MessageButton()
                .setStyle('red') // default: blurple
                .setLabel(`Infinity`) 
                .setID(`771297776042639360`);
let d = client.ws.ping / 1000
		message.channel.send(`test`, button)
client.on('clickButton', async (button) => {
    if(button.id === '771297776042639360') {
                    const role = button.guild.roles.cache.get('771297776042639360');
                    const member = message.guild.members.cache.get(button.clicker.user.id);
                    member.roles.add(role);
await button.defer()
    }})
	},
};

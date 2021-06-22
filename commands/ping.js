const { MessageButton, MessageActionRow } = require('discord-buttons');
module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 5,
	execute(message, args, client) {
		let button = new MessageButton()
  .setStyle('blurple')
  .setLabel('Обновить') 
  .setID('click_to_function') 
let d = client.ws.ping / 1000
		message.channel.send(`Понг! Задержка бота ${d}секунд `, button)
client.on('clickButton', async (button) => {
    if(button.id === 'click_to_function') {
async setTimeout(кнопка, 2000)
function кнопка() {
button.message.edit(`Понг! Задержка бота ${client.ws.ping / 1000}секунд`)
await button.defer()
}
    }})
	},
};

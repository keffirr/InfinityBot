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
		message.channel.send(`Понг! Задержка бота ${d}секунд`, button).then(message => {
                setTimeout(()=>{ button.message.edit(`Понг! Задержка бота ${d}секунд`) }, 3000)
              })
client.on('clickButton', async (button) => {
    if(button.id === 'click_to_function') {
button.message.edit(`Понг! Задержка бота ${d}секунд`)
    }})
	},
};

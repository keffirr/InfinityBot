const { MessageButton, MessageActionRow } = require('discord-buttons');
module.exports = {
	name: 'role',
	description: 'Ping!',
	cooldown: 5,
	execute(message, args, client) {
    let a = new MessageButton()
    .setStyle('red')
    .setEmoji('🟥')
    .setLabel('Красный') 
    .setID('role')
    let b = new MessageButton()
    .setStyle('red')
    .setEmoji('🟨')
    .setLabel('Желтый') 
    .setID('role2') 
    let c = new MessageButton()
    .setStyle('red')
    .setEmoji('⬜')
    .setLabel('Белый') 
    .setID('role3')
    let d = new MessageButton()
    .setStyle('red')
    .setEmoji('🟦')
    .setLabel('Синий') 
    .setID('role4')
    let buttonRow = new MessageActionRow()
.addComponent(role)
.addComponent(role2)
.addComponent(role3)
.addComponent(role4);
let d = client.ws.ping / 1000
		message.channel.send(`Нажми на кнопку, чтобы выбрать нужный цвет`, { components: [ buttonRow] })
	},
};

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
		message.channel.send(`Нажми на кнопку, чтобы выбрать нужный цвет`, { components: [ buttonRow] })
client.on('clickButton', async (button) => {
    if(button.id === 'role') {
                    const role = button.guild.roles.cache.get('805482287558295562');
                    const member = message.guild.members.cache.get(button.clicker.user.id);
                    member.roles.add(role);
await button.defer()
    }
	    if(button.id === 'role2') {
                    const role = button.guild.roles.cache.get('805638653099376700');
                    const member = message.guild.members.cache.get(button.clicker.user.id);
                    member.roles.add(role);
await button.defer()
    }
	    if(button.id === 'role3') {
                    const role = button.guild.roles.cache.get('805637594918027304');
                    const member = message.guild.members.cache.get(button.clicker.user.id);
                    member.roles.add(role);
await button.defer()
    }
	    if(button.id === 'role4') {
                    const role = button.guild.roles.cache.get('805636480587792404');
                    const member = message.guild.members.cache.get(button.clicker.user.id);
                    member.roles.add(role);
await button.defer()
    }
})

	},
};

const { MessageButton, MessageActionRow } = require('discord-buttons');
module.exports = {
    name: 'role',
    description: 'Ping!',
    execute(message, args, client) {
    let role = new MessageButton()
    .setStyle('blurple')
    .setEmoji('🟥')
    .setLabel('Красный') 
    .setID('role')
    let role2 = new MessageButton()
    .setStyle('blurple')
    .setEmoji('🟨')
    .setLabel('Желтый') 
    .setID('role2') 
    let role3 = new MessageButton()
    .setStyle('blurple')
    .setEmoji('⬜')
    .setLabel('Белый') 
    .setID('role3')
    let role4 = new MessageButton()
    .setStyle('blurple')
    .setEmoji('🟦')
    .setLabel('Синий') 
    .setID('role4')
    let buttonRow = new MessageActionRow()
.addComponent(role)
.addComponent(role2)
.addComponent(role3)
.addComponent(role4);
        message.channel.send(`Нажми на кнопку, чтобы выбрать нужный цвет`, { components: [ buttonRow ] })
client.on('clickButton', async (button) => {
    if(button.id === 'role') {
        const give = '805482287558295562'
                    const role = button.guild.roles.cache.get(give);
                    const member = message.guild.members.cache.get(button.clicker.user.id);
                    if(message.member.roles.cache.has(give)) return member.roles.remove(role), await button.reply.send(`Роль <@&${give}> успешно убрана у <@${button.clicker.user.id}>!`, true)
                    member.roles.add(role);
button.message.edit(`${eval(1 + button.message.content[0] - 9)} человека прошли верификацию`, { embed: embed, components: [ buttonRow ] })
await button.reply.send(`Роль <@&${give}> успешно выдана для<@${button.clicker.user.id}>!`, true)
    }
        if(button.id === 'role2') { 
            const give = '805638653099376700'
            const role = button.guild.roles.cache.get(give);
            const member = message.guild.members.cache.get(button.clicker.user.id);
            if(message.member.roles.cache.has(give)) return member.roles.remove(role), await button.reply.send(`Роль <@&${give}> успешно убрана у <@${button.clicker.user.id}>!`, true)
                    member.roles.add(role);
button.message.edit(`${eval(1 + button.message.content[0] - 9)} человека прошли верификацию`, { embed: embed, components: [ buttonRow ] })
                    await button.reply.send(`Роль <@&${give}> успешно выдана для <@${button.clicker.user.id}>!`, true)
    }
        if(button.id === 'role3') {
            const give = '805637594918027304'
                    const role = button.guild.roles.cache.get(give);
                    const member = message.guild.members.cache.get(button.clicker.user.id);
                    if(message.member.roles.cache.has(give)) return member.roles.remove(role), await button.reply.send(`Роль <@&${give}> успешно убрана у <@${button.clicker.user.id}>!`, true)
                    member.roles.add(role);
button.message.edit(`${eval(1 + button.message.content[0] - 9)} человека прошли верификацию`, { embed: embed, components: [ buttonRow ] })
                    await button.reply.send(`Роль <@&${give}> успешно выдана для <@${button.clicker.user.id}>!`, true)
    }
        if(button.id === 'role4') {
            const give = '771297776042639360'
                    const role = button.guild.roles.cache.get(give);
                    const member = message.guild.members.cache.get(button.clicker.user.id);
                    if(message.member.roles.cache.has(give)) return member.roles.remove(role), await button.reply.send(`Роль <@&${give}> успешно убрана у <@${button.clicker.user.id}>!`, true)
                    member.roles.add(role);
button.message.edit(`${eval(1 + button.message.content[0] - 9)} человека прошли верификацию`, { embed: embed, components: [ buttonRow ] })
                    await button.reply.send(`Роль <@&${give}> успешно выдана для <@${button.clicker.user.id}>!`, true)
    }
})

    },
};

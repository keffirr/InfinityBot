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
                    if(message.member.roles.cache.has(give)) return member.roles.remove(give)
                    member.roles.add(role);
await button.reply.send(`Роль <@&${give}> успешно выдана для<@${button.clicker.user.id}>!`, true)
    }
        if(button.id === 'role2') { 
            const give = '805638653099376700'
            const role = button.guild.roles.cache.get(give);
            const member = message.guild.members.cache.get(button.clicker.user.id);
            if(message.member.roles.cache.has(give)) return member.roles.remove(give)
                    member.roles.add(role);
                    await button.reply.send(`Роль <@&${give}> успешно выдана для <@${button.clicker.user.id}>!`, true)
    }
        if(button.id === 'role3') {
            const give = '805637594918027304'
                    const role = button.guild.roles.cache.get(give);
                    const member = message.guild.members.cache.get(button.clicker.user.id);
                    if(message.member.roles.cache.has(give)) return member.roles.remove(give)
                    member.roles.add(role);
                    await button.reply.send(`Роль <@&${give}> успешно выдана для <@${button.clicker.user.id}>!`, true)
    }
        if(button.id === 'role4') {
            const give = '805636480587792404'
                    const role = button.guild.roles.cache.get(give);
                    const member = message.guild.members.cache.get(button.clicker.user.id);
                    if(message.member.roles.cache.has(give)) return member.roles.remove(give)
                    member.roles.add(role);
                    await button.reply.send(`Роль <@&${give}> успешно выдана для <@${button.clicker.user.id}>!`, true)
    }
if(button.id === 'rule') {
        const give = '771297776042639360'
                    const role = button.guild.roles.cache.get(give);
                    const member = message.guild.members.cache.get(button.clicker.user.id);
                    member.roles.add(role);
                    if(message.member.roles.cache.has(give)) return message.guild.members.cache.get(button.clicker.user.id).send('Вы уже прошли верификацию, повторно ее пройти нельзя!'), await button.defer()
    button.message.edit(`${eval(1 + button.message.content[0] - 9)} человека прошли верификацию`, { embed: embed })
await button.reply.send(`<@${button.clicker.user.id}> успешно прошел верификацию!`, true)
    }
    if(button.id === 'Купить') {
client.users.cache.get(button.clicker.user.id).send('Чтобы купить нитро, вам нужно написать в личные сообщения Ромозу (<@851924727685840906>) ❄️Romoz❄️#9594')
await button.reply.send('Чтобы купить нитро, вам нужно написать в личные сообщения Ромозу (<@851924727685840906>) ❄️Romoz❄️#9594', true)
}
})

    },
};

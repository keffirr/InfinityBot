    const fs = require('fs');
    const Discord = require('discord.js');
    const RichEmbed = require('discord.js');
    const { prefix, token, owner} = require('./config.json');
    const { NekoBot } = require("nekobot-api");
    const api = new NekoBot();
    
    const client = new Discord.Client();
    client.commands = new Discord.Collection();
    
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
    
        client.commands.set(command.name, command);
    }

setTimeout(бот, 1)

function бот(){
    client.once('ready', () => {
        console.log('Ready!');
        client.user.setStatus("idle")
        client.user.setActivity("I̶N̶F̶I̶N̶I̶T̶Y̶ D̶R̶E̶A̶M̶ ", { type: 'WATCHING' });
    });

client.on('message', message => {
    const cooldowns = new Discord.Collection();
    if(message.content.startsWith())
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;
    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply('I can\'t execute that command inside DMs!');
    }
    if (command.args && !args.length) {
        let reply = `Вы ничего не указали в данной команде, ${message.author}!`;

		if (command.usage) {
			reply += `\nПравильное использование этой команды: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply), client.user.setActivity(`${args[0]}`)
	}
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 5) * 1000;
    
    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`пожалуйста подождите ${timeLeft.toFixed(1)} ещё секунда(ы) перед повторным использованием \`${command.name}\` команды.`);
        }
    }
        try {
        command.execute(message, args, client, api, Discord, server, port);
    } catch (error) {
        console.error(error);
    }
});

client.on('messageDelete', async message => {
    if(message.author.bot) return
    if(message.channel.id === '788716508306079784') return
    if(message.guild.id !== '662647231698042911') return
        // Ignore direct messages
        if (!message.guild) return;
        const fetchedLogs = await message.guild.fetchAuditLogs({
            limit: 1,
            type: 'MESSAGE_DELETE',
        });
        const deletionLog = fetchedLogs.entries.first();
        if (!deletionLog) return client.channels.cache.get('788716508306079784').send(embed);
    
        const { executor, target } = deletionLog;
    const embed = new Discord.MessageEmbed()
    .setColor('#FF4444')
    .setTitle('Удаленные сообщения')
    .setDescription(`<@${message.author.id}> **удалил** сообщение\n**Сообщение:**\n**\`\`\`${message.content}\`\`\`**\n**Канал:** <#${message.channel.id}>`)
    .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
    .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
    .setTimestamp(message.createdTimestamp);
    const embed2 = new Discord.MessageEmbed()
    .setColor('#FF4444')
    .setTitle('Удаленные сообщения')
    .setDescription(`<@${executor.id}> **удалил** сообщение <@${message.author.id}>\n**Сообщение:**\n**\`\`\`\n${message.content}\n\`\`\`**\n**Канал:** <#${message.channel.id}>`)
    .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
    .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
    .setTimestamp();
        if (target.id === message.author.id) {
            client.channels.cache.get('788716508306079784').send(executor.id).then(message => {
                client.channels.cache.get('788716508306079784').send(message.author.id)
              }).then(message => {
                client.channels.cache.get('788716508306079784').send(embed2)
              })
        } else {
            client.channels.cache.get('788716508306079784').send(message.author.id).then(message => {
                client.channels.cache.get('788716508306079784').send(embed)
              })
        }
});

client.on('messageUpdate', (oldMessage, newMessage) => { 
	if(oldMessage.content.startsWith('http://')) return
	if(oldMessage.content.startsWith('https://')) return
    const MessageLog = client.channels.cache.find(channel => channel.id ==='855853039058681886');
    if(oldMessage.channel.id === MessageLog) return
    if (oldMessage.author.bot) return;
 var embed = new Discord.MessageEmbed()
 .setTitle('Отредактированные сообщения')
 .setFooter(`${oldMessage.author.tag}`, `${oldMessage.author.displayAvatarURL({ format: "png", dynamic: true })}`)
 .setThumbnail(`${oldMessage.author.displayAvatarURL({ format: "png", dynamic: true })}`)
 .setTimestamp()
 .setColor('#e8aa0e')
 .addFields(
     {name: 'Старое:',value: `\`\`\`\n${oldMessage}\n\`\`\``},
     {name: 'Новое:', value: `\`\`\`\n${newMessage}\n\`\`\``}    );
 MessageLog.send(embed);
 })

 client.on('messageDeleteBulk', async messages => {
     if(messages.first().guild.id !== '662647231698042911') return
     if(messages.first().author.bot) return
    const length = messages.array().length;
    const channel = messages.first().channel.name;
  
    const embed = new Discord.MessageEmbed()
      .setTitle(`${length} Сообщения удалены в #${channel}`)
      .setDescription(messages.map(message => `[${message.author.tag}]: ${message.content}`))
      .setFooter(`${messages.first().author.tag}`, `${messages.first().author.displayAvatarURL({ format: "png", dynamic: true })}`)
      .setColor('#dd5f53')
      .setTimestamp(messages.createdTimestamp);
  
    (await client.channels.fetch('788716508306079784')).send(embed);
  });
}

client.login(process.env.BOT_TOKEN); 
	const express = require('express');
const path = require('path');

var server = express();
var port = process.env.PORT || 8080; // <== this is must

server.get('/', (req, res) => {

        res.send(`<p>'Бот включен\nи нагружен на ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100} MB`)
})

server.listen(port, () => {
    console.log("Listening on port: " + port)
})

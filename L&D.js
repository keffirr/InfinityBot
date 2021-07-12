const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('message', async (msg)) => {
  if (msg.content.endsWith('L&D')) { // Если хотите чтобы бот ставил реакции когда L&D в начале, замените "endsWith" на "startsWith"
    await msg.react('👍')
    await msg.react('👎')
  }
}

bot.on('messageUpdate', async (oldMsg, newMsg)) => {
  if (newMsg.content.endsWith('L&D')) { // Если хотите чтобы бот ставил реакции когда L&D в начале, замените "endsWith" на "startsWith"
    await msg.react('👍')
    await msg.react('👎')
  }
}

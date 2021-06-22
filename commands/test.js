const fs = require('fs')
const path = require('path')
module.exports = {
    name: 'test',
    description: 'say',
 args: true,
 usage: 'content',
 guildOnly: true,
 permissions: 'ADMINISTRATOR',
    execute(message, args, client) {
message.delete()
message.channel.send(`тест успешно выполнен`);
}} 

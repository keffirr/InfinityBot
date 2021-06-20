const fs = require('fs')
const path = require('path')
module.exports = {
    name: 'say',
    description: 'say',
 args: true,
 usage: 'content',
    cooldown: 5,
    execute(message, args, client) {
message.delete()
message.channel.send(`${message.content.split(" ").slice(1).join(" ")}`);
}} 
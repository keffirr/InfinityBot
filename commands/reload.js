const { prefix, token, owner, нельзя } = require('./config.json');
module.exports = {
	name: 'reload',
	description: 'Reloads a command',
    usage: 'name command',
    args: true,
    execute(message, args) {
if(message.author.id !== owner) return message.channel.send('Эту команду может использовать только создатель данного бота')

        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName)
            || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        delete require.cache[require.resolve(`./${command.name}.js`)];
        
        if (!command) return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);
        try {
            const newCommand = require(`./${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
            message.channel.send(`Команда \`${command.name}\` перезагружена!`);
        } catch (error) {
            console.error(error);
            message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
        }
	},
};
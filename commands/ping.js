module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 5,
	execute(message, args, client) {
let d = client.ws.ping / 1000
		message.channel.send(`Понг! задержка бота ${d}секунд`);
	},
};

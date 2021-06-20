module.exports = {
	name: 'uptime',
	description: 'Команда для удаления сообщений (максимум 100)',
    execute(message, args, client) {
let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
let uptime = `Бот работает ${days} дней, ${hours} часов, ${minutes} минут и ${seconds} секунд`;
message.channel.send(uptime)
	},
};

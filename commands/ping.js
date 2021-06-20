module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 5,
	execute(message, args, client) {
let d = client.ws.ping / 1000
		message.channel.send(`Загрузка <a:loading:856264634360266793>`).then(message => {
                setTimeout(()=>{ message.edit(`Понг! Задержка бота ${d}секунд`) }, 3000)
              })
	},
};

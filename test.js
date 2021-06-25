const Discord = require('discord.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});
const Tags = sequelize.define('tags', {
	name: {
		type: Sequelize.STRING,
		unique: true,
	},
	description: Sequelize.TEXT,
	username: Sequelize.STRING,
	usage_count: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
	},
});

const client = new Discord.Client();
const PREFIX = '!';

// [alpha]
// [beta]

client.once('ready', () => {
    Tags.sync();
});

client.on('message', async message => {
	if (message.content.startsWith(PREFIX)) {
		const input = message.content.slice(PREFIX.length).trim().split(' ');
		const command = input.shift();
		const commandArgs = input.join(' ');

		if (command === 'addtag') {
            const splitArgs = commandArgs.split(' ');
const tagName = splitArgs.shift();
const tagDescription = splitArgs.join(' ');

try {
	// equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
	const tag = await Tags.create({
		name: tagName,
		description: tagDescription,
		username: message.author.username,
	});
	return message.reply(`Тег ${tag.name} добавлен.`);
}
catch (e) {
	if (e.name === 'SequelizeUniqueConstraintError') {
		return message.reply('That tag already exists.');
	}
	return message.reply('Почему-то не вышло добавить тег.');
}
			// [delta]
		} else if (command === 'tag') {
            const tagName = commandArgs;

// equivalent to: SELECT * FROM tags WHERE name = 'tagName' LIMIT 1;
const tag = await Tags.findOne({ where: { name: tagName } });
if (tag) {
	// equivalent to: UPDATE tags SET usage_count = usage_count + 1 WHERE name = 'tagName';
	tag.increment('usage_count');
	return message.channel.send(tag.get('description'));
}
return message.reply(`Could not find tag: ${tagName}`);
			// [epsilon]
		} else if (command === 'edittag') {
            const splitArgs = commandArgs.split(' ');
const tagName = splitArgs.shift();
const tagDescription = splitArgs.join(' ');

// equivalent to: UPDATE tags (description) values (?) WHERE name='?';
const affectedRows = await Tags.update({ description: tagDescription }, { where: { name: tagName } });
if (affectedRows > 0) {
	return message.reply(`Тег ${tagName} отредактирован.`);
}
return message.reply(`Я не нашел тег с названием ${tagName}.`);
			// [zeta]
		} else if (command === 'taginfo') {
            const tagName = commandArgs;

// equivalent to: SELECT * FROM tags WHERE name = 'tagName' LIMIT 1;
const tag = await Tags.findOne({ where: { name: tagName } });
if (tag) {
	return message.channel.send(`${tagName} создан ${tag.username} в ${tag.createdAt} и использован ${tag.usage_count} раз.`);
}
return message.reply(`Я не нашел тег: ${tagName}`);
			// [theta]
		} else if (command === 'showtags') {
            // equivalent to: SELECT name FROM tags;
const tagList = await Tags.findAll({ attributes: ['name'] });
const tagString = tagList.map(t => t.name).join(', ') || 'Тегов нет.';
return message.channel.send(`Список тегов: ${tagString}`);
			// [lambda]
		} else if (command === 'removetag') {
            const tagName = commandArgs;
// equivalent to: DELETE from tags WHERE name = ?;
const rowCount = await Tags.destroy({ where: { name: tagName } });
if (!rowCount) return message.reply('Этого тега не существует.');

return message.reply('Тег удален.');
			// [mu]
		}
	}
});

client.login('ODUxOTQ1NjA2Nzk5OTQ5ODQ0.YL_qLQ.7FeaSXptwQxVJn8LzAyuDQ4qhS8');

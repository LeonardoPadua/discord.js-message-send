const { Message } = require('discord.js');
const message = new Message();

function Send(word) {
    message.channel.send(word)
}

module.exports = Send;

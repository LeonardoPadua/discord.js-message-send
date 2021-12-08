function Send({ messageToSend = "", message, embeds? = [null] }) {
    if (embeds === [null]) {
        message.channel.send({ content: messageToSend })
    } else {
        if (messageToSend !== "") {
        message.channel.send({ content: messageToSend, embeds: embeds})
        } else {
            message.channel.send({ embeds: embeds })
        }
    }
}

function Reply({ messageToSend = "", message, embeds? = [null] }) {
    if (embeds === [null]) {
        message.reply({ content: messageToSend })
    } else {
        if (messageToSend !== "") {
            message.reply({ content: messageToSend, embeds: embeds  })
        } else {
            message.reply({ embeds: embeds })
        }
    }
}

module.exports = { Send, Reply  };

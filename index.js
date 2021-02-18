function send(word) {
    message.channel.send(word)

    if(word == 'nigga' || 'nibba' || 'nigger' || 'niga' || 'niba') {
        console.log('You can\'t say that!')
        message.channel.send('Look in your console!')
    }
}
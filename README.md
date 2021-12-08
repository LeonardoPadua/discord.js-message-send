# What does this package do?

This allows you to send messages with your discord bot "easier"

# Why should i use this?

You shouldn't use it. But this is a npm package i made a long time ago, and it probably doesn't work

# Installation

`npm i discord-send --save`

This is an example of how you can use it:

```
    const { Send } = require('discord-send');
    const { Client } = require('discord.js');
    const client = new Client();
    
    client.on('messageCreate', (msg) => {
        if (msg.toLowerCase() === "hello") {
            Send(`Hello, ${message.author}!`, msg);
        }
    })
```

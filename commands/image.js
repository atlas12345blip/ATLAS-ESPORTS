const { Client, MessageAttachment } = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'Image',
    description: "says Image!",
    execute(message, args){
            const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png')
            message.channel.send(attachment);
    }
}
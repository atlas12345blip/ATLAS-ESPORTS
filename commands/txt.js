const { Client, MessageAttachment } = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'TXT',
    description: "says TXT!",
    execute(message, args){
         const attachment3 = new MessageAttachment('./sdsd.txt');
         message.channel.send(message.author, attachment3);
    }
}
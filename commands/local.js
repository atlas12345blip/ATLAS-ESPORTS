const { Client, MessageAttachment } = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'Local',
    description: "says Local!",
    execute(message, args){
         const attachment2 = new MessageAttachment('./pinterest_board_photo.png');
         message.channel.send(`${message.author},`, attachment2);
    }
}
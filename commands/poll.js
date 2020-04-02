const { Client, MessageEmbed }= require('discord.js');
const bot = new Client();

module.exports = {
    name: 'Poll',
    description: "says Poll!",
    execute(message, args){
        const embed = new MessageEmbed()
        .setColor(0xffc300)
        .setTitle("Initiate Poll")
        .setDescription('+Poll To Initiate A Simple Yes Or No Poll');

        if(!args[1]){
            message.channel.send(embed);
        }

        let msgArgs = args.slice(1).join(" ");

        message.channel.send("🗳️ "  + "**" + msgArgs + "**").then(messageReaction =>{
            messageReaction.react("✅");
            messageReaction.react("❎");
        });
    }
}
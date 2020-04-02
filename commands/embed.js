const { Client, MessageEmbed }= require('discord.js');
const bot = new Client();


module.exports = {
    name: 'Embed',
    description: "says Embed!",
    execute(message, args){
        const Embed = new MessageEmbed()
        .setTitle("Lynx's Information")
        .addField("**" + 'Player Name' + "**", "**" + 'ATesLynx' + "**")
        .addField("**" + 'Real Name' + "**", "**" + 'Sheikh M. Ardid' + "**")
        .addField("**" + 'Email' + "**", "**" + 'ardidsa@gmail.com' + "**")
        .addField("**" + 'Mobile' + "**", "**" + '+8801704078080' + "**")
        .addField("**" + 'IGC' + "**", "**" + '5142582390' + "**")
        .setColor(0x0bff00)
        .setThumbnail(message.author.avatarURL())
        message.channel.send(Embed);
    }
}
const { Client, MessageEmbed }= require('discord.js');
const bot = new Client();


module.exports = {
    name: 'Member',
    description: "says Member!",
    execute(message, args){
        const Embed = new MessageEmbed()
        .setTitle("**👑 ATLAS Mobile LineUp 👑**")
        .setThumbnail(message.author.avatarURL())
        .addField("**Team Leader**", "** ATLASxSiamOP **")
        .addField("**Player**", "** ATLASxKAZI **")
        .addField("**Player**", "** ATLASxALI **")
        .addField("**Player**", "** ATLASxLynx **")
        .addField("**Player**", "** ATLASxPIKAPI **")
        .addField("**Player**", "** ATLASxULFAT **")
        .setColor(0x001aff)
        message.channel.send(Embed);
    }
}
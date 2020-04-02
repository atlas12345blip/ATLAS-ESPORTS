const { Client, MessageEmbed }= require('discord.js');
const bot = new Client();


module.exports = {
    name: 'Rules',
    description: "says Rules!",
    execute(message, args){
        const Embed = new MessageEmbed()
        .setTitle("** Server Rules **")
        .addField("•", "** • Be friendly and polite at all times. **")
        .addField("•", "** • Show respect to everyone on this server, no matter what their role is. **")
        .addField("•", "** • Use the correct channels that are specific to your needs. **")
        .addField("•", "** • Be sure to check all the important updates. **")
        .addField("•", "** • Do not make aggressive or entitled demands.  **")
        .addField("•", "** • Do not engage in harassment, abuse, hate, or discriminatory speech or any kind. **")
        .addField("•", "** • Do not spam. This includes tagging people repeatedly or without need. **")
        .addField("•", "** • Do not post any NSFW content (images and text, including your avatar and nickname, relating to explicit sexual content, mind-altering substances) **")
        .addField("•", "** • Do not discuss political and religious topics. **")
        .addField("•", "** • Do not post any content related to piracy, cheats, cracks or any kind of copyright breaching materials. **")
        .addField("•", "** • Do not publicly accuse other users/players of misconduct.  **")
        .addField("•", "** • Do not make threats, including those “made as a joke”.  **")
        .addField("•", "** • Do not reveal private information about any individuals or corporate entities. **")
        .addField("•", "** • Do not conduct any kind of economic activity. **")
        .addField("•", "** • Do not argue with the Owner, Admins, Leader and the Co-leaders .  **")
        .addField("•", "** • Circumventing a ban by creating a new account will result in an automatic permaban. **")
        .setColor(0x001aff)
        message.channel.send(Embed);
    }
}
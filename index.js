const Discord= require('discord.js');
const bot = new Discord.Client();
const ms = require("ms");
const token = "NjkwODc3NjU1NTk1MDg5OTYw.XoXB3Q.218vJGFVENJVLQih4w2YMAdVJFk";
const PREFIX = '+';
const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}


bot.on('ready', () =>{
    console.log('This Bot is Online!');
    bot.user.setActivity("Over ATLAS Gameplay", { type: "WATCHING" })
});


bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.cache.find(ch => ch.name === "🖨dead-welcome❌");
    if(!channel)return;
    channel.send("**" + `Welcome You To My Dead Zone Server, ${member}` + "**");
});


bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'Hello':
           bot.commands.get('Hello').execute(message, args);
        break;

        case 'Facebook':
            bot.commands.get('Facebook').execute(message, args);
        break;

        case 'Info':
            bot.commands.get('Info').execute(message, args);
        break;

        case 'Clear':
            bot.commands.get('Clear').execute(message, args);
        break;

        case 'PM':
            bot.commands.get('PM').execute(message, args);
        break;

        case 'Meme':
        bot.commands.get('Meme').execute(message, args);
        break;
        

        case 'Poll':
            bot.commands.get('Poll').execute(message, args);
        break;

        

        
    
            
    }
});


bot.login(token);

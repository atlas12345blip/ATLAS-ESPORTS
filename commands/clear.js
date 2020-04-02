module.exports = {
    name: 'Clear',
    description: "says Clear!",
    execute(message, args){
        if(!args[1])return message.channel.send("**" + 'ERROR!!!' + "**").then(message.react('❌'));
            message.channel.bulkDelete(args[1]);
    }
}
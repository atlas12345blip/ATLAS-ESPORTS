module.exports = {
    name: 'Hello',
    description: "says Hello!",
    execute(message, args){
        message.reply("**" + 'Hello FRIEND!' + "**").then(message.react('👋'));
    }
}
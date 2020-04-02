var version = '1.0.2';

module.exports = {
    name: 'Info',
    description: "says Info!",
    execute(message, args){
        if(args[1] === 'Version'){
            message.channel.send("**" + 'THANOS™  Bot Version is ' + version + "**" ).then(message.react('⚙️'));
    }else{
        message.channel.send("**" + 'Invaild Message' + "**").then(message.react('❌'));
    }
    }
}
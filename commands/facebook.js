module.exports = {
    name: 'Facebook',
    description: "says Facebook!",
    execute(message, args){
        message.channel.send("**" + 'THANOS FACEBOOK ACCOUNT IS- https://www.facebook.com/mehedi.ethan' + "**").then(message.react('✅'));
    }
}
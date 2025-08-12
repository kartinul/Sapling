module.exports = (client, trigger, callback) => {
    try{client.on("message", (message) => {
        if (message.webhookID || message.author.bot) {return}
        if (
            message.channel.type !== "dm" &&
            message.content.toLowerCase() === trigger.toLowerCase()
        ) {
            console.log(`'⚫ ${trigger}' was triggered by ${message.member.user.tag}`);
            callback(message);
        }
    });}catch{}
};

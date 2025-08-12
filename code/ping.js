module.exports = {
    execute(client) {
        const command = require("../exports/command");
        const trigger = require("../exports/trigger");
        require("../exports/ExtendedMessage");
        // message.inlineReply(content, { allowedMentions: { repliedUser: false } });

        command(client, "ping", (message) => {
            message.channel.send('**Pong!** 🏓').then (async (msg) =>{
                msg.delete()
                const embed = {
                    color: 0x0ffafe,
                    description: `⌛ **Latency** - ${msg.createdTimestamp - message.createdTimestamp}ms\n\n⏱ **API Latency** - ${Math.round(client.ws.ping)}ms`
                }
                message.channel.send({embed});
              })
        });
    },
};

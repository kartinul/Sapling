const {
    prefix
} = require("../config.json");

module.exports = (client, aliases, callback) => {
    try{if (typeof aliases === "string") {
        aliases = [aliases];
    }

    client.on("message", (message) => {
        if (message.webhookID || message.author.bot) {return}
        if (message.channel.type !== "dm") {
            const {
                content
            } = message;

            aliases.forEach((alias) => {
                const command = `${prefix}${alias}`;

                if (content.startsWith(`${command} `) || content === command) {
                    console.log(`⚫ '${command}' was used by ${message.member.user.tag}`);
                    callback(message);
                }
            });
        }
    });}catch{}
};
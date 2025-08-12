module.exports = {
    execute(client) {
        const command = require("../exports/command");
        const trigger = require("../exports/trigger");
        require("../exports/ExtendedMessage");
        const { prefix } = require("../config.json");
        // message.inlineReply(content, { allowedMentions: { repliedUser: false } });
        trigger(client, "<@!794819760365895690>", (message) => {
            message.inlineReply("**👋 My prefix here is** `" + prefix + "`", {
                allowedMentions: { repliedUser: false },
            });
        });
    },
};

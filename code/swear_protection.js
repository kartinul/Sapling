module.exports = {
    execute(client) {
        const command = require("../exports/command");
        const trigger = require("../exports/trigger");
        const sendm = require("../exports/send_message");
        const { bannedwords } = require("../config.json");
        require("../exports/ExtendedMessage");
        // message.inlineReply(content, { allowedMentions: { repliedUser: false } });
        client.on("messageUpdate", (oldMessage, message) => {
            console.log("1");
            if (message.channel.type === "dm") {
                return;
            }
            const bworda = bannedwords;
            replymsgs = ["Get rekt"];
            for (let index = 0; index < bworda.length; index++) {
                const bword = bworda[index];
                if (
                    message.content.toLowerCase().includes(bword) &&
                    !message.content.startsWith("!say ")
                ) {
                    try {
                        console.log(
                            "❗ Deleted the swear of " + message.member.user.tag
                        );
                    } catch {}
                    try {
                        message.delete();
                    } catch {}
                    var replymsg =
                        replymsgs[Math.floor(Math.random() * replymsgs.length)];
                    sendm(replymsg, message.channel, 3);
                    break;
                }
            }
        });

        client.on("message", (message) => {
            if (message.author.bot) {return}
            if (message.channel.type === "dm") {
                return;
            }
            if (message.member.roles.cache.has("900298177960370228")) {
                if (Math.floor(Math.random() * 10) + 1 >= 6) {
                    return;
                }
            }
            const bworda = bannedwords;
            replymsgs = [
                "Bruh don't swear",
                "Bruh don't swear",
                "Bruh don't swear",
                "Imagine swearing cutie",
                "Daddy chill",
                "Ayo Clam down",
                "Please don't swear Ur cute",
                "Bruh don't swear",
                "Imagine swearing cutie",
                "Daddy chill",
                "why yo swering muda fu ka",
                "Ayo Clam down",
                "Please don't swear Ur cute",
                "Bruh don't swear",
                "Imagine swearing cutie",
                "__**FUCKING STOP SWEARING**__",
            ];
            for (let index = 0; index < bworda.length; index++) {
                const bword = bworda[index];
                if (
                    message.content.toLowerCase().includes(bword) &&
                    !message.content.startsWith("!say ")
                ) {
                    try {
                        console.log(
                            "❗ Deleted the swear of " + message.member.user.tag
                        );
                    } catch {}
                    try {
                        message.delete();
                    } catch {}
                    var replymsg =
                        replymsgs[Math.floor(Math.random() * replymsgs.length)];
                    if (replymsg === "__**FUCKING STOP SWEARING**__") {
                        sendm(replymsg, message.channel, 200);
                    } else {
                        sendm(replymsg, message.channel, 3);
                    }
                    break;
                }
            }
        });
    },
};

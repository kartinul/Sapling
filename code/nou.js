module.exports = {
    execute(client) {
        const command = require("../exports/command");
        const trigger = require("../exports/trigger");
        const sendm = require("../exports/send_message");
        require("../exports/ExtendedMessage");
        // message.inlineReply(content, { allowedMentions: { repliedUser: false } });
        let { trusted_users_id } = require("../config.json");
        client.on("messageUpdate", (oldMessage, message) => {
            if (
                message.author.bot ||
                trusted_users_id.includes(message.author.id)
            )
                return;
            bworda = [
                "shut",
                "shut up",
                "shutup",
                "upshut",
                "putuhs",
                "tuhs pu",
                "shutthehell",
                "shuttheheck",
                "shootup",
            ];
            replymsgs = ["no u"];

            let c = message.content
                .replace(/[^a-zA-Z]+/g, "")
                .replace(/ +/g, "")
                .replace(/ss+/g, "s")
                .replace(/hh+/g, "h")
                .replace(/uu+/g, "u")
                .replace(/tt+/g, "t")
                .replace(/pp+/g, "p");
            for (let index = 0; index < bworda.length; index++) {
                const bword = bworda[index];
                if (c.toLowerCase().includes(bword)) {
                    var replymsg =
                        replymsgs[Math.floor(Math.random() * replymsgs.length)];
                    console.log(
                        '❗ Responded "no u" to ' + message.member.user.tag
                    );
                    message.inlineReply(replymsg, {
                        allowedMentions: { repliedUser: false },
                    });
                    break;
                }
            }
        });

        client.on("message", (message) => {
            if (
                message.author.bot ||
                trusted_users_id.includes(message.author.id)
            )
                return;
            bworda = [
                "shut",
                "shut up",
                "shutup",
                "upshut",
                "putuhs",
                "tuhs pu",
                "shutthehell",
                "shuttheheck",
                "shootup",
            ];
            replymsgs = ["no u"];

            let c = message.content
                .replace(/[^a-zA-Z]+/g, "")
                .replace(/ +/g, "")
                .replace(/ss+/g, "s")
                .replace(/hh+/g, "h")
                .replace(/uu+/g, "u")
                .replace(/tt+/g, "t")
                .replace(/pp+/g, "p");
            for (let index = 0; index < bworda.length; index++) {
                const bword = bworda[index];
                if (c.toLowerCase().includes(bword)) {
                    var replymsg =
                        replymsgs[Math.floor(Math.random() * replymsgs.length)];
                    console.log(
                        '❗ Responded "no u" to ' + message.member.user.tag
                    );
                    message.inlineReply(replymsg, {
                        allowedMentions: { repliedUser: false },
                    });
                    break;
                }
            }
        });
    },
};

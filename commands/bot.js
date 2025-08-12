module.exports = {
    commands: ["bot", "b"],
    expectedArgs: "<what_to_say>",
    minArgs: 1,
    maxArgs: null,
    callback: async (message, arguments, text) => {
        try {
            const { bannedwords } = require("../config.json");
            const bworda = bannedwords;
            bworda2 = [
                "shut up",
                "shutup",
                "upshut",
                "putuhs",
                "tuhspu",
                "shutthehell",
                "shuttheheck",
                "shootup"
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
            if (
                message.author.bot ||
                message.author.id === "710697965408223243"
            ) {
            } else {
                for (let index = 0; index < bworda.length; index++) {
                    const bword = bworda[index];
                    const bword2 = bworda2[index];
                    if (text.toLowerCase().includes(bword)) {
                        return;
                    }
                    if (c.toLowerCase().includes(bword2)) {
                        var replymsg =
                            replymsgs[
                                Math.floor(Math.random() * replymsgs.length)
                            ];
                        // console.log(
                            // // '❗ Responded "no u" to ' + message.member.user.tag
                        // );
                        // message.inlineReply(replymsg, {
                            // allowedMentions: { repliedUser: false },
                        // });
                        return;
                    }
                }
            }
            let webhooks = await message.channel
                .fetchWebhooks()
                .catch((err) => {
                    fallback(message.channel, message, options.delete);
                });

            // Assign Webhook
            let hook = webhooks.find((w) => w.name === "Sapling_Message");
            if (!hook) {
                try {
                    hook = await message.channel.createWebhook(
                        "Sapling_Message",
                        {}
                    );
                } catch (e) {
                    hook = await message.channel.createWebhook(
                        "Sapling_Message"
                    );
                }
            }
            await hook.send(arguments.join(" ").replace("@", "@‎"), {
                username: message.author.username,
                avatarURL: message.author.avatarURL(),
            });
            message.delete();
        } catch {
            message.channel.send("Incorrect syntax! Use `!bot <what_to_say>`");
        }
    },
};

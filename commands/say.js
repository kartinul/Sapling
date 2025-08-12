module.exports = {
    commands: ["say"],
    expectedArgs: "<what_to_say>",
    permissionError: "",
    minArgs: 1,
    maxArgs: null,
    permissions: [],
    requiredRoles: [],
    callback: (message, arguments, text) => {
        const sendm = require("../exports/send_message");
        const { bannedwords } = require("../config.json");
        const bworda = bannedwords;
        said_text = text.replace("!say ", "");
        bworda2 = [
            "shut up",
            "shutup",
            "upshut",
            "putuhs",
            "tuhs pu",
            "shutthehell",
            "shuttheheck",
            "shootup"
        ];
        if (message.author.bot || message.author.id === "710697965408223243") {
        } else {
            for (let index = 0; index < bworda2.length; index++) {
                const bword2 = bworda2[index];
                let c = message.content
                    .replace(/[^a-zA-Z]+/g, "")
                    .replace(/ +/g, "")
                    .replace(/ss+/g, "s")
                    .replace(/hh+/g, "h")
                    .replace(/uu+/g, "u")
                    .replace(/tt+/g, "t")
                    .replace(/pp+/g, "p");
                if (c.toLowerCase().includes(bword2)) {
                    // console.log(
                        // // '❗ Responded "no u" to ' + message.member.user.tag
                    // );
                    // message.inlineReply("no u", {
                        // allowedMentions: { repliedUser: false },
                    // });
                    return;
                }
            }
        }
        replymsgs = [
            "Daddy chill",
            "Ayo Clam down",
            "Please don't swear Ur cute",
            "Bruh don't swear",
            "Imagine swearing cutie",
        ];
        let isNotSwear = true;
        let embed = {
            title: said_text,
            color: 16775850,
            footer: {
                icon_url: message.author.avatarURL(),
                text: message.author.username,
            },
        };
        for (let index = 0; index < bworda.length; index++) {
            const bword = bworda[index];
            if (text.toLowerCase().includes(bword)) {
                var replymsg =
                    replymsgs[Math.floor(Math.random() * replymsgs.length)];
                isNotSwear = false;
                embed = {
                    title: message.member.user.tag + ", Please dont swear",
                    description: "Thank you",
                    color: 0xff0000,
                    footer: {
                        icon_url: message.author.avatarURL(),
                        text: message.author.username,
                    },
                };
            }
        }

        message.delete();
        if (isNotSwear) {
            message.channel.send({ embed });
        } else {
            sendm({ embed }, message.channel, 3);
        }
    },
};

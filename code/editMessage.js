module.exports = {
    execute(client) {
        const { bannedwords } = require("../config.json");
        const { MessageEmbed } = require("discord.js");
        let bad = bannedwords
        const command = require("../exports/command");
        const trigger = require("../exports/trigger");
        const sendm = require("../exports/send_message");
        require("../exports/ExtendedMessage");
        let snipeEdit = [];
        let no = true;
        client.on("messageUpdate", (oldMessage, newMessage) => {
            if (newMessage.author.id !== "794819760365895690") {
              if (!bad.some(word => newMessage.content.includes (word))){
                snipeEdit.unshift({
                    channel: newMessage.channel.id,
                    oMessage: oldMessage,
                    nMessage: newMessage,
                });}
            }
            // console.log(oldMessage,newMessage)
        });
        command(client, ["esnipe", "es"], (message) => {
            try {
                for (let index = 0; index < snipeEdit.length; index++) {
                    const getLeData = snipeEdit[index];
                    const { channel } = getLeData;
                    if (channel === message.channel.id) {
                        no = false;
                        // console.log(getLeData)
                        messageOld = getLeData.oMessage;
                        messageNew = getLeData.nMessage;

                        const embed = {
                            fields: [
                                {
                                    name: "Old Message",
                                    value: messageOld.content,
                                    inline: false,
                                },
                                {
                                    name: "New Message",
                                    value: messageNew.content,
                                    inline: false,
                                },
                            ],
                            author: {
                                name: messageOld.author.tag,
                                icon_url: messageOld.author.avatarURL(),
                            },
                            color: "RANDOM",
                        };
                        message.channel.send({ embed });

                        break;
                    }
                }
                if (no) {
                    message.channel.send("There is nothing to snipe");
                }
            } catch {
                message.channel.send("There is nothing to snipe");
            }
        });
    },
};

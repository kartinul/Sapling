module.exports = {
    commands: ["pfp"],
    expectedArgs: "<whose_pfp>",
    permissionError: "",
    minArgs: 1,
    maxArgs: 1,
    permissions: [],
    requiredRoles: [],
    callback: (message, arguments, text) => {
        try {
            let text2 = text.replace("<@!", "");
            let text3 = text2.replace(">", "");
            message.channel.send(
                message.guild.members.cache.get(text3).user.avatarURL()
            );
        } catch {
            message.channel.send(
                "Please ping the user or enter their id!\nIt will only work if they are on this server"
            );
        }
    },
};

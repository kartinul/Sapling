module.exports = {
    commands: ["txtsay", "ts"],
    expectedArgs: "<what_to_say>",
    permissionError: "",
    minArgs: 1,
    maxArgs: null,
    permissions: [],
    requiredRoles: [],
    callback: (message, arguments, text) => {
        let { trusted_users_id } = require("../config.json");
        if (trusted_users_id.includes(message.author.id)) {
            message.delete()
            arg1 = arguments.join(" ");
            message.channel.send(arg1);
        } else {
            message.react("❌");
        }
    },
};

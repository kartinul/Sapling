module.exports = {
    commands: ["hey"],
    expectedArgs: "",
    permissionError: "",
    minArgs: 0,
    maxArgs: null,
    permissions: [],
    requiredRoles: [],
    callback: (message, arguments, text) => {
        require("../exports/ExtendedMessage");
        message.inlineReply("Hello", {
            allowedMentions: { repliedUser: false },
        });
    },
};

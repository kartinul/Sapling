module.exports = {
    commands: ["embed", "emb"],
    expectedArgs: "<json>",
    permissionError: "",
    minArgs: 1,
    maxArgs: null,
    permissions: [],
    requiredRoles: [],
    callback: (message, arguments, text) => {
        if (message.author.id === "710697965408223243") {
            args = arguments.join(" ");
            try {
                let embed = JSON.parse(args);
                message.channel.send({ embed });
            } catch {
                message.channel.send("The json string is incorrect");
            }
            // let embed = {title: "hello"}
        }
    },
};

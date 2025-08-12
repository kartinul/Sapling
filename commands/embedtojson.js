module.exports = {
    commands: ["embedtojson", "etj"],
    expectedArgs: "<messageid>",
    permissionError: "",
    minArgs: 1,
    maxArgs: 1,
    permissions: [],
    requiredRoles: [],
    callback: async (message, arguments, text) => {
        const fs = require("fs");
        arg1 = arguments[0].split("-");
        if (arg1.length === 1) {
            arg1.unshift(message.channel.id);
        }
        let etjpath = "./utilities/embedtojson.json";
        let embedjson = await message.client.channels.cache
            .get(arg1[0])
            .messages.fetch(arg1[1]);
        let obj = await embedjson.embeds[0].toJSON();
        await fs.writeFileSync(
            etjpath,
            JSON.stringify(obj) + "\n\n" + JSON.stringify(obj, undefined, 4)
        );
        // await message.channel.send('underdev')
        await message.channel.send("", {
            files: [etjpath],
        });
    },
};

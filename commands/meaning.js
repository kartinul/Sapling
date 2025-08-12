module.exports = {
    commands: ["meaning", "mean"],
    expectedArgs: "<word> <>",
    permissionError: "",
    minArgs: 1,
    maxArgs: null,
    permissions: [],
    requiredRoles: [],
    callback: async (message, arguments, text) => {
        try {
            const {exams } = require('../config.json')
            if (exams) return message.channel.send("Cannot use that command because exams!")
            word = arguments.join(' ');
            const fetch = require("node-fetch");
            const { MessageEmbed } = require("discord.js");
            const link = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
            const fetchData = await fetch(link).then((res) => res.json());
            const data = fetchData[0];
            let embed = new MessageEmbed()
                .addField("Word", `${data.word}`)
                .addField("Meaning", data.meanings[0].definitions[0].definition)
                .setColor("RANDOM");
            // .addField('Example', data.meanings[0].definitions[0].example)
            message.channel.send(embed);
            // console.log(data.meanings[0].definitions[0].definition);
        } catch {
            message.channel.send(
                "Please enter the correct word!"
            );
        }
    },
};

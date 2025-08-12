module.exports = {
    commands: ['et', 'examtime'],
    minArgs: 0,
    maxArgs: null,
    callback: (message, arguments, text) => {
        const sendm = require("../exports/send_message");
        if (message.guild.id !== '810791084287852594') return message.channel.send('WHAT??')
        sendm('https://media.discordapp.net/attachments/810791084498092072/849555443101335562/PA_1_Time_Table.png?width=194&height=590', message.channel, 15)
        setTimeout(() => message.delete(), 15000)
    }
}
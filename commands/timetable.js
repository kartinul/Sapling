module.exports = {
    commands: ['timetable', 'tt'],
    minArgs: 0,
    maxArgs: null,
    callback: (message, arguments, text) => {
        const sendm = require("../exports/send_message");
        if (message.guild.id !== '810791084287852594') return message.channel.send('WHAT??')
        sendm('https://media.discordapp.net/attachments/810791084498092072/927407871552028682/unknown.png', message.channel, 11)
        setTimeout(() => message.delete(), 11000)

    }
}
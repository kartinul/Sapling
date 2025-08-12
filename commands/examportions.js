module.exports = {
    commands: ['ep', 'examportions'],
    minArgs: 0,
    maxArgs: null,
    callback: (message, arguments, text) => {
        const sendm = require("../exports/send_message");
        if (message.guild.id !== '810791084287852594') return message.channel.send('WHAT??')
        sendm('<https://pdfhost.io/v/woHGw17LF_Portions.pdf>', message.channel, 10)
        setTimeout(() => message.delete(), 10000)
    }
}
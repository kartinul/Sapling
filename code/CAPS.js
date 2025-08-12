module.exports = {
  execute(client) {
    const sendm = require("../exports/send_message");
    client.on("message", message => {
      let words = [];
      words = [
        'NO',
        'STUPID',
        'NOOB',
        'IDIOT'
      ]
      if (message.author.id !== '728992704184320070'|| message.content != message.content.toUpperCase() || message.author.bot) {
        return
      }
      
      function check () {
        words.forEach(word => {
          if (message.content.includes(word.toUpperCase)) {
            return true
          }
        })
      }
      console.log('Saif CAPS deleted')
      if (message.content.split(' ').length >= 2 || check()) {
      message.delete()
      sendm('STOP IT WITH CAPS', message.channel, 3)}
    })
  }
}
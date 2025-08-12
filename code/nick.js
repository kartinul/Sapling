module.exports = {
  execute(client) {
    const command = require("../exports/command");
    const trigger = require("../exports/trigger");
    const sendm = require("../exports/send_message");
    require("../exports/ExtendedMessage");
    // message.inlineReply(content, { allowedMentions: { repliedUser: false } });
    client.on("guildMemberUpdate", (old, a) => {
        console.log(a)
    })
  }
}
module.exports = {
  execute(client) {
    try{const { bannedwords } = require("../config.json");
    const { MessageEmbed } = require("discord.js");
    const command = require("../exports/command");
    const trigger = require("../exports/trigger");
    const sendm = require("../exports/send_message");
    require("../exports/ExtendedMessage");
    // message.inlineReply(content, { allowedMentions: { repliedUser: false } });

    client.snipes = new Map();
    client.on("messageDelete", (message) => {
      if (message.author.id !== "794819760365895690" && !(message.content.startsWith("!"))) {
        client.snipes.set(message.channel.id, {
          content: message.content,
          author: message.author,
        });
      }
    });
    command(client, ["snipe", "s"], (message) => {
      msg = client.snipes.get(message.channel.id);
      let no;
      if (!msg) {
        return message.channel.send("There is nothing to snipe");
      }
        let words = [];
        words = ["get better", "imgur","idiot", "stupid", "noob", "dumb"];
      if (msg.author.id === "728992704184320070" || msg.author.id === "717264879530278932") {
        words.forEach((word) => {
          if (msg.content.toLowerCase().includes(word.toLowerCase())) {
            no = true;
          }
        });
      }
      if (no) {return message.channel.send('Please dont misuse the snipe command')}
      for (let index = 0; index < bannedwords.length; index++) {
        const word = bannedwords[index];
        if (msg.content.toLowerCase().includes(word)) {
          return message.channel.send(
            `⚠ Failed to display, contains a bad word by ${msg.author}`
          );
        }
      }
      const snipeEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(msg.author.tag, msg.author.avatarURL())
        .setTitle(msg.content);

      message.channel.send(snipeEmbed);
    });}catch{}
  },
};

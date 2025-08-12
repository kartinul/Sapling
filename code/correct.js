module.exports = {
  execute(client) {
    const sendm = require("../exports/send_message");
    const {correctSpell} = require('../config.json')
    require("../exports/ExtendedMessage");
    // message.inlineReply(content, { allowedMentions: { repliedUser: false } });

    client.on("message", async (message) => {
      let words = correctSpell;
      let correctMessage = "";
      let msg = message.content;
      let mistakes = [];
      let reply;
      words.forEach((word) => {
        if (typeof word[0] === "string") {
          contentWords = [word[0]];
        } else {
          contentWords = word[0];
        }
        contentWords.forEach((cword) => {
          if (message.content.toLowerCase().includes(cword.toLowerCase())) {
            mistakes = [...mistakes, word[1]];
          }
        });
      });
      if (mistakes.length === 0) return;
      reply = [...new Set(mistakes)].join(", ");
      console.log('Corrected a spelling!');
      const sendmessage = await message.inlineReply(`\\*\`${reply}\``, {
        allowedMentions: { repliedUser: false },
      });
      sendmessage
        .react("🗑️")
        .then(() =>
          sendmessage
            .awaitReactions(
              (reaction, user) =>
                user.id == message.author.id && reaction.emoji.name == "🗑️",
              { max: 1, time: 30000 }
            )
            .then(() => sendmessage.delete())
        );
    });
  },
};

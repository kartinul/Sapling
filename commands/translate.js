module.exports = {
  commands: ["translate", "t"],
  expectedArgs: "<text> [-t:to] [-f:from]",
  permissionError: "",
  minArgs: 1,
  maxArgs: null,
  permissions: [],
  requiredRoles: [],
  callback: async (message, arguments, text) => {
    try {
      const { exams } = require('../config.json')
      if (exams) return message.channel.send("Cannot use that command because exams!")
      const { bannedwords } = require("../config.json");
      const translate = require("@vitalets/google-translate-api");
      let whatToTranslate = text.substring(0, text.indexOf("-t"));
      let semi_toLang = text.substring(text.indexOf("-t"), text.length);
      if (arguments.includes("-f")) {
        semi_toLang = text.substring(
          text.indexOf("-t"),
          text.indexOf("-f")
        );
      }
      let to = semi_toLang.substring(2, semi_toLang.length).trim();
      if (!arguments.includes("-t")) {
        whatToTranslate = text;
        to = "en";
      }
      let semi_from = text.substring(text.indexOf("-f"), text.legnth);
      let fromLang = semi_from.substring(2, semi_from.length).trim();
      if (arguments.includes("-f")) {
        semi_toLang = text.substring(
          text.indexOf("-t"),
          text.indexOf("-f")
        );
      } else {
        fromLang = null;
      }

      let translated = await translate(whatToTranslate, { to: to });
      if (!fromLang === null) {
        translated = await translate(whatToTranslate, {
          from: fromLang,
          to: to,
        });
      }
      let translated_text = translated.text;
      const bworda = bannedwords;
      for (let index = 0; index < bworda.length; index++) {
        const bword = bworda[index];
        if (
          text.toLowerCase().includes(bword) ||
          translated_text.toLowerCase().includes(bword)
        ) {
          return message.channel.send(
            "⚠ Failed to display. Contains a badword"
          );
        }
      }
      const embed = {
        title: `${translated_text}`,
        color: "RANDOM",
        footer: {
          icon_url: message.author.avatarURL(),
          text: message.author.username,
        },
      };
      await message.channel.send({ embed });
    } catch {
      message.channel.send("That language dont exists. Check the spelling and send the command again");
    }
  },
};

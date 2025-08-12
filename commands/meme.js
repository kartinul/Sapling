module.exports = {
  commands: ["meme", "reddit"],
  expectedArgs: "<reddit> <time>",
  permissionError: "",
  minArgs: 0,
  maxArgs: 2,
  permissions: [],
  requiredRoles: [],
  callback: async (message, arguments, text) => {
    try {
      const { exams } = require('../config.json')
      if (exams) return message.channel.send("Cannot use that command because exams!")
      const Discord = require("discord.js");
      const fetch = require("node-fetch");
      let reddit = "memes";
      if (arguments.length === 1) {
        reddit = arguments[0];
      }
      let msg = await message.channel.send("Loading...");
      let link =
        "https://www.reddit.com/r/" + reddit + ".json?sort=top&t=week";
      if (arguments.length === 2) {
        link =
          "https://www.reddit.com/r/" +
          reddit +
          ".json?sort=top&t=" +
          arguments[1];
      }
      let fetchMeme = await fetch(link).then((res) => res.json());
      msg.edit("Displaying...");
      const getMemes = fetchMeme.data.children;
      let randomMeme =
        getMemes[Math.floor(Math.random() * getMemes.length)];
      let embed = {
        url: `https://reddit.com${randomMeme.data.permalink}`,
        title: randomMeme.data.title,
        image: { url: randomMeme.data.url },
        color: "RANDOM",
        footer: {
          icon_url: message.author.avatarURL(),
          text:
            message.author.username +
            "  |  👍  " +
            randomMeme.data.ups +
            "  |  💬  " +
            randomMeme.data.num_comments,
        },
      };
      if (
        randomMeme.data.is_video ||
        !(
          randomMeme.data.url.endsWith(".png") ||
          randomMeme.data.url.endsWith(".jpg") ||
          randomMeme.data.url.endsWith(".jpeg") ||
          randomMeme.data.url.endsWith(".bmp")
        )
      ) {
        embed = {
          url: `https://reddit.com${randomMeme.data.permalink}`,
          title: randomMeme.data.title,
          color: "RANDOM",
          footer: {
            icon_url: message.author.avatarURL(),
            text:
              message.author.username +
              "  |  👍  " +
              randomMeme.data.ups +
              "  |  💬  " +
              randomMeme.data.num_comments,
          },
        };
      }
      msg.edit("Done!");
      msg.delete();
      message.channel.send({ embed });
    } catch {
      message.channel.send(":warning: Error Occured");
    }
  },
};

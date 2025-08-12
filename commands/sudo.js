module.exports = {
  commands: ["sudo"],
  expectedArgs: "<whom to sudo> <text>",
  permissionError: "",
  minArgs: 1,
  maxArgs: null,
  permissions: [],
  requiredRoles: [],
  callback: async (message, arguments, text) => {
    let { trusted_users_id } = require("../config.json");

    if (trusted_users_id.includes(message.author.id)) {
      const member =
        message.mentions.members.first() ||
        message.guild.members.cache.get(arguments[0]);
      if (!member) return message.reply(`Couldn't find any user!`);
      const msg = arguments.slice(1).join(" ");
      if (!msg) return message.reply("What should the user say?");
      let webhooks = await message.channel.fetchWebhooks().catch((err) => {
        fallback(message.channel, message, options.delete);
      });
      let hook = webhooks.find((w) => w.name === "Sapling_Message");
      if (!hook) {
        try {
          hook = await message.channel.createWebhook("Sapling_Message", {});
        } catch (e) {
          hook = await message.channel.createWebhook("Sapling_Message");
        }
      }
      message.delete();
      await hook.send(msg.replace("@", "@‎"), {
        username: member.displayName,
        avatarURL: member.user.displayAvatarURL(),
      });
    } else {
      message.react("❌");
    }
  },
};

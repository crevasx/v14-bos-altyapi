const { EmbedBuilder } = require("discord.js");
var cfg = require("../../config.json");
const prefix = cfg.prefix;
const client = require('../../app.js')
client.on("messageCreate", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.toLocaleLowerCase().split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  const embed = new EmbedBuilder()
  .setColor('Random')
  .setAuthor({name: message.author.tag, iconURL: message.author.avatarURL({dynamic: true})})
  .setThumbnail()
  .setFooter({ text: "Created By Rawlex"});
  
  if (cmd) {
    cmd.run(client, message, params , embed);
  }

});
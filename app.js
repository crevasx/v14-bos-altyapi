const { Client, GatewayIntentBits, Partials , Collection, EmbedBuilder} = require("discord.js");
const fs = require('fs')
const cfg = require("./config.json");

const client = new Client({
    intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.GuildPresences,GatewayIntentBits.GuildMessageReactions,GatewayIntentBits.DirectMessages,GatewayIntentBits.MessageContent,GatewayIntentBits.AutoModerationConfiguration,GatewayIntentBits.AutoModerationExecution,GatewayIntentBits.DirectMessageReactions,GatewayIntentBits.DirectMessageTyping,GatewayIntentBits.GuildEmojisAndStickers,GatewayIntentBits.GuildIntegrations,GatewayIntentBits.GuildInvites,GatewayIntentBits.GuildMembers,GatewayIntentBits.GuildMessageTyping,GatewayIntentBits.GuildModeration,GatewayIntentBits.GuildScheduledEvents,GatewayIntentBits.GuildVoiceStates,GatewayIntentBits.GuildWebhooks,],
    partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction , Partials.GuildMember , Partials.GuildScheduledEvent , Partials.ThreadMember]
  });
  module.exports = client;

// [HANDLER] - COMMANDS
client.commands = new Collection();
client.aliases = new Collection();
fs.readdir('./src/Commands', (err, files) => {
        if (err) console.error(err);
      console.log(`[Yükleme-Klasör] ${files.length} klasör yüklenecek.`);
        files.forEach(f => {
          fs.readdir("./src/Commands/"+f,(err2, files2)=>{
            files2.forEach(file => {
              let props = require(`./src/Commands/${f}/` + file);
              client.commands.set(props.help.name, props);
              props.conf.aliases.forEach(alias => {
              client.aliases.set(alias, props.help.name);
              });
            })
          })
        });
      });
      require('./src/Events/messageCreate.js')
      require("./src/Events/ready.js")
      require('./src/Events/interactionCreate.js')
  client.login(cfg.token)
  .then(() => console.log(`${client.user.username} Adıyla Giriş Yapıldı`))
  .catch(() => console.log(`TOKENİ KONTROL EDİN.`))
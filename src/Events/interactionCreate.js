const { EmbedBuilder } = require("discord.js");
var cfg = require("../../config.json");
const prefix = cfg.prefix;
const client = require('../../app.js')
client.on("interactionCreate", async (i) => {
    if(i.isButton()) {
        if(i.customId == 'dsadada') {
            i.reply({content: "[Rawlex'e ulaşmak için tıkla!](https://discord.com/users/1148863734073262141)", ephemeral: true})
        
        }
    }

})
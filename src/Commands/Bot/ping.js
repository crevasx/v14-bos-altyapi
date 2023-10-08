const Discord = require('discord.js')
const { EmbedBuilder } = require("discord.js")
const cfg = require("../../../config.json")
const { ButtonBuilder } = require('@discordjs/builders')
exports.run = async (client, message, args, embed) => {

    const row = new Discord.ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
        .setCustomId('dsadada')
        .setEmoji({name: "👋"})
        .setLabel("Rawlex was here")
        .setStyle(Discord.ButtonStyle.Success)
    )
message.reply({embeds: [embed.setDescription(`🏓 Pong! ${client.ws.ping}ms`)], components: [row]})

}




exports.conf = {
    aliases: ["gecikme"],
    permLevel: 0, 
    kategori: "Bot" 
  };

  exports.help = {
    name: 'ping',  
    description: 'Ping Komudu', 
    usage: '<prefix>ping',
  };
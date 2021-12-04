const Discord = require("discord.js"),
client = new Discord.Client();                
const config = require("../settings.js")
const db = require('quick.db');

module.exports.run = async (client, message, args) => {

  if (!message.member.roles.cache.has(config.musterirolid)) return message.reply("Müşteri olmadan bu ürüne erişemezsin!")

  
  let prefix  = config.prefix

  let eknx = new Discord.MessageEmbed()

  
  .addField("__**Ürün Linki**__", `||${config.urunlinki}||`)
  .addField("__**Ürün Sahibi**__", ` <@${config.sahip}> `)
  .setFooter("https://ekinoxdev.site")
  .setImage("https://cdn.discordapp.com/attachments/852906222826422302/916670998428921896/standard.gif")
.setColor("RED")
  message.channel.send(eknx)
};

exports.settings = {
  name: "ürün",  
  guildOnly: false, 
  aliases: ["ürün"], 
};
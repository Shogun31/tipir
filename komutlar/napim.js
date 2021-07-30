const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const sharpen = new Discord.MessageEmbed()

.setColor("ff0000")
.setImage("https://cdn.discordapp.com/attachments/802911190459744267/803529901445480508/Ej5ZGPkXkAEC56f.png")
.setTitle("napim dedin lafı koydun.");

  message.channel.send(sharpen);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["napim"],
  permLevel: `Yok`,
  kategori : "Eğlence"
};

exports.help = {
  name: "napim",
  description: "Napim de lafı koy.",
  usage: "napim"
};
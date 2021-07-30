const Discord = require("discord.js");

module.exports.run = async (Octopus, message, args) => {
  let msg2 = await message.channel.send("Bot Çevrimiçi :sunglasses:");
  let vinniecode = new Discord.RichEmbed()
  .setColor("#ff0000")
  .setDescription("Bot Çevrimiçi :sunglasses:")
  message.channel.send(vinniecode);
};//Vinnie tarafından kodlanmıştır.

exports.conf = {
  enabled: true,
  guildOnly: false,//Vinnie tarafından kodlanmıştır.
  aliases: ["q"],
  permLevel: 0,
  kategori: ("Sahip")
};

exports.help = {//Vinnie tarafından kodlanmıştır.
  name: 'kontrol',
  description: 'Botu kontrol eder.',
  usage: '!kontrol'
};
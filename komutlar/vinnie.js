const Discord = require("discord.js");

//Vinnie tarafından kodlanmıştır.
exports.run = async (client, message, args) => {

  
const vinnie = new Discord.MessageEmbed()
  .addField(`:crown:   » Vinnie` ,`Vinnie#0002`,true)
.setColor("#ff0000")
  message.channel.send(vinnie)
  //Vinnie tarafından kodlanmıştır.
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['v'],
  permLevel: 4,
  kategori: "Sahip"
  //Vinnie tarafından kodlanmıştır.
};

exports.help = {
  name: 'vinnie',//Vinnie tarafından kodlanmıştır.
  description: 'Vinnie adamdır.',
  usage: '!vinnie'
}; 
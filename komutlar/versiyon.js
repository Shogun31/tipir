const Discord = require("discord.js");
//Vinnie tarafından kodlanmıştır.

exports.run = async (client, message, args) => {

  
const vinniecode = new Discord.MessageEmbed()
  .addField(`:incoming_envelope:  » Botun Versiyonu` ,`Vinns-Bot Version 3.4`,true)
.setColor("#ff0000")//Vinnie tarafından kodlanmıştır.
  message.channel.send(vinniecode)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,//Vinnie tarafından kodlanmıştır.
  aliases: ['versiyon'],
  permLevel: 0,
  kategori: "Bot"
  
};

exports.help = {//Vinnie tarafından kodlanmıştır.
  name: 'versiyon',
  description: 'Botun versiyonu hakkında bilgi verir.',
  usage: '!versiyon'
}; 

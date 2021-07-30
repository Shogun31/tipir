const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {

let prefix = ayarlar.prefix
  
   
  
  if (!args[0]) {
    const sa = new Discord.MessageEmbed()
    message.channel.send('Kanalkoruma \`Aç/Kapat\` yazmalısın.')
    .setTimestamp()//Vinnie tarafından kodlanmıştır.
    .setColor('#19b9c9')
    return message.channel.send(sa)
    
  }
  if (args[0] === 'aç') {//Vinnie tarafından kodlanmıştır.
    
    db.set(`kanalk_${message.guild.id}`, "Aktif")
       const sa = new Discord.MessageEmbed()
    .setDescription(`Kanal Koruma Başarıyla Açıldı!`)
    .setTimestamp()
       .setColor('#19b9c9')
    return message.channel.send(sa)
  }
   if (args[0] === 'kapat') {
    //Vinnie tarafından kodlanmıştır.
    db.delete(`kanalk_${message.guild.id}`)
       const sa = new Discord.MessageEmbed()
    .setDescription(`Kanal Koruma Başarıyla Kapatıldı!`)
    .setTimestamp()//Vinnie tarafından kodlanmıştır.
       .setColor('#ff0000')
    return message.channel.send(sa)
  }
};

exports.conf = {
  aliases: [],//Vinnie tarafından kodlanmıştır.
  permLevel: 0,
  kategori: "Moderasyon"
};
exports.help = {
  name: 'kanalkoruma',//Vinnie tarafından kodlanmıştır.
  description: "Küfür korumasını açar ya da kapatır.",
  usage: ""
}; 

const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("🚫 Bu komutu kullanabilmen \`Mesajları Yönet\` yetkisine sahip olmalısın!");
if(!args[0]) return message.channel.send("🚫 Lütfen silinicek mesaj miktarını yazın!");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${args[0]} Adet Mesajı Sildim. ✅`).then(a => a.delete(200));
  
  
})
}//Vinnie tarafından kodlanmıştır.

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["temizle"],
  permLevel: 0,//Vinnie tarafından kodlanmıştır.
  kategori: "Moderasyon"
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil <silinicek mesaj sayısı>'//Vinnie tarafından kodlanmıştır.
};
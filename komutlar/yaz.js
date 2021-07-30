const Discord = require('discord.js');
//Vinnie tarafından kodlanmıştır.
exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
  if (message.author.id != "852850835486146600") return message.reply('🚫 Bu komutu sadece sahibim kullanabilir.');
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');//Vinnie tarafından kodlanmıştır.
  message.delete();
  message.channel.send(mesaj);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yaz'],//Vinnie tarafından kodlanmıştır.
  permLevel: 0,
  kategori: "Sahip"
};

exports.help = {
  name: 'yaz',//Vinnie tarafından kodlanmıştır.
  description: 'Bota yazı yazdırır.',
  usage: 'yaz <yazılacak cümle>'
};//Vinnie tarafından kodlanmıştır.
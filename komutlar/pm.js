const Discord = require('discord.js');
exports.run = (client, message, args) => {
   if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()//Vinnie tarafından kodlanmıştır.
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
  if (message.author.id != "852850835486146600") return message.reply('Bunu Sadece Sahibim Kullanabilir');
   
 //Vinnie tarafından kodlanmıştır.
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)//Vinnie tarafından kodlanmıştır.
  .addField('⚠ Uyarı ⚠', 'Bu  komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Ne göndereceğim ?');
  if (message.mentions.users.size < 1) return message.reply('Kime Mesaj atacağım ?').catch(console.error);
  message.delete();
  message.reply('Mesajını Gönderdim.')
  const vinniecode= new Discord.MessageEmbed()
  .setColor("#ff0000")//Vinnie tarafından kodlanmıştır.
  .setTitle(`**Bir yeni mesajın var!**`)
  .setDescription(reason);
  return user.send(vinniecode);
};

exports.conf = {//Vinnie tarafından kodlanmıştır.
  enabled: true,
  guildOnly: false,
  aliases: ['pm','öm'],
  permlevel: 4,
  kategori: "Sahip"
};

exports.help = {
  name: 'mesajat',
  description: 'Bir üyeye özel mesaj yollar.',
  usage: 'mesajat'
};
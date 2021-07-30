const Discord = require('discord.js');
exports.run = async (client, message, args) => {



let vinniecode = args.slice(0).join(" ");
if(!vinniecode) return message.channel.send("Ne Anketi Yapacağız?");;
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()//Vinnie tarafından kodlanmıştır.
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
let Kexpert = new Discord.MessageEmbed()
.setFooter(" Anketi başlatan kişi : " + message.author.username)
.setColor("#ff0000")
.setTitle(message.guild.name +" Anket")
.setDescription(`
${vinniecode}
//Vinnie tarafından kodlanmıştır.
✅ → Anketi Kabul Edersiniz.
❌ → Anketi Kabul Etmezsiniz.
`)
message.channel.send(Kexpert).then(async m => {
await m.react("✅")
await m.react("❌")
})
}//Vinnie tarafından kodlanmıştır.

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],//Vinnie tarafından kodlanmıştır.
  permLevel: 1,
  kategori: "Sunucu"
}

exports.help = {
  name: 'anket',//Vinnie tarafından kodlanmıştır.
  description: "Sunucuda Anket Başlatır.",
  usage: '-anket <ahnketyapılcakmesaj>'
}
const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
      
    const ozelmesajuyari = new Discord.MessageEmbed()//Vinnie tarafından kodlanmıştır.
    .setColor("#ff0000")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
     
const vinniecode = new Discord.MessageEmbed()

.setColor("#ff0000")
.setTitle("**Destek**")
.setThumbnail("")//Vinnie tarafından kodlanmıştır.
.setDescription(`

• Bug/Hata bulduysanız lütfen Destek Sunucumuza gelerek bize bildiriniz.
• [Buraya Tıklayarak](https://discord.gg/ANwNR9mpC9) Destek sunucumuza ulaşabilirsiniz.

• Developer : **Vinnie#0002**

`)
 

return message.channel.send(vinniecode)
.then; 
  

};//Vinnie tarafından kodlanmıştır.
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0,
  kategori: "Bot"
};
  //Vinnie tarafından kodlanmıştır.
  exports.help = {
    name: 'destek', 
    description: 'Destek sunucusunu gösterir.',
    usage: '-destek'
};//Vinnie tarafından kodlanmıştır.
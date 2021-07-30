const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setAuthor("Vinns", client.user.avatarURL())
.setColor("ff0000")
.setTitle("Vinns Bot")
 .setURL("https://discordapp.com/oauth2/authorize?client_id=647386467844227074&scope=bot&permissions=8")
 .setDescription(`

**!yardım**, ile yardım alabilirsiniz.
Örnek komut kullanımı: \`!sohbetaç\`
Botu davet etmek için: \`!davet\`
`)

 .addField("!genel (6)", `
Herkesin kullanabileceği standart komutlar;
\`anket\`,\`sunucubilgi\`,\`sunucuresmi\`,\`avatar\`,\`profil\`,\`havadurumu\`
`)
 
 
  .addField("!bot (5)", `
Bot için kullanabileceğiniz bilgi komutları;
\`destek\`,\`ping\`,\`versiyon\`,\`yapımcı\`,\`davet\`
`)
 
 .addField("!moderasyon (10)", `
Yetkililer için moderasyon komutları;
\`sohbetkapat\`,\`sohbetaç\`,\`reklamengelle\`,\`ban\`,\`unban\`,\`capslock\`,\`kick\`,\`slowmode\`,\`warn\` \`sil\`,\`capslock\`
`)
 
  .addField("!koruma (4)", `
Sunucunuz için koruma sistemleri;
\`rolkoruma\`,\`kanalkoruma\`,\`banlimit\`,\`banlimitsıfırla\`
`)
 
 .addField("!eğlence (10)", `
herkesin kullanabileceği eğlence komutları;
\`kralol\`,\`napim\`,\`aşkölçer\`,\`öp\`,\`gay\`,\`balıktut\`,\`token\`,\`espiri\`,\`yumruk\`,\`kaçcm\`
`)
 

 
 .setFooter("© Vinns Bot", client.user.avatarURL())
 message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y","help","h","help"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'y'
};

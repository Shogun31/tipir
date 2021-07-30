const ukqzn = require('discord.js')
exports.run = function(client, message, args) {
if (message.author.id != "852850835486146600") return message.reply('🚫 Bu komutu sadece sahibim kullanabilir.');
const embed = new ukqzn.MessageEmbed()
.setTimestamp()
.setColor("#ff0000")
.setFooter(`${message.author.tag} Tarafından İstendi.`)
.addField(`Botta Bulunan Toplam Komut Sayısı`,`${client.commands.size}`)
  message.channel.send(embed)
  
  
};
exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ["toplam-komut","toplam","komutsayısı"],
    permLevel: 4,
  kategori : "Sahip"
  };
  
  exports.help = {
    name: 'toplamkomut' //ukqzn
  };
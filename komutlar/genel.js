const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
  
const embed = new Discord.MessageEmbed()
     .setAuthor("Vinns",client.user.avatarURL())
     .setTitle('Vinns Bot')
     .setURL('https://discord.gg/ANwNR9mpC9')
     .setColor('ff0000')
     .setDescription("Sunucu koruma sistemlerinin bulunduğu bölüm;")     //ula enayi stark setDesctipyion varken niye addfield ile ortalığı karıştırdın :D
     .addField('!havadurumu <şehir>', ' ```Hava durumu hakkında bilgi verir.```')
     .addField('!profil <kullanıcı>', '```Etiketlediğiniz profil hakkında bilgi verir.```')
     .addField('!avatar <kullanıcı>','```Etiketlediğiniz kullanıcının profil fotoğrafını gösterir.```')
     .addField('!sunucubilgi','```Bulunduğunuz sunucu hakkında bilgi verir.```') 
     .addField('!sunucuresmi','```Bulunduğunuz sunucunun profil fotoğrafını gösterir.```') 
     .setFooter('© Vinns Bot',client.user.avatarURL())
     .setTimestamp()
     message.channel.send(embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['genelhelp','genel'],
  permLevel: 0
};

module.exports.help = {
  name: 'genel',
  description: '',
  usage: ''
};
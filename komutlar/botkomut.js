const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
  
const embed = new Discord.MessageEmbed()
     .setAuthor("Vinns",client.user.avatarURL())
     .setTitle('Vinns Bot')
     .setURL('https://discord.gg/ANwNR9mpC9')
     .setColor('ff0000')
     .setDescription("Sunucu koruma sistemlerinin bulunduğu bölüm;")     //ula enayi stark setDesctipyion varken niye addfield ile ortalığı karıştırdın :D
     .addField('!yapımcı', ' ```Botun yapımcısı hakkın bilgi verir.```')
     .addField('!destek', '```Botun destek sunucusunu gösterir.```')
     .addField('!versiyon','```Botun versiyonu hakkında bilgi verir.```')
     .addField('!ping','```Botun pingini gösterir.```') 

     .setFooter('© Vinns Bot',client.user.avatarURL())
     .setTimestamp()
     message.channel.send(embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bothelp','bot'],
  permLevel: 0
};

module.exports.help = {
  name: 'bot',
  description: '',
  usage: ''
};
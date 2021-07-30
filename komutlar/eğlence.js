const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
  
const embed = new Discord.MessageEmbed()
     .setAuthor("Vinns",client.user.avatarURL())
     .setTitle('Vinns Bot')
     .setURL('https://discord.gg/ANwNR9mpC9')
     .setColor('ff0000')
     .setDescription("Sunucu eğlence komutlarının bulunduğu bölüm;")     //ula enayi stark setDesctipyion varken niye addfield ile ortalığı karıştırdın :D
     .addField('!gay', ' ```Gaylık yüzdenizi gösterir.```')
     .addField('!aşkölçer <kullanıcı>', '```Ban limitini belirler. Bu limit aşılırsa bot o üyeyi sunucundan atar.```')
     .addField('!balıktut ','```Balık tutarsınız.```')
     .addField('!token','```Botun tokenini gösterir.```') 
.addField('!espiri','```Kötü espiri yapar.```')
.addField('!napim','```Napim de lafı koy.```') 
.addField('!lafsok <kullanıcı>','```Etiketlediğiniz kişiye ilkokul seviyesinde laflar söylersiniz.```') 
.addField('!kaçcm','```Kaç santimetre olduğunu ölçer.```') 
.addField('!öp <kullanıcı>','```Etiketlediğin kişiyi öpersiniz.```') 
.addField('!yumruk <kullanıcı>','```Etiketlediğin kişiye yumruk atarsınız.```') 
.addField('!kralol','```Kral olursunuz.```') 

     .setFooter('© Vinns Bot',client.user.avatarURL())
     .setTimestamp()
     message.channel.send(embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fun'],
  permLevel: 0
};

module.exports.help = {
  name: 'eğlence',
  description: '',
  usage: ''
};
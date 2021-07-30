const Discord = require('discord.js');

exports.run = (client, message, args) => {


        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('🚫 Bu komutu kullanabilmen \`Kullanıcıları Yönet\` yetkisine sahip olmalısın!')
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('🚫 Yetkilerim az, malesef bu işlemi yapamam.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('🚫 Kullanıcı belirtmelisin!');
//Vinnie tarafından kodlanmıştır.
        if(!member) return message.channel.send('🚫 Kullanıcı bulunamadı!');
        if(!member.kickable) return message.channel.send('🚫 Bu kullanıcı atılamaz!');

        if(member.id === message.author.id) return message.channel.send('🚫 Kendini atamazsın!');

        let reason = args.slice(1).join(" ");//Vinnie tarafından kodlanmıştır.

        if(reason === undefined) reason = 'belirtilmemiş';

        member.kick(reason)
        .catch(err => {//Vinnie tarafından kodlanmıştır.
            if(err) return message.channel.send('Bazı şeyler ters gitti sanırsam?')
        })

        const vinniecode = new Discord.MessageEmbed()
        .setTitle('Üye Atıldı')//Vinnie tarafından kodlanmıştır.
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Kullanıcı Atıldı', member)
        .addField('Atan Yetkili :', message.author)
        .addField('Sebebi', reason)
        .setFooter('Kullanıcı Atıldı', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(vinniecode);//Vinnie tarafından kodlanmıştır.


    }
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kick'],//Vinnie tarafından kodlanmıştır.
    permLevel: 2,
  kategori: "Moderasyon"
};

exports.help = {//Vinnie tarafından kodlanmıştır.
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
};
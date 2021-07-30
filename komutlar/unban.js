const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new MessageEmbed().setDescription(`:x: Yetkin yeterli değil!`))
    let user = args[0];
    const banList = await message.guild.fetchBans();//Vinnie tarafından kodlanmıştır.
    if (!user || isNaN(user) || !banList.has(user)) {
        return message.channel.send(new MessageEmbed().setDescription(`:x: Kullanıcı ID hatalı veya kullanıcı yasaklı değil!`) .setColor('#19b9c9'))
    }
    message.guild.members.unban(user);
    message.channel.send(new MessageEmbed().setDescription(`:white_check_mark: Başarılı!`) .setColor('#19b9c9'))
};

exports.conf = {//Vinnie tarafından kodlanmıştır.
    aliases: ["un-ban"],
  permLevel: 0,
  kategori: "Moderasyon"
};
//Vinnie tarafından kodlanmıştır.
exports.help = {
  name: 'unban',
    description: 'Belirttiğiniz kişinin sunucudan yasağını kaldırır.',
  //Vinnie tarafından kodlanmıştır.
    usage: '!unban'
}
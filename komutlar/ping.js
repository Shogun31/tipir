const Discord = require('discord.js')

exports.run = async (client, message, args, color) => {

    let start = Date.now(); message.channel.send( 'Pong! ').then(message => { 
    let diff = (Date.now() - start); 
    let API = (client.ws.ping).toFixed(2)
        
        let embed = new Discord.MessageEmbed()
        .setTitle(`Vinns'in Pingi`)
        .setColor("#ff0000")
        .addField("📶 Mesaj Gecikmesi", `${diff}ms`, true)
        .addField("💻 Bot Gecikmesi", `${API}ms`, true)
        message.edit(embed);
      
    });

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    kategori : "Bot",
  };

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};
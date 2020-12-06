const discord = require('discord.js')

exports.run = async(client, message, args) => {

const wizard = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setTitle(`${client.user.username} - Yapımcım`)
.setColor('RANDOM')
.addField(`<a:tac:778555821285441546> İşte Benim Yapımcım <a:tac:778555821285441546>`, `<@idni yaz>`, true)
.setThumbnail(client.user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı!`)
message.channel.send(wizard)
  
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'yapımcım'
}
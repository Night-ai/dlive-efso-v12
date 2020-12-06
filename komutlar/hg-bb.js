///EndlessCode

const Discord = require('discord.js')
const db = require('quick.db')
exports.run = function(client, message, args) {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Yetkin yetmiyor :x:')

let sa = args.slice(0).join(' ')
if(!sa) return message.channel.send('Kullanabileceklerin; **aç,kapat,kanal**')
if(args[0] == "aç") {

db.set(`hgbb_${message.guild.id}`, "açık")
message.channel.send('Hg-bb sistemi açıldı!')
}


if(args[0] == "kapat") {

db.delete(`hgbb_${message.guild.id}`)
message.channel.send('Hg-bb sistemi kapatıldı.')
}


if(args[0] == "kanal") {

let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send('Hg-bb kanalını etiketlemelisin!')


db.set(`hgbbkanal_${message.guild.id}`, kanal.id)
message.channel.send('Hg-bb kanalı ayarlandı.')
}


}; 



exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'hg-bb'
  };
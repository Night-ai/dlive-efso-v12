const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client,message,args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanabilmek için `YÖNETİCİ` yetkisine sahip olmalısın!')

let seviyesistemi = db.get(`seviyesistemi_${message.guild.id}`)
if(!seviyesistemi) return message.channel.send('Seviye sistemi açılmamış! \n-seviye-sistemi aç')
if(seviyesistemi == "açık") {

let log = message.mentions.channels.first() 
if(!log) return message.channel.send('Log kanalını etiketlemelisin!')



db.set(`seviyelog_${message.guild.id}`, log.id)
message.channel.send(`Log kanalı başarıyla ayarlandı.`)
}
}

exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}

exports.help = {
name: 'seviye-log'
}

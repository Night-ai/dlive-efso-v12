const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client,message,args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanabilmek için `YÖNETİCİ` yetkisine sahip olmalısın!')

  
let seviyesistemi = db.get(`seviyesistemi_${message.guild.id}`)
if(!seviyesistemi) return message.channel.send('Seviye sistemi açılmamış! \n-seviye-sistemi aç')
if(seviyesistemi == "açık") {

let rol = message.mentions.roles.first()
if(!rol) return message.channel.send('Bir rol etiketlemelisin!')


db.set(`seviyerol2_${message.guild.id}`, rol.id)

message.channel.send(`Seviye rol2 başarıyla ayarlandı.`)
}
}
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}

exports.help = {
name: 'seviye-rol2'
}
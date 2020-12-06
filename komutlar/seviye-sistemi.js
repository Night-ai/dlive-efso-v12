const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client,message,args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanabilmek için `YÖNETİCİ` yetkisine sahip olmalısın!')


let boş = args.slice(0).join(' ')
if(!boş) return message.channel.send('Yanlış kullanım! :x: \nKullanabilecekleriniz: <aç,kapat>')


if(args[0] == "aç") {

db.set(`seviyesistemi_${message.guild.id}`, "açık")
message.channel.send('Seviye sistemi açıldı.')

}


if(args[0] == "kapat") {
db.delete(`seviyesistemi_${message.guild.id}`)
message.channel.send('Seviye sistemi kapatıldı.')
}


}

exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}

exports.help = {
name: 'seviye-sistemi'
}
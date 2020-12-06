const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client,message,args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanabilmek için `YÖNETİCİ` yetkisine sahip olmalısın!')

let seviyesistemi = db.get(`seviyesistemi_${message.guild.id}`)
if(!seviyesistemi) return message.channel.send('Seviye sistemi açılmamış! \n-seviye-sistemi aç')
if(seviyesistemi == "açık") {


let xp = args.slice(0).join('')
if(!xp) return message.channel.send('Mesaj başına kaç puan vereceğim, yazmalısın!')

if(isNaN(xp)) return message.channel.send('Sadece sayı yazabilirsin!')


db.set(`seviyexps_${message.guild.id}`, xp)
db.set(`seviyexpp_${message.guild.id}`,"ayarlı")
message.channel.send(`Mesaj başına ${xp} kadar puan vereceğim!`)
}

}
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}

exports.help = {
name: 'seviye-xp'
}
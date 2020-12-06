const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client,message,args) => {


let seviyesistemi = db.get(`seviyesistemi_${message.guild.id}`)
if(!seviyesistemi) return message.channel.send('Seviye sistemi açılmamış! \n-seviye-sistemi aç')
if(seviyesistemi == "açık") {


let xp = db.get(`xpss_${message.guild.id}_${message.author.id}`)
message.channel.send(`${xp || "0"} Kadar seviyen var.`)
}
}


exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}

exports.help = {
name: 'seviyem'
}
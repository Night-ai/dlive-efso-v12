const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client,message,args) => {


db.delete(`seviyelog_${message.guild.id}`)
db.delete(`seviyelxp_${message.guild.id}`)
db.delete(`seviyerol1_${message.guild.id}`)
db.delete(`seviyerol2_${message.guild.id}`)
db.delete(`seviyerol3_${message.guild.id}`)
db.delete(`seviyerol4_${message.guild.id}`)
db.delete(`seviyexps_${message.guild.id}`)
db.delete(`seviyexpp_${message.guild.id}`)

message.channel.send('Seviye sistemi sıfırlandı.')
}

exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}

exports.help = {
name: 'seviye-sistemi-sıfırla'
}
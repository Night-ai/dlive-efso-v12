const Discord = require('discord.js')
 


exports.run = (client,message) => {




 let embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Seviye sistemi;')
.setDescription('**Komutlar:** \n\n`-seviye-sistemi <aç,kapat>` : Seviye sistemini açar veya kapatır.\n\n`-seviye-xp` : Mesaj başına verecek puanı ayarlar. \n\n`-seviye-log #seviye-log` : Bir üye seviye atlarsa ayarlanan kanala mesaj atar. \n\n`-seviye-rol1 @Seviye1 1` : Seviye atlayınca verilecek rol. \n\n`-seviye-rol2 @Seviye2 2` : Seviye atlayınca verilecek rol. \n\n`-seviye-rol3 @Seviye3 3` : Seviye atlayınca verilecek rol. \n\n`-seviye-rol4 @Seviye4 4` : Seviye atlayınca verilecek rol.')
.setFooter(`${message.author.tag} Adlı kişi tarafından istendi.`)
message.channel.send(embed)
}

exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}

exports.help = {
name: 'seviye-yardım'
}
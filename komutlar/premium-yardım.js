const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const talkedRecently = new Set();
let botid = ('709489466913325168') 
exports.run = async(client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";  
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`<a:ykleniyor:778542755394879520> **Dlive Bot Premium Menüsüne Hoşgeldiniz** <a:ykleniyor:778542755394879520>`)
	   .setDescription(`
   **» Eklenecek ** <a:sagok:778555821285441546> Eklenecek.
   **» Eklenecek ** <a:sagok:778555821285441546> Eklenecek.
   `)
    .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
          .addField(`» Dlive Bot Bağlantıları`, ` <a:alev:778542755394879520> [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=775428604825567273&scope=bot&permissions=805314622) **|** [Destek Sunucusu](https://discord.gg/gUE7HCbN7Q) **|**<a:alev:778542755394879520>`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['premium-sistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'premiumsistemi',
  description: 'a!davet-sistemi Menüsü',
  usage: 'moderasyon'
};
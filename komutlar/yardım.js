const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Dlive")
.setTitle("<a:Yldz:778555821285441546> Dlive yardım menüsüne hoşgeldin! <a:Yldz:778555821285441546>")
 .setTimestamp()
.setDescription("<a:destinyhype:778543872867303424> **-eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n <a:ayarlardestiny:778543872867303424> **-moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n <a:partnerdestiny:778543872867303424> **-kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n <a:Yldz:778543872867303424> **-logo** = __Logo komutlarını görüntülersiniz.__ \n <a:destinyhype:778543872867303424> **-seviye-yardım** = __Seviye yardım menüsünü açar.__")
.setImage("https://media.discrdapp.net/attachments/740968946466816151/779061758929141781/350kb_30.gif")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}
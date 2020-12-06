const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Dlive")
.setTitle("<a:Yldz:778542755394879520> Dlive Kullanıcı Komutları <a:Yldz:778542755394879520>")
 .setTimestamp()
.setDescription("<a:yan:778542755394879520> **-avatar** = Avatarınıza bakarsınız. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-yetkilerim** = Yetkilerini görürsün. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-profil** = Profilini görürsün. <a:developeremoji:778542755394879520> \n <a:yan:7778542755394879520> **-sunucuresmi** = Sunucu resmini gösterir. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-ping** = Botun Pingine Bakarsın. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-id** = Birisinin id'sine Bakarsın. <a:developeremoji:749525084586115153> \n <a:yan:778542755394879520> **-davet** = Beni Sunucuna Ekle. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-botbilgi** = Bot istatistiklerini görürsünüz. <a:developeremoji:778542755394879520> \n <a:yan:778542755394879520> **-bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. <a:developeremoji:778542755394879520>")
.setImage("https://media.discordapp.net/attachments/740968946466816151/779061758929141781/350kb_30.gifa")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}
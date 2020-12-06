const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Dlive")
.setTitle("<a:Yldz:778542755235495948> Dlive Logo Komutları <a:Yldz:778542755235495948>")
 .setTimestamp()
.setDescription("<a:yan:778542755235495948> **-dinamik** = Dinamik logo oluşturur. <a:developeremoji:778542755235495948> \n <a:yan:778542755235495948> **-altın** = Altın logo oluşturur. <a:developeremoji:778542755235495948> \n <a:yan:778542755235495948> **-banner** = Banner logo oluşturur. <a:developeremoji:778542755235495948> \n <a:yan:778542755235495948> **-basit** = Basit logo oluşturur. <a:developeremoji:778542755235495948> \n <a:yan:778542755235495948> **-elmas** = Elmas logo oluşturur. <a:developeremoji:778542755235495948> \n <a:yan:778542755235495948> **-sarı** = Sarı logo oluşturur. <a:developeremoji:778542755235495948> \n <a:yan:778542755235495948> **-neonmavi** = Neon mavi logo oluşturur. <a:developeremoji:778542755235495948> \n <a:yan:778542755235495948> **-kalın** = Kalın logo oluşturur. <a:developeremoji:778542755235495948> \n <a:yan:778542755235495948> **-anime** = Anime yazı tipinde logo oluşturur. <a:developeremoji:778542755235495948> \n <a:yan:778542755235495948> **-habbo** = Habbo yazı tipinde logo oluşturur. <a:developeremoji:778542755235495948> \n <a:yan:778542755235495948> **-arrow** = Ok işaretli logo oluşturur. <a:developeremoji:778542755235495948> \n <a:yan:778542755235495948> **-green** = Yeşil logo oluşturur. <a:developeremoji:778542755235495948> \n <a:yan:778542755235495948> **-alev** = Alevli logo oluşturur. <a:developeremoji:778542755235495948> \n <a:yan:778542755235495948> **-red** = Kırmızı logo oluşturur. <a:developeremoji:778542755235495948>")
.setImage("https://media.discordapp.net/attachments/740968946466816151/779061758929141781/350kb_30.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}
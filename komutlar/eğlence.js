const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Dlive")
.setTitle("<a:Yldz:778542755495411732> Dlive Eğlence Komutları <a:Yldz:778542755495411732>")
 .setTimestamp()
.setDescription("<a:yan:778542755495411732> **-tersyazı** = Bir Yazıyı Bot Ters Yazar. <a:developeremoji:778542755495411732> \n <a:yan:778542755495411732> **-mcskin** = Yazdığınız ismin minecraft görünüşünü atar. <a:developeremoji:778542755495411732> \n <a:yan:778542755495411732> **-fbi** = Bot FBi Gif Atar. <a:developeremoji:778542755495411732> \n <a:yan:778542755495411732> **-token** = Tokenimi Öğrenmek İstemezmisin? <a:developeremoji:778542755495411732> \n <a:yan:778542755495411732> **-düello** = Düello Atarsın. <a:developeremoji:749525084586115153> \n <a:yan:778542755495411732> **-wasted** = Polis tarafından yakalanırsın. <a:developeremoji:778542755495411732> \n <a:yan:778542755495411732> **-atatürk** = Dene ve gör... (1881-1938) <a:developeremoji:778542755495411732> \n <a:yan:778542755495411732> **-yazan-kazanır** = İlk yazan kazanır. <a:developeremoji:778542755495411732>\n <a:yan:778542755495411732> **-türk** = Rastgele türk gif atar. <a:developeremoji:778542755495411732>")
.setImage("https://media.discordapp.net/attachments/740968946466816151/779061758929141781/350kb_30.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}
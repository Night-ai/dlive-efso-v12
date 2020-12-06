const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");

exports.run = async (client, message, args) => {
  const msg = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setFooter(client.user.tag, client.user.avatarURL())
  .addField(
  "<a:yukleniyor:781797264289038377> **Sahibim**","<@748497573316264027> / ɱႦ Night.岺"
  )
    .addField(
      "<a:yukleniyor:781797264289038377> **Bellek kullanımı**",
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      true
    )
    .addField(
      "<a:yukleniyor:781797264289038377> **Çalışma süresi**",
      moment
        .duration(client.uptime)
        .format(" D [gün], H [saat], m [dakika], s [saniye]")
    )
  
    .addField(
            "<a:yukleniyor:781797264289038377> **Kullanıcılar**",

client.guilds.cache

        .reduce((a, b) => a + b.memberCount, 0)

        .toLocaleString(),

      true

    )

    .addField(

      "<a:yukleniyor:781797264289038377> **Sunucular**",

      client.guilds.cache.size.toLocaleString(),

      true

    )

    .addField(

      "<a:yukleniyor:781797264289038377> **Kanallar**",

      client.channels.cache.size.toLocaleString(),

      true

    )

.addField("<a:yukleniyor:781797264289038377> **Discord.JS sürüm**", "v" + Discord.version, true)

    .addField("<a:yukleniyor:781797264289038377> **Node.JS sürüm**", `${process.version}`, true)

    .addField("<a:yukleniyor:781797264289038377> **Ping**", client.ws.ping + " ms", true)

    .addField(

      "<a:yukleniyor:781797264289038377> **CPU**",

      `\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``

    )
      .addField("<a:yukleniyor:781797264289038377> **Bit**", `\`${os.arch()}\``, true)

    .setThumbnail(client.user.avatarURL())

  .setImage("https://media.discordapp.net/attachments/720029424216440923/735255651638313061/727894683061321759.gif")

    .addField("<a:yukleniyor:781797264289038377> **İşletim Sistemi**", `\`\`${os.platform()}\`\``)

    .addField("**➥ Linkler**", "[➥ Davet Linki](https://discord.com/api/oauth2/authorize?client_id=775428604825567273&permissions=8&scope=bot)\n[➥ Destek Sunucu](https://discord.gg/ymVHTWPQ)");

  return message.channel.send(msg);

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["i"],
    permLevel: 0,
}
exports.help = {
  name: "istatistik",
};
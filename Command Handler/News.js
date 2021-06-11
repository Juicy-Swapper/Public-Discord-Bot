const https = require("https")
const Discord = require(`discord.js`);

module.exports = {
    name: `News`,
    description: "News ig",
    execute(message, args) {

        var url = "https://fortnite-api.com/v2/news/br"

        https.get(url, (r) => {

            let str = ""

            r.on("data", d => str += d.toString())

            r.on("end", () => {
                str = JSON.parse(str)

                const otherav = new Discord.MessageEmbed()
                    .setTitle("__Fortnite News__")
                    .setColor("0xfe8299")
                    .setFooter("Created by kaede | 0xkaede")
                    .setImage(str.data.image)
                try {
                    return message.reply(otherav)
                } catch {
                    return message.reply("We couldnt send sorry")
                }
            })
        })
    }
}
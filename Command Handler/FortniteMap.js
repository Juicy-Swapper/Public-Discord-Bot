const https = require("https")
const Discord = require(`discord.js`);

module.exports = {
    name: `FortniteMap`,
    description: "FortniteMap ig",
    execute(message, args) {

        var url = "https://fortnite-api.com/v1/map"

        https.get(url, (r) => {

            let str = ""

            r.on("data", d => str += d.toString())

            r.on("end", () => {
                str = JSON.parse(str)

                const otherav = new Discord.MessageEmbed()
                    .setTitle("__FortniteMap__")
                    .setColor("0xfe8299")
                    .setFooter("Created by kaede | 0xkaede")
                    .setImage(str.data.images.blank)
                try {
                    return message.reply(otherav)
                } catch {
                    return message.reply("We couldnt send sorry")
                }
            })
        })
    }
}
const https = require("https")
const Discord = require(`discord.js`);

module.exports = {
    name: `creatorcode`,
    description: "creatorcode ig",
    execute(message, args) {

        if (!args[0]) {
            return message.reply('Please enter a username!') 
        }
        
        var url = "https://fortnite-api.com/v2/creatorcode/search?name=" + args

        url = url.replace(",","%20");

        https.get(url, (r) => {

            let str = ""

            r.on("data", d => str += d.toString())

            r.on("end", () => {
                str = JSON.parse(str)

                const otherav = new Discord.MessageEmbed()
                    .setTitle("__Creator Code__")
                    .setColor("0xfe8299")
                    .setFooter("Created by kaede | 0xkaede")
                    .addField("SAC:", args[0])
                    .addField("Account:", "ID: " + str.data.account.id + "\nName: " + str.data.account.name)
                    .addField("Status:", str.data.status)
                    .addField("Verified:", str.data.verified)
                try {
                    return message.reply(otherav)
                } catch {
                    return message.reply("We couldnt send sorry")
                }
            })
        })
    }
}
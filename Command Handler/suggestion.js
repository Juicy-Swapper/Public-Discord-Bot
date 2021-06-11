const https = require("https")

module.exports = {
    name: `suggestion`,
    description: "suggestion ig",
    execute(message, args) {
        const Discord = require(`discord.js`);

        var Channel = message.channel.name

        if(Channel != "💡・suggestions") {
            return message.reply('Please use this command in <#832018645001437184>') 
        } 

        if (args[1]) {
            var url = "https://fortnite-api.com/v2/cosmetics/br/search?matchMethod=contains&name=" + args

            url = url.replace(",","%20"); 

            https.get(url, (r) => {

                let str = ""

                r.on("data", d => str += d.toString())

                r.on("end", () => {
                    str = JSON.parse(str)

                    try { str.data.images.smallIcon } catch (err) { if (err) return message.reply('Item not found please try again') }

                    const otherav = new Discord.MessageEmbed()
                        .setTitle("__Suggestion__")
                        .setColor("0xfe8299")
                        .setFooter("Created by kaede | 0xkaede")
                        .addField("Item:", args[0] + " " + args[1])
                        .addField("Reqested by:", message.member.user.tag)
                        .setThumbnail(str.data.images.smallIcon)
                    try {
                        return message.reply(otherav)
                    } catch {
                        return message.reply("We couldnt send sorry")
                    }
                })
            })
            message.channel.bulkDelete(1)
            return;
        }

        var url1 = "https://fortnite-api.com/v2/cosmetics/br/search?matchMethod=contains&name=" + args[0]

        https.get(url1, (r) => {

            let str = ""

            r.on("data", d => str += d.toString())

            r.on("end", () => {
                str = JSON.parse(str)

                try { str.data.images.smallIcon } catch (err) { if (err) return message.reply('Item not found please try again') }

                const otherav = new Discord.MessageEmbed()
                    .setTitle("__Suggestion__")
                    .setColor("0xfe8299")
                    .setFooter("Created by kaede | 0xkaede")
                    .addField("Item", args[0])
                    .addField("Reqested by:", message.member.user.tag)
                    .setThumbnail(str.data.images.smallIcon)
                try {
                    return message.reply(otherav)
                } catch {
                    return message.reply("We couldnt send sorry")
                }
            })

        })
        message.channel.bulkDelete(1)
    }
}
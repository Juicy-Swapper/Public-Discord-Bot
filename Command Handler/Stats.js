const https = require("https")
const Discord = require(`discord.js`);

module.exports = {
    name: `Stats`,
    description: "Stats ig",
    execute(message, args) {

        if (!args[0]) {
            return message.reply('Please enter a username!')
        }

        var url = "https://fortnite-api.com/v1/stats/br/v2?name=" + args  + "&image=all"

        url = url.replace(",","%20"); 

        https.get(url, (r) => {
            let str = ""

            r.on("data", d => str += d.toString())

            r.on("end", () => {
                str = JSON.parse(str)

                try { str.data.account.name } catch (err) { if (err) return message.reply('Player not found please try again') }

                const otherav = new Discord.MessageEmbed()
                    .setTitle(`__Fortnite Stats__`)
                    .setColor("0xfe8299")
                    .setFooter("Created by kaede | 0xkaede")
                    .addField("Account:", "Display Name: " + str.data.account.name + "\nAccount ID: " + str.data.account.id)
                    .addField("BattlePass:", "Level: " + str.data.battlePass.level + "\nprogress: " + str.data.battlePass.progress)
                    .addField("Overall: ", "Overall stats for" + str.data.account.name)
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
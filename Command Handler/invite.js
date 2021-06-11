module.exports = {
    name: `invite`,
    description: "invite ig",
    execute(message, args) {
        const Discord = require(`discord.js`);

        const embed = new Discord.MessageEmbed()
            .setTitle("Support Server")
            .setDescription("Here is a invite to the bot support server")
            .setColor("0xfe8299")
            .setFooter("Created by kaede | 0xkaede")
            .addField("Invite", "Click [Here](https://juicyswapper.xyz/discord) to join the server")
            .setThumbnail("https://cdn.discordapp.com/attachments/729442108703899730/778881607540801596/testingthis.png")
        try {
            message.reply(embed)
        } catch {
            message.reply("We couldnt send sorry")
        }
    }
}
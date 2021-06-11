module.exports = {
    name: `JuicyTeam`,
    description: "JuicyTeam ig",
    execute(message, args){
        const Discord = require(`discord.js`);

        const embed = new Discord.MessageEmbed()
            .setTitle("Juicy Team")
            .setColor("0xfe8299")
            .setFooter("Created by kaede | 0xkaede")
            .addField("Owner", "<@653269276274458635>")
            .setThumbnail("https://cdn.discordapp.com/attachments/729442108703899730/778881607540801596/testingthis.png")
        try {
            message.reply(embed)
        } catch {
            message.reply("We couldnt send sorry")
        }
    }
}
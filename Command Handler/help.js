module.exports = {
    name: `help`,
    description: "help ig",
    execute(message, args) {
        const Discord = require(`discord.js`);

        const embed = new Discord.MessageEmbed()
            .setTitle("- Help")
            .setDescription("List of commands and invite to support server")
            .setColor("0xfe8299")
            .setFooter("Created by kaede | 0xkaede")
            .addField("Admin", "Kick - Kicks a member from the guild\nBan - Bans a member from the guild\nMute - Mutes a member in the guild\nPurge - Deletes messages from a channel\n")
            .addField("Other", "Invite - Sends a invite link for the bot\nSupport - Sends a invite link to support server\nAv - Sends a user Avatar")
            .addField("Fortnite", "Map - Sends a image of the Fortnite MAP\nSAC - Sends info about an Creator Code\nNews - Sets a gif of the Fortnite News Tab\nStats - Gets a players stats")
            .setThumbnail("https://cdn.discordapp.com/attachments/729442108703899730/778881607540801596/testingthis.png")
        try {
            message.reply(embed)
        } catch {
            message.reply("We couldnt send sorry")
        }
    }

}
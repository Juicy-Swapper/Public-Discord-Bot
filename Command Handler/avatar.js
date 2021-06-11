const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: `avatar`,
    description: "av ig",
    execute(message, args) {
        const Discord = require(`discord.js`);

        if (args[0]) {
            const user = message.mentions.users.first();
            if (!user) {
                const otherav = new Discord.MessageEmbed()
                    .setTitle(`Please mention user`)
                try {
                    return message.reply(otherav)
                } catch {
                    return message.reply("We couldnt send sorry")
                }

            }

            const otherav = new Discord.MessageEmbed()
                .setTitle(`${user.username}'s Avatar!`)
                .setImage(user.displayAvatarURL({ dynamic: true }))
                .setColor("0xfe8299")
                .setFooter("Created by kaede | 0xkaede")
            try {
                return message.reply(otherav)
            } catch {
                return message.reply("We couldnt send sorry")
            }
        }

        const myav = new Discord.MessageEmbed()
            .setTitle(`${message.author.username}'s Avatar!`)
            .setImage(message.author.displayAvatarURL({ dynamic: true }))
            .setFooter("Created by kaede | 0xkaede")
            .setColor("0xfe8299")
        try {
            return message.reply(myav)
        } catch {
            return message.reply("We couldnt send sorry")
        }
    }
}
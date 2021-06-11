const { Channel } = require("discord.js");

module.exports = {
    name: `kick`,
    description: "Kicks a member from a server",
    execute(message, args) {
        if (message.member.hasPermission('ADMINISTRATOR') || member.hasPermission('KICK_MEMBERS')) {

            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            const Discord = require(`discord.js`);

            if (!args[0]) {
                const embedkicksstat = new Discord.MessageEmbed()
                    .setTitle("Kicked error")
                    .setDescription(`Please specify a user a user to kick.`)
                    .setColor("0xfe8299")
                    .setFooter("Created by kaede | 0xkaede")
                    .setThumbnail("https://cdn.discordapp.com/attachments/729442108703899730/778881607540801596/testingthis.png")
                try {
                    return message.reply(embedkicksstat)
                } catch {
                    return message.reply("We couldnt send sorry")
                }
            }

            if (!member) {

                const embedkickfind = new Discord.MessageEmbed()
                    .setTitle("Kicked error")
                    .setDescription(`Cant seem to find this user.`)
                    .setColor("0xfe8299")
                    .setFooter("Created by kaede | 0xkaede")
                    .setThumbnail("https://cdn.discordapp.com/attachments/729442108703899730/778881607540801596/testingthis.png")
                try {
                    return message.reply(embedkickfind)
                } catch {
                    return message.reply("We couldnt send sorry")
                }

            }

            if (!member.kickable) {

                const embedkickcant = new Discord.MessageEmbed()
                    .setTitle("Kicked error")
                    .setDescription(`This user cant be kicked.`)
                    .setColor("0xfe8299")
                    .setFooter("Created by kaede | 0xkaede")
                    .setThumbnail("https://cdn.discordapp.com/attachments/729442108703899730/778881607540801596/testingthis.png")
                try {
                    return message.reply(embedkickcant)
                } catch {
                    return message.reply("We couldnt send sorry")
                }
            }

            if (member.id === message.author.id) {

                const embedkickself = new Discord.MessageEmbed()
                    .setTitle("Kicked error")
                    .setDescription(`LMFAO, you cant kick yourself!`)
                    .setColor("0xfe8299")
                    .setFooter("Created by kaede | 0xkaede")
                    .setThumbnail("https://cdn.discordapp.com/attachments/729442108703899730/778881607540801596/testingthis.png")
                try {
                    return message.reply(embedkickself)
                } catch {
                    return message.reply("We couldnt send sorry")
                }
            }

            let reason = args.slice(1).join(" ");

            if (reason === undefined) reason = 'Unspecified';

            member.kick(reason)
                .catch(err => {
                    if (err) return message.reply('Something went wrong')
                })


            const embedkick = new Discord.MessageEmbed()
                .setTitle("Kicked member")
                .addField('User Kicked', member)
                .addField('Kicked by', message.author)
                .addField('Reason', reason)
                .setColor("0xfe8299")
                .setFooter("Created by kaede | 0xkaede")
                .setThumbnail("https://cdn.discordapp.com/attachments/729442108703899730/778881607540801596/testingthis.png")
            try {
                return message.reply(embedkick)
            } catch {
                return message.reply("We couldnt send sorry")
            }
        }
    }
}
const { Channel } = require("discord.js");

module.exports = {
    name: `ban`,
    description: "ban a member from a server",
    execute(message, args) {
        if (message.member.hasPermission('ADMINISTRATOR') || member.hasPermission('BAN_MEMBERS')) {

            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            const Discord = require(`discord.js`);

            if (!args[0]) {
                const embedbansstat = new Discord.MessageEmbed()
                    .setTitle("Banned error")
                    .setDescription(`Please specify a user a user to banned.`)
                    .setColor("0xfe8299")
                    .setFooter("Created by kaede | 0xkaede")
                    .setThumbnail("https://cdn.discordapp.com/attachments/729442108703899730/778881607540801596/testingthis.png")
                try {
                    return message.reply(embedbansstat)
                } catch {
                    return message.reply("We couldnt send sorry")
                }
            }

            if (!member) {

                const embedbanfind = new Discord.MessageEmbed()
                    .setTitle("Banned error")
                    .setDescription(`Cant seem to find this user.`)
                    .setColor("0xfe8299")
                    .setFooter("Created by kaede | 0xkaede")
                    .setThumbnail("https://cdn.discordapp.com/attachments/729442108703899730/778881607540801596/testingthis.png")
                try {
                    return message.reply(embedbanfind)
                } catch {
                    return message.reply("We couldnt send sorry")
                }

            }

            if (!member.bannable) {

                const embedbancant = new Discord.MessageEmbed()
                    .setTitle("banned error")
                    .setDescription(`This user cant be banned.`)
                    .setColor("0xfe8299")
                    .setFooter("Created by kaede | 0xkaede")
                    .setThumbnail("https://cdn.discordapp.com/attachments/729442108703899730/778881607540801596/testingthis.png")
                try {
                    return message.reply(embedbancant)
                } catch {
                    return message.reply("We couldnt send sorry")
                }
            }

            if (member.id === message.author.id) {

                const embedbanself = new Discord.MessageEmbed()
                    .setTitle("Banned error")
                    .setDescription(`LMFAO, you cant ban yourself!`)
                    .setColor("0xfe8299")
                    .setFooter("Created by kaede | 0xkaede")
                    .setThumbnail("https://cdn.discordapp.com/attachments/729442108703899730/778881607540801596/testingthis.png")
                try {
                    return message.reply(embedbanself)
                } catch {
                    return message.reply("We couldnt send sorry")
                }
            }

            let reason = args.slice(1).join(" ");

            if (reason === undefined) reason = 'Unspecified';
            //fixed ban
            member
                .ban({
                    reason: 'They were bad!',
                })
                .then(() => {
                    const embeddfdsff = new Discord.MessageEmbed()
                        .setTitle("Banned member")
                        .addField('User Banned', member)
                        .addField('Banned by', message.author)
                        .addField('Reason', reason)
                        .setColor("0xfe8299")
                        .setFooter("Created by kaede | 0xkaede")
                        .setThumbnail("https://cdn.discordapp.com/attachments/729442108703899730/778881607540801596/testingthis.png")
                    try {
                        return message.reply(embeddfdsff)
                    } catch {
                        return message.reply("We couldnt send sorry")
                    }
                })
                .catch(err => {
                    message.reply('I was unable to ban the member');
                    console.error(err);
                });


        }
    }
}
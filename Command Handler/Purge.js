const { ReactionUserManager } = require("discord.js");

module.exports = {
    name: `Purge`,
    description: "Purge ig",
    execute(message, args) {

        async function run() {
            if (!args[0]) return message.reply("You must state a number of messages to purge. /'-purge number'");
            const amountTo = Number(args[0], 10);

            if (isNaN(amountTo)) return message.reply("Number stated is not valid sorry.");
            if (!Number.isInteger(amountTo)) return message.reply("Number stated must be a whole number.");
            if (!amountTo || amountTo < 2 || amountTo > 100) return message.reply("The number stated must be between 2 and 100 sorry.");
            const fetched = await message.channel.messages.fetch({
                limit: amountTo
            });

            try {
                await message.channel.bulkDelete(fetched)
                    .then(messages => message.reply(`Deleted ${amountTo} messages!`));
            } catch (err) {
                console.log(err);
                message.reply('I was unable to delete the messages also make sure they are within 14 days old.');
            }


        }

        if (message.member.hasPermission("MANAGE_MESSAGES")){
            run();
        } else {
            return message.reply('Looks like you dont have Permissions to do this')
        }
    }
}
const Discord = require(`discord.js`);
const prefix = "-";
const client = new Discord.Client();
const logging = require(`${__dirname}/logs`)
client.commands = new Discord.Collection();
var dir = __dirname
const config = require(`${dir}/config.json`)
//Commands
const fs = require(`fs`);

const commandFiles = fs.readdirSync(`${__dirname}/Command Handler/`).filter(file => file.endsWith(`.js`))
for (const file of commandFiles) {
    const command = require(`${__dirname}/Command Handler/${file}`);
    client.commands.set(command.name, command);
}

client.on(`message`, message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!command[0]) {
        message.reply("Please enter a command")
    } else{
        if (command === `kaede`) {
            client.commands.get(`kaede`).execute(message, args);
        } else if (command == `help`) {
            client.commands.get(`help`).execute(message, args);
        } else if (command == `kick`) {
            client.commands.get(`kick`).execute(message, args);
        } else if (command == `invite`) {
            client.commands.get(`invite`).execute(message, args);
        } else if (command == `ban`) {
            client.commands.get(`ban`).execute(message, args);
        } else if (command == `av`) {
            client.commands.get(`avatar`).execute(message, args);
        } else if (command == `purge`) {
            client.commands.get(`Purge`).execute(message, args);
        } else if (command == `play`) {
            client.commands.get(`play`).execute(message, args);
        } else if (command == `suggest`) {
            client.commands.get(`suggestion`).execute(message, args);
        } //fortnite
        else if (command == `map`) {
            client.commands.get(`FortniteMap`).execute(message, args);
        } else if (command == `sac`) {
            client.commands.get(`creatorcode`).execute(message, args);
        } else if (command == `sac`) {
            client.commands.get(`creatorcode`).execute(message, args);
        } else if (command == `news`) {
            client.commands.get(`News`).execute(message, args);
        } else if (command == `stats`) {
            client.commands.get(`Stats`).execute(message, args);
        }
    }
});

//logs
client.once(`ready`, () => {
    logging.Online(`Bot is now active, made by kaede`)
     client.guilds.cache.forEach(guild => {
        guild.channels.cache.filter(x => x.type != "category").random().createInvite()
            .then(inv => logging.Invites(`\x1b[32m${guild.name}\x1b[0m | \x1b[35m${inv.url}\x1b[0m`)); 
    });

    //status
    let serversin = client.guilds.cache.size;
    client.user.setPresence({
        activity: {
            name: ` over Juicy, -help`,
            type: `WATCHING`
        },
        status: 'dnd'
    })
        .catch(console.error);



});
//bot token
client.login(process.env.TOKEN || config.TOKEN);

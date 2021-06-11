module.exports = {
    
    Online: data => console.log(`[${new Date().toISOString().slice(11,-5)} - \x1b[36mOnline\x1b[0m INFO] ${data}\x1b[0m`),
    Invites: data => console.log(`[${new Date().toISOString().slice(11,-5)} - \x1b[33mGuild\x1b[0m INFO] ${data}\x1b[0m`),  
}
const Discord = require  ('discord.js');
const config = require('./config.json');
const bot = new Discord.Client({disableEveryone: true});
bot.on("ready"), async () => {
    console.log(`${log.user.username} ist bereit!`);
    bot.user.setActivity("mit MUSIC MONKEYZ")
});


bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === '${prefix}MusicGang Bot') [{
        return message.channel.send("MusicGang Bot ist nun Online!");
    }]
})
bot.login(config.token);


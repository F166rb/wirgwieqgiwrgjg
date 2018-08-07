const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('----------------');
    console.log(`✨ Id: Nizx`);
    console.log(`✨ Prefix: Soon`);
    console.log(`✨ Servers: 1`);
    console.log(`✨ Members: 1000`);
    console.log(`✨ Channels: Limtit`);
    console.log('----------------');
    console.log(`Logged in as `);
    client.user.setGame(`كآنت ايام جَميلة معكم .. مع آلسلآمه . Bye.  `, "http://twitch.tv/Streammingg")
    client.user.setStatus("dnd")
});



client.login(process.env.BOT_TOKEN);

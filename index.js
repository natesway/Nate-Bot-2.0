const Discord = require("discord.js");
const bot = new Discord.Client();

const PREFIX = '!';

bot.on("ready", function (){
     console.log('S[bot.user.username] Is Online!');
     bot.user.setActivity("https://youtu.be/KqpQoIZl3Og", {type: "WATCHING"})
});

bot.login(process.env.token);

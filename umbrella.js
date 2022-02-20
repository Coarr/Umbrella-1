const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("UmbrellaBot ready!");
});
client.on("message", (message) => {
  if (message.content.startsWith("/commands")) {
    message.channel.send("Here you can put your commands");
  }else
    if (message.content.startsWith("/help")) {
    message.channel.send("Here you can put your help messages");
});
client.login("YOUR DISCORD TOKEN");

const Discord = require('discord.js');
const client = new Discord.Client();
require(".dotenv");
const prefix = "km!";

client.on('ready', () => {
    console.log("Meme Boy is Woke again");
});

client.on('message', () => {
    const args = message.content.trim().split(/ +/g);
  const command = args[0].slice(prefix.length).toLowerCase();

  if(command === "info") {
      message.channel.send("Made by Tails Era. Open Source.");
  };

  if(command === "meme") {
      message.channel.send("Retreving meme!");
    // Add the API in here!
  };
});

client.login(process.env.TOKEN);
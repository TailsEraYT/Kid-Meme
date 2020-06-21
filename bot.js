import { Client } from 'discord.js';
const client = new Client();

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
})
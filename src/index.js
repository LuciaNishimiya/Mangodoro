import dotenv from "dotenv";
dotenv.config();
const TOKEN = process.env.TOKEN;
const PREFIX = process.env.PREFIX;

import fs from "fs";
import { DiscordStreamClient } from "discord-stream-client";
import { Client } from "discord.js-selfbot-v13";

const client = new Client({
  checkUpdate: false,
});

const StreamClient = new DiscordStreamClient(client);

StreamClient.setResolution("720p");
StreamClient.setVideoCodec("H264");

const commandsList = new Map();
const commandFolders = fs.readdirSync("./src/commands");
for (const folder of commandFolders) {
  const commandimport = await import(`./commands/${folder}/index.js`);
  commandsList.set(commandimport.name, commandimport);
}
client.on("message", async (message) => {
  const prefix = PREFIX || `<@${client.user.id}>`;
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  if (!commandsList.has(commandName))
    return message.reply(
      `El comando no existe. Usa ${prefix} help para ver la lista de comandos.`
    );
  const command = commandsList.get(commandName);
  try {
    await command.execute({ message, args, commandsList, prefix, client });
  } catch (error) {
    console.error(error);
    message.reply("Hubo un error al ejecutar el comando.");
  }
});

client.on("ready", () => {
  console.log(`Bot ${client.user.tag} está en línea.`);
});
client.login(TOKEN);

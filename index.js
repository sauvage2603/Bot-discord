const { Client, Intents } = require("discord.js");
require("dotenv").config();

const botToken = process.env.TOKEN;

console.log(botToken);

// // Créer une instance de mon bot
const client = new Client({
     intents: [Intents.FLAGS.GUILDS]
 });

// // Une fois que mon bot est "ready" (en ligne)
 client.once("ready", () => {
     console.log("Okay. Mon bot est en ligne!");
 });

// // Permet de lier notre bot à notre serveur
 client.login(botToken);

 // Dès qu'une interaction est créée sur le serveur
client.on("interactionCreate", (interaction) => {
    // On regarde si l'interaction n'est pas une commande
    if (!interaction.isCommand()) {
				// Si ce n'est pas le cas, on ne continue pas
        return;
    }

    // On ne récupère que le nom de la commande sur l'interaction
    const { commandName } = interaction;

    // On répond ce que l'on veut selon le nom de la commande
    if (commandName === "ping") {
        interaction.reply("Pong!")
    } else if (commandName === "server") {
        interaction.reply(`Les infos du serveur:\n🤖 Nom du serveur: ${interaction.guild.name}\n😎 Nombre de membres: ${interaction.guild.memberCount}`)
    } else if (commandName === "user") {
        interaction.reply(`Your username: ${interaction.user}\nYour ID: ${interaction.user.id}`)
    } else if (commandName === "google"){
        interaction.reply(`https://www.google.com/search?q=${interaction.options.getString("recherche")}`)
    }
})
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require("dotenv").config();

const token = process.env.TOKEN;
const clientId = process.env.CLIENTID;
const guildId = process.env.SERVERID;

const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Renvoie pong!'),
    new SlashCommandBuilder().setName('server').setDescription('Renvoie les infos du serveur!'),
]
    .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Les commandes sont bien enregistrées sur le serveur.'))
    .catch(console.error);
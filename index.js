'use strict';

const { Client, Collection } = require("discord.js");
const YAML = require('yamljs');
const { resolve } = require('path');

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_EMOJIS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
    ],
    partials: [
        'CHANNEL',
        'GUILD_MEMBER',
        'MESSAGE',
        'USER',
        'REACTION',
    ],
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = YAML.load(resolve(__dirname, './config/settings.yml'))

// Initializing the project
require("./handler")(client);

client.login(client.config.settings.DISCORD_TOKEN);

const keepAlive = require('./server.js');
process.stdout.write('\033c');
const { exec } = require("child_process");
exec('title Starting Bot...')
console.log('Starting Bot...')
const path = require("path");
const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
require("./exports/ExtendedMessage");
const config = require("./config.json");
const ascii = require("ascii-table");
let table = new ascii("Commands, Event's and code");
table.setHeading("Name", "Loaded Status");
client.setMaxListeners(0);


client.on("ready", async () => {
    const codeFiles = fs
        .readdirSync("./code")
        .filter((file) => file.endsWith(".js"));

    exec('title Loading Code Files...')
    console.log('Loading Code Files...')
    for (const file of codeFiles) {
        const code = require(`./code/${file}`);
        code.execute(client);
        table.addRow(`Code - "${file}"`, "✅");
    }

    const eventFiles = fs
        .readdirSync("./events")
        .filter((file) => file.endsWith(".js"));
    exec('title Loading Event Files...')
    console.log('Loading Event Files...')
    for (const file of eventFiles) {
        const event = require(`./events/${file}`);
        if (event.once) {
            table.addRow(`Event - "${file}"`, `✅`);
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            table.addRow(`Event - "${file}"`, `✅`);
            client.on(event.name, (...args) => event.execute(...args));
        }
    }

    const baseFile = "command-base.js";
    const commandBase = require(`./commands/${baseFile}`);
    exec('title Loading Command Files...')
    console.log('Loading Command Files...')
    const readCommands = (dir) => {
        const files = fs.readdirSync(path.join(__dirname, dir));
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file));
            if (stat.isDirectory()) {
                table.addRow(`Command - "${file}"`, `✅`);
                readCommands(path.join(dir, file));
            } else if (file !== baseFile) {
                table.addRow(`Command - "${file}"`, `✅`);
                const option = require(path.join(__dirname, dir, file));
                commandBase(client, option);
            }
        }
    };

    process.stdout.write('\033c');
    readCommands("commands");
    console.log(table.toString());
    exec('title Bot is Running!')
    console.log("✨ The Bot is online! ✨");
});

client.on("error", () => console.log('ERROR'))
keepAlive();
client.login(process.env['DISCORD_TOKEN']).catch(console.error);

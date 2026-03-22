import { createRequire } from "node:module";
import "dotenv/config";
import { ipcMain } from "electron";
import type { Client } from "selfbot-discord";

const require = createRequire(import.meta.url);
const Discord = require("selfbot-discord");

const token = process.env.DISCORD_TOKEN;
if (token === undefined) throw new Error("Missing token in .env");
const client: Client = new Discord.Client();

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
	if (msg.author.id === client.user.id) return;
	if (msg.content === "ping") {
		msg.reply("pong");
	}
});

export async function registerBotApis() {
	await client.login(token);
	ipcMain.handle("guilds", () => {
		return client.guilds.array();
	});
}

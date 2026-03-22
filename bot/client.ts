import { createRequire } from "node:module";
import type { Client } from "selfbot-discord";

const require = createRequire(import.meta.url);
const Discord = require("selfbot-discord");

export const client: Client = new Discord.Client();

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
	if (msg.author.id === client.user.id) return;
	if (msg.content === "ping") {
		msg.reply("pong");
	}
});

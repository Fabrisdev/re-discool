import { ipcMain } from "electron";
import { client } from "../bot/client";
import { token } from "../bot/environment";

export async function registerBotApis() {
	await client.login(token());
	ipcMain.handle("guilds", () => {
		return client.guilds.array();
	});
	ipcMain.handle("channels", (_event, guildId: string) => {
		const guild = client.guilds.get(guildId);
		if (guild === undefined) return [];
		return guild.channels.array();
	});
}

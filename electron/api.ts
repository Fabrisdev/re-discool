import { ipcMain } from "electron";
import { client } from "../bot/client";
import { token } from "../bot/environment";

export async function registerBotApis() {
	await client.login(token());
	ipcMain.handle("guilds", () => {
		return client.guilds.array();
	});
}

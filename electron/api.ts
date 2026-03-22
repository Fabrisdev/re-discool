import { ipcMain } from "electron";
import { client } from "../bot/client";
import { token } from "../bot/environment";

export type GuildSlice = {
	id: string;
	name: string;
	icon: string;
};

export type GuildChannelSlice = {
	id: string;
	name: string;
	type: "dm" | "group" | "text" | "voice" | "category" | "news" | "store";
	parentID: string;
	position: number;
};

export async function registerBotApis() {
	await client.login(token());
	ipcMain.handle("guilds", () => {
		return client.guilds.array().map(
			(guild) =>
				({
					id: guild.id,
					name: guild.name,
					icon: guild.icon,
				}) satisfies GuildSlice,
		);
	});
	ipcMain.handle("channels", (_event, guildId: string) => {
		const guild = client.guilds.get(guildId);
		console.log("is guild undefined", guild === undefined);
		if (guild === undefined) return [];
		const channels = guild.channels.array().map(
			(channel) =>
				({
					id: channel.id,
					name: channel.name,
					type: channel.type,
					parentID: channel.parentID,
					position: channel.position,
				}) satisfies GuildChannelSlice,
		);
		console.log(channels);
		return channels;
	});
}

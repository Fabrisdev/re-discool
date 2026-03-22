import type { GuildChannelSlice, GuildSlice } from "../electron/api";

declare global {
	interface Window {
		api: {
			guilds: () => Promise<GuildSlice[]>;
			channels: (guildId: string) => Promise<GuildChannelSlice[]>;
		};
	}
}

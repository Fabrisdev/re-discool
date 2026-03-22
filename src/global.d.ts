import type { Guild, GuildChannel } from "selfbot-discord";

declare global {
	interface Window {
		api: {
			guilds: () => Promise<Guild[]>;
			channels: (guildId: string) => Promise<GuildChannel[]>;
		};
	}
}

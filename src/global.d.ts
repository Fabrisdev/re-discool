import type { Guild } from "selfbot-discord";

declare global {
	interface Window {
		api: {
			guilds: () => Promise<Guild[]>;
		};
	}
}

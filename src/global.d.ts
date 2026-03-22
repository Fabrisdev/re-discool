import type { Guild } from "selfbot-discord";

declare global {
	interface Window {
		api: {
			servers: () => Promise<Guild[]>;
		};
	}
}

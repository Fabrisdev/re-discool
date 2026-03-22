import { create } from "zustand";

type GuildStoreState = {
	currentGuild: string | null;
	setCurrentGuild: (guildId: string) => void;
};

export const useGuildStore = create<GuildStoreState>((set) => ({
	currentGuild: null,
	setCurrentGuild: (guildId) => set({ currentGuild: guildId }),
}));

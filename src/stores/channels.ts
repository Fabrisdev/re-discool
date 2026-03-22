import { create } from "zustand";

type ChannelStoreState = {
	currentChannel: string | null;
	setCurrentChannel: (channelId: string) => void;
};

export const useChannelStore = create<ChannelStoreState>((set) => ({
	currentChannel: null,
	setCurrentChannel: (channelId) => set({ currentChannel: channelId }),
}));

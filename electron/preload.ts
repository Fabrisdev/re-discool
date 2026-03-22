import { contextBridge, ipcRenderer } from "electron";

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld("api", {
	guilds: () => ipcRenderer.invoke("guilds"),
	channels: (guildId: string) => ipcRenderer.invoke("channels", guildId),
});

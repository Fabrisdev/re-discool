import { useState } from "react";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GuildChannelsSidebar } from "./guilds/GuildChannels";
import { ServerIcon } from "./guilds/GuildIcon";

const guilds = await window.api.guilds();
const queryClient = new QueryClient();

function App() {
	const [currentGuild, setCurrentGuild] = useState<string | null>(null);
	return (
		<main className="bg-[#121214] h-svh w-svw">
			<QueryClientProvider client={queryClient}>
				<ul className="flex flex-col gap-2">
					{guilds.map((guild) => (
						<ServerIcon
							guild={guild}
							key={guild.id}
							onSelect={(guildId) => setCurrentGuild(guildId)}
						/>
					))}
				</ul>
				{currentGuild !== null && (
					<GuildChannelsSidebar guildId={currentGuild} />
				)}
			</QueryClientProvider>
		</main>
	);
}

export default App;

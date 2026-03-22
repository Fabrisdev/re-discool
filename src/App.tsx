import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GuildChannelsSidebar } from "./guilds/GuildChannelsSidebar";
import { GuildIconSidebar } from "./guilds/GuildIconSidebar";

const queryClient = new QueryClient();

function App() {
	return (
		<main className="bg-[#121214] min-h-svh w-svw flex gap-2">
			<QueryClientProvider client={queryClient}>
				<GuildIconSidebar />
				<GuildChannelsSidebar />
			</QueryClientProvider>
		</main>
	);
}

export default App;

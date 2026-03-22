import "./globals.css";
import { ServerIcon } from "./guilds/GuildIcon";

const guilds = await window.api.guilds();

function App() {
	return (
		<main className="bg-[#121214] h-svh w-svw">
			<ul className="flex flex-col gap-2">
				{guilds.map((guild) => (
					<ServerIcon guild={guild} key={guild.id} />
				))}
			</ul>
		</main>
	);
}

export default App;

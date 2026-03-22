import { ServerIcon } from "./GuildIcon";

const guilds = await window.api.guilds();

export function GuildIconSidebar() {
	return (
		<ul className="flex flex-col gap-2 p-3 border-r border-[#222225]">
			{guilds.map((guild) => (
				<ServerIcon guild={guild} key={guild.id} />
			))}
		</ul>
	);
}

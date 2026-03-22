import type { GuildSlice } from "../../electron/api";
import { useGuildStore } from "../stores/guilds";

type Props = {
	guild: GuildSlice;
};

export function ServerIcon({ guild }: Props) {
	const iconUrl = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`;
	const firstLettersInName = guild.name.split(" ").map((word) => word[0]);
	const setCurrentGuild = useGuildStore((state) => state.setCurrentGuild);
	const currentGuild = useGuildStore((state) => state.currentGuild);
	return (
		<button
			type="button"
			onClick={() => setCurrentGuild(guild.id)}
			className="relative cursor-pointer"
		>
			{currentGuild === guild.id && (
				<div className="w-2 h-10 bg-white absolute -left-4 rounded-2xl"></div>
			)}
			{guild.icon ? (
				<img
					src={iconUrl}
					alt={`${guild.name}'s icon`}
					className="size-10 rounded-lg"
				/>
			) : (
				<p className="bg-[#1d1d1e] flex justify-center items-center rounded-lg size-10 text-white">
					{firstLettersInName}
				</p>
			)}
		</button>
	);
}

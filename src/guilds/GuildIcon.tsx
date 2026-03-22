import type { Guild } from "selfbot-discord";

type Props = {
	guild: Guild;
	onSelect: (guildId: string) => void;
};

export function ServerIcon({ guild, onSelect }: Props) {
	const iconUrl = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`;
	const firstLettersInName = guild.name.split(" ").map((word) => word[0]);
	return (
		<button type="button" onClick={() => onSelect(guild.id)}>
			{guild.icon ? (
				<img
					src={iconUrl}
					alt={`${guild.name}'s icon`}
					width={40}
					height={40}
					className="rounded-lg"
				/>
			) : (
				<p className="size-10 bg-[#1d1d1e] flex justify-center items-center rounded-lg">
					{firstLettersInName}
				</p>
			)}
		</button>
	);
}

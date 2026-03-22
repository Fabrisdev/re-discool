import type { Guild } from "selfbot-discord";

type Props = {
	guild: Guild;
};

export function ServerIcon({ guild }: Props) {
	const iconUrl = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`;
	if (guild.icon)
		return (
			<img
				src={iconUrl}
				alt={`${guild.name}'s icon`}
				width={40}
				height={40}
				className="rounded-lg"
			/>
		);
	const firstLettersInName = guild.name.split(" ").map((word) => word[0]);
	return (
		<p className="size-10 bg-[#1d1d1e] flex justify-center items-center rounded-lg">
			{firstLettersInName}
		</p>
	);
}

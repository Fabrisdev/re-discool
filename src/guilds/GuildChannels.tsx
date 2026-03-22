import { useQuery } from "@tanstack/react-query";

type Props = {
	guildId: string;
};

export function GuildChannelsSidebar({ guildId }: Props) {
	const { data, isPending, isError } = useQuery({
		queryKey: ["channels", guildId],
		queryFn: () => window.api.channels(guildId),
	});
	if (isPending) return <p>Loading...</p>;
	if (isError) return <p>An ocurred ocurred while loading the channels.</p>;
	return (
		<ul>
			{data.map((channel) => (
				<li key={channel.id}>
					<p className="text-white">{channel.name}</p>
				</li>
			))}
		</ul>
	);
}

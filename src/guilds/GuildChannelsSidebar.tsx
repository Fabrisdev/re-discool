import { useQuery } from "@tanstack/react-query";
import { HashtagIcon } from "../icons/HashtagIcon";
import { useChannelStore } from "../stores/channels";
import { useGuildStore } from "../stores/guilds";

export function GuildChannelsSidebar() {
	const currentGuild = useGuildStore((state) => state.currentGuild);
	const setCurrentChannel = useChannelStore((state) => state.setCurrentChannel);
	const currentChannel = useChannelStore((state) => state.currentChannel);
	const { data, isPending, isError } = useQuery({
		queryKey: ["channels", currentGuild],
		queryFn: () => {
			if (currentGuild === null) return [];
			return window.api.channels(currentGuild);
		},
		enabled: currentGuild !== null,
	});
	if (currentGuild === null) return null;
	if (isPending) return <p>Loading...</p>;
	if (isError) return <p>An ocurred ocurred while loading the channels.</p>;
	return (
		<ul>
			{data.map((channel) => (
				<li key={channel.id}>
					<button type="button" onClick={() => setCurrentChannel(channel.id)}>
						<p
							className={`text-white cursor-pointer p-1 rounded-lg flex justify-center items-center gap-2 ${currentChannel === channel.id ? "bg-[#2c2c30]" : "hover:bg-[#1d1d1e]"}`}
						>
							<HashtagIcon
								state={
									currentChannel === channel.id ? "selected" : "unselected"
								}
								type="normal"
							/>
							{channel.name}
						</p>
					</button>
				</li>
			))}
		</ul>
	);
}

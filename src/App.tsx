import "./globals.css";

const servers = await window.api.servers();

console.log(servers);
function App() {
	return (
		<main className="bg-[#121214] h-svh w-svw">
			<ul>
				{servers.map((server) => (
					<li key={server.id}>{server.name}</li>
				))}
			</ul>
		</main>
	);
}

export default App;

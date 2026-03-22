import "dotenv/config";

export function token() {
	const token = process.env.DISCORD_TOKEN;
	if (token === undefined) throw new Error("Missing token in .env");
	return token;
}

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = window.location.origin;
const clientID = "6fabc1dae45949e0b89128fb08d4061d";

const scopes = [
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
	"playlist-read-private",
	"playlist-modify-private",
	"playlist-modify-public",
	"playlist-read-collaborative",
	"user-read-private",
	"user-read-email",
	"user-library-read",
	"user-library-modify",
	"streaming",
];

export const getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, item) => {
			let parts = item.split("=");
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;

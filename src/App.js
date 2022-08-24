import Login from "./components/Login";
import Player from "./Player";
import "./App.css";
import { useEffect } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import spotifyContext from "./spotifyContext";

const spotify = new SpotifyWebApi();

function App() {
	const [{ token }, dispatch] = useDataLayerValue();
	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";

		const _token = hash.access_token;

		if (_token) {
			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});

			spotify.setAccessToken(_token);

			spotify.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					user: user,
				});
			});

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: "SET_PLAYLISTS",
					playlists: playlists,
				});
			});

			spotify.getMyTopTracks().then((topPlayList) => {
				dispatch({
					type: "SET_TOPPLAYLIST",
					topplaylist: topPlayList,
				});
			});

			spotify.getMyRecentlyPlayedTracks({ limit: 10 }).then((recentplayed) => {
				dispatch({
					type: "SET_RECENTPLAYED",
					recentplayed: recentplayed,
				});
			});

			spotify.getNewReleases({ limit: 10 }).then((newrelease) => {
				dispatch({
					type: "SET_NEWRELEASE",
					newrelease: newrelease,
				});
			});
		}
	}, []);

	return (
		<spotifyContext.Provider value={spotify}>
			<div>{token ? <Player /> : <Login />}</div>
		</spotifyContext.Provider>
	);
}

export default App;

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
		/* const _token =
			"BQBuvvnbQlSvDHb0KT2JI9wxUHImOUFyjsvwjTbweZkfWH4pW0fYu_57A4aVMn56r7D20VyR-Kv2_4UPU69JIe4ZChCV-S6Qj_KqNYIB9_KdzoGqruRdKka13YY5OzRrO-zeUzoOIxuGTpD0o4H7se3PRryl53nD9Um19tC0tPNgP9nzuKoC71eSNxd_QgYO-BSJvsOoiqpMbrzZdOHRCb3PpK_b-3HN77rAWlRJZLuq7-fCsNkEk9ewSt5WkIcFKqxisiO3LT4tNgy2RwVAlP-hfY_tFj37kt9i52KObE0IAF-iZCz3WBCV8Zaqes_eOrm0GA";
 */
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

			spotify.getMyRecentlyPlayedTracks({ limit: 12 }).then((recentplayed) => {
				dispatch({
					type: "SET_RECENTPLAYED",
					recentplayed: recentplayed,
				});
			});

			spotify.getNewReleases({ limit: 12 }).then((newrelease) => {
				dispatch({
					type: "SET_NEWRELEASE",
					newrelease: newrelease,
				});
			});

			spotify.getMySavedTracks({ limit: 12 }).then((savedTracks) => {
				dispatch({
					type: "GET_SAVEDTRACK",
					savedTracks: savedTracks,
				});
			});
		}
	});

	return (
		<spotifyContext.Provider value={spotify}>
			<div>{token ? <Player /> : <Login />}</div>
		</spotifyContext.Provider>
	);
}

export default App;

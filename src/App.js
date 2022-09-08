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
		let _token = localStorage.getItem("localToken");

		const hash = getTokenFromUrl();
		if (hash.access_token) {
			window.location.hash = "";

			_token = hash.access_token;
			localStorage.setItem("localToken", _token);
		}
		if (_token) {
			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});

			spotify.setAccessToken(_token);

			spotify
				.getMe()
				.then((user) => {
					dispatch({
						type: "SET_USER",
						user: user,
					});
				})
				.catch((err) => {
					if (err.status === 401) {
						localStorage.removeItem("localToken");
						dispatch({
							type: "SET_TOKEN",
							token: null,
						});
					}
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

			spotify.getMyRecentlyPlayedTracks({ limit: 15 }).then((recentplayed) => {
				dispatch({
					type: "SET_RECENTPLAYED",
					recentplayed: recentplayed,
				});
			});

			spotify.getNewReleases({ limit: 15 }).then((newrelease) => {
				dispatch({
					type: "SET_NEWRELEASE",
					newrelease: newrelease,
				});
			});

			spotify.getMySavedTracks({ limit: 15 }).then((savedTracks) => {
				dispatch({
					type: "GET_SAVEDTRACK",
					savedTracks: savedTracks,
				});
			});

			spotify.getFeaturedPlaylists().then((featuredPlaylists) => {
				dispatch({
					type: "GET_FEATUREDPLAYLISTS",
					featuredPlaylists: featuredPlaylists,
				});
			});
		}
	}, [dispatch]);

	return (
		<spotifyContext.Provider value={spotify}>
			<div>{token ? <Player /> : <Login />}</div>
		</spotifyContext.Provider>
	);
}

export default App;

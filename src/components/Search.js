import React from "react";
import { useEffect, useContext } from "react";
import { useState } from "react";
import Banner from "../images/bannerSearch.png";
import "./Search.css";
import spotifyContext from "../spotifyContext";
import SearchItem from "./SearchItem";

function Search() {
	const [search, setSearch] = useState("");
	const [artists, setArtists] = useState(null);
	const [tracks, setTracks] = useState(null);

	const spotify = useContext(spotifyContext);
	useEffect(() => {
		let prev = null;
		if (prev !== null) {
			prev.abort();
		}

		// store the current promise in case we need to abort it
		prev = spotify.search(search, ["playlist", "track", "album", "artist"], {
			limit: 10,
		});
		prev.then(
			function (data) {
				// clean the promise so it doesn't call abort
				setTracks(data.tracks.items);
				setArtists(data.artists.items);
				prev = null;

				// ...render list of search results...
			},
			function (err) {
				console.error(err);
			}
		);
	}, [search]);

	return (
		<div className="body">
			<div className="banner">
				<img src={Banner} alt="Banner" />
				<input
					className="search_bar"
					type="text"
					placeholder="Songs, Albums, Artist..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<div className="search_body">
				<div className="label_title">
					<div className="song_photo"></div>
					<div className="song_title">Title</div>
					<div className="song_artist">Artist</div>
					<div className="song_album">Album</div>
				</div>
				<hr />
				{tracks &&
					tracks.map((track) => (
						<SearchItem
							track={track.name}
							artist={track.artists[0].name}
							album={track.album.name}
							image={track.album.images[2].url}
							uri={track.uri}
						/>
					))}
			</div>
		</div>
	);
}

export default Search;

import React from "react";
import { useEffect, useContext } from "react";
import { useState } from "react";
import Banner from "../images/bannerSearch.png";
import "./Search.css";
import spotifyContext from "../spotifyContext";
import SearchItem from "./SearchItem";
import Song from "../Song";
import { useDataLayerValue } from "../DataLayer";
import SyncLoader from "react-spinners/SyncLoader";

//import SyncLoader from "react-spinners/SyncLoader";

function Search() {
	const [{ newrelease }] = useDataLayerValue();
	const [search, setSearch] = useState("");
	//const [artists, setArtists] = useState(null);
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
				setTracks(data.tracks.items);
				//setArtists(data.artists.items);
				prev = null;
			},
			function (err) {
				console.error(err);
			}
		);
	}, [search, spotify]);

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
			{search === "" ? (
				<div className="bodyList">
					{newrelease ? (
						newrelease.albums.items.map((album, index) => (
							<Song
								artist={album.artists[0].name}
								bg={album.images[1] && album.images[1].url}
								key={index}
								title={album.name}
								uri={album.uri}
							/>
						))
					) : (
						<SyncLoader color="#fff" />
					)}
				</div>
			) : (
				<div className="search_body">
					<div className="label_title">
						<div className="song_photo"></div>
						<div className="song_title">Title</div>
						<div className="song_artist">Artist</div>
						<div className="song_album">Album</div>
					</div>
					<hr />
					{tracks &&
						tracks.map((track, index) => (
							<SearchItem
								track={track.name}
								artist={track.artists[0].name}
								album={track.album.name}
								image={track.album.images[2].url}
								uri={track.uri}
								key={index}
							/>
						))}
				</div>
			)}
		</div>
	);
}

export default Search;

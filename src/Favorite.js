import React from "react";
import { useDataLayerValue } from "./DataLayer";
import Banner from "./images/bannerFavorite.png";
import "./Home.css";
import Song from "./Song";

function Favorite() {
	const [{ savedTracks }] = useDataLayerValue();
	return (
		<div className="body">
			<div className="banner">
				<img src={Banner} alt="Banner" />
			</div>
			<h1 className="listTitle">Saved Tracks</h1>
			<div className="bodyList">
				{savedTracks &&
					savedTracks.items.map((track, index) => (
						<Song
							title={track.track.name}
							bg={
								track.track.album.images[1] && track.track.album.images[1].url
							}
							key={index}
							artist={track.track.artists[0].name}
							uri={track.track.uri}
						/>
					))}
			</div>
		</div>
	);
}

export default Favorite;

import React from "react";
import { useDataLayerValue } from "./DataLayer";
import Banner from "./images/bannerHome.png";
import "./Home.css";
import Song from "./Song";

function Home() {
	const [{ recentplayed, newrelease }] = useDataLayerValue();
	console.log(newrelease);
	return (
		<div className="body">
			<div className="banner">
				<img src={Banner} alt="Banner" />
			</div>
			<h1 className="listTitle">Recently Played</h1>
			<div className="bodyList">
				{recentplayed &&
					recentplayed.items.map((track) => (
						<Song
							title={track.track.name}
							bg={
								track.track.album.images[1] && track.track.album.images[1].url
							}
							key={track.track.id}
							artist={track.track.artists[0].name}
							uri={track.track.uri}
						/>
					))}
			</div>
			<h1 className="listTitle">New Release</h1>
			<div className="bodyList">
				{newrelease &&
					newrelease.albums.items.map((album) => (
						<Song
							artist={album.artists[0].name}
							bg={album.images[1] && album.images[1].url}
							key={album.id}
							title={album.name}
							uri={album.uri}
						/>
					))}
			</div>
		</div>
	);
}

export default Home;

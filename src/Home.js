import React from "react";
import { useDataLayerValue } from "./DataLayer";
import Banner from "./images/bannerHome.png";
import "./Home.css";
import Song from "./Song";
import SyncLoader from "react-spinners/SyncLoader";

function Home() {
	const [{ recentplayed, newrelease }] = useDataLayerValue();
	return (
		<div className="body">
			<div className="banner">
				<img src={Banner} alt="Banner" />
			</div>
			<h1 className="listTitle">Recently Played</h1>
			<div className="bodyList">
				{recentplayed ? (
					recentplayed.items.map((track, index) => (
						<Song
							title={track.track.name}
							bg={
								track.track.album.images[1] && track.track.album.images[1].url
							}
							key={index}
							artist={track.track.artists[0].name}
							uri={track.track.uri}
						/>
					))
				) : (
					<SyncLoader color="#fff" />
				)}
			</div>
			<h1 className="listTitle">New Release</h1>
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
		</div>
	);
}

export default Home;

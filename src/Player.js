import React, { useState } from "react";
import "./Player.css";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Search from "./components/Search";
import Favorite from "./Favorite";
import { useDataLayerValue } from "./DataLayer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SpotifyWebPlayer from "react-spotify-web-playback/lib";
import { useEffect } from "react";

function Player() {
	const [{ token, uris }] = useDataLayerValue();
	const [play, setPlay] = useState(false);

	useEffect(() => {
		setPlay(true);
	}, [uris]);

	return (
		<BrowserRouter>
			<div className="player">
				<div className="player-body">
					<Sidebar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/search" element={<Search />} />
						<Route path="/favorite" element={<Favorite />} />
					</Routes>
				</div>
				<div className="footer">
					<SpotifyWebPlayer
						styles={{
							activeColor: "#fff",
							bgColor: "#272727",
							color: "#fff",
							loaderColor: "#fff",
							sliderColor: "#ee4950",
							trackArtistColor: "#ccc",
							trackNameColor: "#fff",
						}}
						autoPlay={true}
						callback={({ isPlaying }) => {
							setPlay(isPlaying);
						}}
						play={play}
						token={token}
						uris={uris && uris}
					/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default Player;

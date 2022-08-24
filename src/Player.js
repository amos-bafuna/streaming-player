import React from "react";
import "./Player.css";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Search from "./components/Search";
import { useDataLayerValue } from "./DataLayer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SpotifyWebPlayer from "react-spotify-web-playback/lib";

function Player({ spotify }) {
	const [{ token, uris }] = useDataLayerValue();
	return (
		<BrowserRouter>
			<div className="player">
				<div className="player-body">
					<Sidebar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/search" element={<Search />} />
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
						token={token}
						uris={[uris]}
					/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default Player;

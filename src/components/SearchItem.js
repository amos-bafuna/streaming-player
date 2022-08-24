import React from "react";
import "./SearchItem.css";
import { useDataLayerValue } from "../DataLayer";
import { BsPlayCircleFill } from "react-icons/bs";

function SearchItem({ track, artist, album, image, uri }) {
	const [dispatch] = useDataLayerValue();
	return (
		<div className="search_item">
			<div className="song_photo">
				<img src={image} alt="" />
			</div>
			<div className="song_title">{track}</div>
			<div className="song_artist">{artist}</div>
			<div className="song_album">
				<div>{album}</div>
				<BsPlayCircleFill
					className="playBtn"
					onClick={() => {
						dispatch({
							type: "SET_URIS",
							uris: uri,
						});
					}}
				/>
			</div>
		</div>
	);
}

export default SearchItem;

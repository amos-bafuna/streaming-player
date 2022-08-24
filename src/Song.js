import React from "react";
import { useDataLayerValue } from "./DataLayer";
import { BsPlayCircleFill } from "react-icons/bs";

function Song({ title, bg, id, artist, uri }) {
	const [{}, dispatch] = useDataLayerValue();
	return (
		<div
			key={id}
			className="song_container"
			style={{ background: `url(${bg})` }}
		>
			<h4 className="artist_name">{artist}</h4>
			<div className="song_footer">
				<h3 className="song_title">{title}</h3>
				<BsPlayCircleFill
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

export default Song;

import React from "react";
import { useDataLayerValue } from "./DataLayer";
import { BsPlayCircleFill } from "react-icons/bs";

function Song({ title, bg, id, artist, uri }) {
	const [dispatch] = useDataLayerValue();
	return (
		<div
			key={id}
			className="song_container"
			onDoubleClick={() => {
				dispatch({
					type: "SET_URIS",
					uris: uri,
				});
			}}
		>
			<div className="song_img" style={{ background: `url(${bg})` }}>
				<BsPlayCircleFill
					onClick={() => {
						dispatch({
							type: "SET_URIS",
							uris: uri,
						});
					}}
				/>
			</div>
			<h4 className="artist_name">{artist}</h4>
			<div className="song_footer">
				<h4 className="song_title">{title}</h4>
			</div>
		</div>
	);
}

export default Song;

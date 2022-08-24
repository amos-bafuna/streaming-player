import React from "react";
import Logo from "../src/images/PlayerLogo.png";
import { useDataLayerValue } from "./DataLayer";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import "./Sidebar.css";

function Sidebar() {
	const [{ playlists, user }] = useDataLayerValue();
	return (
		<div className="sidebar_container">
			<div className="sidebar">
				<img src={Logo} alt="Logo" className="sidebar_logo" />

				<SidebarOption Icon={HomeIcon} title="Home" link="/" />
				<SidebarOption Icon={SearchIcon} title="Search" link="/search" />
				<SidebarOption
					Icon={PlaylistAddIcon}
					title="Favorite"
					link="/playlist"
				/>

				<br />
				<strong className="sidebarTitle">Playlist</strong>
				<hr />
				{playlists &&
					playlists.items &&
					playlists.items.map((playlist) => (
						<SidebarOption title={playlist.name} />
					))}

				{user && <div className="account">{user.display_name}</div>}
			</div>
		</div>
	);
}

export default Sidebar;

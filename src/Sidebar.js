import React from "react";
import Logo from "../src/images/PlayerLogo.png";
import { useDataLayerValue } from "./DataLayer";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LoyaltyRoundedIcon from "@mui/icons-material/LoyaltyRounded";
import "./Sidebar.css";

function Sidebar() {
	const [{ playlists, user }] = useDataLayerValue();
	return (
		<div className="sidebar_container">
			<div className="sidebar">
				<img src={Logo} alt="Logo" className="sidebar_logo" />

				<SidebarOption Icon={HomeIcon} title="Home" link="/" key={"a"} />
				<SidebarOption
					Icon={SearchIcon}
					title="Search"
					link="/search"
					key={"b"}
				/>
				<SidebarOption
					Icon={LoyaltyRoundedIcon}
					title="Favorite"
					link="/favorite"
					key={"c"}
				/>

				<br />
				<strong className="sidebarTitle">Playlist</strong>
				<hr />
				<div className="playlist_list">
					{playlists &&
						playlists.items &&
						playlists.items.map((playlist, index) => (
							<SidebarOption
								key={index}
								title={playlist.name}
								link="./playlist"
							/>
						))}
				</div>

				{user && <div className="account">{user.display_name}</div>}
			</div>
		</div>
	);
}

export default Sidebar;

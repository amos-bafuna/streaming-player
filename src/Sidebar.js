import React, { useEffect } from "react";
import Logo from "../src/images/PlayerLogo.png";
import { useDataLayerValue } from "./DataLayer";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LoyaltyRoundedIcon from "@mui/icons-material/LoyaltyRounded";
import { AiOutlineMenu } from "react-icons/ai";
import { CgCloseO } from "react-icons/cg";
import "./Sidebar.css";
import { useState } from "react";

function Sidebar() {
	const [open, setOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [{ playlists, user }] = useDataLayerValue();

	const onWindowResize = (event) => {
		setIsMobile(window.innerWidth < 915);
	};

	useEffect(() => {
		setIsMobile(window.innerWidth < 915);
		window.addEventListener("resize", onWindowResize);
		return () => {
			window.removeEventListener("resize", onWindowResize);
		};
	}, []);

	return (
		<div className="sidebar_container">
			<div
				className="sidebar"
				style={
					isMobile ? { display: open ? "block" : "flex" } : { display: "block" }
				}
			>
				<img src={Logo} alt="Logo" className="sidebar_logo" />

				<SidebarOption
					open={open}
					isMobile={isMobile}
					Icon={HomeIcon}
					title="Home"
					link="/"
					key={"a"}
				/>
				<SidebarOption
					Icon={SearchIcon}
					open={open}
					isMobile={isMobile}
					title="Search"
					link="/search"
					key={"b"}
				/>
				<SidebarOption
					Icon={LoyaltyRoundedIcon}
					open={open}
					isMobile={isMobile}
					title="Favorite"
					link="/favorite"
					key={"c"}
				/>
				<div className="hambourger_menu">
					{open ? (
						<CgCloseO onClick={() => setOpen(false)} />
					) : (
						<AiOutlineMenu onClick={() => setOpen(true)} />
					)}
				</div>

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

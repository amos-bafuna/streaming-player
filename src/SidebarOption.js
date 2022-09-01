import React from "react";
import "./SidebarOption.css";
import { NavLink } from "react-router-dom";

function SidebarOption({ title, Icon, link, cle, open, isMobile }) {
	return (
		<div key={cle}>
			<NavLink
				to={link ?? ""}
				className={({ isActive }) =>
					isActive ? "is-active sidebarOption" : "sidebarOption"
				}
				style={
					isMobile ? { display: open ? "flex" : "none" } : { display: "flex" }
				}
			>
				{Icon && <Icon className="sidebarOptionIcon" />}
				<p>{title}</p>
			</NavLink>
		</div>
	);
}

export default SidebarOption;

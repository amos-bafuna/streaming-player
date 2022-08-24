import React from "react";
import "./SidebarOption.css";
import { Link } from "react-router-dom";

function SidebarOption({ title, Icon, link }) {
	return (
		<div>
			<Link to={link ?? ""} className="sidebarOption">
				{Icon && <Icon className="sidebarOptionIcon" />}
				<p>{title}</p>
			</Link>
		</div>
	);
}

export default SidebarOption;

import React from "react";
import Logo from "../images/logo.png";
import s from "./Login.module.css";
import { loginUrl } from "../spotify";

function Home() {
	return (
		<div className={s.home}>
			<div className={s.container}>
				<a href="./">
					<img src={Logo} alt="Logo" className={s.logo} />
				</a>
				<h1 className={s.title}>Where words fail, music speaks</h1>
				<a href={loginUrl}>
					<button className={s.connexionBtn}>Connect with google</button>
				</a>
			</div>
		</div>
	);
}

export default Home;

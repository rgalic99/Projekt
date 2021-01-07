import React from "react";
import { Link } from "react-router-dom";

export default function PageInfoScreen() {
	return (
		<body>
			<h1 className="o_nama">O nama</h1>
			<p>
				Tech-@-tack je najbolja stranica koja nije na tržištu. <br />
				Njen inovativan dizajn je nešto što je tema brojnih diskusija
				tijekom jutarnje kave.
				<br />
			</p>
			<div>
				Imate neki problem ili upit?{" "}
				<Link to="/kontakt">Kontaktirajte nas</Link>
			</div>
		</body>
	);
}

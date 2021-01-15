import React, { useState } from "react";
import { Link } from "react-router-dom";
import Space from "../components/Space.js";
import { array } from "../constants/founders.js";
export default function PageInfoScreen() {
	const [duck, setDuck] = useState(false);
	return (
		<div>
			<h1 className="o_nama">
				{duck ? (
					<b onClick={() => setDuck(false)}>🦆</b>
				) : (
					<b onClick={() => setDuck(true)}>O</b>
				)}{" "}
				nama
			</h1>
			<p>
				Tech-@-tack je najbolja stranica koja nije na tržištu.{" "}
				<Space num="1"></Space>
				Njen inovativan dizajn je nešto što je tema brojnih diskusija
				tijekom jutarnje kave.
				<Space num="1"></Space>
			</p>
			<div>
				Imate neki problem ili upit?{" "}
				<Link to="/kontakt">Kontaktirajte nas</Link>
			</div>
			<h2>Naš tim</h2>

			<div className="row">
				{array.map((item) => (
					<div className="column" key={item.id}>
						<div className="founderCard" key={item.id}>
							<img
								src={item.url}
								alt={item.name}
								className={item.tag}
							/>
							<div className="container" key={item.id}>
								<h2>
									{item.name} {item.lastName}
								</h2>
								<p className="title">{item.title}</p>
								<p>
									<span className="mail">
										<a href={`mailto:${item.mail}`}>
											{" "}
											Kontakt
										</a>{" "}
										<i className="far fa-envelope"></i>
									</span>
								</p>
								<p>{item.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<Space num="2"></Space>
		</div>
	);
}

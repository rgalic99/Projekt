import React from "react";
import data from "./data";
import Product from "./components/Product";

function App() {
	return (
		<div className="grid-container">
			<header className="row">
				<div className="logo">
					<a href="index.html"> Tech - @ - Tack </a>{" "}
				</div>{" "}
				<div className="header-links">
					<a href="cart.html"> Košarica👜 </a>{" "}
					<a href="singin.html"> Sign up / in 🖊 </a>{" "}
				</div>{" "}
			</header>{" "}
			<main className="main">
				<div className="row center">
					{" "}
					{data.products.map((product) => (
						<Product key={product._id} product={product}>
							{" "}
						</Product>
					))}{" "}
				</div>{" "}
			</main>
			<footer className="row center" href="../public/kontakt.html">
				All rights reserved© Tech - @ - Tack 2020{" "}
			</footer>{" "}
		</div>
	);
}

export default App;

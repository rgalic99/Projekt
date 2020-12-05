import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import KontaktScreen from "./screens/KontaktScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
	return (
		<BrowserRouter>
			<div className="grid-container">
				<header className="row">
					<div className="logo">
						<a href="index.html"> Tech - @ - Tack </a>
					</div>
					<div className="header-links">
						<a href="cart.html"> Košarica👜 </a>
						<a href="singin.html"> Sign up / in 🖊 </a>
					</div>
				</header>
				<main className="main">
					<Route path="/product/:id" component={ProductScreen}></Route>
					<Route path="/" component={HomeScreen} exact></Route>
					<Route path="/kontakt" component={KontaktScreen} exact></Route>
				</main>
				<footer className="row center">
					<a href="kontakt.html">All rights reserved© Tech - @ - Tack 2020</a>
				</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;

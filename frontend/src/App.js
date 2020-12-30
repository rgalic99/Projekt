import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { signout } from "./actions/userActions";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import KontaktScreen from "./screens/KontaktScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
function App() {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	const dispatch = useDispatch();
	const signoutHandler = () => {
		dispatch(signout());
	};
	return (
		<BrowserRouter>
			<div className="grid-container">
				<header className="row">
					<div className="logo">
						<Link to="/"> Tech - @ - Tack </Link>
					</div>
					<div className="header-links">
						{userInfo ? (
							<div className="dropdown">
								<Link to="#" className="fa fa-caret-down">
									{userInfo.name}
								</Link>
								<ul className="dropdown-content">
									<li>
										<Link to="/profile">Profil</Link>
									</li>
									<li>
										<Link to="/orderhistory">Narudžbe</Link>
									</li>
									<li>
										<Link to="#signout" onClick={signoutHandler}>
											Odjava
										</Link>
									</li>
								</ul>
							</div>
						) : (
							<Link to="/signin" className="signUpIn">
								Prijava 🖊
							</Link>
						)}

						<Link to="/cart" className="cart">
							Košarica👜
							{cartItems.length > 0 && (
								<span className="badge">{cartItems.length}</span>
							)}
						</Link>
					</div>
				</header>
				<main className="main">
					<Route path="/" component={HomeScreen} exact></Route>
					<Route path="/product/:id" component={ProductScreen}></Route>
					<Route path="/cart/:id?" component={CartScreen}></Route>
					<Route path="/shipping" component={ShippingAddressScreen}></Route>
					<Route path="/payment" component={PaymentMethodScreen}></Route>
					<Route path="/placeorder" component={PlaceOrderScreen}></Route>
					<Route path="/order/:id" component={OrderScreen}></Route>
					<Route path="/signin" component={SigninScreen}></Route>
					<Route path="/register" component={RegisterScreen}></Route>
					<Route path="/orderhistory" component={OrderHistoryScreen}></Route>
					<Route path="/kontakt" component={KontaktScreen}></Route>
					<Route path="/profile" component={ProfileScreen}></Route>
				</main>
				<footer className="row center">
					<a href="/kontakt">Sva prava pridržana© Tech - @ - Tack 2020</a>
				</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import dotenv from "dotenv";
dotenv.config();

export default function PlaceOrderScreen(props) {
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	if (!userInfo) {
		props.history.push("/signin");
	}
	const cart = useSelector((state) => state.cart);
	if (!cart.paymentMethod) {
		props.history.push("/payment");
	}
	const toPrice = (num) => Number(num.toFixed(2)); //5.123 => "5.12" => 5.12
	cart.itemsPrice = toPrice(
		cart.cartItems.reduce((a, c) => a + c.qty * c.price.toFixed(0), 0)
	);
	const PDV = Number(process.env.PDV) || 0.25;
	cart.shippingPrice = cart.itemsPrice > 500 ? toPrice(0) : toPrice(10);
	cart.taxPrice = toPrice(PDV * cart.itemsPrice);
	cart.totalPrice = cart.itemsPrice + cart.shippingPrice;
	cart.itemsPrice *= 1 - PDV;
	const placeOrderHandler = () => {
		// TODO: dispatch place order action
	};
	return (
		<div>
			<CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
			<div className="row top">
				<div className="col-2">
					<ul>
						<li>
							<div className="placeOrder placeOrder-body">
								<h2>Adresa dostave</h2>
								<p>
									<strong>Ime:</strong> {cart.shippingAddress.fullName} <br />
									<strong>Adresa: </strong> {cart.shippingAddress.address},
									{cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
									,{cart.shippingAddress.country}
								</p>
							</div>
						</li>
						<li>
							<div className="placeOrder placeOrder-body">
								<h2>Plaćanje</h2>
								<p>
									<strong>Način plaćanja:</strong> {cart.paymentMethod}
								</p>
							</div>
						</li>
						<li>
							<div className="placeOrder placeOrder-body">
								<h2>Naručeni proizvodi</h2>
								<ul>
									{cart.cartItems.map((item) => (
										<li key={item.product}>
											<div className="row">
												<div>
													<img
														src={item.image}
														alt={item.name}
														className="small"
													></img>
												</div>
												<div className="min-30">
													<Link to={`/product/${item.product}`}>
														{item.name}
													</Link>
												</div>

												<div>
													{item.qty} x {item.price.toFixed(0)}kn ={" "}
													{item.qty * item.price.toFixed(0)}
													kn
												</div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</li>
					</ul>
				</div>
				<div className="col-1">
					<div className="placeOrder placeOrder-body">
						<ul>
							<li>
								<h2>Sadržaj</h2>
							</li>
							<li>
								<div className="row">
									<div>Proizvodi</div>
									<div>{cart.itemsPrice.toFixed(0)}kn</div>
								</div>
							</li>
							<li>
								<div className="row">
									<div>Dostava</div>
									<div>{cart.shippingPrice.toFixed(0)}kn</div>
								</div>
							</li>
							<li>
								<div className="row">
									<div>PDV</div>
									<div>{cart.taxPrice.toFixed(0)}kn</div>
								</div>
							</li>
							<li>
								<div className="row">
									<div>
										<strong> Ukupno: </strong>
									</div>
									<div>
										<strong>{cart.totalPrice.toFixed(0)}kn</strong>
									</div>
								</div>
							</li>
							<li>
								<button
									type="button"
									onClick={placeOrderHandler}
									className="primary block"
									disabled={cart.cartItems.length === 0}
								>
									Dovrši narudžbu
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

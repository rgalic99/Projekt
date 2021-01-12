import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function PaymentMethodScreen(props) {
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	if (!userInfo) {
		props.history.push("/signin");
	}
	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;
	if (!shippingAddress) {
		props.history.push("/shipping");
	}

	const [paymentMethod, setPaymentMethod] = useState("PayPal");
	const dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(savePaymentMethod(paymentMethod));
		props.history.push("/placeorder");
	};
	return (
		<div>
			<CheckoutSteps step1 step2 step3></CheckoutSteps>
			<form className="form-2" onSubmit={submitHandler}>
				<div>
					<h1>Način plaćanja</h1>
				</div>
				<span>
					<div>
						<input
							type="radio"
							id="paypal"
							value="PayPal"
							name="paymentMethod"
							required
							onChange={(e) => setPaymentMethod(e.target.value)}
						></input>
						<label htmlFor="paypal">PayPal</label>
						<i class="fab fa-cc-paypal fa-2x float-left"></i>
					</div>
				</span>
				<span>
					<div>
						<input
							type="radio"
							id="card"
							value="Kartica"
							name="paymentMethod"
							required
							onChange={(e) => setPaymentMethod(e.target.value)}
						></input>
						<label htmlFor="card">
							Kartica{" "}
							<i class="fas fa-credit-card float-left fa-2x"></i>
						</label>
					</div>
				</span>
				<span>
					<input
						type="radio"
						id="cash"
						value="Gotovinom pri preuzimanju"
						name="paymentMethod"
						required
						onChange={(e) => setPaymentMethod(e.target.value)}
					></input>
					<label htmlFor="cash">
						Gotovinom pri preuzimanju{" "}
						<i class="fas fa-money-bill-wave float-left fa-2x"></i>
					</label>
				</span>
				<div>
					<label />
					<button className="primary" type="submit">
						Nastavak➡
					</button>
				</div>
			</form>
		</div>
	);
}

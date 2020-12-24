import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function ShippingAdressScreen(props) {
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;
	if (!userInfo) {
		props.history.push("/signin");
	}
	const [fullName, setFullName] = useState(shippingAddress.fullName);
	const [address, setAddress] = useState(shippingAddress.address);
	const [city, setCity] = useState(shippingAddress.city);
	const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
	const [country, setCountry] = useState(shippingAddress.country);
	const dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			saveShippingAddress({ fullName, address, city, postalCode, country })
		);
		props.history.push("/payment");
	};
	return (
		<div>
			<CheckoutSteps step1 step2></CheckoutSteps>
			<form className="form" onSubmit={submitHandler}>
				<div>
					<h1>Adresa dostave</h1>
				</div>
				<div>
					<label htmlFor="fullName">Puno ime</label>
					<input
						type="text"
						id="fullName"
						placeholder="npr. Ante Antić"
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
						required
					></input>
				</div>
				<div>
					<label htmlFor="address">Address</label>
					<input
						type="text"
						id="address"
						placeholder="npr. Ul. Ruđera Boškovića 32"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						required
					></input>
				</div>
				<div>
					<label htmlFor="city">City</label>
					<input
						type="text"
						id="city"
						placeholder="npr. Split"
						value={city}
						onChange={(e) => setCity(e.target.value)}
						required
					></input>
				</div>
				<div>
					<label htmlFor="postalCode">Poštanski broj</label>
					<input
						type="text"
						id="postalCode"
						placeholder="npr. 21000"
						value={postalCode}
						onChange={(e) => setPostalCode(e.target.value)}
						required
					></input>
				</div>
				<div>
					<label htmlFor="country">Država</label>
					<input
						type="text"
						id="country"
						placeholder="npr. Hrvatska"
						value={country}
						onChange={(e) => setCountry(e.target.value)}
						required
					></input>
				</div>
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

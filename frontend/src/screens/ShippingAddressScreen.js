import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function ShippingAddressScreen(props) {
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	if (!userInfo) {
		props.history.push("/signin");
	}
	const [fullName, setFullName] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [country, setCountry] = useState("");
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
					<label htmlFor="address">Adresa</label>
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
					<label htmlFor="city">Grad</label>
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
						Nastavak ➡
					</button>
				</div>
			</form>
		</div>
	);
}

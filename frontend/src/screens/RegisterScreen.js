import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function SigninScreen(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const redirect = props.location.search
		? props.location.search.split("=")[1]
		: "/";
	const userRegister = useSelector((state) => state.userRegister);
	const { userInfo, loading, error } = userRegister;
	const dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) alert("Unesena lozinka nije ista!");
		else dispatch(register(name, email, password));
	};

	useEffect(() => {
		if (userInfo) props.history.push(redirect);
	}, [props.history, redirect, userInfo]);
	return (
		<div>
			<form className="form" onSubmit={submitHandler}>
				<div>
					<h1>Registracija</h1>
				</div>
				{loading && <LoadingBox></LoadingBox>}
				{error && <MessageBox variant="failed-login">{error}</MessageBox>}
				<div>
					<label htmlFor="name">Ime</label>
					<input
						type="text"
						id="name"
						placeholder="Unesite ime"
						required
						onChange={(e) => setName(e.target.value)}
					></input>
				</div>
				<div>
					<label htmlFor="email">Email adresa</label>
					<input
						type="email"
						id="email"
						placeholder="Unesite email"
						required
						onChange={(e) => setEmail(e.target.value)}
					></input>
				</div>
				<div>
					<label htmlFor="password">Lozinka</label>
					<input
						type="password"
						id="password"
						placeholder="Unesite lozinku"
						required
						onChange={(e) => setPassword(e.target.value)}
					></input>
				</div>
				<div>
					<label htmlFor="confirmPassword">Ponovite lozinku</label>
					<input
						type="password"
						id="confirmPassword"
						placeholder="Ponovno unesite lozinku"
						required
						onChange={(e) => setConfirmPassword(e.target.value)}
					></input>
				</div>
				<div>
					<label />
					<button className="primary" type="submit">
						Registracija
					</button>
				</div>
				<div>
					<label />
					<div>
						Već imate račun?
						<Link to={`/signin?redirect=${redirect}`}>Prijavite se</Link>
					</div>
				</div>
			</form>
		</div>
	);
}

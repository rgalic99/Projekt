import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function SigninScreen(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const redirect = props.location.search
		? props.location.search.split("=")[1]
		: "/";
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo, loading, error } = userSignin;
	const dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(signIn(email, password));
	};

	useEffect(() => {
		if (userInfo) props.history.push(redirect);
	}, [props.history, redirect, userInfo]);
	return (
		<div>
			<form className="form" onSubmit={submitHandler}>
				<div>
					<h1>Prijava</h1>
				</div>
				{loading && <LoadingBox></LoadingBox>}
				{error && (
					<MessageBox variant="failed-login">{error}</MessageBox>
				)}
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
					<label />
					<button className="primary" type="submit">
						Prijava <i className="fas fa-sign-in-alt"></i>
					</button>
				</div>
				<div>
					<label />
					<div>
						Novi korisnik?
						<br />
						<i className="fas fa-user-plus"></i>
						<Link to={`/register?redirect=${redirect}`}>
							{"  "}Napravite svoj račun
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser } from "../actions/userActions";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";

export default function ProfileScreen() {
	const dispatch = useDispatch();
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	const userDetails = useSelector((state) => state.userDetails);
	const { loading, error, user } = userDetails;

	useEffect(() => {
		dispatch(detailsUser(userInfo._id));
	}, [dispatch, userInfo._id]);
	const submitHandler = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<form className="form" onSubmit={submitHandler}>
				<div>
					<h1>User Profile</h1>
				</div>
				{loading ? (
					<LoadingBox></LoadingBox>
				) : error ? (
					<MessageBox variant="failed-action">{error}</MessageBox>
				) : (
					<>
						<div>
							<label htmlFor="name">Ime</label>
							<input
								id="name"
								type="text"
								placeholder="Unesite ime"
								value={user.name}
							></input>
						</div>
						<div>
							<label htmlFor="email">Email</label>
							<input
								id="email"
								type="text"
								placeholder="Unesite email"
								value={user.email}
							></input>
						</div>
						<div>
							<label htmlFor="password">Lozinka</label>
							<input
								id="password"
								type="text"
								placeholder="Unesite lozinku"
							></input>
						</div>
						<div>
							<label htmlFor="confirmPassword">Ponovite lozinku</label>
							<input
								id="pconfirmPassword"
								type="text"
								placeholder="Ponovno unesite lozinku"
							></input>
						</div>
						<div>
							<label />
							<button className="primary" type="submit">
								Ažuriraj
							</button>
						</div>
					</>
				)}
			</form>
		</div>
	);
}

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUserProfile } from "../actions/userActions";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

export default function ProfileScreen() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [sellerName, setSellerName] = useState("");
	const [sellerLogo, setSellerLogo] = useState("");
	const [sellerDescription, setSellerDescription] = useState("");

	const dispatch = useDispatch();
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	const userDetails = useSelector((state) => state.userDetails);
	const { loading, error, user } = userDetails;
	const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
	const {
		success: successUpdate,
		error: errorUpdate,
		loading: loadingUpdate,
	} = userUpdateProfile;

	useEffect(() => {
		if (!user) {
			dispatch({ type: USER_UPDATE_PROFILE_RESET });
			dispatch(detailsUser(userInfo._id));
		} else {
			setName(user.name);
			setEmail(user.email);
			if (user.seller) {
				setSellerName(user.seller.name);
				setSellerLogo(user.seller.logo);
				setSellerDescription(user.seller.description);
			}
		}
	}, [dispatch, userInfo._id, user]);
	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Lozinke se ne poklapaju!");
		} else {
			dispatch(
				updateUserProfile({
					userId: user._id,
					name,
					email,
					password,
					sellerName,
					sellerLogo,
					sellerDescription,
				})
			);
		}
	};
	return (
		<div>
			<form className="form" onSubmit={submitHandler}>
				<div>
					<h1>Profil</h1>
				</div>
				{loading ? (
					<LoadingBox></LoadingBox>
				) : error ? (
					<MessageBox variant="failed-action">{error}</MessageBox>
				) : (
					<>
						{loadingUpdate && <LoadingBox></LoadingBox>}
						{errorUpdate && (
							<MessageBox variant="failed-action">{errorUpdate}</MessageBox>
						)}
						{successUpdate && (
							<MessageBox variant="success-action">
								Profil uspješno ažuriran
							</MessageBox>
						)}
						<div>
							<label htmlFor="name">Ime</label>
							<input
								id="name"
								type="text"
								placeholder="Unesite ime"
								value={name}
								onChange={(e) => setName(e.target.value)}
							></input>
						</div>
						<div>
							<label htmlFor="email">Email</label>
							<input
								id="email"
								type="text"
								placeholder="Unesite email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							></input>
						</div>
						<div>
							<label htmlFor="password">Lozinka</label>
							<input
								id="password"
								type="text"
								placeholder="Unesite lozinku"
								onChange={(e) => setPassword(e.target.value)}
							></input>
						</div>
						<div>
							<label htmlFor="confirmPassword">Ponovite lozinku</label>
							<input
								id="pconfirmPassword"
								type="text"
								placeholder="Ponovno unesite lozinku"
								onChange={(e) => setConfirmPassword(e.target.value)}
							></input>
						</div>
						{user.isSeller && (
							<>
								<h2>Prodavač</h2>
								<div>
									<label htmlFor="sellerName">Ime prodavača</label>
									<input
										id="sellerName"
										type="text"
										placeholder="Unesite ime prodavača"
										value={sellerName}
										onChange={(e) => setSellerName(e.target.value)}
									></input>
								</div>
								<div>
									<label htmlFor="sellerLogo">Logo prodavača</label>
									<input
										id="sellerLogo"
										type="text"
										placeholder="Unesite logo prodavača"
										value={sellerLogo}
										onChange={(e) => setSellerLogo(e.target.value)}
									></input>
								</div>
								<div>
									<label htmlFor="sellerDescription">Opis prodavača</label>
									<input
										id="sellerDescription"
										type="text"
										placeholder="Unesite opis prodavača"
										value={sellerDescription}
										onChange={(e) => setSellerDescription(e.target.value)}
									></input>
								</div>
							</>
						)}
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

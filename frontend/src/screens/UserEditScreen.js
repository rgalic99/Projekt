import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUser } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { USER_UPDATE_RESET } from "../constants/userConstants";

export default function UserEditScreen(props) {
	const userId = props.match.params.id;
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [isAdmin, setIsAdmin] = useState(false);
	const [isSeller, setIsSeller] = useState(false);
	const userDetails = useSelector((state) => state.userDetails);
	const { loading, error, user } = userDetails;

	const userUpdate = useSelector((state) => state.userUpdate);
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = userUpdate;

	const dispatch = useDispatch();
	useEffect(() => {
		if (successUpdate) {
			dispatch({ type: USER_UPDATE_RESET });
			props.history.push("/userlist");
		}
		if (!user) {
			dispatch(detailsUser(userId));
		} else {
			setName(user.name);
			setEmail(user.email);
			setIsAdmin(user.isAdmin);
			setIsSeller(user.isSeller);
		}
	}, [dispatch, props.history, successUpdate, user, userId]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(updateUser({ _id: userId, name, email, isSeller, isAdmin }));
	};
	return (
		<div>
			<form className="form" onSubmit={submitHandler}>
				<div>
					<h1>Uredi Korisnika{name}</h1>
					{loadingUpdate && <LoadingBox></LoadingBox>}
					{errorUpdate && (
						<MessageBox variant="failed-action">
							{errorUpdate}
						</MessageBox>
					)}
				</div>
				{loading ? (
					<LoadingBox />
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
								value={name}
								onChange={(e) => setName(e.target.value)}
							></input>
						</div>
						<div>
							<label htmlFor="email">Email</label>
							<input
								id="email"
								type="email"
								placeholder="Unesite email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							></input>
						</div>
						<div>
							<span>
								<label htmlFor="isSeller">Prodavač</label>
								<input
									id="isSeller"
									type="checkbox"
									checked={isSeller}
									onChange={(e) =>
										setIsSeller(e.target.checked)
									}
								></input>
							</span>
						</div>
						<div>
							<span>
								<label htmlFor="isAdmin">Admin</label>
								<input
									id="isAdmin"
									type="checkbox"
									checked={isAdmin}
									onChange={(e) =>
										setIsAdmin(e.target.checked)
									}
								></input>
							</span>
						</div>
						<div>
							<button type="submit" className="primary">
								Ažuriraj <i className="far fa-edit"></i>
							</button>
						</div>
					</>
				)}
			</form>
		</div>
	);
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, listUsers } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { USER_DETAILS_RESET } from "../constants/userConstants";

export default function UserListScreen(props) {
	const userList = useSelector((state) => state.userList);
	const { loading, error, users } = userList;
	const userDelete = useSelector((state) => state.userDelete);
	const {
		loading: loadingDelete,
		error: errorDelete,
		success: successDelete,
	} = userDelete;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listUsers());
		dispatch({
			type: USER_DETAILS_RESET,
		});
	}, [dispatch, successDelete]);
	const deleteHandler = (user) => {
		if (window.confirm("Are you sure?")) {
			dispatch(deleteUser(user._id));
		}
	};
	return (
		<div>
			<h1>Korisnici</h1>
			{loadingDelete && <LoadingBox></LoadingBox>}
			{errorDelete && (
				<MessageBox variant="failed-action">{errorDelete}</MessageBox>
			)}
			{successDelete && (
				<MessageBox variant="success">Korisnik uspješno obrisan</MessageBox>
			)}
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox variant="failed-action">{error}</MessageBox>
			) : (
				<table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>IME</th>
							<th>EMAIL</th>
							<th>PRODAVAČ</th>
							<th>ADMIN</th>
							<th>AKCIJE</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user._id}>
								<td>{user._id}</td>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>
									{user.isSeller ? (
										<MessageBox variant="success-action">Da</MessageBox>
									) : (
										<MessageBox variant="failed-action">Ne</MessageBox>
									)}
								</td>
								<td>
									{user.isAdmin ? (
										<MessageBox variant="success-action">Da</MessageBox>
									) : (
										<MessageBox variant="failed-action">Ne</MessageBox>
									)}
								</td>
								<td>
									<button
										type="button"
										className="small"
										onClick={() => props.history.push(`/user/${user._id}/edit`)}
									>
										Uredi
									</button>
									<button
										type="button"
										className="small"
										onClick={() => deleteHandler(user)}
									>
										Obriši
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}

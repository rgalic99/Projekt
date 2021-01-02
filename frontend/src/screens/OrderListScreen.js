import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, listOrders } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { ORDER_DELETE_RESET } from "../constants/orderConstants";

export default function OrderListScreen(props) {
	const sellerMode = props.match.path.indexOf("/seller") >= 0;
	const orderList = useSelector((state) => state.orderList);
	const { loading, error, orders } = orderList;
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	const orderDelete = useSelector((state) => state.orderDelete);
	const {
		loading: loadingDelete,
		error: errorDelete,
		success: successDelete,
	} = orderDelete;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: ORDER_DELETE_RESET });
		dispatch(listOrders({ seller: sellerMode ? userInfo._id : "" }));
	}, [dispatch, sellerMode, successDelete, userInfo._id]);
	const deleteHandler = (order) => {
		if (window.confirm("Jeste li sigurni da želite obrisati narudžbu?")) {
			dispatch(deleteOrder(order._id));
		}
	};
	return (
		<div>
			<h1>Narudžbe</h1>
			{loadingDelete && <LoadingBox></LoadingBox>}
			{errorDelete && (
				<MessageBox variant="failed-action">{errorDelete}</MessageBox>
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
							<th>KORISNIK</th>
							<th>DATUM</th>
							<th>UKUPNO</th>
							<th>PLAĆENO</th>
							<th>DOSTAVLJENO</th>
							<th>AKCIJE</th>
						</tr>
					</thead>
					<tbody>
						{orders ? (
							orders.map((order) => (
								<tr key={order._id}>
									<td>{order._id}</td>
									<td>{order.user.name}</td>
									<td>{order.createdAt.substring(0, 10)}</td>
									<td>{order.totalPrice.toFixed(0)}</td>
									<td>
										{order.isPaid ? (
											<MessageBox variant="success-action">
												{order.paidAt.substring(0, 10)}
											</MessageBox>
										) : (
											<MessageBox variant="failed-action">Ne</MessageBox>
										)}
									</td>
									<td>
										{order.isDelivered ? (
											<MessageBox variant="success-action">
												{order.deliveredAt.substring(0, 10)}
											</MessageBox>
										) : (
											<MessageBox variant="failed-action">Ne</MessageBox>
										)}
									</td>
									<td>
										<button
											type="button"
											className="small"
											onClick={() => {
												props.history.push(`/order/${order._id}`);
											}}
										>
											Detalji
										</button>
										<button
											type="button"
											className="small"
											onClick={() => deleteHandler(order)}
										>
											Obriši
										</button>
									</td>
								</tr>
							))
						) : (
							<></>
						)}
					</tbody>
				</table>
			)}
		</div>
	);
}

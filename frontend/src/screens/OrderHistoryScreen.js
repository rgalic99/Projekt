import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrderMine } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function OrderHistoryScreen(props) {
	const orderMineList = useSelector((state) => state.orderMineList);
	const { loading, error, orders } = orderMineList;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listOrderMine());
	}, [dispatch]);
	return (
		<div>
			<h1>Povijest narudžbi</h1>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox variant="failed-action">{error}</MessageBox>
			) : (
				<table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>DATUM</th>
							<th>UKUPNO</th>
							<th>PLAĆENO</th>
							<th>DOSTAVLJENO</th>
							<th>AKCIJE</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order) => (
							<tr key={order._id}>
								<td>{order._id}</td>
								<td>{order.createdAt.substring(0, 10)}</td>
								<td>{order.totalPrice.toFixed(0)} kn</td>
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
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}

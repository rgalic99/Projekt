import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsOrder } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function OrderScreen(props) {
	const orderId = props.match.params.id;
	const orderDetails = useSelector((state) => state.orderDetails);
	const { order, loading, error } = orderDetails;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(detailsOrder(orderId));
	}, [dispatch, orderId]);
	return loading ? (
		<LoadingBox></LoadingBox>
	) : error ? (
		<MessageBox variant="error">{error}</MessageBox>
	) : (
		<div>
			<h1>Narudžba br. {order._id}</h1>
			<div className="row top">
				<div className="col-2">
					<ul>
						<li>
							<div className="placeOrder placeOrder-body">
								<h2>Dostava</h2>
								<p>
									<strong>Ime:</strong> {order.shippingAddress.fullName} <br />
									<strong>Adresa: </strong> {order.shippingAddress.address},
									{order.shippingAddress.city},
									{order.shippingAddress.postalCode},
									{order.shippingAddress.country}
								</p>
								{order.isDelivered ? (
									<MessageBox variant="success">
										Dostavljeno: {order.deliveredAt}
									</MessageBox>
								) : (
									<MessageBox variant="error">Nije dostavljeno</MessageBox>
								)}
							</div>
						</li>
						<li>
							<div className="placeOrder placeOrder-body">
								<h2>Plaćanje</h2>
								<p>
									<strong>Način plaćanja:</strong> {order.paymentMethod}
								</p>
								{order.isPaid ? (
									<MessageBox variant="success">
										Plaćeno: {order.paidAt}
									</MessageBox>
								) : (
									<MessageBox variant="danger">Nije plaćeno</MessageBox>
								)}
							</div>
						</li>
						<li>
							<div className="placeOrder placeOrder-body">
								<h2>Naručeni proizvodi</h2>
								<ul>
									{order.orderItems.map((item) => (
										<li key={item.product}>
											<div className="row">
												<div>
													<img
														src={item.image}
														alt={item.name}
														className="small"
													></img>
												</div>
												<div className="min-30">
													<Link to={`/product/${item.product}`}>
														{item.name}
													</Link>
												</div>

												<div>
													{item.qty} x {item.price.toFixed(0)}kn =
													{item.qty * item.price.toFixed(0)}kn
												</div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</li>
					</ul>
				</div>
				<div className="col-1">
					<div className="placeOrder placeOrder-body">
						<ul>
							<li>
								<h2>Sažetak:</h2>
							</li>
							<li>
								<div className="row">
									<div>Proizvodi</div>
									<div>{order.itemsPrice.toFixed(0)}kn</div>
								</div>
							</li>
							<li>
								<div className="row">
									<div>Dostava</div>
									<div>{order.shippingPrice.toFixed(0)}kn</div>
								</div>
							</li>
							<li>
								<div className="row">
									<div>PDV</div>
									<div>{order.taxPrice.toFixed(0)}kn</div>
								</div>
							</li>
							<li>
								<div className="row">
									<div>
										<strong> Ukupno </strong>
									</div>
									<div>
										<strong>{order.totalPrice.toFixed(0)}kn</strong>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

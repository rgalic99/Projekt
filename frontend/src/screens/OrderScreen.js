import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deliverOrder, detailsOrder, payOrder } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { PayPalButton } from "react-paypal-button-v2";
import {
	ORDER_DELIVER_RESET,
	ORDER_PAY_RESET,
} from "../constants/orderConstants";

export default function OrderScreen(props) {
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	if (!userInfo) {
		props.history.push("/signin");
	}
	const orderId = props.match.params.id;
	const [sdkReady, setSdkReady] = useState(false);
	const orderDetails = useSelector((state) => state.orderDetails);
	const { order, loading, error } = orderDetails;

	const orderDeliver = useSelector((state) => state.orderDeliver);
	const {
		loading: loadingDeliver,
		error: errorDeliver,
		success: successDeliver,
	} = orderDeliver;

	const orderPay = useSelector((state) => state.orderPay);
	const {
		loading: loadingPay,
		error: errorPay,
		success: successPay,
	} = orderPay;

	const dispatch = useDispatch();
	useEffect(() => {
		const addPayPalScript = async () => {
			const { data } = await Axios.get("/api/config/paypal");
			const script = document.createElement("script");
			script.type = "text/javascript";
			script.src = `https://www.paypal.com/sdk/ks?client-id=${data}`;
			script.async = true;
			script.onload = () => {
				setSdkReady(true);
			};
			document.body.appendChild(script);
		};
		if (
			!order ||
			successDeliver ||
			successPay ||
			(order && order._id !== orderId)
		) {
			dispatch({ type: ORDER_PAY_RESET });
			dispatch({ type: ORDER_DELIVER_RESET });
			dispatch(detailsOrder(orderId));
		} else {
			if (!order.isPaid) {
				if (!window.paypal) {
					addPayPalScript();
				} else {
					setSdkReady(true);
				}
			}
		}
	}, [dispatch, order, orderId, sdkReady, successDeliver, successPay]);

	const successPaymentHandler = (paymentResult) => {
		dispatch(payOrder(order, paymentResult));
	};

	const deliverHandler = () => {
		dispatch(deliverOrder(order._id));
	};

	return loading ? (
		<LoadingBox></LoadingBox>
	) : error ? (
		<MessageBox variant="failed-action">{error}</MessageBox>
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
								<>
									{order.isDelivered ? (
										<MessageBox variant="success-action">
											Dostavljeno: {order.deliveredAt}
										</MessageBox>
									) : (
										<MessageBox variant="failed-action">
											Nije dostavljeno
										</MessageBox>
									)}
								</>
							</div>
						</li>
						<li>
							<div className="placeOrder placeOrder-body">
								<h2>Plaćanje</h2>
								<p>
									<strong>Način plaćanja:</strong> {order.paymentMethod}
								</p>
								{order.isPaid ? (
									<MessageBox variant="success-action">
										Plaćeno: {order.paidAt.substring(0, 10)}
									</MessageBox>
								) : (
									<MessageBox variant="failed-action">Nije plaćeno</MessageBox>
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
							{!order.isPaid && (
								<li>
									<>
										{errorPay && (
											<MessageBox variant="failed-action">
												{errorPay}
											</MessageBox>
										)}
										{loadingPay && <LoadingBox></LoadingBox>}
										<PayPalButton
											amount={order.totalPrice.toFixed(0)}
											onSuccess={successPaymentHandler}
										></PayPalButton>
									</>
								</li>
							)}
							{userInfo.isAdmin && order.isPaid && !order.isDelivered && (
								<li>
									{loadingDeliver && <LoadingBox></LoadingBox>}
									{errorDeliver && (
										<MessageBox variant="failed-action">
											{errorDeliver}
										</MessageBox>
									)}
									<button
										type="button"
										className="primary block"
										onClick={deliverHandler}
									>
										Dostavi Narudžbu
									</button>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

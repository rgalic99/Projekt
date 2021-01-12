import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import MessageBox from "../components/MessageBox";

export default function CartScreen(props) {
	const productId = props.match.params.id;
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const qty = props.location.search
		? Number(props.location.search.split("=")[1])
		: 1;
	const dispatch = useDispatch();
	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty));
		}
	}, [dispatch, productId, qty]);

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
		props.history.push("/cart");
	};

	const checkoutHandler = () => {
		props.history.push("/signin?redirect=shipping");
	};
	return (
		<div className="row top">
			<div className="col-2">
				<h1>Košarica</h1>
				{cartItems.length === 0 ? (
					<div className="emptyCart">
						<MessageBox>
							Košarica je prazna
							<Link to="/">....⬅ Natrag na kupovinu</Link>
						</MessageBox>
					</div>
				) : (
					<ul>
						{cartItems.map((item) => (
							<li key={item.product}>
								<div className="placeOrder placeOrder-body row min-30-parent">
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
										<select
											value={item.qty}
											onChange={(e) =>
												dispatch(
													addToCart(
														item.product,
														Number(e.target.value)
													)
												)
											}
										>
											{[
												...Array(
													item.countInStock
												).keys(),
											].map((x) => (
												<option
													key={x + 1}
													value={x + 1}
												>
													{x + 1}
												</option>
											))}
										</select>
									</div>
									<div className="pricetag">
										{item.price.toFixed(0) * item.qty}
										kn
									</div>
									<div>
										<button
											type="button"
											className="remove-button"
											onClick={() =>
												removeFromCartHandler(
													item.product
												)
											}
										>
											Obriši{" "}
											<i class="far fa-trash-alt"></i>
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
			<div className="col-1">
				<div className="card card-body">
					<ul>
						<li>
							<h2 className="price-2">
								Ukupno (
								{cartItems.reduce((a, c) => a + c.qty, 0)}
								{cartItems.length ? (
									cartItems[0].qty === 1 &&
									cartItems.length === 1 ? (
										<span> proizvod</span>
									) : (
										<span> proizvoda</span>
									)
								) : (
									<span> proizvoda</span>
								)}
								){" "}
								<h2>
									{cartItems
										.reduce(
											(a, c) => a + c.price * c.qty,
											0
										)
										.toFixed(0)}
									kn
								</h2>
							</h2>
						</li>
						<li>
							<button
								type="button"
								onClick={checkoutHandler}
								className="primary block"
								disabled={cartItems.length === 0}
							>
								Dovrši kupovinu
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

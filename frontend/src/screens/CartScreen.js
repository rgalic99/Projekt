import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import MessageBox from "../components/MessageBox";
import { setDiscount } from "../actions/discountActions";

export default function CartScreen(props) {
	const productId = props.match.params.id;
	const cart = useSelector((state) => state.cart);
	const rate = "10";
	const { cartItems } = cart;
	const [discountp, setDiscountp] = useState("");
	const [discountError, setDiscountError] = useState(false);
	const [discountSuccess, setDiscountSuccess] = useState(false);
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
	const discountHandler = () => {
		if (discountp === "POPUST10") {
			setDiscountError(false);
			setDiscountSuccess(true);
			dispatch(setDiscount(rate));
		} else {
			setDiscountSuccess(false);
			setDiscountError(true);
		}
	};
	return (
		<div className="row top">
			<div className="col-2">
				<h1>
					Košarica <i className="fa fa-shopping-cart"></i>
				</h1>
				{cartItems.length === 0 ? (
					<div className="emptyCart">
						<MessageBox>
							Košarica je prazna
							<Link to="/">
								....<i className="fas fa-arrow-left"></i> Natrag
								na kupovinu
							</Link>
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
											<i className="far fa-trash-alt"></i>
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
								<div className="price-3">
									{cartItems
										.reduce(
											(a, c) => a + c.price * c.qty,
											0
										)
										.toFixed(0)}
									kn
								</div>
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
				<div className="card card-body-discount">
					<h2>Kod za popust</h2>
					{discountError && (
						<MessageBox variant="failed-action">
							Pogrešan kod
							<br />
						</MessageBox>
					)}
					{discountSuccess && (
						<MessageBox variant="success-action">
							Kod uspiješno primjenjen
							<br />
						</MessageBox>
					)}
					{!(discountSuccess || discountError) && <></>}
					<input
						id="popust"
						type="text"
						placeholder="Unesite kod..."
						value={discountp}
						onChange={(e) => setDiscountp(e.target.value)}
					></input>
					<button
						type="discount-button"
						className="secondary block"
						disabled={cartItems.length === 0}
						onClick={discountHandler}
					>
						Unesi kod
					</button>
				</div>
			</div>
		</div>
	);
}

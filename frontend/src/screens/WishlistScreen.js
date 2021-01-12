import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToWishlist, removeFromWishlist } from "../actions/wishlistActions";
import MessageBox from "../components/MessageBox";

export default function WishlistScreen(props) {
	const productId = props.match.params.id;
	const wishlist = useSelector((state) => state.wishlist);
	const { wishlistItems } = wishlist;
	const dispatch = useDispatch();
	useEffect(() => {
		if (productId) {
			dispatch(addToWishlist(productId));
		}
	}, [dispatch, productId]);

	const removeFromWishlistHandler = (id) => {
		dispatch(removeFromWishlist(id));
		props.history.push("/wishlist");
	};

	const addToCartHandler = () => {
		props.history.push(`/cart/${productId}?qty=1`);
	};

	return (
		<div className="row top">
			<div className="col-2">
				<h1>Lista želja</h1>
				{wishlistItems.length === 0 ? (
					<div className="emptyCart">
						<MessageBox>
							Lista želja je prazna
							<Link to="/">....⬅ Natrag na kupovinu</Link>
						</MessageBox>
					</div>
				) : (
					<ul>
						{wishlistItems.map((item) => (
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

									<div className="pricetag">
										{item.price.toFixed(0)}
										kn
									</div>

									<div>
										<button
											type="button"
											className="primary"
											onClick={() =>
												addToCartHandler(item.product)
											}
										>
											Dodaj u Košaricu{" "}
											<i class="fas fa-cart-plus"></i>
										</button>
									</div>

									<div>
										<button
											type="button"
											className="remove-button"
											onClick={() =>
												removeFromWishlistHandler(
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
		</div>
	);
}

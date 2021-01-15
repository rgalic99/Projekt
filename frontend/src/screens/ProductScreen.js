import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
/*import Rating from "../components/Rating";*/
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { detailsProduct, createReview } from "../actions/productActions";
import Rating from "../components/Rating";
import { PRODUCT_REVIEW_CREATE_RESET } from "../constants/productConstants";

export default function ProductScreen(props) {
	const dispatch = useDispatch();
	const productId = props.match.params.id;
	const [qty, setQty] = useState(1);
	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;

	const productReviewCreate = useSelector(
		(state) => state.productReviewCreate
	);
	const {
		loading: loadingReviewCreate,
		error: errorReviewCreate,
		success: successReviewCreate,
	} = productReviewCreate;

	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState("");

	useEffect(() => {
		if (successReviewCreate) {
			window.alert("Review Submitted Successfully");
			setRating("");
			setComment("");
			dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
		}
		dispatch(detailsProduct(productId));
	}, [dispatch, productId, successReviewCreate]);

	const addToCartHandler = () => {
		props.history.push(`/cart/${productId}?qty=${qty}`);
	};

	const addToWishlistHandler = () => {
		props.history.push(`/wishlist/${productId}?qty=1`);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (comment && rating) {
			dispatch(
				createReview(productId, {
					rating,
					comment,
					name: userInfo.name,
				})
			);
		} else {
			alert("Molimo unesite ocjenu i komentar");
		}
	};
	return (
		<div>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox variant="failed-action">{Error}</MessageBox>
			) : (
				<div>
					<Link to="/" onClick={() => props.history.goBack()}>
						<i className="fas fa-arrow-left"></i> Povratak na
						rezultate
					</Link>
					<div className="row top">
						<span className="col-2">
							<img
								className="large"
								src={product.image}
								alt={product.name}
							></img>
						</span>
						<ul className="productInfo">
							<div className="card card-body pricebox">
								<ul>
									<li>
										<div className="price-2">
											Cijena:{" "}
											<h2>
												{product.price.toFixed(0)} kn
											</h2>
										</div>
									</li>
									<li>
										<div className="row">
											<div>Status: </div>
											<div>
												{product.countInStock > 0 ? (
													<span className="success">
														{" "}
														Dostupno
													</span>
												) : (
													<span className="error">
														{" "}
														Nedostupno
													</span>
												)}
											</div>
										</div>
									</li>
									{product.countInStock > 0 && (
										<>
											<li>
												<div className="row">
													<div>Količina</div>
													<div>
														<select
															value={qty}
															onChange={(e) =>
																setQty(
																	e.target
																		.value
																)
															}
														>
															{[
																...Array(
																	product.countInStock
																).keys(),
															].map((x) => (
																<option
																	key={x + 1}
																	value={
																		x + 1
																	}
																>
																	{x + 1}
																</option>
															))}
														</select>
													</div>
												</div>
											</li>
											<li>
												<button
													onClick={addToCartHandler}
													className="primary block"
												>
													Dodaj u košaricu{" "}
													<i className="fas fa-cart-plus"></i>
												</button>
												<button
													onClick={
														addToWishlistHandler
													}
													className="wish primary block"
												>
													Dodaj u listu želja{" "}
													<i className="far fa-heart"></i>
												</button>
											</li>
										</>
									)}
								</ul>
							</div>
							{
								<li>
									Prodavač
									<h2>
										<Link
											to={`/seller/${product.seller._id}`}
										>
											{product.seller.seller.name}
										</Link>
									</h2>
									<Rating
										rating={product.seller.seller.rating}
										numReviews={
											product.seller.seller.numReviews
										}
									></Rating>
								</li>
							}

							<li>
								<h1>{product.name}</h1>
							</li>
							<li>Cijena: {product.price.toFixed(0)}kn</li>
							{
								<li className="product-rating">
									<Rating
										rating={product.rating}
										numReviews={product.numReviews}
									></Rating>
								</li>
							}
							<li>
								Opis:
								<span className="product-description">
									{product.description}
								</span>
							</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>
								{userInfo ? (
									<form
										className="form"
										onSubmit={submitHandler}
									>
										<div>
											<h2>Napišite recenziju</h2>
										</div>
										<div>
											<label htmlFor="rating">
												Recenzija
											</label>
											<select
												id="rating"
												value={rating}
												onChange={(e) =>
													setRating(e.target.value)
												}
											>
												<option value="">
													Odaberi..
												</option>
												<option value="1">
													1- Loše
												</option>
												<option value="2">
													2- Aj aj
												</option>
												<option value="3">
													3- Dobro
												</option>
												<option value="4">
													4- Ma super
												</option>
												<option value="5">
													5- Parekselans
												</option>
											</select>
										</div>
										<div>
											<label htmlFor="comment">
												Komentar
											</label>
											<textarea
												id="comment"
												value={comment}
												onChange={(e) =>
													setComment(e.target.value)
												}
											></textarea>
										</div>
										<div>
											<label />
											<button
												className="primary"
												type="submit"
											>
												Pošalji{" "}
												<i className="fas fa-paper-plane"></i>
											</button>
										</div>
										<div>
											{loadingReviewCreate && (
												<LoadingBox></LoadingBox>
											)}
											{errorReviewCreate && (
												<MessageBox variant="failed-action">
													{errorReviewCreate}
												</MessageBox>
											)}
										</div>
									</form>
								) : (
									<MessageBox>
										Molimo{" "}
										<Link to="/signin">Prijavite se</Link>{" "}
										da bi ostavili recenziju
									</MessageBox>
								)}
							</li>
						</ul>{" "}
						<h2 id="reviews" className="row center">
							Recenzija
						</h2>
						<div className="review">
							{product.reviews.length === 0 && (
								<MessageBox>Nema recenzija</MessageBox>
							)}
							{product.reviews.map((review) => (
								<li key={review._id}>
									<strong>{review.name}</strong>
									<Rating
										rating={review.rating}
										caption=" "
									></Rating>
									<p>{review.createdAt.substring(0, 10)}</p>
									<p>{review.comment}</p>
								</li>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

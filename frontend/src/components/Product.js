import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product(props) {
	const { product } = props;
	return (
		<div key={product._id} className="card">
			<Link to={`/product/${product._id}`}>
				<img
					className="medium"
					src={product.image}
					alt={product.name}
				></img>
			</Link>
			<div className="card-body">
				<Link to={`/product/${product._id}`}>
					<h2>{product.name}</h2>
				</Link>
				<Rating
					rating={product.rating}
					numReviews={product.numReviews}
					flag={true}
				></Rating>
				<span className="price">{product.price.toFixed(0)}kn</span>
			</div>
		</div>
	);
}

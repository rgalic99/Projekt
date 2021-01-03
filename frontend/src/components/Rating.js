import React from "react";
import Stars from "./Stars";

export default function Rating(props) {
	const { rating, numReviews, caption } = props;
	return (
		<span className="rating">
			{Stars(rating)}
			<div>
				{caption ? (
					<span>{caption}</span>
				) : numReviews === 2 || numReviews === 3 || numReviews === 4 ? (
					numReviews + " recenzije"
				) : (
					numReviews + " recenzija"
				)}
			</div>
		</span>
	);
}

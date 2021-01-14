import React from "react";
import Stars from "./Stars";

export default function Rating(props) {
	const { rating, numReviews, caption, flag } = props;

	return (
		<>
			{flag ? (
				<span className="rating">
					{Stars(rating)}
					<div>
						{caption ? (
							<span>{caption}</span>
						) : numReviews === 2 ||
						  numReviews === 3 ||
						  numReviews === 4 ? (
							numReviews + " recenzije"
						) : (
							numReviews + " recenzija"
						)}
					</div>
				</span>
			) : (
				<span className="rating-else">
					{Stars(rating)}
					<div>
						{caption ? (
							<span>{caption}</span>
						) : numReviews === 2 ||
						  numReviews === 3 ||
						  numReviews === 4 ? (
							numReviews + " recenzije"
						) : (
							numReviews + " recenzija"
						)}
					</div>
				</span>
			)}
		</>
	);
}

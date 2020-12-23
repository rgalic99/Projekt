import React from "react";
import Stars from "./Stars";

export default function Rating(props) {
	const { rating, numReviews } = props;
	return (
		<span className="rating">
			{Stars(rating)}
			<div>{numReviews + " recenzija"}</div>
		</span>
	);
}

import React from "react";
import Stars from "./Stars";

export default function Rating(props) {
	const { rating, numReviews } = props;
	return (
		<div className="rating">
			{Stars(rating)}
			<span>
				<div>{numReviews + " recenzija"}</div>
			</span>
		</div>
	);
}

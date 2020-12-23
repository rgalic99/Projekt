import React from "react";

const Stars = (props) => {
	let stars = [];
	let counter = 0;
	for (let i = 1; i <= props; i++) {
		stars.push(<i className="fa fa-star" key={counter}></i>);
		counter++;
	}
	if (props - counter >= 0.5) {
		counter++;
		stars.push(<i className="fa fa-star-half-o" key={counter}></i>);
	}
	for (let i = 5; i > counter; i--) {
		stars.push(<i className="fa fa-star-o" key={i + counter}></i>);
	}

	return <span className="Stars">{stars}</span>;
};

export default Stars;

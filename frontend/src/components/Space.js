import React from "react";

export default function Space(props) {
	const space = [];
	for (let i = 0; i < Number(props.num); i++) space.push(<br key={i} />);
	return space;
}

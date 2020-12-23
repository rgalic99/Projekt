import React from "react";

export default function MessageBox(props) {
	return (
		<span className={`alert alert-${props.variant || "info"}`}>
			{props.children}
		</span>
	);
}

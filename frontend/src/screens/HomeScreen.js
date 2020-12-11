import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function HomeScreen(props) {
	const [Loading, setLoading] = useState(false);
	const [Error, setError] = useState(false);
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const { data } = await axios.get("/api/products");
				setLoading(false);
				setProducts(data);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};
		fetchData();
	}, []);
	return (
		<div>
			{Loading ? (
				<LoadingBox></LoadingBox>
			) : Error ? (
				<MessageBox variant="faliure">{Error}</MessageBox>
			) : (
				<div className="row center">
					{products.map((product) => (
						<Product key={product._id} product={product}></Product>
					))}
				</div>
			)}
		</div>
	);
}

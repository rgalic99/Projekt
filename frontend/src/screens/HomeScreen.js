import React, { useEffect } from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";

export default function HomeScreen(props) {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;

	useEffect(() => {
		dispatch(listProducts({}));
	}, [dispatch]);
	return (
		<div>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox variant="failed-action">{error}</MessageBox>
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

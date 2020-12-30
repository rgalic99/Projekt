import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function ProductListScreen(props) {
	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);
	const deleteHandler = () => {};
	return (
		<div>
			<h1>Proizvodi</h1>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox variant="failed-action">{error}</MessageBox>
			) : (
				<table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>IME</th>
							<th>CIJENA</th>
							<th>KATEGORIJA</th>
							<th>PROIZVOĐAČ</th>
							<th>AKCIJE</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => (
							<tr key={product._id}>
								<td>{product._id}</td>
								<td>{product.name}</td>
								<td>{product.price}</td>
								<td>{product.category}</td>
								<td>{product.brand}</td>
								<td>
									<button
										type="button"
										className="small"
										onClick={() =>
											props.history.push(`/product/${product._id}/edit`)
										}
									>
										Uredi
									</button>
									<button
										type="button"
										className="small"
										onClick={() => deleteHandler(product)}
									>
										Izbriši
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}

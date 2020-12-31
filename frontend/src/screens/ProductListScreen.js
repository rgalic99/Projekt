import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	createProduct,
	deleteProduct,
	listProducts,
} from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {
	PRODUCT_CREATE_RESET,
	PRODUCT_DELETE_RESET,
} from "../constants/productConstants";

export default function ProductListScreen(props) {
	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;

	const productCreate = useSelector((state) => state.productCreate);
	const {
		loading: loadingCreate,
		error: errorCreate,
		success: successCreate,
		product: createdProduct,
	} = productCreate;

	const productDelete = useSelector((state) => state.productDelete);
	const {
		loading: loadingDelete,
		error: errorDelete,
		success: successDelete,
	} = productDelete;

	const dispatch = useDispatch();
	useEffect(() => {
		if (successCreate) {
			dispatch({ type: PRODUCT_CREATE_RESET });
			props.history.push(`/product/${createdProduct._id}/edit`);
		}
		if (successDelete) {
			dispatch({ type: PRODUCT_DELETE_RESET });
		}
		dispatch(listProducts());
	}, [createdProduct, dispatch, props.history, successCreate, successDelete]);

	const createHandler = () => {
		dispatch(createProduct());
	};
	const deleteHandler = (product) => {
		if (window.confirm("Jeste li sigurni da želite obrisati proizvod?")) {
			dispatch(deleteProduct(product._id));
		}
	};
	return (
		<div>
			<div className="row">
				<h1>Proizvodi</h1>
				<button type="button" className="primary" onClick={createHandler}>
					Kreiraj Proizvod
				</button>
			</div>
			{loadingDelete && <LoadingBox></LoadingBox>}
			{errorDelete && (
				<MessageBox variant="failed-action">{errorDelete}</MessageBox>
			)}

			{loadingCreate && <LoadingBox></LoadingBox>}
			{errorCreate && (
				<MessageBox variant="failed-action">{errorCreate}</MessageBox>
			)}
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

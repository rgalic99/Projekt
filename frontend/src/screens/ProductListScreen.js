import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
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
	const { pageNumber = 1 } = useParams();
	const productList = useSelector((state) => state.productList);
	const { loading, error, products, page, pages } = productList;
	const sellerMode = props.match.path.indexOf("/seller") >= 0;
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;

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
		dispatch(
			listProducts({ seller: sellerMode ? userInfo._id : "", pageNumber })
		);
	}, [
		createdProduct,
		dispatch,
		props.history,
		sellerMode,
		successCreate,
		successDelete,
		userInfo._id,
		pageNumber,
	]);

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
				<button
					type="button"
					className="primary"
					onClick={createHandler}
				>
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
				<>
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
									<td>{product.price.toFixed(0)} kn</td>
									<td>{product.category}</td>
									<td>{product.brand}</td>
									<td>
										<button
											type="button"
											className="small"
											onClick={() =>
												props.history.push(
													`/product/${product._id}/edit`
												)
											}
										>
											Uredi{" "}
											<i className="far fa-edit"></i>
										</button>
										<button
											type="button"
											className="small remove-button-2"
											onClick={() =>
												deleteHandler(product)
											}
										>
											Obriši{" "}
											<i className="far fa-trash-alt"></i>
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<div className="row center pagination">
						{sellerMode
							? [...Array(pages).keys()].map((x) => (
									<Link
										className={
											x + 1 === page ? "active" : ""
										}
										key={x + 1}
										to={`/productlist/seller/pageNumber/${
											x + 1
										}`}
									>
										{x + 1}
									</Link>
							  ))
							: [...Array(pages).keys()].map((x) => (
									<Link
										className={
											x + 1 === page ? "active" : ""
										}
										key={x + 1}
										to={`/productlist/pageNumber/${x + 1}`}
									>
										{x + 1}
									</Link>
							  ))}
					</div>
				</>
			)}
		</div>
	);
}

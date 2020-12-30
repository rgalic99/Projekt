import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct, updateProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";

export default function ProductEditScreen(props) {
	const productId = props.match.params.id;
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");
	const [category, setCategory] = useState("");
	const [countInStock, setCountInStock] = useState("");
	const [brand, setBrand] = useState("");
	const [description, setDescription] = useState("");

	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;

	const productUpdate = useSelector((state) => state.productUpdate);
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = productUpdate;

	const dispatch = useDispatch();
	useEffect(() => {
		if (successUpdate) {
			props.history.push("/productlist");
		}
		if (!product || product._id !== productId || successUpdate) {
			dispatch({ type: PRODUCT_UPDATE_RESET });
			dispatch(detailsProduct(productId));
		} else {
			setName(product.name);
			setPrice(product.price);
			setImage(product.image);
			setCategory(product.category);
			setCountInStock(product.countInStock);
			setBrand(product.brand);
			setDescription(product.description);
		}
	}, [product, dispatch, productId, successUpdate, props.history]);
	const submitHandler = (e) => {
		e.preventDefault();

		dispatch(
			updateProduct({
				_id: productId,
				name,
				price,
				image,
				category,
				brand,
				countInStock,
				description,
			})
		);
	};
	return (
		<div>
			<form className="form" onSubmit={submitHandler}>
				<div>
					<h1>Uredi Proizvod {productId}</h1>
				</div>
				{loadingUpdate && <LoadingBox></LoadingBox>}
				{errorUpdate && (
					<MessageBox variant="failed-action">{errorUpdate}</MessageBox>
				)}
				{loading ? (
					<LoadingBox></LoadingBox>
				) : error ? (
					<MessageBox variant="failed-action">{error}</MessageBox>
				) : (
					<>
						<div>
							<label htmlFor="name">Ime</label>
							<input
								id="name"
								type="text"
								placeholder="Unesite ime"
								value={name}
								onChange={(e) => setName(e.target.value)}
							></input>
						</div>
						<div>
							<label htmlFor="price">Cijena</label>
							<input
								id="price"
								type="text"
								placeholder="Unesite cijenu"
								value={price}
								onChange={(e) => setPrice(e.target.value)}
							></input>
						</div>
						<div>
							<label htmlFor="image">Slika</label>
							<input
								id="image"
								type="text"
								placeholder="Unesite sliku"
								value={image}
								onChange={(e) => setImage(e.target.value)}
							></input>
						</div>
						<div>
							<label htmlFor="category">Kategorija</label>
							<input
								id="category"
								type="text"
								placeholder="Unesite kategoriju"
								value={category}
								onChange={(e) => setCategory(e.target.value)}
							></input>
						</div>
						<div>
							<label htmlFor="brand">Proizvođač</label>
							<input
								id="brand"
								type="text"
								placeholder="Unesite proizvođača"
								value={brand}
								onChange={(e) => setBrand(e.target.value)}
							></input>
						</div>
						<div>
							<label htmlFor="countInStock">Količina</label>
							<input
								id="countInStock"
								type="text"
								placeholder="Unesite količinu"
								value={countInStock}
								onChange={(e) => setCountInStock(e.target.value)}
							></input>
						</div>
						<div>
							<label htmlFor="description">Opis</label>
							<textarea
								id="description"
								rows="3"
								type="text"
								placeholder="Unesite opis"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							></textarea>
						</div>
						<div>
							<label></label>
							<button className="primary" type="submit">
								Ažuriraj
							</button>
						</div>
					</>
				)}
			</form>
		</div>
	);
}

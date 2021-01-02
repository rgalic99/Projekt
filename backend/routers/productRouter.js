import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";
import { isAdmin, isAuth, isSellerOrAdmin } from "../utils.js";

const productRouter = express.Router();

productRouter.get(
	"/",
	expressAsyncHandler(async (req, res) => {
		const seller = req.query.seller || "";
		const sellerFilter = seller ? { seller } : {};
		const products = await Product.find({ ...sellerFilter });
		res.send(products);
	})
);

productRouter.get(
	"/seed",
	expressAsyncHandler(async (req, res) => {
		// await Product.remove({});
		const createdProducts = await Product.insertMany(data.products);
		res.send({ createdProducts });
	})
);

productRouter.get(
	"/:id",
	expressAsyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);
		if (product) {
			res.send(product);
		} else {
			res.status(404).send({ message: "Proizvod nije pronađen" });
		}
	})
);

productRouter.post(
	"/",
	isAuth,
	isSellerOrAdmin,
	expressAsyncHandler(async (req, res) => {
		const product = new Product({
			name: "uzorak ime " + Date.now().substring(0, 10),
			seller: req.user._id,
			image: "/images/p0.jpg",
			price: 0,
			category: "uzorak kategorija",
			brand: "uzorak proizvođač",
			countInStock: 0,
			rating: 0,
			numReviews: 0,
			description: "uzorak opis",
		});
		const createdProduct = await product.save();
		res.send({ message: "Proizvod kreiran", product: createdProduct });
	})
);

productRouter.put(
	"/:id",
	isAuth,
	isSellerOrAdmin,
	expressAsyncHandler(async (req, res) => {
		const productId = req.params.id;
		const product = await Product.findById(productId);
		if (product) {
			product.name = req.body.name;
			product.price = req.body.price;
			product.image = req.body.image;
			product.category = req.body.category;
			product.brand = req.body.brand;
			product.countInStock = req.body.countInStock;
			product.description = req.body.description;
			const updatedProduct = await product.save();
			res.send({ message: "Proizvod ažuriran", product: updatedProduct });
		} else {
			res.status(404).send({ message: "Proizvod nije pronađen" });
		}
	})
);

productRouter.delete(
	"/:id",
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);
		if (product) {
			const deleteProduct = await product.remove();
			res.send({ message: "Proizvod obrisan", product: deleteProduct });
		} else {
			res.status(404).send({ message: "Proizvod nije pronađen" });
		}
	})
);
export default productRouter;

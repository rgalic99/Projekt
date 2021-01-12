import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { signOut } from "./actions/userActions";
import CartScreen from "./screens/CartScreen";
import WishlistScreen from "./screens/WishlistScreen";
import HomeScreen from "./screens/HomeScreen";
import KontaktScreen from "./screens/KontaktScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import SellerRoute from "./components/SellerRoute";
import SellerScreen from "./screens/SellerScreen";
import SearchScreen from "./screens/SearchScreen";
import SearchBox from "./components/SearchBox";
import { listProductCategories } from "./actions/productActions";
import LoadingBox from "./components/LoadingBox";
import MessageBox from "./components/MessageBox";
import MapScreen from "./screens/MapScreen";
import PageInfoScreen from "./screens/PageInfoScreen";

function App() {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const wishlist = useSelector((state) => state.wishlist);
	const { wishlistItems } = wishlist;
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
	const dispatch = useDispatch();
	const signoutHandler = () => {
		dispatch(signOut());
	};
	const productCategoryList = useSelector(
		(state) => state.productCategoryList
	);
	const {
		loading: loadingCategories,
		error: errorCategories,
		categories,
	} = productCategoryList;
	useEffect(() => {
		dispatch(listProductCategories());
	}, [dispatch]);
	return (
		<BrowserRouter>
			<div className="grid-container">
				<header className="row">
					<div className="logo">
						<button
							type="button"
							className="open-sidebar"
							onClick={() => setSidebarIsOpen(true)}
						>
							<i className="fa fa-bars"></i>
						</button>
						<Link to="/"> Tech - @ - Tack </Link>
					</div>
					<span>
						<Route
							render={({ history }) => (
								<SearchBox history={history}></SearchBox>
							)}
						></Route>
					</span>
					<div className="header-links">
						<Link to="/cart" className="cart">
							Košarica<i class="fa fa-shopping-cart"></i>
							{cartItems.length > 0 && (
								<span className="badge">
									{cartItems.length}
								</span>
							)}
						</Link>
						<Link to="/wishlist" className="cart">
							Lista želja <i class="far fa-heart"></i>
							{wishlistItems.length > 0 && (
								<span className="badge">
									{wishlistItems.length}
								</span>
							)}
						</Link>
						{userInfo ? (
							<div className="dropdown">
								<Link to="#">
									{userInfo.name}
									<i className="fa fa-caret-down"></i>
								</Link>
								<ul className="dropdown-content">
									<li>
										<Link to="/profile">
											<i class="fa fa-user"></i> Profil
										</Link>
									</li>
									<li>
										<Link to="/orderhistory">
											<i class="fas fa-receipt"></i>{" "}
											Narudžbe
										</Link>
									</li>
									<li>
										<Link
											to="#signout"
											onClick={signoutHandler}
										>
											<i class="fas fa-user-slash"></i>{" "}
											Odjava
										</Link>
									</li>
								</ul>
							</div>
						) : (
							<Link to="/signin" className="signUpIn">
								Prijava <i class="fas fa-sign-in-alt"></i>
							</Link>
						)}
						{userInfo && userInfo.isSeller && (
							<div className="dropdown">
								<Link to="#admin">
									Prodavač{" "}
									<i className="fa fa-caret-down"></i>
								</Link>
								<ul className="dropdown-content">
									<li>
										<i class="fa fa-dolly"></i>
										<Link to="/productlist/seller">
											Proizvodi
										</Link>
									</li>
									<li>
										<i class="fas fa-receipt"></i>
										<Link to="/orderlist/seller">
											Narudžbe
										</Link>
									</li>
								</ul>
							</div>
						)}
						{userInfo && userInfo.isAdmin && (
							<div className="dropdown">
								<Link to="#admin">
									Admin <i className="fa fa-caret-down"></i>
								</Link>
								<ul className="dropdown-content">
									{/* 	<li>
										<Link to="/dashboard">Pregled</Link>
									</li> */}
									<li>
										<i class="fa fa-dolly"></i>
										<Link to="/productlist">Proizvodi</Link>
									</li>
									<li>
										<i class="fas fa-receipt"></i>
										<Link to="/orderlist">Narudžbe</Link>
									</li>
									<li>
										<i class="fa fa-users"></i>
										<Link to="/userlist">Korisnici</Link>
									</li>
								</ul>
							</div>
						)}
					</div>
				</header>
				<aside className={sidebarIsOpen ? "open" : ""}>
					<ul className="categories">
						<li>
							<strong>Kategorije</strong>
							<button
								onClick={() => setSidebarIsOpen(false)}
								className="close-sidebar"
								type="button"
							>
								<i class="fas fa-times"></i>
							</button>
						</li>
						{loadingCategories ? (
							<LoadingBox></LoadingBox>
						) : errorCategories ? (
							<MessageBox variant="failed-action">
								{errorCategories}
							</MessageBox>
						) : (
							categories.map((c) => (
								<li key={c}>
									<Link
										to={`/search/category/${c}`}
										onClick={() => setSidebarIsOpen(false)}
									>
										{c}
									</Link>
								</li>
							))
						)}
					</ul>
				</aside>
				<main className="main">
					<Route path="/" component={HomeScreen} exact></Route>
					<Route
						path="/product/:id"
						component={ProductScreen}
						exact
					></Route>
					<Route
						path="/product/:id/edit"
						component={ProductEditScreen}
						exact
					></Route>
					<Route
						path="/seller/:id"
						component={SellerScreen}
						exact
					></Route>
					<Route path="/cart/:id?" component={CartScreen}></Route>
					<Route
						path="/wishlist/:id?"
						component={WishlistScreen}
					></Route>
					<Route
						path="/shipping"
						component={ShippingAddressScreen}
					></Route>
					<Route
						path="/payment"
						component={PaymentMethodScreen}
					></Route>
					<Route
						path="/placeorder"
						component={PlaceOrderScreen}
					></Route>
					<Route path="/order/:id" component={OrderScreen}></Route>
					<Route path="/signin" component={SigninScreen}></Route>
					<Route path="/register" component={RegisterScreen}></Route>
					<Route
						path="/search/name/:name?"
						component={SearchScreen}
						exact
					></Route>
					<Route
						path="/search/category/:category"
						component={SearchScreen}
						exact
					></Route>
					<Route
						path="/search/category/:category/name/:name"
						component={SearchScreen}
						exact
					></Route>
					<Route
						path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
						component={SearchScreen}
						exact
					></Route>
					<PrivateRoute
						path="/map"
						component={MapScreen}
					></PrivateRoute>
					<PrivateRoute
						path="/orderhistory"
						component={OrderHistoryScreen}
					></PrivateRoute>
					<Route path="/o_nama" component={PageInfoScreen}></Route>
					<Route path="/kontakt" component={KontaktScreen}></Route>
					<PrivateRoute
						path="/profile"
						component={ProfileScreen}
					></PrivateRoute>
					<AdminRoute
						path="/productlist"
						component={ProductListScreen}
						exact
					></AdminRoute>
					<AdminRoute
						path="/orderlist"
						component={OrderListScreen}
						exact
					></AdminRoute>
					<AdminRoute
						path="/userlist"
						component={UserListScreen}
					></AdminRoute>
					<AdminRoute
						path="/user/:id/edit"
						component={UserEditScreen}
					></AdminRoute>
					<SellerRoute
						path="/productlist/seller"
						component={ProductListScreen}
						exact
					></SellerRoute>
					<Route
						path="/seller/:id/pageNumber/:pageNumber"
						component={SellerScreen}
						exact
					></Route>
					<SellerRoute
						path="/productlist/seller/pageNumber/:pageNumber"
						component={ProductListScreen}
						exact
					></SellerRoute>

					<SellerRoute
						path="/orderlist/seller"
						component={OrderListScreen}
					></SellerRoute>
					<AdminRoute
						path="/productlist/pageNumber/:pageNumber"
						component={ProductListScreen}
						exact
					></AdminRoute>
				</main>
				<footer className="row center">
					<a href="/o_nama">
						Sva prava pridržana© Tech - @ - Tack 2020
					</a>
				</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;

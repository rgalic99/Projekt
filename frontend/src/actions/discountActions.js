import { SET_DISCOUNT } from "../constants/wishlistConstants";

export const setDiscount = (data) => (dispatch) => {
	dispatch({ type: SET_DISCOUNT, payload: data });
	localStorage.setItem("discountPercent", data);
};

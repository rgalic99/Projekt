import { RESET_DISCOUNT, SET_DISCOUNT } from "../constants/wishlistConstants";

export const setDiscount = (data) => (dispatch) => {
	dispatch({ type: SET_DISCOUNT, payload: data });
	localStorage.setItem("discountPercent", data);
};

export const resetDiscount = () => (dispatch) => {
	dispatch({ type: RESET_DISCOUNT });
	localStorage.setItem("discountPercent", "");
};

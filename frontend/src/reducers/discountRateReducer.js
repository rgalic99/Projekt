import { SET_DISCOUNT } from "../constants/wishlistConstants";

export const discountRateReducer = (
	state = { discountPercent: "0" },
	action
) => {
	switch (action.type) {
		case SET_DISCOUNT:
			return {
				...state,
				discountPercent: action.payload,
			};
		default:
			return state;
	}
};

import { RESET_DISCOUNT, SET_DISCOUNT } from "../constants/wishlistConstants";

export const discountRateReducer = (
	state = { discountPercent: "" },
	action
) => {
	switch (action.type) {
		case SET_DISCOUNT:
			return {
				...state,
				discountPercent: action.payload,
			};
		case RESET_DISCOUNT:
			return { ...state, discountPercent: "" };
		default:
			return state;
	}
};

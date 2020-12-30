import {
	PRODUCT_CREATE_FAILURE,
	PRODUCT_CREATE_REQUEST,
	PRODUCT_CREATE_RESET,
	PRODUCT_CREATE_SUCCESS,
	PRODUCT_DETAILS_FALIURE,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_LIST_FALIURE,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const productListReducer = (
	state = { loading: true, products: [] },
	action
) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return { loading: true };

		case PRODUCT_LIST_SUCCESS:
			return { loading: false, products: action.payload };
		case PRODUCT_LIST_FALIURE:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
export const productDetailsReducer = (state = { loading: true }, action) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
			return { loading: true };
		case PRODUCT_DETAILS_SUCCESS:
			return { loading: false, product: action.payload };
		case PRODUCT_DETAILS_FALIURE:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const productCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case PRODUCT_CREATE_REQUEST:
			return { loading: true };
		case PRODUCT_CREATE_SUCCESS:
			return { loading: false, success: true, product: action.payload };
		case PRODUCT_CREATE_FAILURE:
			return { loading: false, error: action.payload };
		case PRODUCT_CREATE_RESET:
			return {};
		default:
			return state;
	}
};

import {
	USER_ADDRESS_MAP_CONFIRM,
	USER_DELETE_FAILURE,
	USER_DELETE_REQUEST,
	USER_DELETE_RESET,
	USER_DELETE_SUCCESS,
	USER_DETAILS_FAILURE,
	USER_DETAILS_REQUEST,
	USER_DETAILS_RESET,
	USER_DETAILS_SUCCESS,
	USER_LIST_FAILURE,
	USER_LIST_REQUEST,
	USER_LIST_SUCCESS,
	USER_REGISTER_FAILURE,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_SIGNIN_FAILURE,
	USER_SIGNIN_REQUEST,
	USER_SIGNIN_SUCCESS,
	USER_SIGNOUT,
	USER_TOPSELLERS_LIST_FAILURE,
	USER_TOPSELLERS_LIST_REQUEST,
	USER_TOPSELLERS_LIST_SUCCESS,
	USER_UPDATE_FAILURE,
	USER_UPDATE_PROFILE_FALIURE,
	USER_UPDATE_PROFILE_REQUEST,
	USER_UPDATE_PROFILE_RESET,
	USER_UPDATE_PROFILE_SUCCESS,
	USER_UPDATE_REQUEST,
	USER_UPDATE_RESET,
	USER_UPDATE_SUCCESS,
} from "../constants/userConstants";

export const userSigninReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_SIGNIN_REQUEST:
			return { loading: true };
		case USER_SIGNIN_SUCCESS:
			return { loading: false, userInfo: action.payload };
		case USER_SIGNIN_FAILURE:
			return { loading: false, error: action.payload };
		case USER_SIGNOUT:
			return {};
		default:
			return state;
	}
};

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return { loading: true };
		case USER_REGISTER_SUCCESS:
			return { loading: false, userInfo: action.payload };
		case USER_REGISTER_FAILURE:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const userDetailsReducer = (state = { loading: true }, action) => {
	switch (action.type) {
		case USER_DETAILS_REQUEST:
			return { loading: true };
		case USER_DETAILS_SUCCESS:
			return { loading: false, user: action.payload };
		case USER_DETAILS_FAILURE:
			return { loading: false, error: action.payload };
		case USER_DETAILS_RESET:
			return { loading: true };
		default:
			return state;
	}
};

export const userUpdateProfileReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_UPDATE_PROFILE_REQUEST:
			return { loading: true };
		case USER_UPDATE_PROFILE_SUCCESS:
			return { loading: false, success: true };
		case USER_UPDATE_PROFILE_FALIURE:
			return { loading: false, error: action.payload };
		case USER_UPDATE_PROFILE_RESET:
			return {};
		default:
			return state;
	}
};

export const userListReducer = (state = { loading: true }, action) => {
	switch (action.type) {
		case USER_LIST_REQUEST:
			return { loading: true };
		case USER_LIST_SUCCESS:
			return { loading: false, users: action.payload };
		case USER_LIST_FAILURE:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const userDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_DELETE_REQUEST:
			return { loading: true };
		case USER_DELETE_SUCCESS:
			return { loading: false, success: true };
		case USER_DELETE_FAILURE:
			return { loading: false, error: action.payload };
		case USER_DELETE_RESET:
			return {};
		default:
			return state;
	}
};

export const userUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_UPDATE_REQUEST:
			return { loading: true };
		case USER_UPDATE_SUCCESS:
			return { loading: false, success: true };
		case USER_UPDATE_FAILURE:
			return { loading: false, error: action.payload };
		case USER_UPDATE_RESET:
			return {};
		default:
			return state;
	}
};

export const userTopSellerListReducer = (state = { loading: true }, action) => {
	switch (action.type) {
		case USER_TOPSELLERS_LIST_REQUEST:
			return { loading: true };
		case USER_TOPSELLERS_LIST_SUCCESS:
			return { loading: false, users: action.payload };
		case USER_TOPSELLERS_LIST_FAILURE:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const userAddressMapReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_ADDRESS_MAP_CONFIRM:
			return { address: action.payload };
		default:
			return state;
	}
};

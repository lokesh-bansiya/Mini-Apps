import * as types from "./actionTypes";

const initialAuthState = {
    isAuth: localStorage.getItem("isAuth") || false,
    isAuthLoading: false,
    isAuthError: false,
};


const reducer = (prevState = initialAuthState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.LOGIN_USER_REQUEST:
            return {
                ...prevState,
                isAuthLoading: true,
            };
        case types.LOGIN_USER_SUCCESS:
            return {
                ...prevState,
                isAuth: true,
                isAuthLoading: false,
            };
        case types.LOGIN_USER_FAILURE:
            return {
                ...prevState,
                isAuth: false,
                isAuthLoading: false,
                isAuthError: true,
            }
        default:
            return prevState;
    }
};

export {reducer};
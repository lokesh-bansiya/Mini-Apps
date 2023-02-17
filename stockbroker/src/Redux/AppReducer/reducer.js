import * as types from "./actionTypes";

const initialStockState = {
    stocks: [],
    isStockLoading: false,
    isStockError: false,
};


const reducer = (prevState = initialStockState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.GET_STOCK_DATA_REQUEST:
            return {
                ...prevState,
                isStockLoading: true,
            };
        case types.GET_STOCK_DATA_SUCCESS:
            return {
                ...prevState,
                stocks: payload,
                isStockLoading: false,
            };
        case types.GET_STOCK_DATA_FAILURE:
            return {
                ...prevState,
                isAuth: false,
                isStockLoading: false,
                isStockError: true,
            }
        default:
            return prevState;
    }
};

export {reducer};
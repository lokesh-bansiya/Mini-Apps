import axios from "axios";
import * as types from "./actionTypes";


const getStocks = () => (dispatch) => {
    dispatch({ type: types.GET_STOCK_DATA_REQUEST });
    return axios.get(`https://json-server-kappa-five.vercel.app/companies`)
        .then((res) => {
            dispatch({ type: types.GET_STOCK_DATA_SUCCESS, payload: res.data });
            console.log(res.data);
        })
        .catch((err) => {
            dispatch({ type: types.GET_STOCK_DATA_FAILURE, payload: err });
        })
};



const deleteStockCompany = (id) => (dispatch) => {
    dispatch({ type: types.DELETE_STOCKS_REQUEST });
    return axios.delete(`https://json-server-kappa-five.vercel.app/companies/${id}`)
        .then((res) => {
            dispatch({ type: types.DELETE_STOCKS_SUCCESS, payload: res.data });
            console.log(res.data);
        })
        .catch((err) => {
            dispatch({ type: types.DELETE_STOCKS_FAILURE, payload: err });
        })
}
export { getStocks,deleteStockCompany };
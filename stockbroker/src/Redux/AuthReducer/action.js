import axios from "axios";
import * as types from "./actionTypes";


const register = (payload) => (dispatch) => {
    dispatch({ type: types.USER_SIGNUP_REQUEST });
    axios.post(`https://json-server-kappa-five.vercel.app/users`, payload)
        .then((res) => {
            dispatch({ type: types.USER_SIGNUP_SUCCESS, payload: res.data });
            console.log("payload", payload);
        })
        .catch((err) => {
            dispatch({ type: types.USER_SIGNUP_FAILURE, payload: err });
        })
};

export { register };
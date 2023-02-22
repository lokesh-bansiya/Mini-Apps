import * as types from "./actionTypes";
import axios from "axios";

const postLoginRequest = () => {
    return {
        type : types.USER_LOGIN_REQUEST,
    }
};

const postLoginSuccess = (payload) => {
    return {
        type : types.USER_LOGIN_SUCCESS,
        payload,
    }
};

const postLoginFailure = () => {
    return {
        type : types.USER_LOGIN_FAILURE,
    }
};



const login = (payload) => (dispatch) => {
    dispatch(postLoginRequest());
    return axios({
           method: "post",
           url: "/api/login",
           baseURL: 'https://reqres.in',
           data: payload,
        })
        .then((res) => {
            console.log("token:-", res.data.token);
            return dispatch(postLoginSuccess(res.data.token));
        })
        .catch((err) => {
            dispatch(postLoginFailure());
        });
};

export {
    login, 
    postLoginRequest, 
    postLoginSuccess, 
    postLoginFailure
};
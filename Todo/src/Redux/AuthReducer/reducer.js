import { getLocalData, saveLocalData } from "../../Utils/localStorage";
import * as types from "./actionTypes";

const initialState ={
    isAuth: getLocalData('token')? true : false,
    token: getLocalData('token') || "",
    isAuthLoading: false,
    isAuthError: false,
};

const reducer = (oldState = initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case types.USER_LOGIN_REQUEST:
            return {
                ...oldState,
                isAuthLoading: true,
            };
            
        case types.USER_LOGIN_SUCCESS:
            saveLocalData("token", payload);
            return {
                ...oldState,
                isAuth: true,
                isAuthLoading: false,
                token: payload,
            };

        case types.USER_LOGIN_FAILURE:
            return {
                ...oldState,
                isAuth: false,
                isAuthLoading: false,
                token: "",
                isAuthError: true,
            };

        default:
            return oldState;
    };
};

export {reducer};
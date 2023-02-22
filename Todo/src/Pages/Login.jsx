import React, { useReducer } from "react";
import { Box, Button, FormControl,FormLabel,Input, Text, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/AuthReducer/action";
import { useLocation, useNavigate } from "react-router-dom";

const initialLoginState = {
    email: "eve.holt@reqres.in",
    password: "",
}


const LoginReducer = (state, action) => {
    
    switch (action.type) {
        case "Email":
            return {
                ...state,
                email: action.payload,
            };
        case "Password":
            return {
                ...state,
                password: action.payload,
            };
        default:
            return state;
    }
}

const Login = () => {

    const [userState, setUserState] = useReducer(LoginReducer, initialLoginState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();
    const location = useLocation()
    const comingFrom = location.state?.data || "/";

    const LoginHndlerForStockApp = () => {
        if(userState.email !== "" && userState.password !== ""){
            console.log(userState);
            dispatch(login(userState))
            .then(()=> toast({
                title: "User loged in!",
                status: "success",
                duration: 2000,
                position: "top",
                isClosable: true,
                render: () => (
                    <Box
                        border="2px solid green"
                        textAlign="center"
                        borderRadius="10px"
                        fontWeight="bolder"
                        color="white"
                        p={3}
                        bg="blue.500"
                        boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                    >
                        {`Login Successfull!`}
                    </Box>
                ),
            }))
            .then(()=> navigate(comingFrom, {replace: true}))
        } 
        toast({
            title: "login failed!",
            status: "warning",
            duration: 2000,
            position: "top",
            isClosable: true,
            render: () => (
                <Box
                    border="2px solid green"
                    textAlign="center"
                    borderRadius="10px"
                    fontWeight="bolder"
                    color="white"
                    p={3}
                    bg="red.500"
                    boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                >
                    {`Login Failed!!!`}
                </Box>
            ),
        });
    };

    return (
        <>
        <Text
           display="flex"
           width="100%"
           justifyContent="center"
           fontSize="200%"
           fontWeight="bold"
           marginTop="3%"
        >
            Todo with Hook
        </Text>
        <Box 
            display="flex" 
            boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            flexDirection="column" 
            width="40%" 
            margin="auto" 
            marginTop="2%" 
            padding="5%"
        >
            <Box fontWeight="bold" fontSize="150%">Login</Box>
            
            <Box>
                <FormControl>
                    <FormLabel>Email:</FormLabel>
                    <Input 
                        type={'email'} 
                        value={userState.email} 
                        placeholder="eve.holt@reqres.in" 
                        onChange={(e) => setUserState({type: "Email", payload: e.target.value})}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Password:</FormLabel>
                    <Input 
                        type={'password'} 
                        value={userState.password} 
                        onChange={(e) => setUserState({type: "Password", payload: e.target.value})}
                        placeholder="Enter Password"  
                    />
                </FormControl>
                <Box display="flex" justifyContent="space-around" width="100%" marginTop="3%" padding="3%">
                    <Button margin="1%" colorScheme={'blue'} onClick={() => LoginHndlerForStockApp()}>Login</Button>
                </Box>
            </Box>
        </Box>
        </>
    );
};

export  {Login};
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../Redux/AuthReducer/action";


const initialSignUpState = {
    Username: "",
    Email: "",
    Password: "",
}


const SignUpForStockReducer = (signupState, action) => {
    
    switch (action.type) {
        case "Username":
            return {
                ...signupState,
                Username: action.payload,
            };
        case "Email":
            return {
                ...signupState,
                Email: action.payload,
            };
        case "Password":
            return {
                ...signupState,
                Password: action.payload,
            };
        default:
            return signupState;
    }
}

const RegisterSignup = () => {

    const [userState, setUserState] = useReducer(SignUpForStockReducer, initialSignUpState);
    const dispatch = useDispatch();

    const SignUpHndlerForStockApp = () => {
        if(userState.Email !== "" && userState.Username !== "" && userState.Password !== ""){
            dispatch(register(userState));
            console.log("userobj:", userState);
        } 
    }

    return (
        <Box
            display="flex"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            flexDirection="column"
            width="40%"
            margin="auto"
            marginTop="10%"
            padding="5%"
        >
            <Box fontWeight="bold" fontSize="150%">Sign Up</Box>
            <Box>
                <FormControl>
                    <FormLabel>Username:</FormLabel>
                    <Input 
                        type={'text'}
                        value={userState.Username}
                        placeholder="Enter Username" 
                        onChange={(e) => setUserState({type: "Username", payload: e.target.value})}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Email:</FormLabel>
                    <Input 
                        type={'email'} 
                        value={userState.Email} 
                        placeholder="Enter Email" 
                        onChange={(e) => setUserState({type: "Email", payload: e.target.value})}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Password:</FormLabel>
                    <Input 
                        type={'password'} 
                        value={userState.Password} 
                        onChange={(e) => setUserState({type: "Password", payload: e.target.value})}
                        placeholder="Enter Password" 
                    />
                </FormControl>
               
                <Box 
                    display="flex" 
                    justifyContent="space-around" 
                    width="100%" 
                    marginTop="3%" 
                    padding="3%"
                >
                    <Button margin="auto" width="fit-content" onClick={()=>SignUpHndlerForStockApp()} colorScheme="teal">Sign Up</Button>
                    <Link to="/login"><Box width="100%" margin="1%" color="red">Login</Box></Link>
                </Box>
            </Box>
        </Box>
    );
};

export { RegisterSignup };
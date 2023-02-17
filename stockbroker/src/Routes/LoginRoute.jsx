import { Box, Button,Select, FormControl,FormLabel,Input, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


const initialLoginState = {
    Email: "",
    Password: "",
}


const LoginForStockReducer = (signupState, action) => {
    
    switch (action.type) {
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


const LoginStocks = () => {

    const [userState, setUserState] = useReducer(LoginForStockReducer, initialLoginState);
    const [users,setUsers] = useState([]);
    const [isAdmin,setIsAdmin] = useState("user");
    const navigate = useNavigate();
    const toast = useToast();

    const LoginHndlerForStockApp = () => {
        if(userState.Email !== "" && userState.Password !== ""){
            console.log("userobj:", users);
            let user = users.filter((item) => {
                if(item.Email === userState.Email){
                    return item;
                }
            });

            if(userState.Email === "admin@stockbroker.com" && userState.Password === "admin123"){
                localStorage.setItem("isAuth",true);
                toast({
                    title: "login successful",
                    status: "success",
                    position: "top",
                    duration: 2000,
                    isClosable: true,
                })
                navigate("/dashboard");
            }

            if(user.length > 0){
                console.log(user);
                localStorage.setItem("isAuth",true);
                toast({
                    title: "login successful",
                    status: "success",
                    position: "top",
                    duration: 2000,
                    isClosable: true,
                })
                navigate("/stocks");
            }
            else{
                console.log(user);
                toast({
                    title: "login failed",
                    status: "success",
                    position: "top",
                    duration: 2000,
                    isClosable: true,
                })
                localStorage.setItem("isAuth",false);
            }
        } 
        else{
            toast({
                title: "login failed",
                status: "success",
                position: "top",
                duration: 2000,
                isClosable: true,
            })
        }
    }

    useEffect(() => {
        axios.get(`https://json-server-kappa-five.vercel.app/users`)
        .then((res) => {
            setUsers(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);


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
            <Box fontWeight="bold" fontSize="150%">Login</Box>
            
            <Box>
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
                <FormControl>
                    <FormLabel>UserType:</FormLabel>
                    <Select 
                        type={'text'} 
                        value={isAdmin} 
                        onChange={(e) => setIsAdmin(e.target.value)}
                        placeholder="Usertype" 
                    >
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </Select>
                </FormControl>
                <Box display="flex" justifyContent="space-around" width="100%" marginTop="3%" padding="3%">
                <Link to="/register"><Box margin="auto" width="fit-content" color="red">Sign Up</Box></Link>
                    <Button margin="1%" colorScheme={'blue'} onClick={() => LoginHndlerForStockApp()}>Login</Button>
                </Box>
            </Box>
        </Box>
    );
};

export  {LoginStocks};
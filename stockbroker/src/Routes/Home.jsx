import {Box,Button,Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Box>
            <Text padding="3%" color="pink.800" fontSize="200%" fontWeight="bolder" fontFamily="sans-serif" margin="auto">Stock Broker</Text>
            <Box 
                display="flex" 
                borderRadius="10px"
                margin="auto"
                marginTop="10%"
                flexDirection="column" 
                width="30%" 
                padding="5%"
                boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            >
                <Link to="/register"><Button margin="1%" colorScheme={'teal'}>SignUp</Button></Link>
                <Link to="/login"><Button margin="1%" colorScheme={'blue'}>Login</Button></Link>
            </Box>
        </Box>
    );
};

export {Home};
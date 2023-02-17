import { Box, Image } from "@chakra-ui/react";

const CompanyComponent = ({
    company_logo,
    company_name,
    company_type,
    cost_per_share,
    id,
    price_action,
    stock_exchange,
    total_shares 
}) => {
    return (
        <Box padding="5%"
        boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" 

        >
           <Box>
            <Box><Image margin="auto" width="70%" src={company_logo}/></Box>
            <Box>{company_name}</Box>
            <Box>{company_type}</Box>
            <Box>{cost_per_share}</Box>
            <Box>{price_action}</Box>
            <Box>{stock_exchange}</Box>
            <Box>{total_shares}</Box>
           </Box>
        </Box>
    );
};

export {CompanyComponent }
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CompanyComponent } from "../Components/CompanyComponent";
import { getStocks } from "../Redux/AppReducer/action";

const StockRoute = () => {
   
    const data = useSelector((store) => store.AppReducer.stocks);
    console.log(data);
    const dispatch = useDispatch();

    useEffect(() => {
        if(data.length === 0){
            dispatch(getStocks());
        }
    },[data,dispatch,data.length]);

    return (
        <Box>
            <Box boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" fontWeight="bold" fontSize="150%" padding="2%" color={"red.800"} marginBottom="2%">Stocks</Box>
            <Box display="grid" gridTemplateColumns="repeat(2,1fr)" width="90%" margin="auto">
                {
                    data.length > 0 && data.map((item) => {
                        return <CompanyComponent
                            key={item.id}
                            company_logo={item.company_logo}
                            company_name={item.company_name}
                            company_type={item.company_type}
                            cost_per_share={item.cost_per_share}
                            price_action={item.price_action}
                            id={item.id}
                            stock_exchange={item.stock_exchange}
                            total_shares={item.total_shares}
                            />
                    })
                }
            </Box>
            <Box></Box>
        </Box>
    );
};

export {StockRoute};
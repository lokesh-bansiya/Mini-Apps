import { Button, Image, Td, Tr } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteStockCompany, getStocks } from "../Redux/AppReducer/action";

const TableComponent = ({
    company_logo,
    company_name,
    company_type,
    cost_per_share,
    id,
    price_action,
    stock_exchange,
    total_shares 
}) => {

    const dispatch = useDispatch();

    const deleteItemHandler = (id) => {
        dispatch(deleteStockCompany(id));
        dispatch(getStocks());
    };

    
     return (
        <Tr>
            <Td><Image width="100%" src={company_logo} alt={company_name} /></Td>
            <Td>{company_name}</Td>
            <Td>{company_type}</Td>
            <Td>{cost_per_share}</Td>
            <Td>{price_action}</Td>
            <Td>{stock_exchange}</Td>
            <Td>{total_shares}</Td>
            <Td><Button colorScheme="blue">Edit</Button></Td>
            <Td><Button onClick={() => deleteItemHandler(id)} colorScheme={'red'}>Delete</Button></Td>
        </Tr>
    );
};

export {TableComponent};
import { Box, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TableComponent } from "../Components/TableComponent";
import { getStocks } from "../Redux/AppReducer/action";

const Dashboard = () => {

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
            <Box boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" fontWeight="bold" fontSize="150%" padding="2%" color={"red.800"} marginBottom="2%">Admin Dashboard</Box>
            <Box>
                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                        <TableCaption>Imperial to metric conversion factors</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Company Logo</Th>
                                <Th>Company Name</Th>
                                <Th>Company Type</Th>
                                <Th>Stock Exchange</Th>
                                <Th>Total Shares</Th>
                                <Th>Cost Per Share</Th>
                                <Th>Price</Th>
                                <Th>Edit Stock Button</Th>
                                <Th>Delete Stock Button</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                data.length > 0 && data.map((item) => {
                                    return <TableComponent 
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
                        </Tbody>
                        
                    </Table>
                </TableContainer>
            </Box>
            <Box></Box>
        </Box>
    );
};

export { Dashboard };

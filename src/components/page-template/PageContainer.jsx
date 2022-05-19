import {
    Box,
    Flex
} from '@chakra-ui/react';
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

export default function PageContainer(){
    return (
        <Box>
            <NavBar/>
            <Footer/>
        </Box>
        
    )
}
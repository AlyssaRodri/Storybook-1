import {
    Box,
    Flex
} from '@chakra-ui/react';
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

export default function PageContainer( {children} ){
    return (
        <Flex>
            <NavBar/>
            <Box
                display={'flex'}
                bg={'#f6f6f6'}
                flex={1}
                flexGrow={1}
                marginTop={'55'}>
                {children}
            </Box>
            <Footer/>
        </Flex>
        
    )
}
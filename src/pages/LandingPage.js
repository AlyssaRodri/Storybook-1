import {
    Button,
    Flex,
    Stack
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import PageContainer from "../components/page-template/PageContainer";

export function LandingPage(){

    const navigate = useNavigate();
  
    const storyPageRoute = () =>{ 
      navigate("/stories");
    }

    return (
        <PageContainer>
            <Flex>
                {/* Here I want to input an image for the main webpage. I will need to create it. */}
                <Stack direction='row' spacing={4} align='center'>
                    <Button rightIcon={<ArrowForwardIcon/>} colorScheme='blue'  size='md' variant='solid' margin='auto' onClick={storyPageRoute}>
                    View Our Story Library!
                    </Button>
                </Stack>
            </Flex>
        </PageContainer>
    )
}
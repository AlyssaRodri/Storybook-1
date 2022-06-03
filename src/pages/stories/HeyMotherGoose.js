import { 
    Stack,
    Heading,
    Box
} from '@chakra-ui/react'


export function HeyMotherGoose(){

    return(
        <Stack margin='auto' spacing={6}>
            <Heading as='h1' textAlign='center' size='3xl'> Hey, diddle, diddle,</Heading>
            <Heading as='h3' size='1xl' textAlign='center'> BY MOTHER GOOSE</Heading>

            <Box margin='2px' border='whitesmoke'>
                <p>Hey, diddle, diddle</p>
                <p>The cat and the fiddle,</p>
                <p>The cow jumps over the moon;</p>
                <p>The little dog laughed</p>
                <p>To see such a sport,</p>
                <p>And the dish ran away with the spoon.</p>
            </Box>
        </Stack>

    )
}
import { SimpleGrid } from '@chakra-ui/react'
import PageContainer from "../components/page-template/PageContainer";
import CardTemplate from "../components/card-template/Card";
import {Link} from "react-router-dom"

export function StoryPage(){
    return(
        <PageContainer>
            <SimpleGrid minChildWidth="200px">
                <CardTemplate IMAGE="https://tse2.mm.bing.net/th?id=OIP.QhqnIKQvAPyu3_ZWCQMMMgHaE8&pid=Api&P=0&w=257&h=171" title="Hey, diddle, diddle," description="Traditional nursery rhyme by Mother Goose." ><Link to='/rhyme1'/></CardTemplate>
            </SimpleGrid>
        </PageContainer>
    )
}
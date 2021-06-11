import { Flex, SimpleGrid } from "@chakra-ui/react";

import Banner from "../components/banner";
import GridIcon from "../components/gridIcon";
import Header from "../components/header";

export default function Home() {
  return (
    <Flex   
      h="100vh"  
      w="100vw"  
      direction="column"
      justify="center"
      maxWidth="1440"
      mx="auto"  
    >
      <Header />
      <Banner />
      <SimpleGrid
        flex="1"
        gap="2" 
        minChildWidth="170px" 
        align="flex-start"
      >
        <GridIcon image="/images/cocktail.png">vida noturna</GridIcon>
        <GridIcon image="/images/beach.png">praia</GridIcon>
        <GridIcon image="/images/modern.png">moderno</GridIcon>
        <GridIcon image="/images/classic.png">clássico</GridIcon>
        <GridIcon image="/images/more.png">e mais...</GridIcon>
      </SimpleGrid>
    </Flex>
  )
}

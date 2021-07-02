import { Flex, Icon, SimpleGrid, Stack, Text, HStack, Image, Avatar } from "@chakra-ui/react";
import ContinentBanner from "../components/continentBanner";
import Header from "../components/header";
import { MdInfoOutline } from 'react-icons/md';

export default function Continent() {

  return (
    <Flex   
      h="100vh"  
      w="100vw"  
      direction="column"
      justify="flex-start"
      maxWidth="1440" 
    >
      <Header />
      <ContinentBanner />
      <SimpleGrid       
        gap="2" 
        minChildWidth="240px" 
        align="flex-start"  
        px="12"    
        pt="10"
      >
        <Text fontWeight={500} fontSize={[14, 16]} color="gray.700" maxWidth="800px" >
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <Flex align="center" justify="space-around" px={[null, "4"]} >
          <Stack spacing="1" >
            <Text fontWeight={600} fontSize={[30, 36]} color="yellow.400" mb="-4" >
              50
            </Text>
            <Text fontWeight={600}>
              países
            </Text>
          </Stack>
          <Stack spacing="1" >
            <Text fontWeight={600} fontSize={[30, 36]} color="yellow.400" mb="-4" >
              60
            </Text>
            <Text fontWeight={600}>
              línguas
            </Text>
          </Stack>
          <Flex direction="column" align="center" >
            <Text fontWeight={600} fontSize={[30, 36]} color="yellow.400" mb="-4" >
              27
            </Text>
            <Stack direction="row" spacing="1px" mt="1">
              <Text fontWeight={600}>
                cidades +100              
              </Text>
              <Text>
                <Icon as={MdInfoOutline} fontSize={12} mb="2px"/>            
              </Text>              
            </Stack>
          </Flex>
        </Flex>
      </SimpleGrid>
      <Text fontWeight={600} fontSize={[24, 30]} px="12" py="4" color="gray.700" mb="-4" >
              Cidades +100
      </Text>
      <SimpleGrid     
        gap="2" 
        minChildWidth="240px" 
        px="12"    
        pt="10"
      >
        <Flex
          direction="column"
          maxWidth="400px"
          borderColor="yellow.400"
          borderWidth="1px"
          borderRadius="8"
          mb="4"
        >
          <Image src="/images/europe.jpg" borderTopRadius="8" />
          <HStack spacing="auto" p="6">
            <Stack>
              <Text
                fontWeight={600}
                fontSize={[30]}
                lineHeight="10"
                >
                Londres
              </Text>
              <Text
                fontWeight={500}
                fontSize={[24]}
                lineHeight="10"
                color="gray.400"
                >
                Reino Unido
              </Text>
            </Stack>
            <Avatar size="md" name="Werner Junior" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/800px-Flag_of_England.svg.png"/>
          </HStack>
        </Flex>    
      </SimpleGrid>
    </Flex>
  )
}

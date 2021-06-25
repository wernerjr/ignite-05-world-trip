import { Flex, Text } from '@chakra-ui/react';

export default function ContinentBanner(){

  return (
    <Flex 
      backgroundImage="url('/images/europe.jpg')"
      width="100%"
      minHeight={["50","50","80","96"]}
      align={["center", "center", "flex-end"]}
      justify={["center", "center", "space-between"]}
      px={["20"]}
      py="16"
    >   
      <Text fontWeight={500} fontSize={[22, 25]} color="gray.50" >
        Europa
      </Text>     
    </Flex>
  )
}
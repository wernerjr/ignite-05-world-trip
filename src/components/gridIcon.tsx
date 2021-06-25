import { Flex, Icon, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { BsDot } from 'react-icons/bs';

interface GridIconProps{
  image: string;
  children: string;
}


export default function GridIcon({ image, children }: GridIconProps){

  const isMobile = useBreakpointValue({
    base: true, 
    lg: false,
  });

  return(
    <Flex
    direction="column"
    align={[null, "center"]}
    justify="center"   
  >
    {!isMobile && <Image src={image} alt={children} />}    
    <Text
      alignSelf={["flex-start", "flex-start", "flex-start", "center"]}
      fontWeight={600}
      fontSize={[18, 18, 18, 22]}
      lineHeight="10"
    >
      {isMobile && <Icon as={BsDot} color="yellow.500" fontSize={48} />}
      {children}
    </Text>
  </Flex>
  )
}
import { Flex, Image, Text } from "@chakra-ui/react";

interface GridIconProps{
  image: string;
  children: string;
}


export default function GridIcon({ image, children }: GridIconProps){
  return(
    <Flex
    direction="column"
    align="center"
    justify="center"
    my="20"
  >
    <Image src={image} alt={children} />
    <Text fontWeight={600} fontSize={22} lineHeight="10">
      {children}
    </Text>
  </Flex>
  )
}
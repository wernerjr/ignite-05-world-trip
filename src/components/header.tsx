import { Flex, Image } from "@chakra-ui/react";

export default function Header(){
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      mx="auto"
      my="6"
      align="center"
      justify="center"
    >
      <Image src='/images/logo.png' h="12" />
    </Flex>
  )
}
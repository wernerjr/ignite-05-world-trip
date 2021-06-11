import { Flex, Stack, Text, Image, useBreakpointValue } from '@chakra-ui/react';

export default function Banner(){

  const isMobile = useBreakpointValue({
    base: true, 
    lg: false,
  });

  return (
    <Flex 
      backgroundImage="url('/images/bannerBackground.png')"
      h="80"
      width="100%"
      align="center"
      justify="space-between"
      px={["4", "32"]}
      py="6"
    >
      <Stack>
        <Text fontWeight={500} fontSize={[22, 25]} color="gray.50" maxWidth="80" >
          5 Continentes,
        </Text>
        <Text fontWeight={500} fontSize={[22, 25]} color="gray.50" maxWidth="80" >
          infinitas possibilidades.
        </Text>
        <Text fontWeight={500} fontSize={12} color="gray.400" maxWidth="80" >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
        </Text>
      </Stack>
      {!isMobile && <Image src="/images/airplane.png" transform="rotate(3deg)" mt="24"/>}      
    </Flex>
  )
}
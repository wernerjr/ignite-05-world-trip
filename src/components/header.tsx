import { Flex, Icon } from "@chakra-ui/react";
import { MdChevronLeft } from 'react-icons/md'
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export default function Header(){

  const { asPath }  = useRouter();

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      mx="auto"
      minHeight="16"
      align="center"
      px="8"
      justify="flex-start"
      bg="url('/images/logo.png') center no-repeat"
    >
      { asPath !== '/' && 
        <Link href="/">
          <Icon as={MdChevronLeft} fontSize={20} cursor="pointer" />
        </Link>
      }
    </Flex>
  )
}
import { Flex } from "@chakra-ui/react";

import Banner from "../components/banner";
import Header from "../components/header";

export default function Home() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      maxWidth="1440"
      mx="auto"
    >
      <Header />
      <Banner />
    </Flex>
  )
}

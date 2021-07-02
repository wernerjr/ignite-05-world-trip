import { Flex, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, 
{ Navigation,
  Pagination,
  Mousewheel,
  Keyboard
} from 'swiper/core';

import Banner from "../components/banner";
import GridIcon from "../components/gridIcon";
import Header from "../components/header";
import SwiperSlideContent from "../components/swiperSlideContent";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

interface ContinentsData {
  title: string;
  subtitle: string;
  image: string;
}

const continents = [
  {
    title: "América do Norte",
    subtitle: "O continente mais tecnológico.",
    image: "/images/northAmerica.jpg",
  },
  {
    title: "América do Sul",
    subtitle: "Natureza cultural.",
    image: "/images/southAmerica.jpg",
  },
  {
    title: "Ásia",
    subtitle: "Cultura milenar.",
    image: "/images/asia.jpg",
  },
  {
  title: "África",
  subtitle: "Vida natural.",
  image: "/images/africa.jpg",
  },
  {
    title: "Europa",
    subtitle: "O continente mais antigo.",
    image: "/images/europe.jpg",
  },
  {
    title: "Oceania",
    subtitle: "O Novo continente.",
    image: "/images/oceania.jpg",
  },
] as ContinentsData[];


export default function Home() {

  const isMobile = useBreakpointValue({
    base: true, 
    lg: false,
  });

  return (
    <Flex   
      h="100vh"  
      w="100vw"  
      direction="column"
      justify="flex-start"
      maxWidth="1440"
      mx="auto"  
    >
      <Header />
      <Banner />
      <SimpleGrid       
        gap="2" 
        minChildWidth="170px" 
        align="flex-start"  
        px="1"    
        pt="10"
      >
        <GridIcon image="/images/cocktail.png">vida noturna</GridIcon>
        <GridIcon image="/images/beach.png">praia</GridIcon>
        <GridIcon image="/images/modern.png">moderno</GridIcon>
        <GridIcon image="/images/classic.png">clássico</GridIcon>
        <GridIcon image="/images/more.png">e mais...</GridIcon>
      </SimpleGrid>
      <Flex
        direction="column"
        align="center"
        justify="center"    
        minHeight="40" 
      >
        <Text fontWeight={600} fontSize={[22, 28]} color="gray.700" >
          Vamos nessa?
        </Text>
        <Text fontWeight={600} fontSize={[22, 28]} textAlign="center" color="gray.700" >
          Então escolha seu continente
        </Text>
      </Flex>
      <Flex        
        minHeight="80"
        paddingBottom="10"
      >
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"        
      >
        {continents.map(continent => (
          <SwiperSlide key={continent.title}>       
            <SwiperSlideContent 
              title={continent.title}
              subtitle={continent.subtitle}
              image={continent.image}
            />       
          </SwiperSlide>
        ))}
      </Swiper>
      </Flex>
    </Flex>
  )
}

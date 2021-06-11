import { Flex, Text } from "@chakra-ui/react";

interface SwiperSlideProps {
  image: string;
  title: string;
  subtitle: string;
}

export default function SwiperSlideContent({ image, title, subtitle }: SwiperSlideProps){
  return (
    <Flex
      w="100%"
      h="100%"
      backgroundImage={`url(${image})`}
      backgroundRepeat="no-repeat"
      backgroundAttachment="center"
      backgroundPosition="center"
      align="center"
      justify="center"
      direction="column"
    >
      <Text fontWeight={600} fontSize={28} color="gray.50" >
        {title}
      </Text>
      <Text fontWeight={600} fontSize={14} color="gray.50" >
        {subtitle}
      </Text>
    </Flex>
  )
}
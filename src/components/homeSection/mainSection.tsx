import FeatureCard from "../custom/featuredCards";
import { features,homes ,homebuttons } from "@/data/homeData";
import IconButtons from "../buttons/iconbuttons";
import { ChakraLink } from "../chakra/links";
import {
  Text,
  VStack,
  Heading,
  Container,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";

export default function MainSection() {
  return (
    <Container
      maxW="5xl"
      textAlign={{ base: "center", md: "left" }}
      alignContent="center"
      mx={"auto"}
      p={4}
    >
      {homes.map((home, index) => (
        <VStack 
          w="100%" 
          h={"100%"} 
          key={index}  align="center">
          <Heading
            as="h1"
            fontWeight={"black"}
            fontSize={{ base: "5xl", md: "7xl" }}
          >
            {home.title}
          </Heading>
          <Text 
            fontSize="xl" 
            textColor="gray"
            textAlign={'left'}
            maxW={'max-content'}
            lineHeight={1.2}
          >
            {home.description}
          </Text>

          <SimpleGrid
            columns={[1,1,2,3]}
            placeItems={"center"}
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} features={feature} />
            ))}
          </SimpleGrid>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={2}
            align="left"
            width="100%"
          >
            {homebuttons.map((homebutton) => (
              <ChakraLink
                passHref
                key={homebutton.id} href={homebutton.link}>
                <IconButtons homebuttons={homebutton} />
              </ChakraLink>
            ))}
          </Stack>
        </VStack>
      ))}
    </Container>
  );
}

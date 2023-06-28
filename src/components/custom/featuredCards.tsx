"use client";
import { VStack, Avatar, Heading, Text, Flex, Center } from "@chakra-ui/react";

export default function FeatureCard({ features }: any) {
  return (
    <VStack
      width="300px"
      overflowY={"hidden"}
      maxH="200px"
      m={2}
      spacing={4}
      align="center"
      p={2}
      rounded="xl"
    >
      <Flex w={"100%"} justify="space-between" align="center">
        <Heading
          fontSize={"lg"}
          letterSpacing="tight"
          textColor={`${features.color}.700`}
          fontWeight={800}
        >
          {features.title}
        </Heading>
        <Avatar
          size={"sm"}
          color={`${features.color}.600`}
          bg={`${features.color}.100`}
          p={1}
          objectFit={"cover"}
          as={features.icon}
        />
      </Flex>
      <Center>
        <Text
          fontSize={"xs"}
          textColor={`${features.color}.900`}
          lineHeight={1}
          fontWeight={"black"}
        >
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum
        </Text>
      </Center>
    </VStack>
  );
}

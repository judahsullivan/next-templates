import React from "react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { SocialButton } from "./socialbuttons";
import { ListHeader } from "./listHeader";
import FooterSignup from "./signup";
import { Logo } from "@/components/custom/logo";
import { footer } from "./footerData";

export default function FooterSection() {
  const { Footer, Lists } = footer;

  return (
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack align="center" spacing={10}>
            <VStack>
              <Logo />
              {/* Footer Information */}
              {Footer.map((footerItem, index) => (
              <VStack 
                  key={index}

                >
                  <Text  
                    fontWeight={600}
                    fontSize={"sm"}>
                  {footerItem.copyright}
                  </Text>
                  <Text 
                    fontWeight={600}
                    fontSize={"sm"}>
                  {footerItem.rights}
                  </Text>
                </VStack>
              
              ))}
            </VStack>

            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>

          {/* List Sections */}
          {Lists.map((section, index) => (
            <Stack key={index} align={"flex-start"}>
              <ListHeader>{section.header}</ListHeader>
              {section.links.map((link, linkIndex) => (
                <Link key={linkIndex} href={link.href} target={link.target}>
                  <Text>
                  {link.text}
                  </Text>
                </Link>
              ))}
            </Stack>
          ))}

          <Stack align={"flex-start"}>
            <Box display={["none", "none", "block", "block"]}>
              <FooterSignup />
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
  );
}



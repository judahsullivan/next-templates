'use client'

import React, { useEffect, useState } from 'react';
import {
  Link,
  Box,
  Flex,
  Stack,
  Icon,
  HStack,
  Tooltip,
  Heading,
  Container,
  IconButton,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react';
import NextLink from 'next/link';
import DropDownMenu from './dropDown';
import { FaGithub } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Logo } from '@/components/custom/logo';

const valuePageYOffset = 2;

const menuData = [
  {
    id: 1,
    label: 'Templates',
    subLabel: 'Explore the Prebuilt Templates',
    href: '/templates'
  },
  {
    id: 2,
    label: 'Components',
    subLabel: 'Checkout our Reponsive Components',
    href: '/comps'
  }
];

export default function Navbar() {
  const github = useColorModeValue('gray.100', 'gray.900')
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setIsVisible(position > valuePageYOffset);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const visiblecolor = useColorModeValue(
    '0 4px 6px rgba(160, 174, 192, 0.6)',
    '0 4px 6px rgba(9, 17, 28, 0.9)')
  const invisiblecolor = useColorModeValue('white', 'gray.800')
  return (
    <>
      <Box
        as="header"
        transition="all 0.1s ease-in-out"
        bg={{
          base: useColorModeValue('white', 'gray.800'),
          sm: isVisible ? invisiblecolor  : 'inherit'
        }}
        px={4}
        boxShadow={
          isVisible
            ? 
            visiblecolor : 'none'
        }
        position='sticky'
        width="100%"
        zIndex="55"
        top="0"
      >
        <Container maxW="1280px" p={{ base: 0, md: 'inherit' }}>
          <Flex h={16} alignItems="center" justifyContent="space-between" mx="auto">
            <HStack spacing={3} alignItems="center">
              <IconButton
                size="md"
                icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                aria-label="Open Menu"
                display={{ base: 'inherit', sm: 'none' }}
                onClick={isOpen ? onClose : onOpen}
              />
              <NextLink href="/" passHref>
                <Heading as="h1" fontSize={['lg', 'md', 'xl', '3xl']} cursor="pointer">
                  <Flex position="relative">
                    <HStack display={{ base: 'none', sm: 'flex' }} spacing={2}>
                      <Logo />
                    </HStack>
                  </Flex>
                </Heading>
              </NextLink>
            </HStack>
            <HStack spacing={2} alignItems="center">
              <Tooltip label="Github Code" placement="left" aria-label="Github code">
                <Link href={''} isExternal>
                  <Flex
                    as="button"
                    p="0.6rem"
                    rounded="lg"
                    cursor="pointer"
                    _hover={{ bg: useColorModeValue('gray.300', 'gray.600') }}
                    bg={useColorModeValue('gray.200', 'gray.700')}
                    justify="center"
                  >
                    <Icon as={FaGithub}  />
                  </Flex>
                </Link>
              </Tooltip>
              <DropDownMenu menuData={menuData}/>
            </HStack>
          </Flex>
        </Container>
        {isOpen ? (
          <Box pb={4} display={{ base: 'inherit', sm: 'none' }}>
            <Stack as="nav" spacing={1}>
              {menuData.map((data, index) => (
                <Link
                  key={index}
                  px={3}
                  py={1}
                  lineHeight="inherit"
                  rounded="md"
                  _hover={{
                    textDecoration: 'none',
                    bg: github,
                  }}
                  onClick={() => onClose()}
                >
                  {data.label}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { chakra } from '@chakra-ui/react'


export const ChakraLink = chakra<typeof NextLink, NextLinkProps>(NextLink, {
  shouldForwardProp: (prop) => ['href', 'target', 'children', 'path'].includes(prop)
});

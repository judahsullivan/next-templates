'use client'

import {
  Stack,
  Box,
  Popover,
  PopoverTrigger,
  Link,
  useColorModeValue,
  PopoverContent,
  Text,
  Icon,
  HStack,
  useDisclosure,
  PopoverArrow
} from '@chakra-ui/react';
import { FaChevronUp } from 'react-icons/fa';

interface MenuData {
  id: number;
  label: string;
  subLabel: string;
  href: string;
  linkColor?: string;
}

interface MenuDataProps {
  menuData: MenuData[];
}

const DropDownMenu = ({ menuData }: MenuDataProps) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Stack direction="row" spacing={4} display={{ base: 'none', sm: 'flex' }}>
      <Popover trigger="hover" placement="bottom-start" onOpen={onOpen} onClose={onClose}>
        <PopoverTrigger>
          <HStack alignItems="center" cursor="pointer" role="group">
            <Icon
              as={FaChevronUp}
              h={4}
              w={4}
              _groupHover={{
              }}
              transition="all .25s ease-in-out"
              transform={isOpen ? 'rotate(180deg)' : ''}
            />
          </HStack>
        </PopoverTrigger>
        <PopoverContent
          border={0}
          boxShadow={useColorModeValue(
            '2px 4px 6px rgba(160, 174, 192, 0.6)',
            '0 4px 6px rgba(9, 17, 28, 0.9)'
          )}
          p={4}
          bg="messenger.100"
          rounded="lg"
          minW="xs"
        >
          <PopoverArrow />
          <Stack>
            {menuData.map((data) => (
              <DropDownItem key={data.id} {...data} />
            ))}
          </Stack>
        </PopoverContent>
      </Popover>
    </Stack>
  );
};

const DropDownItem = ({ label, href, subLabel  }: MenuData) => {
  return (
      <Link
        href={href!}
        display="block"
        p={2}
        rounded="md"
        _hover={{ bg: useColorModeValue('gray.100', 'gray.900')}}
      >
        <Stack direction="row" align="center">
          <Box>
            <Text fontWeight={500}>{label}</Text>
            <Text fontSize="sm">{subLabel}</Text>
          </Box>
        </Stack>
      </Link>
  );
};

export default DropDownMenu;

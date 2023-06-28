import {Stack,Heading,Divider, Image,Box} from '@chakra-ui/react'
import { useState } from 'react';





const OverviewSection = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getSelectedContentImageUrl = () => {
    return overviewData.filter((data) => data.id === selectedId)[0].image;
  };

  const handleClick = (id: number) => {
    setIsLoading(true);
    setSelectedId(id);
  };

  const isSelectedTab = (id: number) => {
    return id === selectedId;
  };

  return (
    <Stack
      maxW="1280px"
      marginInline="auto"
      my={20}
      spacing={8}
      pos="relative"
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        width: '50%',
        filter: 'blur(20rem)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 0,
        right: 0,
        backgroundImage:
          'url("https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80")'
      }}
    >
      <Heading textAlign="center">Overview</Heading>
      <Stack w="100%" direction={{ base: 'column', md: 'row' }} spacing={10} justify="center">
        <Stack direction="column" w={{ base: '100%', md: '30%' }}>
          <Divider />
          {overviewData.map((data, index) => (
            <Fragment key={index}>
              <Box
                p={5}
                cursor="pointer"
                rounded="lg"
                color={isSelectedTab(data.id) ? 'white' : 'inherit'}
                bgGradient={
                  isSelectedTab(data.id) ? `linear(to-r, ${linkColor}, #1e4f7c)` : 'initial'
                }
                _hover={{
                  bgGradient: `linear(to-r, ${linkColor}, #1e4f7c)`,
                  color: 'white'
                }}
                onClick={() => handleClick(data.id)}
              >
                <chakra.h3 fontSize="2xl" fontWeight="bold" mb={1}>
                  {data.heading}
                </chakra.h3>
                {isSelectedTab(data.id) && <Text fontSize="sm">{data.content}</Text>}
                {isSelectedTab(data.id) && (
                  <Stack w="auto" mt={2} d={{ base: 'flex', md: 'none' }}>
                    <Image
                      zIndex={5}
                      opacity={isLoading ? 0.4 : 1}
                      src={getSelectedContentImageUrl()}
                      alt={`${data.heading} Image`}
                      onLoad={() => setIsLoading(false)}
                      width={{ md: '30rem', lg: '50rem' }}
                      transition="all 0.2s"
                      rounded="lg"
                    />
                  </Stack>
                )}
              </Box>
              <Divider />
            </Fragment>
          ))}
        </Stack>
        <Stack w="auto" d={{ base: 'none', md: 'flex' }}>
          <Image
            zIndex={5}
            opacity={isLoading ? 0.4 : 1}
            src={getSelectedContentImageUrl()}
            alt="Project Image"
            onLoad={() => setIsLoading(false)}
            width={{ md: '30rem', lg: '50rem' }}
            transition="all 0.2s"
            rounded="lg"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

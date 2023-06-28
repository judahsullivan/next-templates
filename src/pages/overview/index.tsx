
import { Box,Heading, Divider, Image, Stack,Text,chakra, Button, Link } from "@chakra-ui/react";
import { ChakraLink } from "@/components/chakra/links";
import { Fragment,useState } from "react";
import PageLayout from "@/components/layouts/pageLayout";


// Overview Section
const overviewData = [
  {
    id: 1,
    heading: 'Templates',
    content: 'Check out our Template Demos. Where you can find the best project to suite your needs. You can find a range of projects from Front-End UI to Full Stack Templates. Combined with complete instructions to get your started.',
    image: 'https://templateskart.com/assets/images/layouts/project_screen.png',
    href: '/overview/templates'
  },
  {
    id: 2,
    heading: 'Components',
    content: 'Choose from our bountiful choices of components, built with production and typescript ready! all you need to is copy, paste and customize!',
    image: '/assets/images/layouts/project_components.png',
    href: '/overview/components'
  },
];

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
  <PageLayout>
      <Stack
        maxW="1280px"
        marginInline="auto"
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
        <ChakraLink 
          href={'/'} 
        >Back Home</ChakraLink>
        
        <Stack w="100%" direction={{ base: 'column', md: 'row' }} spacing={10} justify="center">
          <Stack direction="column" w={{ base: '100%', md: '30%' }}>
            <Divider />
            {overviewData.map((data, index) => (
              <Fragment key={index}>
                <Box
                  p={5}
                  rounded="lg"
                  onClick={() => handleClick(data.id)}
                >
                  <chakra.h3 cursor={'pointer'} fontSize="2xl" fontWeight="bold" mb={1}>
                    {data.heading}
                  </chakra.h3>
                  {isSelectedTab(data.id) &&(
                    <>
                      <Text>{data.content}</Text>
                      <ChakraLink
                        href={data.href}
                        passHref
                      >
                      <Button>
                          Check it Out
                        </Button>
                      </ChakraLink>
                    </>
                  ) 
                  }
                  {isSelectedTab(data.id) && (
                    <Stack w="auto" mt={2} display={{ base: 'flex', md: 'none' }}>
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
          <Stack w="auto" display={{ base: 'none', md: 'flex' }}>
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
    </PageLayout>
   );
};


export default OverviewSection


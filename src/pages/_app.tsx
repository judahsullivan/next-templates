import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { ChakraProvider, Box } from '@chakra-ui/react';
import  { useRouter } from 'next/router';
import Navbar from '@/components/shared/navbar';
import AppLayout from '@/components/layouts/appLayout';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ChakraProvider resetCSS={true}>
      <AppLayout>
      <AnimatePresence 
       mode="wait" 
        initial={true}
        onExitComplete={() => 
          window.scrollTo(0,0)
           
          }
        >
        <Box key={router.route}>
          <Component {...pageProps} />
        </Box>
      </AnimatePresence>
      </AppLayout>

    </ChakraProvider>
  );
}

export default MyApp;

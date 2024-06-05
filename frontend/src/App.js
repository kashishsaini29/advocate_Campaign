import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Navbar } from './component/Navbar';
import { Home } from './component/Home';
import Footer from './component/Footer';
import Welcome from './component/Welcome';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        bgImg={
          'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        //  bgImg={"https://img.freepik.com/free-photo/view-3d-gavel-lawyer-s-day_23-2151023395.jpg?t=st=1717326591~exp=1717330191~hmac=f40e87ad9c304eafdb6a93758293e9f8de932787afd91c67afe1b37184559cfa&w=740"}
        minH={{ lg: '100vh' }}
        bgRepeat={'no-repeat'}
        // h={{ base: '90vh', md: '80vh' }}
        bgSize={'cover'}
        // w={'100%'}
      >
        <Navbar />
        <Welcome />
      </Box>
      <Home />
      <Footer />
    </ChakraProvider>
  );
}

export default App;

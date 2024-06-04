import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Link,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, lg: false });

  // useEffect(() => {
  //   const checkIsMobile = () => {
  //     return window.innerWidth < 768;
  //   };

  //   // const handleResize = () => {
  //   //   isMobile = checkIsMobile();
  //   // };

  //   handleResize();
  //   window.addEventListener('resize', handleResize);

  //   // return () => {
  //   //   window.removeEventListener('resize', handleResize);
  //   // };
  // }, [isMobile]);

  return (
    <Flex
      bg="rgba(0, 0, 0, 0.7)"
      as="nav"
      align="center"
      justify="space-between"
      p="0.5rem"
      boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    >
      <Box>
        <Flex align="center" gap={2}>
          <Image
            src="logo.png"
            alt="Logo"
            h={{ base: '40px', md: '60px' }}
            objectFit={'contain'}
          />
        </Flex>
      </Box>

      {!isMobile && (
        <Flex
          align="center"
          justify="center"
          gap={{ md: 3, lg: 6 }}
          textColor="yellow.500"
          fontWeight="bold"
          fontSize="lg"
          // w={'100%'}
        >
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/use-cases">Use Cases</Link>
        </Flex>
      )}

      {/* <Flex gap={4} align="start" justify={'end'}> */}
        <Button
          size={isMobile ? 'sm' : 'lg'}
          bgGradient="linear(to-r, whatsapp.400, whatsapp.700)"
          color="white"
          _hover={{
            bgGradient: 'linear(to-r, whatsapp.500, whatsapp.800)',
          }}
          rounded="full"
          leftIcon={<FaWhatsapp fontSize={isMobile ? '15px' : '30px'} mt />}
          display={{ base: 'none', lg: 'block' }}

        >
          9012345678
        </Button>
      {/* </Flex> */}

      {isMobile && (
        <>
          <Flex gap={4} align={'center'}>
            <Button
              size={isMobile ? 'sm' : 'lg'}
              bgGradient="linear(to-r, whatsapp.400, whatsapp.700)"
              color="white"
              _hover={{
                bgGradient: 'linear(to-r, whatsapp.500, whatsapp.800)',
              }}
              rounded="full"
              leftIcon={<FaWhatsapp fontSize={isMobile ? '15px' : '25px'} />}
              display={{ base: 'block', lg: 'none' }}
            >
              9012345678
            </Button>

            <IconButton
              icon={<HamburgerIcon />}
              aria-label="Menu"
              onClick={onOpen}
              variant="ghost"
              color="white"
            />
          </Flex>
          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <Flex direction="column" gap={4}>
                  <Link href="/about">About Us</Link>
                  <Link href="/contact">Contact</Link>
                  <Link href="/resources">Resources</Link>
                  <Link href="/use-cases">Use Cases</Link>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </Flex>
  );
};

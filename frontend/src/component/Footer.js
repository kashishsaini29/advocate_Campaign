import { Box, Center, HStack, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const iconButtonStyles = {
        boxSize: 10,
        isRound: true,
        border: '2px solid white',
        _hover: { bg: 'white', color: 'black' },
        color: 'white',
        bg: 'transparent',
        fontSize: '2xl',
        cursor: 'pointer',
      };
  return (
    <Center  bg={"gray.700"} py={4}>
    <Box>
      <Center>
        <HStack spacing={4} transition="step-start">
          <IconButton
            {...iconButtonStyles}
            aria-label="Instagram"
            icon={<FaInstagram />}
          />
          <IconButton
            {...iconButtonStyles}
            aria-label="LinkedIn"
            icon={<FaLinkedinIn />}
          />
          <IconButton
            {...iconButtonStyles}
            aria-label="Twitter"
            icon={<FaTwitter />}
          />
        </HStack>
      </Center>
      <Text
        fontSize={'sm'}
        mt={6}
        color={'white'}
        display={{ base: 'inline', md: 'inline-flex' }}
        gap={1}
        textAlign={'center'}
      >
        All Rights Reserves, Advocate Pvt. Ltd.❤ Powered by
        <Text color={'telegram.500'}>Advocate</Text>
      </Text>
    </Box>
  </Center>
  )
}

export default Footer
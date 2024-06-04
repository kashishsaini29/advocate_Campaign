import { Box, Text, Flex, Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const welcome = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };

  const MotionBox = motion(Box);
  const MotionText = motion(Text);

  const splitText = (text, startIndex = 0) => {
    return text.split('').map((char, index) => (
      <MotionText
        as="span"
        display="flex"
        key={index + startIndex}
        custom={index + startIndex}
        variants={textVariants}
        initial="hidden"
        animate="visible"
        mr={char === ' ' ? 2 : 0} // Add margin for spaces
      >
        {char}
      </MotionText>
    ));
  };

  return (
    <Box pl={{ base: 'auto', lg: 16 }} display={'flex'} direction="column">
      <MotionBox
        minH="80vh"
        color="white"
        maxW={{ base: '100%', lg: '50%' }}
        // margin="auto"
        //   alignContent="center"
        align={{ base: 'start', md: 'start' }}
        // bg="rgba(0, 0, 0, 0.4)"
        p={4}
      >
        <Flex
          justify={{ base: 'center', lg: 'start' }}
          direction={{ base: 'column', md: 'row', lg: 'column' }}
        >
          <Flex
            justify={{ base: 'center', lg: 'start' }}
            wrap="wrap"
            fontSize={{ base: '2xl', md: '4xl', lg: '6xl' }}
            fontWeight="bold"
          >
            {splitText('Welcome to ')}
          </Flex>
          <Flex
            justify={{ base: 'center', lg: 'start' }}
            wrap="wrap"
            fontSize={{ base: '2xl', md: '4xl', lg: '6xl' }}
            fontWeight="bold"
            textColor={'yellow.500'}
          >
            {splitText('Legal ')}
            <MotionBox
              as="span"
              bg="yellow.500"
              color="white"
              borderRadius="md"
              px={2}
              // display="inline-block"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              display="flex"
            >
              {splitText('A to Z', 11)}
            </MotionBox>
          </Flex>
        </Flex>
        <Flex justify={{ base: 'center', lg: 'start' }}>
          <Box
            //   bgColor={'white'}
            mt={8}
            textColor={'white'}
            p={6}
            borderRadius={30}
            // bgColor="rgba(0, 0, 0, 0.5)"
            bgColor="rgba(255, 229, 100, 0.4)"
            style={{
              backdropFilter: 'blur(10px)',
              // color: '#000000', // Intense black color
              // fontWeight: 'bold' // Bold font weight
            }}
            fontWeight={'solid'}
            fontStyle={'italic'}
            fontSize={{ md: 'xl', lg: 'md' }}
            justify="start"
            w={{ md: '80%' }}
            //   display={'flex'}
          >
            <Text as={'span'}>At </Text>
            <Text as="span" color="white" fontWeight={'bold'}>
              Legal A to Z
            </Text>
            , we pride ourselves on offering comprehensive and personalized
            legal services tailored to meet the unique needs of our clients.
            With a team of experienced attorneys, we are dedicated to providing
            exceptional legal representation and support across a wide range of
            practice areas. Our commitment to excellence, integrity, and client
            satisfaction sets us apart as a premier law firm.
          </Box>
        </Flex>
      </MotionBox>
      {/* <Box position={''} border={'2px solid green'} textColor={'white'} display={'flex'}  mt={'10%'} h={'60px'}  justifyContent="flex-end" pr="10%">
        sdfaskkfdkfdfk
      </Box> */}
    </Box>
  );
};

export default welcome;

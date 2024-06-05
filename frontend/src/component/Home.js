import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Form } from './Form'
import { PersonsContent } from './PersonsContent'
import { Cards } from './Cards'

export const Home = () => {
    return (
        <Box>

          <Cards/>
            <PersonsContent/>
        <Box
          bgImg={'https://img.freepik.com/premium-photo/law-concept-judge-gavel-books_218381-8923.jpg?w=1380'}
            //   bgImg={"https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}    
          // h={'100vh'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            w={'100%'}
            // display="flex"
    
        // position="relative"
        p={4}
        >
            <Box  pt={'1px'}>
             <Heading
        textAlign={'center'}
        my={'6'}
        // px={2}
        display={'flex'}
        justifyContent={'center'}
      >
        <Text textColor={'white'}>Contact Us</Text>
        <Image
          src="https://cdn-icons-png.freepik.com/512/3409/3409542.png?ga=GA1.2.851937454.1716999484"
          maxH={'80px'}
          maxW={'80px'}
          pl={'8px'}
          color={'white'}
        />
      </Heading>
      </Box>
            <Box 
            //  bg="rgba(0, 0, 0, 0.6)" // Optional: Add a semi-transparent background for better visibility of the form
             borderRadius="md"
            //  px={4}
             w={{ base: "90%", md: '80%', lg: '40%' }}
            //  position="relative"
        
            //  position={'absolute'}
            ml={{ base: 'auto', lg: '55%' }}
            mr={{ base: 'auto', lg: 0 }}
            // mx={"auto"}
            // top={{base:'40',md:"10", xl:'20' }}
            //  w={{base:"100%", md:'80%', lg:'30%'}}
            >
                <Form />
            </Box>
            </Box>
        </Box>
    )
}

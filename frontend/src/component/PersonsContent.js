import {
  Grid,
  Box,
  Text,
  Heading,
  Image,
  Card,
  Stack,
  CardBody,
  CardFooter,
  Button,
} from '@chakra-ui/react';
import React from 'react';
// import Payment from '../img/payment.png';
export const PersonsContent = () => {
  return (
    <>
      <Heading
        textAlign={'center'}
        my={'10'}
        px={2}
        display={'flex'}
        justifyContent={'center'}
      >
        <Text>Why Choose Us</Text>
        <Image
          src="https://cdn-icons-png.freepik.com/512/3409/3409542.png?ga=GA1.2.851937454.1716999484"
          maxH={'80px'}
          maxW={'80px'}
          pl={'8px'}
        />
      </Heading>
      <Grid templateColumns={{ md: '1fr 1fr' }} gap={'16'} px={10}>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          //   maxH={'200px'}
          //   variant='outline'
        >
          <Box
            justify={'center'}
            alignItems={'center'}
            justifyContent={'center'}
            display={'flex'}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '100px' }}
              maxH={'100px'}
              src="/icons/license.gif"
              alt="Caffe Latte"
            />
          </Box>

          <Stack>
            <CardBody>
              <Heading size="md">Expertise and Experience</Heading>
              <Text py="2">
                With years of experience across diverse legal fields, our
                attorneys possess the knowledge and skills necessary to handle
                even the most complex cases.
              </Text>
            </CardBody>
          </Stack>
        </Card>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          //   maxH={'200px'}
          //   variant='outline'
        >
          <Box
            justify={'center'}
            alignItems={'center'}
            justifyContent={'center'}
            display={'flex'}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '100px' }}
              maxH={'100px'}
              src="/icons/happy.gif"
              alt="Caffe Latte"
            />
          </Box>

          <Stack>
            <CardBody>
              <Heading size="md">Client-Centered Approach</Heading>
              <Text py="2">
              We prioritize our clients’ needs and concerns, offering personalized attention and tailored legal strategies to achieve the best possible outcomes.

              </Text>
            </CardBody>
          </Stack>
        </Card>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          //   maxH={'200px'}
          //   variant='outline'
        >
          <Box
            justify={'center'}
            alignItems={'center'}
            justifyContent={'center'}
            display={'flex'}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '100px' }}
              maxH={'100px'}
              src="/icons/no-racism.gif"
              alt="Caffe Latte"
            />
          </Box>

          <Stack>
            <CardBody>
              <Heading size="md">Commitment to Excellence</Heading>
              <Text py="2">
              Our dedication to excellence ensures that we provide high-quality legal services and maintain the highest standards of professionalism and integrity.

              </Text>
            </CardBody>
          </Stack>
        </Card>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          //   maxH={'200px'}
          //   variant='outline'
        >
          <Box
            justify={'center'}
            alignItems={'center'}
            justifyContent={'center'}
            display={'flex'}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '100px' }}
              maxH={'100px'}
              src="/icons/communications.gif"
              alt="Caffe Latte"
            />
          </Box>

          <Stack>
            <CardBody>
              <Heading size="md">Accessible and Responsive</Heading>
              <Text py="2">
              We believe in clear communication and are always available to answer your questions and provide updates on your case. Your peace of mind is important to us.

              </Text>
            </CardBody>
          </Stack>
        </Card>

      </Grid>
      <Box
          px={10}     
          justify={'center'}
          alignItems={'center'}
          justifyContent={'center'}
          display={'flex'}
          my={10}
          >
            

      <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          maxW={{sm:'100%', md:'46%'}}
          //   maxH={'200px'}
          //   variant='outline'
          justify={'center'}
          alignItems={'center'}
          justifyContent={'center'}
          display={'flex'}
        
          >
          <Box
            justify={'center'}
            alignItems={'center'}
            justifyContent={'center'}
            display={'flex'}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '100px' }}
              maxH={'100px'}
              src="/icons/society.gif"
              alt="Caffe Latte"
            />
          </Box>

          <Stack>
            <CardBody>
              <Heading size="md">Community Involvement</Heading>
              <Text py="2">
              We are proud to be active members of our community, supporting local causes and organizations that make a positive impact.

              </Text>
            </CardBody>
          </Stack>
        </Card>
      </Box>
      {/* <Grid
        templateColumns={{ md: '1fr 1fr' }}
        placeItems={'center'}
        mt={16}
        gap={4}
        maxW={'70%'}
        mx={'auto'}
      >
        <Box mb={8}>
          <Heading size={'lg'} textAlign={{ base: 'center', md: 'unset' }}>
            Expertise and Experience
          </Heading>
          <Text
            fontSize={{ md: 'lg' }}
            color={'gray'}
            mt={2}
            textAlign={{ base: 'center', md: 'unset' }}
          >
            With years of experience across diverse legal fields, our attorneys
            possess the knowledge and skills necessary to handle even the most
            complex cases.
          </Text>
        </Box>
        <Box>
          <Image
            src="https://img.freepik.com/free-photo/modern-trader_1098-13889.jpg?t=st=1717006868~exp=1717010468~hmac=0682127b597055aba6aee46125587e54974b87c0d2ce029a30f4a04b35511af7&w=1060 "
            w={'250px'}
            h={'250px'}
            objectFit={'cover'}
            rounded={'full'}
          />
        </Box>
      </Grid>
      <Grid
        templateColumns={{ md: '1fr 1fr' }}
        placeItems={'center'}
        mt={16}
        gap={4}
        maxW={'70%'}
        mx={'auto'}
      >
        <Box order={{ base: 1, md: 'unset' }}>
          <Image
            src="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?t=st=1717007115~exp=1717010715~hmac=398f6f9ccdd0efbe758435f8319797bb4ae0cbf313238b6ebb644477c6f9ad64&w=740 "
            w={'250px'}
            h={'250px'}
            objectFit={'cover'}
            rounded={'full'}
          />
        </Box>
        <Box mb={8} order={{ base: 0, md: 'unset' }}>
          <Heading size={'lg'} textAlign={{ base: 'center', md: 'unset' }}>
            Client-Centered Approach
          </Heading>
          <Text
            fontSize={{ md: 'lg' }}
            color={'gray'}
            mt={2}
            textAlign={{ base: 'center', md: 'unset' }}
          >
            We prioritize our clients’ needs and concerns, offering personalized
            attention and tailored legal strategies to achieve the best possible
            outcomes.
          </Text>
        </Box>
      </Grid> */}
    </>
  );
};

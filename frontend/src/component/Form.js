import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Select,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export const Form = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    caseType: '',
    caseNo: '',
    description: '',
  });
  const toast = useToast();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('form Data', formData);
    // Validation checks
    if (!formData.name || !formData.email || !formData.mobileNo) {
      toast({
        title: 'Validation error.',
        description: 'All fields are required.',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: 'Validation error.',
        description: 'Please enter a valid email address.',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('http://localhost:700/mail', {
        method: 'POST',
        body: JSON.stringify({ formData }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Failed to submit form');
      }

      const response = await res.json();
      console.log('Form Data:', response);

      toast({
        title: 'Submitted successfully.',
        description: 'Your form has been submitted.',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });

      // Reset form fields
      setFormData({
        name: '',
        email: '',
        mobileNo: '',
        caseType: '',
        caseNo: '',
        description: '',
      });
    } catch (error) {
      toast({
        title: 'Submission failed.',
        description:
          'There was an error submitting your form. Please try again.',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Box
        p={8}
        bg="rgba(0, 0, 0, 0.6)"
        borderRadius="md"
        boxShadow="md"
        // w={{ base: '90vw', lg: '100%' }}
      >
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4}>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel color="white" fontSize={'md'}>
                Full Name
              </FormLabel>
              <Input
                color="white"
                _active={{ borderColor: 'yellow.700' }}
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleInputChange}
                fontSize={'md'}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel color="white" fontSize={'md'}>
                Email ID
              </FormLabel>
              <Input
                color="white"
                name="email"
                value={formData.email}
                type="email"
                placeholder="Enter your email"
                onChange={handleInputChange}
                fontSize={'md'}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <FormControl isRequired>
              <FormLabel color="white" fontSize={'md'}>
                Phone Number
              </FormLabel>
              <Input
                color="white"
                name="mobileNo"
                value={formData.mobileNo}
                type="number"
                placeholder="Enter your Mobile no."
                onChange={handleInputChange}
                fontSize={'md'}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel color="white" fontSize={'md'}>
                Type of Cases
              </FormLabel>
              <Select
                color="white"
                bg="gray.700"
                borderColor="yellow.700"
                placeholder="Select case type"
                name="caseType"
                value={formData.caseType}
                onChange={handleInputChange}
                _hover={{ bg: 'gray.600' }}
                _focus={{ bg: 'gray.600', borderColor: 'yellow.700' }}
                sx={{
                  option: {
                    backgroundColor: '#2D3748',
                    color: 'white',
                  },
                  '&:focus': {
                    backgroundColor: 'gray.700',
                  },
                }}
              >
                <option
                  style={{ backgroundColor: '#2D3748', color: 'white' }}
                  value="criminal"
                >
                  Criminal
                </option>
                <option
                  style={{ backgroundColor: '#2D3748', color: 'white' }}
                  value="civil"
                >
                  Civil
                </option>
                <option
                  style={{ backgroundColor: '#2D3748', color: 'white' }}
                  value="others"
                >
                  Others
                </option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel color="white" fontSize={'md'}>
                Case Number
              </FormLabel>
              <Input
                color="white"
                name="caseNo"
                value={formData.caseNo}
                placeholder="Enter case number"
                onChange={handleInputChange}
                fontSize={'md'}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <FormControl>
              <FormLabel color="white" fontSize={'md'}>
                Description
              </FormLabel>
              <Textarea
                color="white"
                name="description"
                value={formData.description}
                placeholder="Enter case description"
                onChange={handleInputChange}
                fontSize={'md'}
              />
            </FormControl>
          </GridItem>
        </Grid>
        <Button
          mt="20px"
          w="100%"
          bgGradient="linear(to-r, yellow.500, yellow.700)"
          color="white"
          type="submit"
          onClick={handleSubmit}
          _hover={{ bg: 'yellow.700' }}
          isLoading={loading}
          fontSize={'xl'}
          py={'20px'}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

// <Box
//   p={8}
//   backdropFilter="brightness(0.5) blur(2px)"
//   borderRadius={'md'}
//   boxShadow={'md'}
// >
//   <FormControl isRequired>
//     <FormLabel color={'white'}>Full Name</FormLabel>
//     <Input
//       color={'white'}
//       _active={{ borderColor: 'yellow.700' }}
//       name="name"
//       value={formData.name}
//       placeholder="Enter your name"
//       onChange={handleInputChange}
//     />
//   </FormControl>
//   <FormControl isRequired my={6}>
//     <FormLabel color={'white'}>Email ID</FormLabel>
//     <Input
//       color={'white'}
//       name="email"
//       value={formData.email}
//       type="email"
//       placeholder="Enter your email"
//       onChange={handleInputChange}
//     />
//   </FormControl>
//   <FormControl isRequired>
//     <FormLabel color={'white'}>Phone Number</FormLabel>
//     <Input
//       color={'white'}
//       name="mobileNo"
//       value={formData.mobileNo}
//       type="number"
//       placeholder="Enter your Mobile no."
//       onChange={handleInputChange}
//     />
//   </FormControl>
//   <Button
//     mt={'20px'}
//     w={'100%'}
//     bgGradient={'linear(to-r, yellow.500, yellow.700)'}
//     color={'white'}
//     type="submit"
//     onClick={handleSubmit}
//     _hover={{ bg: 'yellow.700' }}
//     isLoading={loading}
//   >
//     Submit
//   </Button>
// </Box>

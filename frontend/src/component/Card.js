// CardComponent.js
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  ModalOverlay,
  Link,
} from '@chakra-ui/react';
import React from 'react';

export const CardComponent = ({
  imageSrc,
  title,
  description,
  showFullDescription,
  onReadMore,
}) => {
  const truncatedDescription =
    description.length > 90
      ? description.substring(0, 90) + '...'
      : description;

  return (
    <Card
      minW={'100%'}
      maxW="xs"
      h="350px"
      display="flex"
      flexDirection="column"
      _hover={{ shadow: 'xl', transform: 'scale(1.05)', cursor: 'pointer' }}
      transition={'ease-in-out 0.3s'}
    >
      <CardBody display="flex" flexDirection="column" flex="1">
        <Image
          src={imageSrc}
          alt={title}
          borderRadius="lg"
          objectFit="cover"
          h="150px"
          w="100%"
        />
        <Stack mt="6" spacing="3" flex="1" overflow="hidden">
          <Heading size="md">{title}</Heading>
          <Text>
            {showFullDescription ? description : truncatedDescription}
            {description.length > 100 && !showFullDescription && (
              <Link color="yellow.500" fontWeight="bold" onClick={onReadMore}>
                {' '}
                Read more
              </Link>
            )}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

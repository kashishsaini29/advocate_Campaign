// Cards.js
import {
  Box,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { CardComponent } from './Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Dummy data
const cardData = [
  {
    id: 0,
    imageSrc:
      'https://img.freepik.com/premium-photo/legal-services-lawyers-medical-malpractice-claims-medical-malpractice-claim-form_1048944-22885518.jpg?w=740',
    title: 'Personal Injury Law',
    description:
      'If you’ve been injured due to someone else’s negligence, our personal injury attorneys are here to help you secure the compensation you deserve. We handle cases involving car accidents, medical malpractice, workplace injuries, slip and fall incidents, and more. Let us fight for your rights and ensure you receive fair treatment.',
  },
  {
    id: 1,
    imageSrc:
      'https://img.freepik.com/premium-photo/legal-area-children-wooden-court-gavel_488220-54733.jpg?w=740',
    title: 'Family Law',
    description:
      'Navigating family-related legal issues can be emotionally challenging. Our compassionate family law attorneys provide expert guidance and representation in matters such as divorce, child custody, alimony, adoption, and prenuptial agreements. We strive to achieve the best possible outcomes for you and your loved ones.',
  },
  {
    id: 2,
    imageSrc:
      'https://img.freepik.com/free-photo/closeup-view-brown-wooden-mallet-judge_93675-129068.jpg?t=st=1717288102~exp=1717291702~hmac=b9113537706563cffb72b56acb31fec6da1d609a0b8b278c789e2e1462fc8251&w=740',
    title: 'Criminal Defense',
    description:
      'Facing criminal charges can be daunting. Our skilled criminal defense attorneys are dedicated to protecting your rights and defending your freedom. We handle a wide range of cases, including DUI/DWI, drug offenses, white-collar crimes, assault, and more. Trust us to build a strong defense and advocate for you throughout the legal process.',
  },
  {
    id: 3,
    imageSrc:
      'https://img.freepik.com/premium-photo/comparison-house-crypto-bitcoin-gold-balance-scale_55099-39.jpg?w=740',
    title: 'Estate Planning and Probate',
    description:
      'Planning for the future is crucial. Our estate planning attorneys help you create comprehensive plans that protect your assets and ensure your wishes are honored. We assist with wills, trusts, powers of attorney, and advance directives. Additionally, we provide probate services to guide you through the complex process of administering an estate.',
  },
  {
    id: 4,
    imageSrc:
      'https://img.freepik.com/premium-photo/justice-lawyers-with-judge-gavel-businessman-suit-lawyer-hiring-lawyers-digital-system-legal-law-prosecution-legal-adviser-lawsuit-detective-investigationlegal-consultant_661047-6663.jpg?w=740',
    title: 'Business Law',
    description:
      'Running a business involves navigating numerous legal challenges. Our business law attorneys offer expert advice and representation on matters such as business formation, contracts, mergers and acquisitions, intellectual property, employment law, and dispute resolution. We are committed to helping your business thrive.',
  },
  {
    id: 5,
    imageSrc:
      'https://img.freepik.com/free-photo/still-life-world-intellectual-property-day_23-2151325851.jpg?t=st=1717289247~exp=1717292847~hmac=8a582aa98095f4f80584c1eb0ce8f9c46becd9879d7f4e41af297d32b2826252&w=740',
    title: 'Real Estate Law',
    description:
      'Whether you are buying, selling, or leasing property, our real estate attorneys provide the legal support you need. We handle residential and commercial real estate transactions, zoning issues, landlord-tenant disputes, property development, and more. Rely on us for thorough and effective legal assistance.',
  },
  {
    id: 6,
    imageSrc:
      'https://img.freepik.com/premium-photo/top-view-passports-gavel-chains-immigration-problem-concept_274234-1119.jpg?w=740',
    title: 'Immigration Law',
    description:
      'Our immigration attorneys are dedicated to helping individuals and families achieve their immigration goals. We assist with visa applications, green cards, citizenship, asylum, deportation defense, and more. Let us guide you through the complex immigration system with care and expertise.',
  },
  {
    id: 7,
    imageSrc:
      'https://img.freepik.com/free-photo/male-hr-manager-asking-job-candidate-leave_1163-4710.jpg?t=st=1717289780~exp=1717293380~hmac=a2570156ebcd95f9192d7371e9074536f3c8ad179e7931e78c5cd364abc5884b&w=740',
    title: 'Employment Law',
    description:
      'Protecting your rights in the workplace is essential. Our employment law attorneys represent employees and employers in matters such as wrongful termination, discrimination, harassment, wage and hour disputes, and employment contracts. We strive to create fair and just work environments for all.',
  },
];

export const Cards = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCard, setSelectedCard] = useState(null);
  const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4 });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // const OverlayOne = () => (
  //   <ModalOverlay
  //     bg='blackAlpha.300'
  //     backdropFilter='blur(10px) hue-rotate(90deg)'
  //   />
  // )
  const handleCardClick = card => {
    setSelectedCard(card);
    onOpen();
  };

  return (
    <Box bg={'gray.50'} p={4} mt={6} pb={10} overflowX={'hidden'}>
      <Heading textAlign={'center'} my={'6'}>
        Our Services
      </Heading>

      <Box mx={-4}>
        {' '}
        {/* Added Box to adjust margin */}
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <Box key={index} p={4} onClick={() => handleCardClick(card)}>
              <CardComponent
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                showFullDescription={false}
                onReadMore={() => handleCardClick(card)}
              />
            </Box>
          ))}
        </Slider>
      </Box>
      {selectedCard && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedCard.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={'20px'} overflowY="auto" maxHeight="70vh">
              <Image
                src={selectedCard.imageSrc}
                alt={selectedCard.title}
                mb={4}
                maxHeight="200px"
                width={'100%'}
                objectFit="cover"
              />
              <Text fontSize={'lg'}>{selectedCard.description}</Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

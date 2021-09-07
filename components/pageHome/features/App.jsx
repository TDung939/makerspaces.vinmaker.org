import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import Link from 'next/link'
import * as React from 'react'
import { FaArrowRight, FaCertificate, FaChalkboard, FaTools } from 'react-icons/fa'
import { Feature } from './Feature'

const App = () => {
  return (
    <Box as="section" py="20">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '0',
        }}
      >
        <Stack
          spacing={{
            base: '4',
            lg: '20',
          }}
          direction={{
            base: 'column',
            lg: 'row',
          }}
        >
          <Center
            flex="1"
            minH="26rem"
            maxW={{
              lg: 'xl',
            }}
          >
            <Img
              borderRadius='3xl'
              objectFit="cover"
              w="full"
              h="full"
              src="/picture_1.png"
              alt="feature"
              filter='brightness(0.45) grayscale(1)'
            />
          </Center>
          <Box
            maxW={{
              lg: 'lg',
            }}
          >
            <Heading
              size="xl"
              mt="10"
              fontFamily='Space mono'
            >
              What is VinUniversity Makerspace Network?
            </Heading>
            <Text fontSize="lg" mt="6" color={mode('gray.600', 'gray.400')}>
            VinUniversity is proud of its many makerspaces and labs. View all Makerspaces in the VinUniversity Makerspace Network. Find the right space for your project.
            </Text>
            <Button
              className="group"
              mt="8"
              color='white'
              bgColor='#2A5FFF'
              fontFamily='Space mono'

              borderRadius='0 25px 0 0'
              _hover={{
              }}
              size="lg"
              px="8"
              h="14"
              iconSpacing="3"
              rightIcon={
                <Box
                  as={FaArrowRight}
                  fontSize="sm"
                  transition="transform 0.2s"
                  _groupHover={{
                    transform: 'translateX(2px)',
                  }}
                />
              }
            >
              Learn more
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default App;
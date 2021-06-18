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
          md: '8',
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
            shadow="lg"
            minH="26rem"
            maxW={{
              lg: 'xl',
            }}
          >
            <Img
              objectFit="cover"
              w="full"
              h="full"
              htmlWidth="576px"
              htmlHeight="420px"
              src="https://res.cloudinary.com/dpec7wjtk/image/upload/v1622791654/VinMakerSpace%20Network/TIEN9731_1_1_k4s1vh.png"
              alt="Bring team together"
            />
          </Center>
          <Box
            maxW={{
              lg: 'lg',
            }}
          >
            <Heading
              size="2xl"
              mt="10"
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="normal"
            >
              VinUniversity Makerspace Network
            </Heading>
            <Text fontSize="lg" mt="6" color={mode('gray.600', 'gray.400')}>
            VinUniversity is proud of its many makerspaces and labs. View all Makerspaces in the VinUniversity Makerspace Network. Find the right space for your project.
            </Text>
            <Button
              className="group"
              mt="8"
              color="white"
              bg="#ae262b"
              _hover={{ bg: "#9d2227" }}
              size="lg"
              px="8"
              fontWeight="bold"
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
        
        <Divider my="20" opacity={0} />

        <SimpleGrid
          columns={{
            base: 1,
            md: 3,
          }}
          spacing={{
            base: '12',
            md: '8',
          }}
        >
          <Box>
            <Feature title="Learn Modules" icon={<FaChalkboard />}>
            Take a look at our online learning resources. Learn new skills or expand your knowledge.
            </Feature>
            <Button mt="25px"> 
              Learn more
            </Button>
          </Box>
    
          <Box>
            <Feature title="Machines" icon={<FaTools />}>
            VinUniversity has a wide range of machines for makers to tinker and design prototype. View the Makerspace Network machine database. Search by location, material or Badge.
            </Feature>
            <Link href="/machines">
              <Button mt="25px"> 
                Learn more
              </Button>
            </Link>
          </Box>
          
          <Box>
            <Feature title="Makerspace Badges" icon={<FaCertificate />}>
            Badging is how we ensure VinUniversity Makers have the skills to safely and efficiently use our network of materials, machines and spaces.
            </Feature>
            <Link href="/badges">
              <Button mt="25px"> 
                Learn more
              </Button>
            </Link>
          </Box>
          
        </SimpleGrid>
        
      </Box>
    </Box>
  )
}

export default App;
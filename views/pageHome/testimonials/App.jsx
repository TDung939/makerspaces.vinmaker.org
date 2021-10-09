import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  SimpleGrid,
  Stack,
  Img,
  Text,
  Flex,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { FaArrowRight } from 'react-icons/fa'

const Feature = (props) => {
  const { title, children } = props
  return (
    <Stack>
      <Text fontWeight="bold">{title}</Text>
      <Text>{children}</Text>
    </Stack>
  )
}

const App = () => {
  return (
    // <Box as="section">
    //   <Box
    //     maxW={{
    //       base: 'xl',
    //       md: '7xl',
    //     }}
    //     mx="auto"
    //     px={{
    //       base: '6',
    //       md: '8',
    //     }}
    //   >
    //     <Grid
    //       templateColumns={{
    //         base: '1fr',
    //         md: '360px 1fr',
    //       }}
    //       gap="64px"
    //     >
    //       <Box>
    //         <Heading fontFamily='Space mono'>
    //           Join the VinUni Maker Society
    //         </Heading>
    //         <Text mt="6" mb="8" fontSize="lg" fontWeight="medium">
    //         VinMaker Society is the first engineering society at VinUniversity. We aim for the development of students’ skills in engineering, through various creative projects and industry events.
    //         </Text>
    //         <Button 
    //           as='a'
    //           href='https://vinmaker.org'
              
    //           size="lg" 
    //           color="white"
    //           bg="#ae262b"
    //           _hover={{ bg: "#9d2227" }} 
    //           minH="14" 
    //           rightIcon={<BiRightArrowAlt />}
    //         >
    //           Join our community
    //         </Button>
    //       </Box>
    //       <Box>
    //         <Center
    //           bg={mode('white', 'gray.700')}
    //           bgImage="https://res.cloudinary.com/dpec7wjtk/image/upload/v1622788495/VinMakerSpace%20Network/STEAM-VinMaker_y93fzq.jpg"
    //           bgSize="cover"
    //           bgPosition="center"
    //           bgRepeat="no-repeat"
    //           shadow="lg"
    //           minH={{
    //             base: '320px',
    //             lg: '480px',
    //           }}
    //           rounded="lg"
    //         > 

    //         </Center>
    //         <SimpleGrid
    //           rounded="lg"
    //           mt="10"
    //           p={{
    //             base: '10',
    //             lg: '0',
    //           }}
    //           columns={{
    //             base: 1,
    //             lg: 3,
    //           }}
    //           spacing="6"
    //           bg={{
    //             base: mode('gray.200', 'gray.700'),
    //             lg: 'unset',
    //           }}
    //         >
    //           <Feature title="Strong and active community">
    //           We organize and run weekly events, including Trivia, Movie, Boardgame Nights, LAN Parties, Workshops, Code Jams, and Weekly BBQ. Events are open to all members, and nearly all are free to attend.
    //           </Feature>
    //           <Feature title="Technical Workshops">
    //           We provide technical events to teach you new skills, as well as a fortnightly magazine to keep you updated on what's new and exciting within the university, school, and industry.
    //           </Feature>
    //           <Feature title="Fun and cool projects">
    //           More opportunities for students to have more hands-on experience as they can apply their theoretical knowledge through myriads of practical activities, projects, and competitions.
    //           </Feature>
    //         </SimpleGrid>
    //       </Box>
    //     </Grid>
    //   </Box>
    // </Box>
    <Box as="section" mb='24'>
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
        <Flex
          justify='space-between'
          direction={{
            base: 'column',
            lg: 'row',
          }}
        >
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
              Join the VinUni Maker Society
            </Heading>
            <Text fontSize="lg" mt="6" color={mode('gray.600', 'gray.400')}>
            VinMaker Society is the engineering society at VinUniversity. We aim for the development of students’ skills in engineering, through various creative projects and industry events.
            </Text>
            <Button
              className="group"
              mt="8"
              color='white'
              bgColor='#2A5FFF'
              fontFamily='Space mono'
              borderRadius='0 25px 0 0'
              as='a'
              href='https://vinmaker.org'
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
              Join our community
            </Button>
          </Box>

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
              src="https://www.vinmaker.org/cover.png"
              alt="vinmaker"
            />
          </Center>
        </Flex>
      </Box>
    </Box>
  )
}

export default App;
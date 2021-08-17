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
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'

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
    <Box as="section" py="24" bg={mode('gray.50', 'gray.800')}>
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
        <Grid
          templateColumns={{
            base: '1fr',
            md: '360px 1fr',
          }}
          gap="64px"
        >
          <Box>
            <Heading size="3xl" letterSpacing="auto" fontWeight="extrabold">
              Join the VinUni Maker Society
            </Heading>
            <Text mt="6" mb="8" fontSize="lg" fontWeight="medium">
            VinMaker Society is the first engineering society at VinUniversity. We aim for the development of students’ skills in engineering, through various creative projects and industry events.
            </Text>
            <Button 
              as='a'
              href='https://vinmaker.vn'
              
              size="lg" 
              color="white"
              bg="#ae262b"
              _hover={{ bg: "#9d2227" }} 
              minH="14" 
              rightIcon={<BiRightArrowAlt />}
            >
              Join our community
            </Button>
            {/* <Testimonial
              author="Nguyen Hoang Trung Dung"
              company="Executive director"
              image="https://vinmakersoc.github.io/site/assets/pictures/Profile/Trung-Dung.jpg"
            >
              &ldquo; By maintaining an active community of like-minded ‘makers’ and providing resources, knowledge, and technology, the club seeks to foster an environment where anyone, regardless of their background, can be inspired to turn their ideas into designs, prototypes, and products. &rdquo;
            </Testimonial> */}
          </Box>
          <Box>
            <Center
              bg={mode('white', 'gray.700')}
              bgImage="https://res.cloudinary.com/dpec7wjtk/image/upload/v1622788495/VinMakerSpace%20Network/STEAM-VinMaker_y93fzq.jpg"
              bgSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
              shadow="lg"
              minH={{
                base: '320px',
                lg: '480px',
              }}
              rounded="lg"
            >
            
            {/*This little guy plays the Video. Find him in /components/testimonials/modal.jsx*/}
            

            </Center>
            <SimpleGrid
              rounded="lg"
              mt="10"
              p={{
                base: '10',
                lg: '0',
              }}
              columns={{
                base: 1,
                lg: 3,
              }}
              spacing="6"
              bg={{
                base: mode('gray.200', 'gray.700'),
                lg: 'unset',
              }}
            >
              <Feature title="Strong and active community">
              We organize and run weekly events, including Trivia, Movie, Boardgame Nights, LAN Parties, Workshops, Code Jams, and Weekly BBQ. Events are open to all members, and nearly all are free to attend.
              </Feature>
              <Feature title="Technical Workshops">
              We provide technical events to teach you new skills, as well as a fortnightly magazine to keep you updated on what's new and exciting within the university, school, and industry.
              </Feature>
              <Feature title="Fun and cool projects">
              More opportunities for students to have more hands-on experience as they can apply their theoretical knowledge through myriads of practical activities, projects, and competitions.
              </Feature>
            </SimpleGrid>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

export default App;
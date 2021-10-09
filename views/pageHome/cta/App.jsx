import { Box, Button, Heading, Stack, Text, useColorModeValue , Img} from '@chakra-ui/react'
import Link from 'next/link'
import * as React from 'react'

const App = () => {

  return (
    <Box as="section">
      <Box
        maxW="3xl"
        mx="auto"
        px={{
          base: '6',
          lg: '8',
        }}
        py={{
          base: '16',
          sm: '20',
        }}
        textAlign="center"
      >
        <Text fontWeight="semibold" color="#2A5FFF">
          Want More Access?
        </Text>
        <Heading
          fontFamily='Space mono'
          my="4"
          fontSize={{
            base: '4xl',
            md: '5xl',
          }}
        >
          Get your MakerSpace Safety Badge and begin {' '}
          <Box
            as="mark"
            bg="unset"
            color="#2A5FFF"
            whiteSpace="nowrap"
          >
            Making
          </Box>
        </Heading>
        <Img src='/makerspace_safety_badge.png' height='240px' mx='auto' my='12'/>
        <Text fontSize="lg" maxW="xl" mx="auto">
          Once you have gained your MS | MakerSpace Safety Badge you can book more training and gain access to more machines.
        </Text>
        <Stack
          direction={{
            base: 'column',
            sm: 'row',
          }}
          mt="10"
          justify="center"
          spacing={{
            base: '3',
            md: '5',
          }}
          maxW="md"
          mx="auto"
        >
          <Link href="#">
          <Button
            fontFamily='Space mono'
            fontWeight='normal'
            color="white"
            bg="#161616"
            borderRadius='25px 0 0 0'
            _hover={{ bg: "transparent", color:'#161616', border:'1px solid #161616' }}
            flex={{
              md: '1',
            }}
          >
            GO TO MY PROFILE
          </Button>
          </Link>
          <Button
            fontFamily='Space mono'
            fontWeight='normal'
            color="white"
            bg="#2A5FFF"
            borderRadius=' 0 25px 0 0'
            _hover={{ bg: "transparent", color:'#2A5FFF', border:'1px solid #2A5FFF' }}
            flex={{
              md: '1',
            }}
          >
            BOOK A TRAINING
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default App;
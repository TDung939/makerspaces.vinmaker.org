import { Box, Button, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
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
        <Text fontWeight="semibold" color="#ae262b">
          Want More Access?
        </Text>
        <Heading
          my="4"
          as="h2"
          fontSize={{
            base: '4xl',
            md: '6xl',
          }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="1.2"
        >
          Get your MakerSpace Safety Badge and begin {' '}
          <Box
            as="mark"
            bg="unset"
            color="#ae262b"
            whiteSpace="nowrap"
          >
            Making
          </Box>
        </Heading>
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
            as="a"
            href="#"
            size="lg"
            h="16"
            px="10"
            color="white"
            bg="#ae262b"
            _hover={{ bg: "#9d2227" }}
            fontWeight="bold"
            flex={{
              md: '1',
            }}
          >
            GO TO MY PROFILE
          </Button>
          </Link>
          <Button
            as="a"
            flex={{
              md: '1',
            }}
            variant="outline"
            href="#"
            size="lg"
            h="16"
            px="10"
            fontWeight="bold"
          >
            BOOK A TRAINING
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default App;
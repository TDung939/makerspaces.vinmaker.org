import { Box, Button, Flex, Heading, HStack, Img, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { HiChevronRight } from 'react-icons/hi'

const App = () => {
  return (
    <Box bg="gray.800" as="section" minH="140px" position="relative">
      <Box py="32" position="relative" zIndex={1}>
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
          color="white"
        >
          <Box maxW="xl">
            <Heading as="h1" size="3xl" fontWeight="extrabold">
              Machines
            </Heading>
            <Text
              fontSize={{
                md: '2xl',
              }}
              mt="4"
              maxW="lg"
            >
              Badges give you the flexibility to access multiple Makerspaces in our Network
            </Text>
            {/*<Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              mt="10"
              spacing="4"
            >
              <Button
                href="#"
                color="white"
                bg="#ae262b"
                _hover={{ bg: "#9d2227" }}
                px="8"
                size="lg"
                fontSize="md"
                fontWeight="bold"
              >
                EXPLORE
              </Button>
              <HStack
                as="a"
                transition="background 0.2s"
                justify={{
                  base: 'center',
                  md: 'flex-start',
                }}
                href="#"
                color="white"
                rounded="full"
                fontWeight="bold"
                px="6"
                py="3"
                _hover={{
                  bg: 'whiteAlpha.300',
                }}
              >
                <span>LOGIN MAKER PORTAL</span>
                <HiChevronRight />
              </HStack>
            </Stack>*/}
          </Box>
        </Box>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full">
          <Img
            src="https://res.cloudinary.com/dpec7wjtk/image/upload/v1622817994/VinMakerSpace%20Network/pexels-thisisengineering-3862632_1_1_xo4qim.png"
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
          <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
        </Box>
      </Flex>
    </Box>
  )
}

export default App;
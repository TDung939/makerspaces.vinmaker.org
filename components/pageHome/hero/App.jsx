import { Box, Button, Flex, Heading, HStack, Img, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { HiChevronRight } from 'react-icons/hi'
import Link from 'next/link'
import AuthContext from '../../../context/AuthContext'
import { useContext, useState } from 'react'

const App = () => {
  const {user} = useContext(AuthContext)
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
          <Box maxW="2xl">
            <Heading as="h1" size="3xl" fontWeight="extrabold">
              VinUniversity Makerspace Network
            </Heading>
            <Text
              fontSize={{
                md: '2xl',
              }}
              mt="4"
              maxW="lg"
              fontWeight='bold'
            >
              A project by 
            </Text>
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              mt="10"
              spacing="4"
            >
              <Link href="#">
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
              </Link>
              <Link href={user? "/user/dashboard": "/login"}>
                <HStack
                  cursor="default"
                  as="a"
                  transition="background 0.2s"
                  justify={{
                    base: 'center',
                    md: 'flex-start',
                  }}
                  color="white"
                  rounded="full"
                  fontWeight="bold"
                  px="6"
                  py="3"
                  _hover={{
                    bg: 'whiteAlpha.300',
                  }}
                >
                  <span>{user? "GO TO MAKER PORTAL": "LOGIN TO MAKER PORTAL"}</span>
                  <HiChevronRight />
                </HStack>
              </Link>
            </Stack>
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
            src="/hero.png"
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
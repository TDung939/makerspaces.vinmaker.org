import {
  Box,
  Button,
  Flex,
  HStack,
  useColorModeValue as mode,
  Heading,
  VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'
import Link from 'next/link'
import { MobileNav } from './MobileNav'
import { NavLink } from './NavLink'

const App = () => {
  return (
    <Box maxH="480px">
       {/*Create the Red line 
        <Box
            pos="relative"
            bg="#2d4d73"
            w="100%"
            h="50px"
            zIndex="-1"
        >
        </Box>
        Create the Blue line
        <Box
            pos="absolute"
            right="0"
            bg="#ae262b"
            w="20%"
            h="83px"
            top="0"
        >
        </Box>
        <Box
            pos="absolute"
            right="0"
            bg="#ae262b"
            w="45%"
            h="83px"
            top="0"
            transformOrigin="top left"
            transform="skew(17deg, 0deg)"
        >
        </Box>*/}
      <Box as="header" bg={mode('white', 'gray.800')} borderBottomWidth="1px">
        <Box
          maxW="7xl"
          mx="auto"
          py="4"
          px={{
            base: '6',
            md: '8',
          }}
        >
          <Flex as="nav" justify="space-between">
            <HStack spacing="8">
              <Box as="a" href="/" rel="home">
                <Heading>MakerSpaces</Heading>
                
              </Box>
              <HStack
                display={{
                  base: 'none',
                  lg: 'flex',
                }}
                spacing="8"
              >
                <Link href="/"><NavLink.Desktop>Home</NavLink.Desktop></Link>
                <Link href="/get-started"><NavLink.Desktop >Get Started</NavLink.Desktop></Link>
                <Link href="/badges"><NavLink.Desktop >Badges</NavLink.Desktop></Link>
                <Link href="/learn"><NavLink.Desktop >Learn</NavLink.Desktop></Link>
                <Link href="/our-network"><NavLink.Desktop >Our Network</NavLink.Desktop></Link>
              </HStack>
            </HStack>
            <Flex align="center">
              <HStack
                spacing="8"
                display={{
                  base: 'none',
                  md: 'flex',
                }}
              >
                <Button 
                 color="white"
                 bg="#ae262b"
                 _hover={{ bg: "#9d2227" }}
                 
                >
                  Login
                </Button>
              </HStack>
              <Box ml="5">
                <MobileNav />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default App;
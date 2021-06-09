import {
  Box,
  Button,
  Flex,
  HStack,
  useColorModeValue as mode,
  Heading,
  VisuallyHidden,
  Text,
  chakra,
} from '@chakra-ui/react'
import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MobileNav } from './MobileNav'
import { NavLink } from './NavLink'
import { Logo } from './Logo'
import { UserProfile } from './UserProfile'

import {useAuth} from '../../services/auth'
import firebase from "firebase/app";

const App = () => {
  const {user} =useAuth();
  let display;
  if (!user) {
    display = ( <>
                <Link href="/login">
                  <Button 
                  color="#ae262b"
                  bg="transparent"
                  
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button 
                  color="white"
                  bg="#ae262b"
                  _hover={{ bg: "#9d2227" }}
                  >
                    Sign Up
                  </Button>
                </Link>
                </>
                )
  } else {
    display = (  <>
                  <UserProfile 
                    name={user.displayName}
                    email={user.email}
                  />
                  <Button 
                  color="white"
                  bg="#ae262b"
                  _hover={{ bg: "#9d2227" }}
                  onClick={async () => {
                    await firebase.auth().signOut();
                    window.location.href = "/";
                  }}
                  >
                    Logout
                  </Button>
                </>
                )
  }
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
          <Flex as="nav"  justify="space-between">
            <HStack spacing="8">
              <Box as="a" href="/" rel="home" textAlign="left">
              <Image src="/assets/logo.svg" height={30} width={150}/>
                <Heading as="h3" fontSize="lg">MAKERSPACE NETWORK</Heading>
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
                {display}
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
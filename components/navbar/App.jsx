import {
  Box,
  Button,
  Flex,
  HStack,
  useColorModeValue as mode,
  Heading,
  Menu, 
  MenuButton,
  MenuList,
  MenuItem,
  Image
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { MobileNav } from './MobileNav'
import { NavLink } from './NavLink'
import { Logo } from './Logo'
import { UserProfile } from './UserProfile'
import AuthContext from '../../context/AuthContext'
import { useContext } from 'react'
const App = () => {
  const {user, logout} = useContext(AuthContext)
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
                {/* 
                <Link href="/signup">
                  <Button 
                  color="white"
                  bg="#ae262b"
                  _hover={{ bg: "#9d2227" }}
                  >
                    Sign Up
                  </Button>
                </Link> 
                */}
                </>
                )
  } else {
    display = (  <>
                  <Link href="/user/dashboard">
                  <Box cursor="default">
                    <UserProfile 
                      name={user.username}
                      email={user.email}
                    />
                  </Box>
                  </Link>
                  
                  <Button 
                  color="white"
                  bg="#ae262b"
                  _hover={{ bg: "#9d2227" }}
                  onClick={() => logout()}
                  >
                    Logout
                  </Button>
                </>
                )
  }
  return (
    <Box maxH="480px" pos="sticky" top="0" zIndex="2">
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
                spacing="5"
              >
                <Link href="/"><NavLink.Desktop>Home</NavLink.Desktop></Link>
                <Link href="/get-started"><NavLink.Desktop >Get Started</NavLink.Desktop></Link>
                <Menu>
                  <MenuButton as={Button} mx="0" pl="2" pr="0" bg="transparent" rightIcon={<ChevronDownIcon />}>
                    Our Network
                  </MenuButton>
                  <MenuList >
                    <Link href='/badges'><MenuItem>Badges</MenuItem></Link>
                    <Link href='/machines'><MenuItem>Machines</MenuItem></Link>
                    <MenuItem isDisabled>Makerspaces</MenuItem>
                  </MenuList>
                </Menu>
                {/*<Link href="/learn"><NavLink.Desktop >Learn</NavLink.Desktop></Link>*/}
              
                <Menu>
                  <MenuButton as={Button} mx="0" pl="2" pr="0" bg="transparent" rightIcon={<ChevronDownIcon />}>
                    Services
                  </MenuButton>
                  <MenuList >
                    <MenuItem isDisabled>3D printing</MenuItem>
                    <MenuItem isDisabled>Borrow Equipments</MenuItem>
                  </MenuList>
                </Menu>

                <Menu>
                  <MenuButton as={Button} mx="0" pl="2" pr="0"  bg="transparent" rightIcon={<ChevronDownIcon />}>
                    About
                  </MenuButton>
                  <MenuList >
                    <MenuItem isDisabled>Safety</MenuItem>
                    <MenuItem isDisabled>About us</MenuItem>
                    <MenuItem isDisabled>Become an Instructor</MenuItem>
                  </MenuList>
                </Menu>

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
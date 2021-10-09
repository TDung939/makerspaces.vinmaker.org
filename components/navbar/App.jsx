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

import { UserProfile } from './UserProfile'
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'
const App = () => {
  const {user, logout} = useContext(AuthContext)
  let display;
  if (!user) {
    display = ( <>
                <Link href="/login">
                  <Button 
                   color="white"
                   borderRadius='25px 0 0 0'
                   bg="#161616"
                   fontWeight='normal'
                   _hover={{ bg: "transparent", color:'#161616', border:'1px solid #161616' }}
                  >
                    Sign in
                  </Button>
                </Link>
                
                <Link href="/signup">
                  <Button
                  fontWeight='normal'
                  borderRadius='0 25px 0 0'
                  color="white"
                  bg="#2A5FFF"
                  _hover={{ bg: "transparent", color:'#2A5FFF', border:'1px solid #2A5FFF' }}
                  >
                    Create an account
                  </Button>
                </Link> 
               
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
                  borderRadius='0 25px 0 0'
                  bg="#161616"
                  fontWeight='normal'
                  _hover={{ bg: "transparent", color:'#161616', border:'1px solid #161616' }}
                  onClick={() => logout()}
                  >
                    Log out
                  </Button>
                </>
                )
  }
  return (
    <Box maxH="480px" pos="sticky" top="0" zIndex="3" style={{background:'hsla(0,0%,100%,0.8)', backdropFilter:'blur(8px)', border: '1px solid rgba(0,0,0,0.1)'}}>
      <Box as="header" fontFamily='Space mono' fontWeight='normal'>
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
                <Link href='/'>
                  <Flex cursor='pointer' rel="home" textAlign="left" alignItems='center'>
                  <Image src="/helmet.png" height="32px" mr='3'
                  style={{
                    userDrag: 'none',
                    webkitUserDrag: 'none'
                  }}
                  />
                    <Heading as="h3" fontSize="sm" ><Box
                    as="mark"
                    bg="unset"
                    color="#2A5FFF"
                    whiteSpace="nowrap"
                  >
                    VINUNIVERSITY
                  </Box><br/> MAKERSPACE NETWORK</Heading>
                </Flex>
              </Link>
              <HStack
                display={{
                  base: 'none',
                  lg: 'flex',
                }}
                spacing="5"
              >
                {/* <Link href="/get-started"><NavLink.Desktop >Get Started</NavLink.Desktop></Link> */}
                <Menu>
                  <MenuButton fontWeight='normal' as={Button} mx="0" pl="2" pr="0" bg="transparent" rightIcon={<ChevronDownIcon />}>
                    Our Network
                  </MenuButton>
                  <MenuList border='0' >
                    <Link href='/machines'><MenuItem>Machines</MenuItem></Link>
                    <Link href='/badges'><MenuItem>Badges</MenuItem></Link>
                    <MenuItem isDisabled>Makerspaces</MenuItem>
                  </MenuList>
                </Menu>
                {/*<Link href="/learn"><NavLink.Desktop >Learn</NavLink.Desktop></Link>*/}
              
                <Menu >
                  <MenuButton fontWeight='normal' as={Button} mx="0" pl="2" pr="0" bg="transparent" rightIcon={<ChevronDownIcon />}>
                    Services
                  </MenuButton>
                  <MenuList  border='0'>
                    <MenuItem isDisabled>3D printing</MenuItem>
                    <MenuItem isDisabled>Borrow Equipments</MenuItem>
                  </MenuList>
                </Menu>

                <Menu>
                  <MenuButton fontWeight='normal' as={Button} mx="0" pl="2" pr="0"  bg="transparent" rightIcon={<ChevronDownIcon />}>
                    About
                  </MenuButton>
                  <MenuList  border='0'>
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
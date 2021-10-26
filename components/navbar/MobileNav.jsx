import {
  Box,
  Button,
  Center,
  Flex,
  Portal,
  SimpleGrid,
  useBoolean,
  useFocusOnShow,
  VStack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import * as React from 'react'
import FocusLock from 'react-focus-lock'
import {
  HiBadgeCheck,
  HiCube,
  HiHeart,
  HiOutlineMenu,
  HiOutlineX,
  HiLibrary,
  HiSupport,
} from 'react-icons/hi'
import { RemoveScroll } from 'react-remove-scroll'
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'
import { NavLink } from './NavLink'
import Link from 'next/link'

const variants = {
  show: {
    display: 'revert',
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  hide: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: 'easeIn',
    },
    transitionEnd: {
      display: 'none',
    },
  },
}

const Backdrop = ({ show }) => (
  <Portal>
    <motion.div
      initial={false}
      animate={show ? 'show' : 'hide'}
      transition={{
        duration: 0.1,
      }}
      variants={{
        show: {
          opacity: 1,
          display: 'revert',
        },
        hide: {
          opacity: 0,
          transitionEnd: {
            display: 'none',
          },
        },
      }}
      style={{
        width: '100%',
        height: '100vh',
        position: 'absolute',
        background: 'rgba(0,0,0,0.2)',
        inset: 0,
      }}
    />
  </Portal>
)

const Transition = (props) => {
  const { in: inProp, ...rest } = props
  return (
    <motion.div
      {...rest}
      initial={false}
      variants={variants}
      animate={inProp ? 'show' : 'hide'}
      style={{
        transformOrigin: 'top right',
        position: 'absolute',
        width: 'calc(100% - 32px)',
        top: '24px',
        left: '16px',
        margin: '0 auto',
        zIndex: 2,
      }}
    />
  )
}

export const MobileNav = () => {
  const [show, { toggle, off }] = useBoolean()
  const ref = React.useRef(null)
  useFocusOnShow(ref, {
    visible: show,
    shouldFocus: true,
  })
  const {user} = useContext(AuthContext)
  return (
    <>
      <Box
        as="button"
        type="button"
        p="1"
        fontSize="2xl"
        color="gray.600"
        onClick={toggle}
        display={{
          base: 'block',
          lg: 'none',
        }}
      >
        <HiOutlineMenu />
      </Box>

      <Transition in={show}>
        <RemoveScroll enabled={show}>
          <Backdrop show={show} />
        </RemoveScroll>
        <FocusLock disabled={!show} returnFocus>
          <Box
            bg={mode('white', 'gray.700')}
            shadow="lg"
            rounded="lg"
            ref={ref}
            tabIndex={0}
            outline={0}
          >
            <Box pt="5" pb="6" px="5">
              <Flex justify="space-between" align="center">
                <Box mr="-2" mt="-2">
                  <Center
                    as="button"
                    type="button"
                    onClick={off}
                    rounded="base"
                    p="1"
                    color={mode('gray.600', 'gray.400')}
                    _hover={{
                      bg: mode('gray.100', 'gray.600'),
                    }}
                  >
                    <Box srOnly>Close menu</Box>
                    <HiOutlineX aria-hidden fontSize="1.5rem" />
                  </Center>
                </Box>
              </Flex>
              <SimpleGrid
                as="nav"
                gap="6"
                mt="8"
                columns={{
                  base: 1,
                  sm: 2,
                }}
              >
                <NavLink.Mobile href='/machines' icon={HiCube}>Machines</NavLink.Mobile>
                <NavLink.Mobile href='/makerspaces' icon={HiLibrary}>Makerspaces</NavLink.Mobile>
                <NavLink.Mobile href='/modules' icon={HiBadgeCheck}>Modules</NavLink.Mobile>
                <NavLink.Mobile icon={HiHeart}>Safety</NavLink.Mobile>
                <NavLink.Mobile icon={HiSupport}>Help</NavLink.Mobile>
              </SimpleGrid>
              <VStack mt="8" spacing="4">
                <Link href={user? '/user/dashboard':'/signin'}>
                <Button
                  w="full" 
                  color="white"
                  bg="#2A5FFF"
                  borderRadius='0 25px 0 0'
                  _hover={{ bg: "transparent", color:'#2A5FFF', border:'1px solid #2A5FFF' }}
                >
                 {user? 'Go to Dashboard' : 'Sign in'}
                </Button>
                </Link>
                <Button 
                  w="full" 
                  color="white"
                  bg="#161616"
                  borderRadius='25px 0 0 0'
                  _hover={{ bg: "transparent", color:'#161616', border:'1px solid #161616' }}
                >
                 {user? 'Log out' : 'Sign up'}
                </Button>
              </VStack>
            </Box>
          </Box>
        </FocusLock>
      </Transition>
    </>
  )
}

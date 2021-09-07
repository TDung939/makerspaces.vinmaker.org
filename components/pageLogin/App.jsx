import {
  Box,
  Heading,
  useColorModeValue,
  Text,
  chakra
} from '@chakra-ui/react'
import Link from 'next/link'
import * as React from 'react'
import { Card } from './Card'

import { LoginForm } from './LoginForm'


const App = () => (
  <Box
    minH="100vh"
    py="12"
    px={{
      base: '4',
      lg: '8',
    }}
  >
    <Box maxW="lg" mx="auto">
      <Heading textAlign="center" fontFamily='Space mono' mt="4" mb="8">
        Sign in with your VinUniversity account
      </Heading>
      <Card>
        <LoginForm />
        <Text mt={8} textAlign="center" fontSize="md">Don't have an account? <Link href="/signup"><chakra.a cursor="pointer" _hover={{color: "#2A5FFF"}}>Sign up</chakra.a></Link></Text> 
      </Card>
    </Box>
  </Box>
)

export default App;
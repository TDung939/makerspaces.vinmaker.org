import {
  Box,
  Heading,
  useColorModeValue,
  chakra,
  Text
} from '@chakra-ui/react'
import * as React from 'react'
import { Card } from './Card'
import Link from 'next/link'

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
    <Box maxW="md" mx="auto">
      <Heading textAlign="center" size="xl" fontWeight="extrabold" mt="4" mb="8">
        Sign up with your VinUniversity account
      </Heading>
      <Card>
        <LoginForm />
        <Text mt={8} textAlign="center" fontSize="md">Already have an account? <Link href="/login"><chakra.a cursor="pointer" _hover={{color: "#ae262b"}}>Login</chakra.a></Link></Text> 
      </Card>
    </Box>
  </Box>
)

export default App;
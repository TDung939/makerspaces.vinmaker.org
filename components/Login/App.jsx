import {
  Box,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
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
    <Box maxW="md" mx="auto">
      <Heading textAlign="center" size="xl" fontWeight="extrabold" mt="4" mb="8">
        Sign in to your VinUniversity account
      </Heading>
      <Card>
        <LoginForm />
      </Card>
    </Box>
  </Box>
)

export default App;
import { Box, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const Card = (props) => (
  <Box
    maxW="xl"
    mx="auto"
    bg={useColorModeValue('white', 'gray.700')}
    rounded={{
      md: 'xl',
    }}
    padding="5"
    shadow={{
      md: 'base',
      base: 'base',
    }}
    px={{
      base: '6',
      md: '8',
    }}
    {...props}
  />
)

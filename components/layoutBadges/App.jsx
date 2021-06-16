import {
  Box,
  Button,
  Heading,
  Img,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { BsFillGridFill, BsPlusCircleFill, BsShieldLockFill, BsArrowRight } from 'react-icons/bs'
import { Feature } from './Feature'

const App = (props) => {
  return (
    <Box
      as="section"
      py={{
        md: '12',
      }}
    >
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '12',
          lg: '20',
        }}
        py={{
          base: '12',
          md: '0',
        }}
      >
        {props.children}
      </Box>
    </Box>
  )
}
export default App
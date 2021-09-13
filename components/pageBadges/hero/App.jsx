import { Box, Button, Flex, Heading, HStack, Img, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { HiChevronRight } from 'react-icons/hi'

const App = () => {
  return (
    <Box as="section" minH="140px" position="relative"
    bg='linear-gradient(0deg, #2A5FFF90, #2A5FFF90),url(/badges_background.jpg)'
    bgRepeat='no-repeat'
    bgSize='cover'
    backgroundPosition='center'
    zIndex={1}
    mt={{base:'0', lg: '8'}}
    maxW='7xl'
    mx='auto'
    borderRadius={{base:'0', lg:'3xl'}}>
      <Box py="32" position="relative" zIndex={1}>
        <Box
          maxW={{
            base: 'xl',
            md: '7xl',
          }}
          mx="auto"
          px={{
            base: '6',
            md: '8',
          }}
          color="white"
        >
          <Box maxW="xl">
            <Heading as="h1" size="3xl" fontFamily='Space mono'>
              Training Badges
            </Heading>
            <Text
              fontSize={{
                md: '2xl',
              }}
              mt="4"
              maxW="lg"
            >
              Badges give you the flexibility to access multiple Makerspaces in our Network
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default App;
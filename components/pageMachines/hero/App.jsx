import { Box, Button, Flex, Heading, HStack, Img, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { HiChevronRight } from 'react-icons/hi'

const App = () => {
  return (
    <Box as="section" minH="140px" position="relative"
    bg='linear-gradient(30deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),url(/machines_background.jpg)'
    bgRepeat='no-repeat'
    bgSize='cover'
    backgroundAttachment='fixed'
    backgroundPosition='center'
    zIndex={1}
    >
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
            <Heading as="h1" size="3xl" fontWeight="extrabold">
              Machines
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
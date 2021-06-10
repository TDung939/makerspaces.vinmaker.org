import { Box, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { BiBarChartSquare, BiBook, BiBriefcaseAlt, BiDollarCircle, BiDoorOpen, BiWorld, BiWrench } from 'react-icons/bi'
import { StatCard } from './StatCard'

const App = () => (
  <Box
    as="section"
    position="relative"
    maxW="7xl"
    mb="100"
    mx="auto"
    px={{
      base: '4',
      sm: '6',
    }}
    py={{
      base: '8',
      lg: '16',
    }}
  >
    <Box
      maxW={{
        base: '2xl',
        lg: 'unset',
      }}
      mx="auto"
      pl={{
        lg: '10',
      }}
    >
      <Box textAlign="center" maxW="2xl" mx="auto">
        <Heading
          mt="6"
          fontSize={{
            base: '3xl',
            sm: '5xl',
          }}
          fontWeight="extrabold"
        >
          Boasts a diverse range of skills and equipment
        </Heading>
        <Text
          color={useColorModeValue('gray.600', 'whiteAlpha.700')}
          fontWeight="medium"
          mt="4"
          fontSize="lg"
        >
          Each space in the VinUni Makerspace Network is unique. Some spaces are targeted towards teaching and research activities, and others support entrepreneurship throughout the VinUni community and beyond.
        </Text>
      </Box>
      <SimpleGrid
        mt="12"
        columns={{
          base: 1,
          md: 3,
        }}
        spacing="6"
      >
        <StatCard
          title="Makerspaces"
          value="5+"
          icon={<BiDoorOpen />}
        />
        <StatCard
          title="Available machines"
          value="20+"
          icon={<BiWrench />}
        />
        <StatCard
          title="Learning Modules"
          value="25+"
          icon={<BiBook />}
        />
      </SimpleGrid>
    </Box>
  </Box>
)

export default App;
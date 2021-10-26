import { Box, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { BiBarChartSquare, BiBook, BiBriefcaseAlt, BiDollarCircle, BiDoorOpen, BiWorld, BiWrench } from 'react-icons/bi'
import { StatCard } from './StatCard'

const App = ({ modules_num, machines_num, makerspaces_num}) => (
  <Box
    as="section"
    position="relative"
    maxW="7xl"
    mb="100"
    mx="auto"
    px={{
      base: '4',
      sm: '0',
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
     
    >
      <Box textAlign="center" maxW="2xl" mx="auto">
        <Heading
          fontFamily='Space mono'
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
        mt="24"
        columns={{
          base: 1,
          md: 3,
        }}
        spacing="6"
      >
        <StatCard
          title="Makerspaces"
          value={`${makerspaces_num}+`}
          icon={<BiDoorOpen />}
        />
        <StatCard
          title="Available machines"
          value={`${machines_num}+`}
          icon={<BiWrench />}
        />
        <StatCard
          title="Learning Modules"
          value={`${modules_num}+`}
          icon={<BiBook />}
        />
      </SimpleGrid>
    </Box>
  </Box>
)

export default App;
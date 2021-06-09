import { Box, Heading, SimpleGrid, Text, useColorModeValue} from '@chakra-ui/react'
import * as React from 'react'

import { StatCard } from './StatCard'

const App = () => (
  <Box
    as="section"
    position="relative"
    maxW="7xl"
    mb="100"
    mx="auto"
    mt="-180px"
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
      {/*<Box textAlign="center" maxW="2xl" mx="auto">
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
        </Box>*/}
      <SimpleGrid
        mt="12"
        columns={{
          base: 1,
          md: 4,
        }}
        spacing="6"
      >
        <StatCard
          title="Use your Student Account to log in to this website. Create your profile by adding a photo."
          value="STEP 1: LOGIN TO MAKER PORTAL"
         
        />
        <StatCard
          title="Complete your Makerspace Safety Induction Badge. Once you log in you will be prompted to complete the correct Badge training for your Faculty."
          value="STEP 2: COMPLETE TRAINING"
         
        />
        <StatCard
          title="Once you have successfully completed the online and in person Badge training you will receive your very first Makerspace Badge!"
          value="STEP 3: RECEIVE YOUR BADGE"
          
        />
        <StatCard
          title="Your Badge will allow access to some Makerspaces and machines. Earn more badges to access more machines and spaces."
          value="STEP 4: USE YOUR MAKERSPACE "
          
        />
      </SimpleGrid>
    </Box>
  </Box>
)

export default App;
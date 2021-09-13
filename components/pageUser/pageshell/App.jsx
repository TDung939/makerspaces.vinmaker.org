import { Button, Wrap, Box, Circle, Flex, Stack, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import {
  BiBuoy,
  BiCog,
  BiCreditCard,
  BiEnvelope,
  BiHome,
  BiNews,
  BiUserCircle,
  BiBadgeCheck,
  BiImage,
  BiSkipPrevious,
  BiPhoneOutgoing,
  BiCurrentLocation,
  BiAlarmSnooze,
  BiRocket,
  BiTime,
} from 'react-icons/bi'
import { BsClock, BsClockHistory, BsFillClockFill } from 'react-icons/bs'
import { AccountSwitcher } from './AccountSwitcher'
import { NavGroup } from './NavGroup'
import { NavItem } from './NavItem'

const App = (props) => {

  function handleChange(view) {
    // Here, we invoke the callback with the new value
    props.onChange(view);
  }
  
  return (
    <Wrap position="relative" mt='12' borderRadius='3xl'>
      <Flex h="full" id="app-container">
        <Box w="64" borderRadius='3xl' border='2px solid #2A5FFF' bg="transparent" color="#161616" fontSize="sm">
          <Flex h="full" direction="column" px="4" py="4">
            <Stack spacing="8" flex="1" overflow="auto" >

              <NavGroup label="Badges">
                <NavItem icon={<BiBadgeCheck />} label="Completed Badges" pageView="completed-badges" onChange={handleChange}/>
              </NavGroup>

              <NavGroup label="Hands-on Sessions">
                <NavItem icon={<BiRocket />} label="On-Going" pageView="" onChange={handleChange}/>
                <NavItem icon={<BiTime />} label="Past Sessions" pageView="" onChange={handleChange}/>
              </NavGroup>

              <NavGroup label="Projects">
                <NavItem icon={<BiImage />} label="Projects Gallery" pageView="" onChange={handleChange}/>
              </NavGroup>

              <NavGroup label="Others">
                <NavItem icon={<BiCog />} label="Settings" pageView="settings" onChange={handleChange}/>
                <NavItem
                  pageView="support" onChange={handleChange}
                  icon={<BiBuoy />}
                  label="Help & Support"
                  // endElement={<Circle size="2" bg="#2A5FFF" />}
                />
               
                </NavGroup>
            </Stack>
          </Flex>
        </Box>

      </Flex>
    </Wrap>
  )
}
export default App

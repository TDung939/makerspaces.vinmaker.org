import { Button, Box, Circle, Flex, Stack, useColorModeValue as mode } from '@chakra-ui/react'
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
} from 'react-icons/bi'
import { AccountSwitcher } from './AccountSwitcher'
import { NavGroup } from './NavGroup'
import { NavItem } from './NavItem'

const App = (props) => {

  function handleChange(view) {
    // Here, we invoke the callback with the new value
    props.onChange(view);
  }
  
  return (
    <Box minHeight="100vh" height="auto" overflow="hidden" position="relative">
      <Flex h="full" id="app-container">
        <Box w="64" bg="#2b2b2b" color="white" fontSize="sm">
          <Flex h="full" direction="column" px="4" py="4">
            {/*<AccountSwitcher />*/}
            <Stack spacing="8" flex="1" overflow="auto" pt="8">
              <Stack spacing="1">
                <NavItem icon={<BiHome />} label="Get Started" pageView="" onChange={handleChange}/>
                {/*<NavItem icon={<BiCommentAdd />} label="Inbox" pageView="" onChange={handleChange}/>*/}
              </Stack>

              <NavGroup label="Badges">
                <NavItem icon={<BiBadgeCheck />} label="Completed Badges" pageView="completed-badges" onChange={handleChange}/>
                <NavItem icon={<BiEnvelope />} label="Past Courses" pageView="" onChange={handleChange}/>
                {/*<NavItem icon={<BiPurchaseTagAlt />} label="Plans" />
                <NavItem icon={<BiRecycle />} label="Subsription" />*/}
              </NavGroup>

              <NavGroup label="Hands-on Sessions">
                <NavItem icon={<BiCreditCard />} label="Session Booked" pageView="" onChange={handleChange}/>
                <NavItem icon={<BiUserCircle />} label="Past Sessions" pageView="" onChange={handleChange}/>
              </NavGroup>

              <NavGroup label="Projects">
                <NavItem icon={<BiNews />} label="Projects Gallery" pageView="" onChange={handleChange}/>
                {/*<NavItem icon={<BiEnvelope />} label="Invoices" />
                <NavItem icon={<BiPurchaseTagAlt />} label="Plans" />
                <NavItem icon={<BiRecycle />} label="Subsription" />*/}
                </NavGroup>
            </Stack>
            <Box>
              <Stack spacing="1">
                <NavItem subtle icon={<BiCog />} label="Settings" pageView="settings" onChange={handleChange}/>
                <NavItem
                  pageView="support" onChange={handleChange}
                  subtle
                  icon={<BiBuoy />}
                  label="Help & Support"
                  endElement={<Circle size="2" bg="blue.400" />}
                />
              </Stack>
            </Box>
          </Flex>
        </Box>
        {/*
        <Box bg={mode('white', 'gray.800')} flex="1" p="6">
          <Box
            w="full"
            h="full"
            rounded="lg"
            border="3px dashed currentColor"
            color={mode('gray.200', 'gray.700')}
          />
        </Box>
        */}
      </Flex>
    </Box>
  )
}
export default App

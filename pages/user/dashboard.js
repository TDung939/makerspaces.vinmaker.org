import { ChakraProvider, Flex} from "@chakra-ui/react"
import NavBar from '../../components/navbar/App'
import PageShell from '../../components/pageUser/pageshell/App'
import UserInfo from '../../components/pageUser/App'
import Footer from '../../components/footer/App'

import { Box, Circle, Stack, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import {
  BiBuoy,
  BiCog,
  BiCommentAdd,
  BiCreditCard,
  BiEnvelope,
  BiHome,
  BiNews,
  BiPurchaseTagAlt,
  BiRecycle,
  BiRedo,
  BiUserCircle,
  BiWallet,
} from 'react-icons/bi'
import { AccountSwitcher } from '../../components/pageUser/pageshell/AccountSwitcher'
import { NavGroup } from '../../components/pageUser/pageshell/NavGroup'
import { NavItem } from '../../components/pageUser/pageshell/NavItem'
export default function Home() {
  return (
    <ChakraProvider>
      <NavBar />
      {/*<Flex>
        <Box minHeight="100vh" height="auto" overflow="hidden" position="relative">
        <Flex h="full" id="app-container">
            <Box w="64" bg="#2b2b2b" color="white" fontSize="sm">
            <Flex h="full" direction="column" px="4" py="4">
                <AccountSwitcher />
                <Stack spacing="8" flex="1" overflow="auto" pt="8">
                <Stack spacing="1">
                    <NavItem active={true} icon={<BiHome />} label="Get Started" />
                    <NavItem icon={<BiCommentAdd />} label="Inbox" />
                </Stack>
                <NavGroup label="Your Business">
                    <NavItem icon={<BiCreditCard />} label="Transactions" />
                    <NavItem icon={<BiUserCircle />} label="Customers" />
                    <NavItem icon={<BiWallet />} label="Income" />
                    <NavItem icon={<BiRedo />} label="Transfer" />
                </NavGroup>

                <NavGroup label="Seller Tools">
                    <NavItem icon={<BiNews />} label="Payment Pages" />
                    <NavItem icon={<BiEnvelope />} label="Invoices" />
                    <NavItem icon={<BiPurchaseTagAlt />} label="Plans" />
                    <NavItem icon={<BiRecycle />} label="Subsription" />
                </NavGroup>
                </Stack>
                <Box>
                <Stack spacing="1">
                    <NavItem subtle icon={<BiCog />} label="Settings" />
                    <NavItem
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
            
        </Flex>
        </Box>
        
        <UserInfo />
      </Flex>*/}
      <UserInfo />
      <Footer />
    </ChakraProvider>
  )
}

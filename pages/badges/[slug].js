import { Avatar, Center, ChakraProvider} from "@chakra-ui/react"
import NavBar from '../../components/navbar/App'
import Hero from '../../components/pageBadges/hero/App'
import Badges from '../../components/pageBadges/user-cards/App'
import Footer from '../../components/footer/App'
import {fetchAPI} from '../../lib/api'
import Layout from '../../components/layoutBadges/App'

import {
  Box,
  Button,
  Heading,
  Img,
  SimpleGrid,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  List, ListItem, ListIcon, OrderedList, UnorderedList,
} from '@chakra-ui/react'
import * as React from 'react'
import { BsFillGridFill, BsPlusCircleFill, BsShieldLockFill, BsArrowRight } from 
'react-icons/bs'
import {ChevronRightIcon} from '@chakra-ui/icons'
import { Feature } from '../../components/layoutBadges/Feature'
import AuthContext from '../../context/AuthContext'
import { useContext } from 'react'
import Link from "next/link"
import VerticalSteps from '../../components/verticalSteps/App'
import Table from '../../components/tableBadge/App'
export default function Home({badge}) {
  const {user} = useContext(AuthContext)
  return (
    <ChakraProvider>
      <NavBar />
    
      <Layout>
        <Breadcrumb mb="10" spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/badges">Badges</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{badge.title} Badge</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        {/*First section*/}
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          spacing="10"
        >
          <Center>
            <Avatar mx='auto' name={badge.title} size='2xl'/>
          </Center>
          
          
          <Box>
            <Heading size="xl" mb="4" fontWeight="extrabold">
              {badge.title}
            </Heading>
            <Text
              fontSize={{
                md: 'lg',
              }}
              mb="6"
              maxW="md"
            >
              {badge.descriptions}
            </Text>
            <Link as={user? `/badges/module/${badge.slug}` : null } href={user? "/badges/module/[id]" : "/login"}
            >
              <Button
                size="lg"
                colorScheme="blue"
                rightIcon={<BsArrowRight />}
                fontWeight="bold"
                fontSize="md"
                w={{
                  base: 'full',
                  sm: 'auto',
                }}
                isDisabled={badge.module? false : true}
              >
                Get started
              </Button>
            </Link>
          </Box>
        </SimpleGrid>
        {/*Yellow banner*/}
        <Box w="100%" bg="yellow" py="5" my="25" >
          <Text ml="50" fontSize="md" fontWeight="bold">Get started on this badge by following the guidelines below</Text>
        </Box>
        {/*Second section*/}
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          spacing="10"
        >
        <Box w="100%" py="5" my="25">
          <Heading size="xl" fontWeight="extrabold"  mb="4">Learning Checklist</Heading>
          <VerticalSteps />
        </Box>
        <Box w="100%" py="5" my="25">
          <Heading size="xl" fontWeight="extrabold"  mb="4">Machine Access</Heading>
          <Text
              fontSize={{
                md: 'lg',
              }}
              mb="6"
              maxW="lg"
            >
             Once you have learnt this badge you will be granted access to the following machines:
            </Text>
            <UnorderedList>
              {(badge.machines).map((machine, i) => { 
                return (
                  <Link as={`/machines/${machine.slug}`} href="/machines/[id]">
                    <ListItem cursor="pointer" _hover={{color: "#AE262B"}}>{machine.name}</ListItem>
                  </Link>
                );
              })}
            </UnorderedList>
        </Box>
        </SimpleGrid>
        <Heading size="xl" fontWeight="extrabold"  mb="4">Hands-on Session</Heading>
        <Table props = {badge}/>

      </Layout>
      <Footer />
    </ChakraProvider>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const badges = await fetchAPI(
    `/badges?slug=${slug}`
  );
  return { props: { badge: badges[0]} };
}
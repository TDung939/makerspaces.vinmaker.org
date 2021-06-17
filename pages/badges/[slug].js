import { ChakraProvider} from "@chakra-ui/react"
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

import Link from "next/link"

export default function Home({badge}) {
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

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          spacing="10"
        >
          <Img
            htmlWidth="500px"
            htmlHeight="320px"
            height={{
              md: '320px',
            }}
            objectFit="cover"
            src="https://images.unsplash.com/photo-1534949752991-a065b0f5dfaa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYxfHxkZXZpY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="state of the art speaker"
          />
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
            <Link as={`/badges/module/${badge.slug}`} href="/badges/module/[id]"
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
        
        <Box w="100%" bg="yellow" py="5" my="25" >
          <Text ml="50" fontSize="md" fontWeight="bold">Get started on this badge by starting the online learning below</Text>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
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
      </Layout>
      <Footer />
    </ChakraProvider>
  )
}

export async function getStaticPaths() {
  const badges = await fetchAPI("/badges");
  return {
    paths: badges.map((badge) => ({
      params: {
        slug: badge.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const badges = await fetchAPI(
    `/badges?slug=${params.slug}`
  );

  return {
    props: { badge: badges[0]},
    revalidate: 1,
  };
}
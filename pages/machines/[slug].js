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
  List, ListItem, Stack, Avatar, HStack, UnorderedList, Icon,
} from '@chakra-ui/react'
import { HiShieldCheck } from 'react-icons/hi'
import * as React from 'react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import Link from "next/link"
import Table from '../../components/tableMachine/App'


export default function Home({machine}) {
  return (
    <ChakraProvider>
      <NavBar />
    
      <Layout>
        <Breadcrumb mb="10" spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/machines">Machines</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{machine.name}</BreadcrumbLink>
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
              {machine.name}
            </Heading>
            <Text
              fontSize={{
                md: 'lg',
              }}
              mb="6"
              maxW="md"
            >
              {machine.descriptions}
            </Text>
          </Box>
        </SimpleGrid>
        
        <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        spacing="20"
        >
          <Box w="100%" py="5" my="25">
            <Heading size="xl" fontWeight="extrabold"  mb="4">Required Badges</Heading>
  
              {(machine.badges).map((badge, i) => {
                return (
                  <Link as={`/badges/${badge.slug}`} href="/badges/[id]">
                  <Box
                  maxW="2xl"
                  mx="auto"
                  padding="5"
                  shadow={{
                    md: 'base',
                    base: 'base',
                  }}
                  px={{
                    base: '6',
                    md: '8',
                  }}
                  my="25"
                  cursor="pointer"
                  >
                    <Stack
                      direction={{
                        base: 'column',
                        md: 'row',
                      }}
                      spacing={{
                        base: '3',
                        md: '10',
                      }}
                      align="flex-start"
                    >
                      <Stack spacing="4">
                        <Avatar
                          size="lg"
                          src=""
                          name={badge.title}
                        />
                      </Stack>
                      <Box>
                        <Stack
                          spacing={{
                            base: '1',
                            md: '2',
                          }}
                          direction={{
                            base: 'column',
                            md: 'row',
                          }}
                        >
                          <Text as="h2" fontWeight="bold" fontSize="lg">
                            {badge.title}
                          </Text>
                          <HStack
                            fontSize={{
                              base: 'md',
                              md: 'lg',
                            }}
                          >
                            <Icon as={HiShieldCheck} color="green.500" />
                          </HStack>
                        </Stack>
                        <Text mt="2">{badge.level.name}</Text>
                        <Box fontSize="sm" noOfLines={2}>
                            {badge.descriptions}
                        </Box>
                      </Box>
                    </Stack>
                    <Text mt="5" textAlign="right" fontSize="sm">Read more</Text>
                  </Box>
                  </Link>
                );
              })}

          </Box>

          <Box w="100%" py="5" my="25">
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
            }}
            spacing="10"
            >
            <Box>
              <Heading size="md" fontWeight="extrabold"  mb="4">Suitable Materials</Heading>
              <UnorderedList>
                {(machine.suitable_materials).map((material, i) => {
                  return (
                      <ListItem>{material.name}</ListItem>
                  );
                })}
              </UnorderedList>
            </Box>
            <Box>
              <Heading size="md" fontWeight="extrabold"  mb="4">Process</Heading>
              <UnorderedList>
                {(machine.processes).map((process, i) => {
                  return (
                      <ListItem>{process.name}</ListItem>
                  );
                })}
              </UnorderedList>
            </Box>
            </SimpleGrid>
          </Box>
          
        </SimpleGrid>
        {/*
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
                    <ListItem>{machine.name}</ListItem>
                );
              })}
            </UnorderedList>
        </Box>
            */}
        <Heading size="xl" fontWeight="extrabold"  mb="4">Machine Location</Heading>
        <Table props = {machine.location}/>

      </Layout>
      <Footer />
    </ChakraProvider>
  )
}

export async function getStaticPaths() {
  const machines = await fetchAPI("/machines");
  return {
    paths: machines.map((machine) => ({
      params: {
        slug: machine.slug,
      },
    })),
    fallback: false,
    revalidate: 1,
  };
}

export async function getStaticProps({ params }) {
  const machines = await fetchAPI(
    `/machines?slug=${params.slug}`
  );

  return {
    props: { machine: machines[0]},
    revalidate: 1,
  };
}
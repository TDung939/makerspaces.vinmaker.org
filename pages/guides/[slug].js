import { ChakraProvider} from "@chakra-ui/react"
import NavBar from '@/components/navbar/App'
import Footer from '@/components/footer/App'
import {fetchAPI} from '@/lib/api'
import Layout from '@/components/layoutBadges/App'
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
import { getStrapiMedia } from "../../lib/media"
import Seo from "../../components/Seo"


export default function Home({machine}) {
  const displayImage = getStrapiMedia(machine?.displayImage)
  const manuals_link = machine?.manuals? getStrapiMedia(machine?.manuals) : null
  return (
    <ChakraProvider>
      <Seo />
      <NavBar />
      <Layout>
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
            src={displayImage}
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
            <Text
              as='a'
              color='blue'
              textDecor='underline'
              href={manuals_link}
              fontSize={{
                md: 'lg',
              }}
              mb="6"
              maxW="md"
            >
              {machine?.manuals?.name}
            </Text>
          </Box>
        </SimpleGrid>
        
       

      </Layout>
      <Footer />
    </ChakraProvider>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const machines = await fetchAPI(
    `/machines?slug=${slug}`
  );
  return { props: { machine: machines[0]} };
}
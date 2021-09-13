import { Center, ChakraProvider, Flex } from "@chakra-ui/react"
import NavBar from '../../components/navbar/App'
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
  ListItem, UnorderedList,
} from '@chakra-ui/react'
import * as React from 'react'
import { BsArrowRight } from 
'react-icons/bs'
import {ChevronRightIcon} from '@chakra-ui/icons'
import AuthContext from '../../context/AuthContext'
import { useContext } from 'react'
import Link from "next/link"
import VerticalSteps from '../../components/verticalSteps/App'
import Table from '../../components/tableBadge/App'
import { getStrapiMedia } from "../../lib/media"
import Seo from "../../components/Seo"
import { PopupButton } from "react-calendly";

export default function Home({badge}) {
  const {user} = useContext(AuthContext)
  const badge_image = badge.displayImage? getStrapiMedia(badge.displayImage) : ''

  let currentStep;
  if (user && user.steps?.[`badge${badge.id}`]) {
    currentStep = user.steps?.[`badge${badge.id}`];
  } else {
    currentStep = 0;
  }

  if (user) {
    for (const badgeff of user.badges_completed) {
        if (badgeff.id === badge.id) {
          currentStep = 3;
          break;
        }
    }
  }

  return (
    <ChakraProvider>
      <Seo />
      <NavBar />
    
      <Layout>
        <Breadcrumb mb="10" spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
          <BreadcrumbItem>
           <Link href='/badges'><BreadcrumbLink>Badges</BreadcrumbLink></Link>
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
            <Img src={badge_image} h='full' />
          </Center>
          
          <Box>
            <Heading size="xl" mb="4" fontFamily='Space mono'>
              {badge.title}
            </Heading>
            <Text
            fontFamily='Work sans'
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
                color='white'
                bg='#2A5FFF'
                borderRadius='0 25px 0 0'
                _hover={{
                  bg:'transparent',
                  border:'1px solid #2A5FFF',
                  color:'#2A5FFF'
                }}
                rightIcon={<BsArrowRight />}
                fontFamily='Space mono'
                fontWeight='normal'
                w={{
                  base: 'full',
                  sm: 'auto',
                }}
                isDisabled={badge.module ? false : true}
              >
                Get started
              </Button>
            </Link>
          </Box>
        </SimpleGrid>

        <Box w="100%" bg="#2A5FFF" py="5" my="12" >
          <Text ml="50" fontSize="md" color='white' fontWeight="bold">Get started on this badge by following the guidelines below</Text>
        </Box>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          spacing="10"
        >
        <Box w="100%" py="5">
          <Heading size="xl" fontWeight="extrabold"  mb="4">Learning Checklist</Heading>
          <VerticalSteps active={currentStep}/>
        </Box>
        <Box w="100%" py="5">
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
                  <Link key={i} as={`/machines/${machine.slug}`} href="/machines/[id]">
                    <ListItem cursor="pointer" _hover={{color: "#2A5FFF"}}>{machine.name}</ListItem>
                  </Link>
                );
              })}
            </UnorderedList>
        </Box>
        </SimpleGrid>
        
        <Flex
        justify='space-between'
        >
          <Heading size="xl" fontWeight="extrabold"  mb="4">Hands-on Session</Heading>
          <Box
          display={badge.bookingUrl && user? 'block':'none'}
          >
            <PopupButton 
            styles={{
              background: '#2A5FFF',
              color:'white',
              borderRadius:'0 25px 0 0',
              padding:'16px',
              fontFamily:'Space mono',
            }}
            prefill={{
              name: `${user?.username}`,
              email: `${user?.email}`
            }}
            text="BOOK A SESSION"
            url={badge.bookingUrl}
            />
          </Box>
        </Flex>
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
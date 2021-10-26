import { Center, ChakraProvider, Flex } from "@chakra-ui/react"
import NavBar from '@/components/navbar/App'
import Footer from '@/components/footer/App'
import {fetchAPI} from '@/lib/api'
import Layout from '@/components/layoutModules/App'
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
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'
import Link from "next/link"
import VerticalSteps from '@/components/verticalSteps/App'
import Table from '@/components/tableModule/App'
import { getStrapiMedia } from "@/lib/media"
import Seo from "@/components/Seo"
import { PopupButton } from "react-calendly";
import Router from "next/router"
import parse from "html-react-parser"

export default function Home({module}) {
  const {user} = useContext(AuthContext)
  const module_image = module.displayImage? getStrapiMedia(module.displayImage) : ''
  const html = module?.teaching_content? module?.teaching_content : ''
  let currentStep;
  if (user) {
    for (const moduleff of user.online_module_modules) {
      if (moduleff.id === module.id) {
        currentStep = 1;
        break;
      }
  }
    for (const moduleff of user.modules_completed) {
        if (moduleff.id === module.id) {
          currentStep = 2;
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
           <Link href='/modules'><BreadcrumbLink>Modules</BreadcrumbLink></Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{module.title} Module</BreadcrumbLink>
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
            <Img src={module_image} h='full' />
          </Center>
          
          <Box>
            <Heading size="xl" mb="4" fontFamily='Space mono'>
              {module.title}
            </Heading>
            <Text
            fontFamily='Work sans'
              fontSize={{
                md: 'lg',
              }}
              mb="6"
              maxW="md"
            >
              {module.descriptions}
            </Text>
            {/* <Link as={user? `/badges/module/${badge.slug}` : null } href={user? "/badges/module/[id]" : "/login"} >*/}
            
              <Button
                size="lg"
                onClick={() => {user? null: Router.push("/login")}}
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
                // isDisabled={badge.module ? false : true}
              >
                Take Comprehension Quiz
              </Button>
            {/* </Link> */}
          </Box>
        </SimpleGrid>

        <Box w="100%" bg="#2A5FFF" py="5" my="12" >
          <Text ml={{base:'0', lg:"50"}} align={{base:'center', lg:'left'}} color='white' fontFamily='Work sans'>Get started on this badge by following the guidelines below</Text>
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
              {(module.machines).map((machine, i) => { 
                return (
                  <Link key={i} as={`/machines/${machine.slug}`} href="/machines/[slug]">
                    <ListItem cursor="pointer" _hover={{color: "#2A5FFF"}}>{machine.name}</ListItem>
                  </Link>
                );
              })}
            </UnorderedList>
        </Box>
        </SimpleGrid>
        
        <Flex
        justify='space-between'
        direction={{base:'column', lg:'row'}}
        >
          <Heading size="xl" fontWeight="extrabold"  mb="4">Hands-on Session</Heading>
          <Box
          display={module.bookingUrl && user? 'block':'none'}
          >
            <PopupButton 
            styles={{
              background: '#2A5FFF',
              color:'white',
              borderRadius:'0 25px 0 0',
              padding:'16px',
              fontFamily:'Space mono',
              width: '100%',
              paddingTop: '8px',
              paddingBottom: '8px',
            }}
            prefill={{
              name: `${user?.username}`,
              email: `${user?.email}`
            }}
            text="Book a session"
            url={module.bookingUrl}
            />
          </Box>
        </Flex>
        <Table props = {module}/>
        <Box mt='8' maxW='5xl' mx='auto'
        // className={styles.article}
        >
        {parse(html, {
            replace: (domNode) => {
              // console.dir(domNode, { depth: null });
            
            }
          })}
        </Box>
      </Layout>
      <Footer />
    </ChakraProvider>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const modules = await fetchAPI(
    `/modules?slug=${slug}`
  );
  return { props: { module: modules[0]} };
}
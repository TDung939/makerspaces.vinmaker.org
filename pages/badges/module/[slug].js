import { ChakraProvider, useDisclosure} from "@chakra-ui/react"
import NavBar from '../../../components/navbar/App'
import {fetchAPI} from '../../../lib/api'
import Layout from '../../../components/layoutBadges/App'
import ReactMarkdown from 'react-markdown'
import YouTube from 'react-youtube';
import {
  Box,
  Button,
  Heading,
  Avatar,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Spinner, Progress,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react'
import * as React from 'react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import { useState, useContext } from "react"
import Questions from '../../../components/questions'
import Router from "next/router"
import Link from "next/link"
import AuthContext from '../../../context/AuthContext'
import Cookies from "js-cookie"
import axios from "axios"

export default function Home({badge}) {

  const {user} = useContext(AuthContext)

  const section = badge.module.section;
  const [view, setView] = useState(0);
  const [score, setScore] = useState(0);

  function handleChange(newScore) {
    setScore(newScore);
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  let pass = false
  if (section[view].__component === "module.quiz") {
    pass = ((score)/(section[view].questions.length)*100) > 80? true : false;
  }
  console.log(section[view].__component);
  let display;
  switch (section[view].__component) {
    case "module.review":
      console.log("review")
      display = (
        <Box>
            <Heading size="xl" mb="4" fontWeight="extrabold">
              {section[view].title}
            </Heading>
            <ReactMarkdown children={section[view].content} skipHtml={false}/>   
        </Box>
      );
      break;
    case "module.video":
      console.log("video")
      display = (
        <Box>
            <Heading size="xl" mb="4" fontWeight="extrabold">
              {section[view].title}
            </Heading>
            <Spinner
                pos="absolute"
                zIndex="-1"
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="#AE262B"
                size="lg"
            />
            <YouTube videoId={section[view].youtubeUrl} opts={{playerVars: {autoplay: 1}}}/>
        </Box>
      );
      break;
    case "module.quiz":
      console.log("quiz")
      console.log(section[view].questions)
      display = (
        <Box>
          <Heading size="xl" mb="4" fontWeight="extrabold">
              {section[view].title}
          </Heading>
          <Progress isAnimated hasStripe colorScheme="green" size="md" value={(score)/(section[view].questions.length)*100}/>
          <Text fontSize="lg" fontWeight="bold" mt="5">
            {score}/{section[view].questions.length}
          </Text>
          {section[view].questions.map((question, i) => {
            return (
            <Questions props={question} score={score} onChange={handleChange}/>
            )
          })}
        </Box>
        );
      break;
  }

  // Handle Update New Badges
  const handleReceiveBadge = async () => {
    let array = [];
    if (user) {
      console.log(user)
      for (const badge of user.badges) {
        console.log(badge.id);
        array.push(badge.id);
      }
    }
    array.push(badge.id)
    try {
      const token = Cookies.get('cresdential')
      if (token){
          const res = await axios.put(`http://localhost:1337/users/${user.id}`, {badges: array}, {
          headers: {
              Authorization:
              `Bearer ${token}`
          }
          });
          console.log(res.data);
      }
    } catch(e) {
      console.log(e)
    } 
  }

  return (
    <ChakraProvider>
      <NavBar />
    
      <Layout>
        <Breadcrumb mb="10" spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/badges">Badges</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem >
            <BreadcrumbLink href={`/badges/${badge.slug}`}>{badge.title} Badge</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{badge.title} Learn</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box
        py="25"
        boxShadow="2xl"
        maxW={{
          base: 'xl',
          md: '3xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
        borderRadius="xl"
        >
          {display}

          <Box w="100%" py="5" my="25">
          <Button mx="15" onClick={() => {setView(view - 1), setScore(0)}} isDisabled={view === 0}>
            Back
          </Button>
          <Button mx="15" onClick={() => {setView(view + 1), setScore(0)}} isDisabled={view === section.length - 1}>
            Next
          </Button>
          <Button  mx="15" onClick={onOpen} visibility={view === section.length - 1? "visible" : "hidden"}>
            Finish
          </Button>

          {/*Result*/}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Result</ModalHeader>
              <ModalBody>
                {pass? `Congratulations! You have successfully received ${badge.title} Badge. You are now ready to book a hands-on session.` : "Unforturnately, you did not surpass 80% of the quiz. Please watch the videos carefully and try again. Best of luck!"}
              </ModalBody>
                {pass? 
                <Avatar
                  my="15"
                  mx="auto"
                  size="2xl"
                  src=""
                  name={badge.title}
                /> : null}
                <ModalFooter>
                {pass?
                <Button colorScheme="blue" mr={3} onClick={() => {onClose();handleReceiveBadge(); window.location.href='/user/dashboard' }}>
                  Receive Badge
                </Button>
                : 
                <>
                  <Link href="/badges">
                    <Button mr={3} onClick={() => {setView(0), setScore(0), onClose()}}>
                      Cancel
                    </Button>
                  </Link>
                  <Button colorScheme="blue" mr={3} onClick={() => {setView(0), setScore(0), onClose()}}>
                    Restart
                  </Button>
                </>
                }
              </ModalFooter>
            </ModalContent>
          </Modal>

        </Box>
        </Box>
      </Layout>
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
import { ChakraProvider} from "@chakra-ui/react"
import NavBar from '../../../components/navbar/App'
import Hero from '../../../components/pageBadges/hero/App'
import Badges from '../../../components/pageBadges/user-cards/App'
import Footer from '../../../components/footer/App'
import {fetchAPI} from '../../../lib/api'
import Layout from '../../../components/layoutBadges/App'
import ReactMarkdown from 'react-markdown'
import YouTube from 'react-youtube';
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
  Spinner, Progress
} from '@chakra-ui/react'
import * as React from 'react'
import { BsFillGridFill, BsPlusCircleFill, BsShieldLockFill, BsArrowRight } from 
'react-icons/bs'
import {ChevronRightIcon} from '@chakra-ui/icons'
import { Feature } from '../../../components/layoutBadges/Feature'
import { useState } from "react"
import Questions from '../../../components/questions'
import Link from "next/link"
import { set } from "nprogress"

export default function Home({badge}) {
  const section = badge.module.section;
  const [view, setView] = useState(0);
  const [score, setScore] = useState(0);

  function handleChange(newScore) {
    setScore(newScore);
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
          <Button  mx="15" onClick={() => {setView(0), setScore(0)}} visibility={view === section.length - 1? "visible" : "hidden"}>
            Finish
          </Button>
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
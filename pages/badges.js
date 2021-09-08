import { ChakraProvider} from "@chakra-ui/react"
import NavBar from '../components/navbar/App'
import Hero from '../components/pageBadges/hero/App'
import Badges from '../components/pageBadges/user-cards/App'
import Footer from '../components/footer/App'
import {fetchAPI} from '../lib/api'
import Seo from "../components/Seo"

export default function Home({badges, machines}) {
  return (
    <ChakraProvider>
      <Seo />
      <NavBar />
      <Hero />
      <Badges badges={badges} machines={machines}/>
      <Footer />
    </ChakraProvider>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [badges, machines] = await Promise.all([
    fetchAPI("/badges"),
    fetchAPI("/machines")
  ]);

  return {
    props: { badges, machines},
    revalidate: 1,
  };
}


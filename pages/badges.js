import { ChakraProvider} from "@chakra-ui/react"
import NavBar from '../components/navbar/App'
import Hero from '../components/pageBadges/hero/App'
import Badges from '../components/pageBadges/user-cards/App'
import Footer from '../components/footer/App'
import {fetchAPI} from '../lib/api'

export default function Home({badges}) {
  return (
    <ChakraProvider>
      <NavBar />
      <Hero />
      <Badges badges={badges}/>
      <Footer />
    </ChakraProvider>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const badges = await fetchAPI("/badges");

  return {
    props: { badges },

  };
}


import { ChakraProvider} from "@chakra-ui/react"
import NavBar from '../components/navbar/App'
import Hero from '../components/pageMachines/hero/App'
import Machines from '../components/pageMachines/user-cards/App'
import Footer from '../components/footer/App'
import {fetchAPI} from '../lib/api'

export default function Home({machines}) {
  return (
    <ChakraProvider>
      <NavBar />
      <Hero />
      <Machines machines={machines}/>
      <Footer />
    </ChakraProvider>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const machines = await fetchAPI("/machines");

  return {
    props: { machines },
    revalidate: 1,
  };
}


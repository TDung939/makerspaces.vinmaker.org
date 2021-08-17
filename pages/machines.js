import { ChakraProvider} from "@chakra-ui/react"
import NavBar from '../components/navbar/App'
import Hero from '../components/pageMachines/hero/App'
import Machines from '../components/pageMachines/user-cards/App'
import Footer from '../components/footer/App'
import {fetchAPI} from '../lib/api'

export default function Home({machines, processes, badges, materials}) {
  return (
    <ChakraProvider>
      <NavBar />
      <Hero />
      <Machines machines={machines} processes={processes} badge={badges} materials={materials}/>
      <Footer />
    </ChakraProvider>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [machines, processes, badges, materials] = await Promise.all([
    fetchAPI("/machines"),
    fetchAPI("/processes"),
    fetchAPI("/badges"),
    fetchAPI("/suitable-materials")
  ]);

  return {
    props: { machines, processes, badges, materials },
    revalidate: 1,
  };
}


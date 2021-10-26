import { ChakraProvider} from "@chakra-ui/react"
import NavBar from '../../components/navbar/App'
import Hero from '@/views/pageMachines/hero/App'
import Machines from '@/views/pageMachines/machine-cards/App'
import Footer from '@/components/footer/App'
import {fetchAPI} from '@/lib/api'
import Seo from "@/components/Seo"

export default function Home({machines, processes, modules, materials}) {
  return (
    <ChakraProvider>
      <Seo />
      <NavBar />
      <Hero />
      <Machines machines={machines} processes={processes} module={modules} materials={materials}/>
      <Footer />
    </ChakraProvider>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [machines, processes, modules, materials] = await Promise.all([
    fetchAPI("/machines"),
    fetchAPI("/processes"),
    fetchAPI("/modules"),
    fetchAPI("/suitable-materials")
  ]);

  return {
    props: { machines, processes, modules, materials },
    revalidate: 1,
  };
}


import { ChakraProvider} from "@chakra-ui/react"
import NavBar from '@/components/navbar/App'
import Hero from '@/views/pageBadges/hero/App'
import Badges from '@/views/pageBadges/badge-cards/App'
import Footer from '@/components/footer/App'
import {fetchAPI} from '../../lib/api'
import Seo from "@/components/Seo"

export default function Home({modules, machines}) {
  return (
    <ChakraProvider>
      <Seo />
      <NavBar />
      <Hero />
      <Badges module={modules} machines={machines}/>
      <Footer />
    </ChakraProvider>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [modules, machines] = await Promise.all([
    fetchAPI("/modules"),
    fetchAPI("/machines")
  ]);

  return {
    props: { modules, machines},
    revalidate: 1,
  };
}


import { ChakraProvider} from "@chakra-ui/react"
import NavBar from '../components/navbar/App'
import Hero from '../components/pageBadges/hero/App'
import Footer from '../components/footer/App'

export default function Home() {
  return (
    <ChakraProvider>
      <NavBar />
      <Hero />
      <Footer />
    </ChakraProvider>
  )
}

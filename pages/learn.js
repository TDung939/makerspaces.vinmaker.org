import { ChakraProvider} from "@chakra-ui/react"
import NavBar from '@/components/navbar/App'
import Hero from '@/views/pageLearn/hero/App'
import Footer from '@/components/footer/App'
import Seo from "@/components/Seo"

export default function Home() {
  return (
    <ChakraProvider>
      <Seo />
      <NavBar />
      <Hero />
      <Footer />
    </ChakraProvider>
  )
}

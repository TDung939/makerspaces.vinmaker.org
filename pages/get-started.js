import { ChakraProvider} from "@chakra-ui/react"

import NavBar from '../components/navbar/App'
import Hero from '../components/pageGetStarted/hero/App'
import Footer from '../components/footer/App'
import Steps from '../components/pageGetStarted/steps/App'
import Seo from "../components/Seo"

export default function Home() {
  return (
    <ChakraProvider>
      <Seo />
      <NavBar />
      <Hero />
      <Steps />
      <Footer />
    </ChakraProvider>
  )
}
